import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/loginActions'

class Navigation extends React.Component {
	logout = (e) => {
		e.preventDefault()
		this.props.logout()
	}
	render () {
		const { isAuthenticated } = this.props.auth

		const userLinks = (
			<ul className="navbar-nav">
				<li className="nav-item" onClick={this.logout}><button className="btn btn-default">退出</button></li>
			</ul>
		)

		const gueestLinks = (
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<Link className="nav-link" to="/signup">注册</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/login">登录</Link>
				</li>
			</ul>
		)

		return (
			<div className="navbar navbar-expand-lg navbar-light mb-3">
				<div className="container">
					<Link className="navbar-brand" to="/">Login 功能</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarsExample">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarsExample">
           {isAuthenticated ? userLinks : gueestLinks} 
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps, {logout})(Navigation)