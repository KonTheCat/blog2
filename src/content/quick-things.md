---
slug: "/quick-things"
date: "2023-01-01"
title: "Quick Things"
---

## Quick Things

This page contains short, concise articles on various technology topics. These are quick reads that provide valuable insights and tips.

### Azure Functions

Azure virtual network gateway can forward spoke-hub-spoke traffic, etc.

Why this? Glad you asked, several reasons:

1. Studying for the AZ-700, the Azure networking exam, and figured I would do myself that which I would recommend to others.
2. I've been working with hub-spoke network topologies in Azure and wanted to validate some assumptions.
3. This is a common pattern that comes up in enterprise environments.

The key takeaway: Azure virtual network gateways in a hub network can indeed route traffic between spoke networks, but there are some important considerations:

- You need to configure proper route tables
- NSGs need to allow the traffic
- VNet peering needs to be set up correctly with "Allow gateway transit" and "Use remote gateways" options

This is particularly useful when you have multiple VNets that need to communicate with each other but you want to centralize your network security and monitoring.
