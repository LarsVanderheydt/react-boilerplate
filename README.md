# A react boilerplate with Webpack and React Router
> To get all my react projects at home started i'm using this boilerplate

Layout:
  wrap your content in a layout to get a basic layout around your content.
  this includes a header & footer

Header:
  The header contains a branding block (no image yet), the main navigation & breadcrumbs

Footer:
  The footer only contains the main navigation (same component from the header)

Main navigation:
  The main navigation contains your main menu, you can add all your links in there
  to style specific, use the .region-footer or .region-header class given to the region.

Breadcrumbs:
  The breadcrumb will take the pathname and add all parts to the breadcrumb
  e.g: /user/2 -> user (link = /user) 2 (link = /2)
  to change the breadcrumb you can pass a breadcrumb prop in the layout with all configs below
  ```javascript
  {
    show: true, // show the breadcrumb
    pathname: [
      { label: "users", link: "users" } // will adjust the first part to users with link to /users
    ]
  }
  ```
  Automaticly the last item will not have a link


> No server setup, this boilerplate makes use of the HashRouter.

```
yarn start
yarn build
yarn zeit   // deploy app or static files on zeit with this command
```

> to adjust the name of your app, change the name in the now.json file
> Open issues when you see one or to request new features
