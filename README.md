# TDC 2019

> Como testamos React Native no Nubank?

## :rocket: Setup & Run

### Pre-requisites

- [NodeJS](https://nodejs.org/)

### Setup

Install dependencies with `npm`

```sh
npm ci
```

### Run

Start the application

```sh
npm start
```

## :heavy_check_mark: Running unit and integration tests

```sh
npm run test:unit
npm run test:integration
```

## :heavy_check_mark: Running E2E tests

Download the latest Expo client from https://expo.io/tools#client and extract it to a folder named `bin/Exponent.app` inside the project. Run the following commands:

```sh
brew tap wix/brew
brew install applesimutils
npm install -g detox-cli
detox test
```

Do not forget to start the mocked server running the following commands:

```sh
cd server
npm start
```

## :sparkles: Running lint

```sh
npm run lint
```
