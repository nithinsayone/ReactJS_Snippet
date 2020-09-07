# REACT JS Example code snippet

Example React JS Project with webpack and redux. 


* ```git clone https://github.com/nithinsayone/ReactJS_Snippet.git```
* run ```npm install``` to install all depencies
* run ```npm start``` and visit ```http:\\localhost:8080```

### Features

* Functional components with hooks
* Webpack bundler
* Redux state management integration
* API calls example with Axios and redux state updates
* Offline first data persistence

## Project Structure

`src/app/` contains all the project files.

```
|src
|_index.html
|_index.js
|_index.scss
|_app 
|__actions
|__assets
|___fonts
|___static font files
|___static images
|__modules
|___standalone modules (eg Auth)
|___action
|____ module related actions
|___reducer
|____ module state
|___styles
|____ module styles
|___container
|____ module presentational component
|__reducers
|___js (redux reducers - combineReducers)
|__router
|___js (app routes and definition)
|__services
|___js (api related codes and networking setup)
|__shared
|___components
|___js (reusable components definition)
|___constants (app constants)
|___styles (common reusable styles)
|___utils (shared utility functions)
|__store (application store repository)]
```

### Install the dependencies

* ```make dep```   or   ```yarn```   or   ```npm i```

### Run

* ```make```  or  ```yarn start```  or  ```npm start```


### Build

* ```make build```  or  ```yarn build```  or  ```npm run build``` 
* build saved to the ```dist``` folder


## Libraries and tools used
* React JS
* Webpack
* Redux
* Axios
* Bootstrap
* React Bootstrap
* Redux Persist
* Babel
* ESLint - lint tool
* Husky
* Jest


