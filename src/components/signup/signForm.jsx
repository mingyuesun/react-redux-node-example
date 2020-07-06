import React from 'react'
import classnames from 'classnames'

export default class SignForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
			errors: {},
			loading: false
		}
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault()
		this.setState({isLoading: true, errors: {}})
		const data = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword
		}
		this.props.signupActions.signupRequest(data).then(
			() => { 
				this.setState({ isLoading: false })
				this.props.flashMessageActions.addFlashMessage({
					type: 'success',
					text: '注册成功，欢迎加入！'
				})
				this.props.history.push('/')
			},
			({ response }) => {
				this.setState({ errors: response.data, isLoading: false })
			}
		)
		// console.log(this.state)
	}

	render () {
		const { errors, isLoading, username, email, password, confirmPassword } = this.state
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Join our community</h1>

				<div className="form-group">
					<label className="control-label">Username</label>
					<input 
						type="text" 
						name="username" 
						value={username} 
						onChange={this.onChange} 
						className={classnames("form-control", {'is-invalid':errors.username})}
					/>
					{errors.username && <span className="form-text text-muted">{errors.username}</span>}
				</div>

				<div className="form-group">
					<label className="control-label">Email</label>
					<input 
						type="email" 
						name="email" 
						value={email} 
						onChange={this.onChange} 
						className={classnames("form-control", {'is-invalid':errors.email})}
					/>
					{errors.email && <span className="form-text text-muted">{errors.email}</span>}
				</div>

				<div className="form-group">
					<label className="control-label">Password</label>
					<input 
						type="password" 
						name="password" 
						value={password} 
						onChange={this.onChange} 
						className={classnames("form-control", {'is-invalid':errors.password})}
					/>
					{errors.password && <span className="form-text text-muted">{errors.password}</span>}
				</div>

				<div className="form-group">
					<label className="control-label">ConfirmPassword</label>
					<input 
						type="password" 
						name="confirmPassword" 
						value={confirmPassword} 
						onChange={this.onChange} 
						className={classnames("form-control", {'is-invalid':errors.confirmPassword})} 
					/>
					{errors.confirmPassword && <span className="form-text text-muted">{errors.confirmPassword}</span>}
				</div>

				<div className="form-group">
					<button disabled={isLoading} className="btn btn-primary btn-lg">注册</button>
				</div>
			</form>
		)
	}
}