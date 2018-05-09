# Serverless Server-Side-Rendering with React and Styled-Components (feat. Webpack and Redux)

1.install services

```
serverless install --url https://github.com/twiw49/sls-ssr-styled-react
```

2.goto directory

```
cd sls-ssr-styled-react
```

3.install

```
yarn install
```

4.explore

* in local development

```
yarn start
```

5.  deploy

* in production
  You need S3 bucket name & bucket URL
  S3 bucket name => `package.json:10`
  S3 bucket URL => `webpack.config.js:12`

```
yarn deploy
```
