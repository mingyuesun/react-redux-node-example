import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './components/App.js'
import Signup from './components/signup/signup'
import Login from './components/login/login'
import Shop from './components/shop/shop'
import requireAuth from './requireAuth'

export default (
	 <div className="container">
		 <Switch>
			 <Route path="/signup" component={Signup}/>
			 <Route path="/login" component={Login}/>
			 <Route	path="/shop" component={requireAuth(Shop)}/>
			 <Route path="/" component={App}/>
		 </Switch>
	 </div>
)