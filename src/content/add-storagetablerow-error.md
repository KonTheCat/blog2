---
slug: "/exception-calling-execute-with-1-argument-s-object-reference-not-set-to-an-instance-of-an-object-add-storagetablerow-error"
date: "2019-04-17"
title: 'Exception calling "Execute" with "1" argument(s): "Object reference not set to an instance of an object." – Add-StorageTableRow error'
featured: false
---

# Exception calling "Execute" with "1" argument(s): "Object reference not set to an instance of an object." – Add-StorageTableRow error

Google searches for the error lead down the path of errors with Azure tools. This was not the issue for me. The issue for me was that some of the keys in the hashtable I was using to submit the other entity properties were null. Below is the code for how I cleaned up the hashtable and the full xml of the error for SEO magic.

```
$props = @{
#hashtable of properties goes here, some of which are null.
}
$props=$props.GetEnumerator()| Where-Object Value
$propstoadd= @{}
$props| Foreach-Object {$propstoadd.add($_.key,$_.value)}
Add-StorageTableRow -table $table `
     -property $propstoadd `
     -partitionKey ($UniqueName) `
     -rowKey ([string](get-date).ToFileTimeUtc())| Out-Null
```

```
<?xml version="1.0"?>

-<Objs xmlns="http://schemas.microsoft.com/powershell/2004/04" Version="1.1.0.1">

-<Obj RefId="0">

-<TN RefId="0">

<T>System.Management.Automation.ErrorRecord</T>

<T>System.Object</T>

</TN>

<ToString>Exception calling "Execute" with "1" argument(s): "Object reference not set to an instance of an object."</ToString>

-<MS>

-<Obj RefId="1" N="Exception">

-<TN RefId="1">

<T>System.Management.Automation.MethodInvocationException</T>

<T>System.Management.Automation.MethodException</T>

<T>System.Management.Automation.ExtendedTypeSystemException</T>

<T>System.Management.Automation.RuntimeException</T>

<T>System.SystemException</T>

<T>System.Exception</T>

<T>System.Object</T>

</TN>

<ToString>System.Management.Automation.MethodInvocationException: Exception calling "Execute" with "1" argument(s): "Object reference not set to an instance of an object." ---> Microsoft.WindowsAzure.Storage.StorageException: Object reference not set to an instance of an object. ---> System.NullReferenceException: Object reference not set to an instance of an object._x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.Protocol.TableOperationHttpWebRequestFactory.<GetPropertiesFromDictionary>b__3(KeyValuePair`2 kvp)_x000D__x000A_ at System.Linq.Enumerable.WhereSelectEnumerableIterator`2.MoveNext()_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.Protocol.TableOperationHttpWebRequestFactory.<GetPropertiesWithKeys>d__5.MoveNext()_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.Protocol.TableOperationHttpWebRequestFactory.WriteEntityContent(TableOperation operation, OperationContext ctx, TableRequestOptions options, JsonTextWriter jsonWriter)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.Protocol.TableOperationHttpWebRequestFactory.BuildRequestForTableOperation(Uri uri, UriQueryBuilder builder, IBufferManager bufferManager, Nullable`1 timeout, TableOperation operation, Boolean useVersionHeader, OperationContext ctx, TableRequestOptions options)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.TableOperation.<>c__DisplayClass4.<InsertImpl>b__1(Uri uri, UriQueryBuilder builder, Nullable`1 timeout, Boolean useVersionHeader, OperationContext ctx)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Core.Executor.Executor.ProcessStartOfRequest[T](ExecutionState`1 executionState, String startLogMessage)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Core.Executor.Executor.ExecuteSync[T](RESTCommand`1 cmd, IRetryPolicy policy, OperationContext operationContext)_x000D__x000A_ --- End of inner exception stack trace ---_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Core.Executor.Executor.ExecuteSync[T](RESTCommand`1 cmd, IRetryPolicy policy, OperationContext operationContext)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.CloudTable.Execute(TableOperation operation, TableRequestOptions requestOptions, OperationContext operationContext)_x000D__x000A_ at CallSite.Target(Closure , CallSite , Object , Object )_x000D__x000A_ --- End of inner exception stack trace ---_x000D__x000A_ at System.Management.Automation.ExceptionHandlingOps.CheckActionPreference(FunctionContext funcContext, Exception exception)_x000D__x000A_ at Add-StorageTableRow(Closure , FunctionContext )_x000D__x000A_ at System.Management.Automation.PSScriptCmdlet.RunClause(Action`1 clause, Object dollarUnderbar, Object inputToProcess)_x000D__x000A_ at System.Management.Automation.PSScriptCmdlet.DoEndProcessing()_x000D__x000A_ at System.Management.Automation.CommandProcessorBase.Complete()</ToString>

-<Props>

<S N="ErrorRecord">Exception calling "Execute" with "1" argument(s): "Object reference not set to an instance of an object."</S>

<B N="WasThrownFromThrowStatement">false</B>

<S N="Message">Exception calling "Execute" with "1" argument(s): "Object reference not set to an instance of an object."</S>

-<Obj RefId="2" N="Data">

-<TN RefId="2">

<T>System.Collections.ListDictionaryInternal</T>

<T>System.Object</T>

</TN>

<DCT/>

</Obj>

-<Obj RefId="3" N="InnerException">

-<TN RefId="3">

<T>Microsoft.WindowsAzure.Storage.StorageException</T>

<T>System.Exception</T>

<T>System.Object</T>

</TN>

<ToString>Microsoft.WindowsAzure.Storage.StorageException: Object reference not set to an instance of an object. ---> System.NullReferenceException: Object reference not set to an instance of an object._x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.Protocol.TableOperationHttpWebRequestFactory.<GetPropertiesFromDictionary>b__3(KeyValuePair`2 kvp)_x000D__x000A_ at System.Linq.Enumerable.WhereSelectEnumerableIterator`2.MoveNext()_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.Protocol.TableOperationHttpWebRequestFactory.<GetPropertiesWithKeys>d__5.MoveNext()_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.Protocol.TableOperationHttpWebRequestFactory.WriteEntityContent(TableOperation operation, OperationContext ctx, TableRequestOptions options, JsonTextWriter jsonWriter)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.Protocol.TableOperationHttpWebRequestFactory.BuildRequestForTableOperation(Uri uri, UriQueryBuilder builder, IBufferManager bufferManager, Nullable`1 timeout, TableOperation operation, Boolean useVersionHeader, OperationContext ctx, TableRequestOptions options)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.TableOperation.<>c__DisplayClass4.<InsertImpl>b__1(Uri uri, UriQueryBuilder builder, Nullable`1 timeout, Boolean useVersionHeader, OperationContext ctx)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Core.Executor.Executor.ProcessStartOfRequest[T](ExecutionState`1 executionState, String startLogMessage)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Core.Executor.Executor.ExecuteSync[T](RESTCommand`1 cmd, IRetryPolicy policy, OperationContext operationContext)_x000D__x000A_ --- End of inner exception stack trace ---_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Core.Executor.Executor.ExecuteSync[T](RESTCommand`1 cmd, IRetryPolicy policy, OperationContext operationContext)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.CloudTable.Execute(TableOperation operation, TableRequestOptions requestOptions, OperationContext operationContext)_x000D__x000A_ at CallSite.Target(Closure , CallSite , Object , Object )_x000D__x000A_Request Information_x000D__x000A_RequestID:_x000D__x000A_RequestDate:_x000D__x000A_StatusMessage:_x000D__x000A_ErrorCode:_x000D__x000A_</ToString>

-<Props>

<S N="RequestInformation">Microsoft.WindowsAzure.Storage.RequestResult</S>

<S N="Message">Object reference not set to an instance of an object.</S>

-<Obj RefId="4" N="Data">

<TNRef RefId="2"/>

<DCT/>

</Obj>

-<Obj RefId="5" N="InnerException">

-<TN RefId="4">

<T>System.NullReferenceException</T>

<T>System.SystemException</T>

<T>System.Exception</T>

<T>System.Object</T>

</TN>

<ToString>System.NullReferenceException: Object reference not set to an instance of an object._x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.Protocol.TableOperationHttpWebRequestFactory.<GetPropertiesFromDictionary>b__3(KeyValuePair`2 kvp)_x000D__x000A_ at System.Linq.Enumerable.WhereSelectEnumerableIterator`2.MoveNext()_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.Protocol.TableOperationHttpWebRequestFactory.<GetPropertiesWithKeys>d__5.MoveNext()_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.Protocol.TableOperationHttpWebRequestFactory.WriteEntityContent(TableOperation operation, OperationContext ctx, TableRequestOptions options, JsonTextWriter jsonWriter)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.Protocol.TableOperationHttpWebRequestFactory.BuildRequestForTableOperation(Uri uri, UriQueryBuilder builder, IBufferManager bufferManager, Nullable`1 timeout, TableOperation operation, Boolean useVersionHeader, OperationContext ctx, TableRequestOptions options)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.TableOperation.<>c__DisplayClass4.<InsertImpl>b__1(Uri uri, UriQueryBuilder builder, Nullable`1 timeout, Boolean useVersionHeader, OperationContext ctx)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Core.Executor.Executor.ProcessStartOfRequest[T](ExecutionState`1 executionState, String startLogMessage)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Core.Executor.Executor.ExecuteSync[T](RESTCommand`1 cmd, IRetryPolicy policy, OperationContext operationContext)</ToString>

-<Props>

<S N="Message">Object reference not set to an instance of an object.</S>

-<Obj RefId="6" N="Data">

<TNRef RefId="2"/>

<DCT/>

</Obj>

<Nil N="InnerException"/>

<S N="TargetSite">System.Collections.Generic.KeyValuePair`2[System.String,System.Object] <GetPropertiesFromDictionary>b__3(System.Collections.Generic.KeyValuePair`2[System.String,Microsoft.WindowsAzure.Storage.Table.EntityProperty])</S>

<S N="StackTrace"> at Microsoft.WindowsAzure.Storage.Table.Protocol.TableOperationHttpWebRequestFactory.<GetPropertiesFromDictionary>b__3(KeyValuePair`2 kvp)_x000D__x000A_ at System.Linq.Enumerable.WhereSelectEnumerableIterator`2.MoveNext()_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.Protocol.TableOperationHttpWebRequestFactory.<GetPropertiesWithKeys>d__5.MoveNext()_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.Protocol.TableOperationHttpWebRequestFactory.WriteEntityContent(TableOperation operation, OperationContext ctx, TableRequestOptions options, JsonTextWriter jsonWriter)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.Protocol.TableOperationHttpWebRequestFactory.BuildRequestForTableOperation(Uri uri, UriQueryBuilder builder, IBufferManager bufferManager, Nullable`1 timeout, TableOperation operation, Boolean useVersionHeader, OperationContext ctx, TableRequestOptions options)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.TableOperation.<>c__DisplayClass4.<InsertImpl>b__1(Uri uri, UriQueryBuilder builder, Nullable`1 timeout, Boolean useVersionHeader, OperationContext ctx)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Core.Executor.Executor.ProcessStartOfRequest[T](ExecutionState`1 executionState, String startLogMessage)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Core.Executor.Executor.ExecuteSync[T](RESTCommand`1 cmd, IRetryPolicy policy, OperationContext operationContext)</S>

<Nil N="HelpLink"/>

<S N="Source">Microsoft.WindowsAzure.Storage</S>

<I32 N="HResult">-2147467261</I32>

</Props>

</Obj>

<S N="TargetSite">T ExecuteSync[T](Microsoft.WindowsAzure.Storage.Core.Executor.RESTCommand`1[T], Microsoft.WindowsAzure.Storage.RetryPolicies.IRetryPolicy, Microsoft.WindowsAzure.Storage.OperationContext)</S>

<S N="StackTrace"> at Microsoft.WindowsAzure.Storage.Core.Executor.Executor.ExecuteSync[T](RESTCommand`1 cmd, IRetryPolicy policy, OperationContext operationContext)_x000D__x000A_ at Microsoft.WindowsAzure.Storage.Table.CloudTable.Execute(TableOperation operation, TableRequestOptions requestOptions, OperationContext operationContext)_x000D__x000A_ at CallSite.Target(Closure , CallSite , Object , Object )</S>

<Nil N="HelpLink"/>

<S N="Source">Microsoft.WindowsAzure.Storage</S>

<I32 N="HResult">-2146233088</I32>

</Props>

</Obj>

<S N="TargetSite">Void CheckActionPreference(System.Management.Automation.Language.FunctionContext, System.Exception)</S>

<S N="StackTrace"> at System.Management.Automation.ExceptionHandlingOps.CheckActionPreference(FunctionContext funcContext, Exception exception)_x000D__x000A_ at Add-StorageTableRow(Closure , FunctionContext )_x000D__x000A_ at System.Management.Automation.PSScriptCmdlet.RunClause(Action`1 clause, Object dollarUnderbar, Object inputToProcess)_x000D__x000A_ at System.Management.Automation.PSScriptCmdlet.DoEndProcessing()_x000D__x000A_ at System.Management.Automation.CommandProcessorBase.Complete()</S>

<Nil N="HelpLink"/>

<S N="Source">System.Management.Automation</S>

<I32 N="HResult">-2146233087</I32>

</Props>

</Obj>

<Nil N="TargetObject"/>

<S N="FullyQualifiedErrorId">StorageException</S>

-<Obj RefId="7" N="InvocationInfo">

-<TN RefId="5">

<T>System.Management.Automation.InvocationInfo</T>

<T>System.Object</T>

</TN>

<ToString>System.Management.Automation.InvocationInfo</ToString>

-<Props>

<Nil N="MyCommand"/>

-<Obj RefId="8" N="BoundParameters">

-<TN RefId="6">

<T>System.Collections.Generic.Dictionary`2[[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Object, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]</T>

<T>System.Object</T>

</TN>

<DCT/>

</Obj>

-<Obj RefId="9" N="UnboundArguments">

-<TN RefId="7">

<T>System.Collections.Generic.List`1[[System.Object, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]</T>

<T>System.Object</T>

</TN>

<LST/>

</Obj>

<I32 N="ScriptLineNumber">191</I32>

<I32 N="OffsetInLine">11</I32>

<I64 N="HistoryId">-1</I64>

<S N="ScriptName">C:\\Users\\kkaminskiy\\Documents\\WindowsPowerShell\\Modules\\AzureRmStorageTable\\1.0.0.23\\AzureRmStorageTableCoreHelper.psm1</S>

<S N="Line"> _x0009__x0009_return ($table.CloudTable.Execute((invoke-expression \"[Microsoft.WindowsAzure.Storage.Table.TableOperation,$assemblySN]::insert(`$entity)\")))_x000D__x000A_</S>

<S N="PositionMessage">At C:\\Users\\kkaminskiy\\Documents\\WindowsPowerShell\\Modules\\AzureRmStorageTable\\1.0.0.23\\AzureRmStorageTableCoreHelper.psm1:191 char:11_x000D__x000A_+ ... return ($table.CloudTable.Execute((invoke-expression \"[Microsoft ..._x000D__x000A_+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</S>

<S N="PSScriptRoot">C:\\Users\\kkaminskiy\\Documents\\WindowsPowerShell\\Modules\\AzureRmStorageTable\\1.0.0.23</S>

<S N="PSCommandPath">C:\\Users\\kkaminskiy\\Documents\\WindowsPowerShell\\Modules\\AzureRmStorageTable\\1.0.0.23\\AzureRmStorageTableCoreHelper.psm1</S>

<S N="InvocationName"/>

<I32 N="PipelineLength">0</I32>

<I32 N="PipelinePosition">0</I32>

<B N="ExpectingInput">false</B>

-<Obj RefId="10" N="CommandOrigin">

-<TN RefId="8">

<T>System.Management.Automation.CommandOrigin</T>

<T>System.Enum</T>

<T>System.ValueType</T>

<T>System.Object</T>

</TN>

<ToString>Internal</ToString>

<I32>1</I32>

</Obj>

<Nil N="DisplayScriptPosition"/>

</Props>

</Obj>

<I32 N="ErrorCategory_Category">0</I32>

<S N="ErrorCategory_Activity"/>

<S N="ErrorCategory_Reason">MethodInvocationException</S>

<S N="ErrorCategory_TargetName"/>

<S N="ErrorCategory_TargetType"/>

<S N="ErrorCategory_Message">NotSpecified: (:) [], MethodInvocationException</S>

<B N="SerializeExtendedInfo">false</B>

<S N="ErrorDetails_ScriptStackTrace">at Add-StorageTableRow, C:\\Users\\kkaminskiy\\Documents\\WindowsPowerShell\\Modules\\AzureRmStorageTable\\1.0.0.23\\AzureRmStorageTableCoreHelper.psm1: line 191_x000D__x000A_at <ScriptBlock>, <No file>: line 36</S>

<Nil N="PSMessageDetails"/>

</MS>

</Obj>

</Objs>
```
