import React from 'react'
import FlashMessage from './flashMessage'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as flashMessageActions from '../../actions/flashMessageActions'

class FlashMessagesList extends React.Component {
	render(){
		const { messages } = this.props
		return (
			<div className="container">
       {
				 messages && messages.map((message, index) => 
				   <FlashMessage {...this.props} key={index} message={message}/>
				 )
			 }
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		messages: state.flashMessages
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
    flashMessageActions: bindActionCreators(flashMessageActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessagesList)