---
slug: "/powershell-tips-2"
date: "2024-03-01"
title: "Essential PowerShell Tips for Microsoft 365 Administrators"
featuredImage: "../images/blog/powershell-tips.jpg"
featured: false
---

# Essential PowerShell Tips for Microsoft 365 Administrators

PowerShell has become an indispensable tool for Microsoft 365 administrators. With its powerful scripting capabilities, you can automate routine tasks, manage users at scale, and access features not available in the admin portal.

## Why PowerShell for Microsoft 365?

While the Microsoft 365 admin center provides a user-friendly interface for many administrative tasks, PowerShell offers several advantages:

- **Automation**: Perform repetitive tasks with scripts
- **Bulk Operations**: Manage multiple users, groups, or settings at once
- **Advanced Access**: Some settings are only accessible via PowerShell
- **Reporting**: Generate custom reports not available in the admin portal
- **Precision**: Fine-grained control over configurations

## Getting Started

To work with Microsoft 365 using PowerShell, you'll need to install the appropriate modules:

```powershell
# Install the Microsoft Graph PowerShell SDK
Install-Module Microsoft.Graph -Scope CurrentUser

# Install the Exchange Online PowerShell V2 module
Install-Module ExchangeOnlineManagement -Scope CurrentUser

# Install the SharePoint Online Management Shell
Install-Module Microsoft.Online.SharePoint.PowerShell -Scope CurrentUser

# Install the Teams PowerShell module
Install-Module MicrosoftTeams -Scope CurrentUser
```

## Useful Commands for Daily Administration

Here are some PowerShell commands that every Microsoft 365 administrator should know:

### User Management

```powershell
# Get all licensed users
Get-MgUser -Filter "assignedLicenses/`$count ne 0" -ConsistencyLevel eventual -CountVariable licensedUserCount -All

# Block sign-in for a user
Update-MgUser -UserId user@contoso.com -AccountEnabled:$false

# Reset a user's password
$password = ConvertTo-SecureString "TemporaryPassword123!" -AsPlainText -Force
Reset-MgUserPassword -UserId user@contoso.com -NewPassword $password
```

### Group Management

```powershell
# Create a new Microsoft 365 Group
New-MgGroup -DisplayName "Marketing Team" -MailEnabled:$true -MailNickname "marketing" -SecurityEnabled:$true -GroupTypes @("Unified")

# Add a member to a group
$group = Get-MgGroup -Filter "displayName eq 'Marketing Team'"
$user = Get-MgUser -UserId user@contoso.com
New-MgGroupMember -GroupId $group.Id -DirectoryObjectId $user.Id
```

### License Management

```powershell
# View available licenses in the tenant
Get-MgSubscribedSku | Select-Object SkuPartNumber, ConsumedUnits, PrepaidUnits

# Assign a license to a user
$license = Get-MgSubscribedSku | Where-Object {$_.SkuPartNumber -eq "ENTERPRISEPREMIUM"}
Set-MgUserLicense -UserId user@contoso.com -AddLicenses @{SkuId = $license.SkuId} -RemoveLicenses @()
```

## Best Practices

When working with PowerShell for Microsoft 365 administration:

1. **Use modern authentication**: Always use modern authentication methods
2. **Test scripts in a non-production environment** before running them in production
3. **Use the `-WhatIf` parameter** to preview changes without applying them
4. **Store credentials securely** using the SecretManagement module
5. **Document your scripts** for future reference and knowledge sharing

## Conclusion

PowerShell is a powerful tool that can significantly enhance your Microsoft 365 administration capabilities. By mastering these commands and best practices, you'll be able to manage your environment more efficiently and effectively.

In future posts, we'll explore more advanced PowerShell techniques for Microsoft 365 management, including creating custom reports, automating user onboarding/offboarding processes, and implementing compliance policies.
