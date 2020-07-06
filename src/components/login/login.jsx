import React from 'react'
import LoginForm from './loginForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loginActions from '../../actions/loginActions'
import * as flashMessageActions from '../../actions/flashMessageActions'

class Login extends React.Component {
	render(){
		return (
			<div className="row">
				<div className="col-md-3"></div>
				<div className="col-md-6">
				  <LoginForm {...this.props} />
				</div>
				<div className="col-md-9"></div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loginActions: bindActionCreators(loginActions, dispatch),
		flashMessageActions: bindActionCreators(flashMessageActions, dispatch)
	}
}

export default connect(null, mapDispatchToProps)(Login)