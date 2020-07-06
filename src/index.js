import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducers from './reducers'
import { BrowserRouter as Router } from 'react-router-dom'
import routers from './router.js'
import Navigation from './components/navigation'
import FlashMessagesList from './components/flashMessage/flashMessagesList'
import {setAuthorization} from './setAuthorization'
import {setCurrentUser} from './actions/loginActions'
import jwtDecode from 'jwt-decode'

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(logger, thunk)))

if (localStorage.token) {
  setAuthorization(localStorage.token)
  store.dispatch(setCurrentUser(jwtDecode(localStorage.token)))
}

ReactDOM.render(
    <Provider store={store}>
      <Router routes={routers}>
        <Navigation/>
        <FlashMessagesList/>
         {routers}
      </Router>
    </Provider>
  ,
  document.getElementById('root')
);

