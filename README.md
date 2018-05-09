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


## 4. Install
```
yarn
```


## 5. Explore
in local development
```
yarn start
```
visit `localhost:1234`


## 6. Deploy
in production
* You need S3 bucket name & bucket URL
* Insert `[YOUR_S3_BUCEKT_NAME]` => `package.json:10`
* Insert `[YOUR_BUCKET_URL]` => `webpack.config.js:12`
* When you deploy to lambda, it gives you endpoint URL. But It has sub path (/[stage_name]) not root path(/). Therefore you have to change paths in React-Router-DOM.
```
yarn deploy
```
