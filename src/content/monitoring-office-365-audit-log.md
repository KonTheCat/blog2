---
slug: "/monitoring-the-office-365-audit-log-for-msps"
date: "2019-04-18"
title: "Monitoring the Office 365 Audit Log - For MSPs (Legacy)"
featured: true
tags: ["Office 365", "Azure", "Automation", "PowerShell", "MSP", "Security"]
---

Note: With the [changes to security requirements for Microsoft partners](https://docs.microsoft.com/en-us/partner-center/partner-security-requirements) this solution is no longer feasible, as it relies on being able to authenticate into an account that has delegated admin access to client tenants without MFA. It will be kept around for demonstration purposes. This is also where it all started for me in terms of running code in the cloud, so I keep this up for that reason too.

Does this sound too familiar? A user hands over their O365 username and password to a phishing attack. The attacker sets up a rule to forward to himself and delete all inbound mail. We find out only through calls about possible hacking or tickets, and by then hours may have passed.

The goal here is to monitor the Office 365 Unified Security Audit log of the tenants that your Office 365 tenant has delegated admin access to. You will get nice-looking notifications like the below that will provide enough information for the recipient to determine if there is a possible breach and take action accordingly. I selected the creation of new mailbox rules that affect all incoming emails and the setup of forwarding to external addresses on the mailbox level as the activities to monitor.

Major advantages of this method:

1. With default scheduling options available to Automation Runbooks you can run this once every hour. Technically, nothing prevents this from being executed every 20 minutes, due to the logging of logs already processed in Azure table, so you will not get duplicate notifications. This could be very close to real-time! (Delay on the audit log varies from 5 minutes to an hour).
2. Both the logs already processed and the remediation actions taken (when someone presses the "Secure and Remediate" button) are logged for review/accountability.
3. There is nothing - other than the Unified Audit log - to enable or set up on your tenants!

Resources needed, requirements:

- Office 365 Tenant for administration, with Office 365 Flow
- User account with delegate admin access
- Azure Account with:
- Azure Automation Account
- Storage account
- Account on ipstack.com, API key (this is for geolocation of the IP that the logged activity originated from. Their free teir gets 10,000 requests per month, it should be enough. You can leave this part out if you want.)
- The Unified Audit log has to be enabled on your tenants. It is not enabled by default. [This is one method I found](https://gcits.com/knowledge-base/enabling-unified-audit-log-delegated-office-365-tenants-via-powershell/) but I have not looked at this issue myself yet.

**Setup**

[This](https://github.com/KonTheCat/O365AuditLogMonitor/blob/master/Unified%20Audit%20Log%20Monitor%20Diagram.pdf) is what you will be making, keeping this diagram open will help. [This video](https://channel9.msdn.com/Events/Ignite/Australia-2017/PROD323) provides a basic overview of setting up Azure Automation runbooks, handling credentials in them, and setting up Office 365 Flow. The PowerShell for the runbooks and the JSON needed for the Office 365 Flow is avaliable on GitHub here: [https://github.com/KonTheCat/O365AuditLogMonitor](https://github.com/KonTheCat/O365AuditLogMonitor)

1. Create a resource group in Azure with a descriptive name for this function.
2. Create a storage account in that resource group.
   - Set up tables with appropriate names in that storage account.
3. Create an Azure Automation account.
   - In Credentials, set up the credentials for your delegated administration account. I would recommend that this be a dedicated account only for this function.
   - In Modules, browse the gallery for and import the following modules: AzureAD, MSOnline, AzureRmStorageTable
   - Press the "Update Azure Modules" button. This will take a little while.
   - Set up the Runbooks, copying from Github and adjusting the variables to match your enviroment.
     - Set up the webhook on ProcessAudtLog.ps1 for use by GetDomain.ps1, paste it into the appropriate variable - remember that you will only see the url when creating the webhook so be sure to copy it.
4. Set up your Flow in O365. Some of the details of this, especially the notifications for false positives, are really for you to do what you will with. Open pictures below in new tabs.
   - Your Flow should start with a "When a HTTP request is received." That will create a Webhook url you will need to put into ProcessAudtLog.ps1. Place the first of the JSON blocks from here. Do not include the comment block.
   - Your Flow should end with HTTP post actions back to RemediateAccount.ps1

You can test by running the GetDomain runbook manually. I highly recommend generating activity that should be captured by this (a rule that applies to all mail, deletes it, and forwards externally, or a mailbox forward to an external address).

When you are ready to put this into use create a schedule for the GetDomain runbook. Alternatively you can set up a webhook for that runbook and call that more often than once per hour that is available by default from Azure Runbook schedules.
