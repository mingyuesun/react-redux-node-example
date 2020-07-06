import React from 'react'
import classnames from 'classnames'

class FlashMessage extends React.Component {
	deleteMessage = () => {
		this.props.flashMessageActions.deleteFlashMessage(this.props.message.id)
	}
	render(){
		const { type, text } = this.props.message
		return (
			<div className={classnames('alert', {'alert-success': type === 'success', 'alert-danger': type === 'danger'})}>
        {text}
				<span className="close" onClick={this.deleteMessage}>&times;</span>
			</div>
		)
	}
}

export default FlashMessage