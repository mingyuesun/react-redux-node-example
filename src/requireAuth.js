import React from 'react'
import { connect } from 'react-redux'
import { addFlashMessage } from './actions/flashMessageActions'
import { withRouter } from 'react-router-dom'

export default function requireAuth(ComposedComponent){
	class Authtenticate extends React.Component {
		componentWillMount(){
			if(!this.props.isAuthenticated){
				this.props.addFlashMessage({
					type: 'danger',
					text: '请先登录！'
				})
				this.props.history.replace('/login')
			}
		}
		componentWillUpdate(nextProps) {
			if (!nextProps.isAuthenticated) {
        this.props.addFlashMessage({
					type: 'danger',
					text: '请先登录！'
				})
				this.props.history.replace('/login')
			}
		}
		render(){
			return (
				<ComposedComponent {...this.props}/>
			)
		}
	}

	const mapStateToProps = (state) => {
		return {
			isAuthenticated: state.auth.isAuthenticated
		}
	}

	return withRouter(connect(mapStateToProps, {addFlashMessage})(Authtenticate))
}