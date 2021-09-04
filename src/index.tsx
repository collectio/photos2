import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'
// import * as serviceWorker from './serviceWorker'

function getQueryString() {
  var params = {}
  location.search.substr(1).split('&').map(function(param) {
      var pairs = param.split('=');
      // @ts-ignore
      params[pairs[0]] = decodeURIComponent(pairs[1]);
  });
  return params;    
}

declare let window: any;


const start = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
  
}

const params: any = getQueryString();
if (params['cordova'] === 'true') {
  window.cordova = true
  document.addEventListener('deviceready', start, false)
} else {
  start()
}