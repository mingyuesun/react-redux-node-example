import React from 'react'
import SignForm from './signForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as signupActions from '../../actions/signupActions'
import * as flashMessageActions from '../../actions/flashMessageActions'

class SignUp extends React.Component {
	render(){
		return (
			<div className="row">
				<div className="col-md-3"></div>
				<div className="col-md-6">
				  <SignForm {...this.props} />
				</div>
				<div className="col-md-9"></div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signupActions: bindActionCreators(signupActions, dispatch),
		flashMessageActions: bindActionCreators(flashMessageActions, dispatch)
	}
}

export default connect(null, mapDispatchToProps)(SignUp)