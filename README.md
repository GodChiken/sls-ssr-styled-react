# Serverless Server-Side-Rendering with React and Styled-Components (feat. Webpack and Redux)

## 0. You need to install serverless and aws

```
yarn add -g serverless aws
```

## 1. AWS Configuration

* You should have IAM Role in AWS. (`AdministratorAccess` Permission will be enough.)
* Then You get `AWS Access Key ID` and `AWS Secret Access Key`.
* In the terminal,

```
aws configure
```

* Type `AWS Access Key ID`, `AWS Secret Access Key`, etc..

## 2. Install app

```
serverless install --url https://github.com/twiw49/sls-ssr-styled-react
```

## 3. Go to directory

```
cd sls-ssr-styled-react
```

## 4. Git Init

```
git init
```

## 5. Install

```
yarn
```

## 6. Explore

in local development

```
yarn start
```

visit `localhost:1234`

## 7. Deploy

in production

* You need S3 bucket name & bucket URL (AWS)
* Insert `[YOUR_S3_BUCEKT_NAME]` => `package.json:10`
* Insert `[YOUR_BUCKET_URL]` => `webpack.config.js:13`

```
yarn deploy
```
