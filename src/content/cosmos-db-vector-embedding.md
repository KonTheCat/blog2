---
slug: "/cosmos-db-vector-embedding"
date: "2024-12-08"
title: "Creating Cosmos DB container with vector embedding policy without account key"
featured: true
tags: ["Azure", "Cosmos DB", "Python", "Vector Search", "AI"]
---

# TL;DR

Use the CosmosDBManagementClient (control plane), not the CosmosClient (data plane) when creating a Cosmos DB container with a vector embedding and authenticating with Entra ID. Key-based authentication works just fine with the CosmosClient. Hopefully, Microsoft will fix this soon. In the meantime, hopefully, this saves someone some time.

# Why

Cosmos DB (and it seems like every other DB these days) is adding vector capabilities. You may find yourself facing the below error if you try to create a container with a vector index field following this article (which does not specify which client to use, but still!): [https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/vector-search](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/vector-search)

> azure.cosmos.exceptions.CosmosHttpResponseError: (Forbidden) Request blocked by Auth memeql-nosql : The given request \[POST /dbs/memeql/colls/\] cannot be authorized by AAD token in data plane. Learn more: [https://aka.ms/cosmos-native-rbac](https://aka.ms/cosmos-native-rbac)

# Sample Code

The below code is based on combining the sample code Microsoft provides below for the management SDK and the above code for working with the vector indexes. Be sure to replace <your value here> with your own values.  
[https://github.com/Azure-Samples/azure-samples-python-management/blob/main/samples/cosmosdb/manage_sql_resource.py](https://github.com/Azure-Samples/azure-samples-python-management/blob/main/samples/cosmosdb/manage_sql_resource.py)

```python
from azure.identity import DefaultAzureCredential
from azure.mgmt.cosmosdb import CosmosDBManagementClient

COSMOSDB_NAME = "<your value here>"
CONTAINER_NAME = "<your value here>"
DATABASE_NAME = "<your value here>"
SUBSCRIPTION_ID = "<your value here>"
RG_NAME = "<your value here>"
LOCATION = "<your value here>"

vector_embedding_policy = {
    "vectorEmbeddings": [
        {
            "path": "/imageVector",
            "dataType": "float32",
            "distanceFunction": "cosine",
            "dimensions": 1536
        }
    ]
}

indexing_policy = {
    "includedPaths": [
        {
            "path": "/*"
        }
    ],
    "excludedPaths": [
        {
            "path": "/\"_etag\"/?",
            "path": "/imageVector/*"

        }
    ],
    "vectorIndexes": [
        {"path": "/imageVector",
         "type": "quantizedFlat"
         }
    ]
}

container_parameters = {
    "location": LOCATION,
    "resource": {
        "id": CONTAINER_NAME,
        "indexing_policy": indexing_policy,
        "partition_key": {
            "paths": [
                "/id"
            ]
        },
        "vector_embedding_policy": vector_embedding_policy
    }
}

credential = DefaultAzureCredential()

management_client = CosmosDBManagementClient(
    credential=credential, subscription_id=SUBSCRIPTION_ID)

container = management_client.sql_resources.begin_create_update_sql_container(
    resource_group_name=RG_NAME, account_name=COSMOSDB_NAME, database_name=DATABASE_NAME,
    container_name=CONTAINER_NAME, create_update_sql_container_parameters=container_parameters).result()
print("Create sql container:\n{}".format(container))
```
