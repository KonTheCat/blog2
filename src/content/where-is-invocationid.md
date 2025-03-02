---
slug: "/where-is-invocationid"
date: "2019-11-26"
title: "Where is InvocationId in Azure Function PowerShell v2?"
featured: false
---

# Where is InvocationId in Azure Function PowerShell v2?

Short version:  
For the v1 runtime, there is a nice document that describes where this is. [https://github.com/Azure/azure-functions-host/wiki/Retrieving-information-about-the-currently-running-function](https://github.com/Azure/azure-functions-host/wiki/Retrieving-information-about-the-currently-running-function)  
For the v2 runtime, there was no such luck. After looking at the environment variables and just the variables available when running the function I found it under $TriggerMetadata.InvocationId.

My own, my precious, InvocationId.

Explanation: you may need this if you want a way to tag external logging to a particular run of the Azure Function, which the InvocationId will identify for you. You can search for something like the below in logs to find relevant logs for that invocation.

```
traces | where customDimensions.InvocationId == "06358a22-5eae-4aaa-8742-42ea2451c2c6"
```

The plot thickens: apparently RandGuid is the value that does this, according to the documentation: [https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-powershell#triggermetadata-parameter](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-powershell#triggermetadata-parameter)

BUT, InvocationID is the value that the function actually returns to the log when it finishes executing, and is the value available in logs from Application Insights, unless I am missing something. Getting clarification here and re-writing this later if needed: [https://github.com/MicrosoftDocs/azure-docs/issues/43580](https://github.com/MicrosoftDocs/azure-docs/issues/43580)
