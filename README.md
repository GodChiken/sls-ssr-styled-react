# Serverless Server-Side-Rendering with React and Styled-Components (feat. Webpack and Redux)

## 0. You need to install serverless and aws
```
npm install -g serverless aws
```

## 1. AWS Configuration
* You should had IAM Role in AWS. (AdministratorAccess Permission)
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


## 4. Install
```
yarn install
```


## 5. Explore
in local development
```
yarn start
```


## 6. Deploy
in production
* You need S3 bucket name & bucket URL
* S3 bucket name => `package.json:10`
* S3 bucket URL => `webpack.config.js:12`
```
yarn deploy
```
