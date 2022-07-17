<p align="center" style="padding-top: 20px">
  <h1 align="center">Asgardeo Integrations</h1>
  <p align="center">Repo containing sample apps covering <a href="https://wso2.com/asgardeo/">Asgardeo</a> Integration use-cases.</p>
</p>

<div align="center">

  <a href="">[![👷 PR Builder](https://github.com/brionmario/asgardeo-integrations/actions/workflows/pr-builder.yml/badge.svg)](https://github.com/brionmario/asgardeo-integrations/actions/workflows/pr-builder.yml)</a>
  <a href="">[![🚀 Deploy to Firebase](https://github.com/brionmario/asgardeo-integrations/actions/workflows/firebase-deploy.yml/badge.svg)](https://github.com/brionmario/asgardeo-integrations/actions/workflows/firebase-deploy.yml)</a>

</div>

## App Index

|  App          | Access URL    |
| :------------ |:------------- |
| Happy Pets    | https://happy-pets-demo.web.app/ |
| Netflix    | https://nflx-demo.web.app |

## Prerequisites

1. Install NodeJS from [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
2. Yarn

```shell
npm install -g yarn
```

## Setup

### Install Packages

```shell
yarn
```

### Build the Mono-repo

```shell
yarn build
```

## Apps

### Netflix

```shell
cd apps/netflix
yarn start
```

### Happy Pets

```shell
cd apps/happy-pets
yarn start
```
