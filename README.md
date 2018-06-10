# Technical Challenge 100Ladrillos

## Getting Started
You can see 2 folders here, thats because I create a proxy server to be able to communicate with the api.
So, in order to start the project you need to perform:

```sh
$ npm install
```

on both folders.

By creating the proxy server I make the choice to handle the `user-id` as a header called `X-REMOTE-UUID` (Did that just to not change `user-id` directly on the code). 
You can add [Modify Headers extension](https://chrome.google.com/webstore/detail/modify-headers-for-google/innpjfdalfhpcoinfnehdnbkglpmogdi) to test with different users.

## Start the project
```sh
$ npm start
```

on proxy folder and then on front folder.

## Front end folder structure:
```
- src
  - components
  - containers
  - gateways
  - utils
  - views
```
 #### Components
 Contains the components used through all the application.
 
 #### Containers
 Contain just one component that wraps the app, fetch the api and spread his state through the `App` component as props.
 
 #### Gateways
 All the api calls are here.
 
 #### Utils
 Helper functions.
 
 #### Views
 All the components passed to the `Router`.
