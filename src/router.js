import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './components/App.js'
import Signup from './components/signup/signup'

export default (
	 <div className="container">
		 <Switch>
			 <Route path="/signup" component={Signup}/>
			 <Route path="/" component={App}/>
		 </Switch>
	 </div>
)