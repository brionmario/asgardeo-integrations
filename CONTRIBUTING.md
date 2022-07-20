# Contributing to Asgardeo Intergrations

I would really appreciate your contributions to the project to help make it even better than it is today!
As a contributor, here are the guidelines for you to follow:

## Developer Guide

### Adding New Integrations

Let's say you want to add a new app called `drogo-nft`.

### Set Up

Create a folder inside the [apps](./apps) folder.

```
apps
  |-- drogo-nft
```

### Configurations

If the app requires to have environment configurations, the suggested approach is to expose them via `.env` files.
Follow these steps.

1. Create a `.env.local.sample` file and add the env variables with placeholder values. This file should be committed to GitHub.
2. Add a README under the app's root and document instructions for users to create a `.env.local` file when working locally.

### Deployment

Firebase is used to host 

