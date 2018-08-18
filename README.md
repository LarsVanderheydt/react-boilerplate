# A react boilerplate with Webpack and React Router
> To get all my projects at home started i'm using this boilerplate
> build on top of my other [boilerplate](https://github.com/LarsVanderheydt/webpack-boilerplate)

### Has following features
- Minified with Uglifyjs-webpack-plugin
- Babel integration
- Hot reloading with webpack
- ESLint for javascript linting
- Server side rendering to build api's on
- Starting file for api your routes
- Routes are automatic loaded (all files in routes/api/ are loaded as routes)
- With chalk the routes are logged in fancy ways

### react includes
- mobx
- react-router

> No server setup, this boilerplate makes use of the HashRouter.

```
yarn start
yarn build
yarn zeit   // deploy app or static files on zeit with this command
```

> to adjust the name of your app, change the name in the now.json file
> Open issues when you see one or to request new features
