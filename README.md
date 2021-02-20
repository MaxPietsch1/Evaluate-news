# Evaluate a news article with Natural Language Processing

What we will be buildning
We will build an app that will allow users to run Natural Language Processing on articles and blogs. We will be using an API from Meaningcloud, this API will give us back information whether if the content on the blog/website is subjectiv(opinion), objective(fact-based), negativ, positiv or neutral.

We will be using Node and Express to run our server and Webpack will be our buildtool. we will make tests with Jest to see if our routes and code are working properly.

# How to run the project

## In development mode

start the server on port 8080

```
$ npm run build-dev
```

## In production mode

Generate dist files and start server at port 8081

```
$ npm run build-prod
```

```
$ npm run start
```

## Configs

We are using two webpack configs. webpack.dev.js for developer-mode and webpack.prod.js for production-mode.

In package.json we have all of our dependencies.

## Offline mode

Our app will be able to work in offline mode, thanks to the service worker we are using.

## Testing

How to run Jest and test the app

```
$ npm run test-jest
```
