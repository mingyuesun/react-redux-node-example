import React from 'react'
import classnames from 'classnames'

export default class LoginForm extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			username: "",
			password: "",
			errors: {},
			isLoading: false
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
		const { username, password } = this.state
		this.props.loginActions.loginRequest({username, password}).then(
			(response) => {
				this.props.flashMessageActions.addFlashMessage({
					type: "success",
					text: "登录成功！"
				})
        this.props.history.replace("/")
			},
			({response}) => {
				this.setState({errors: response.data, isLoading: false})
			}
		)
	}

	render(){
		const { username, password, errors, isLoading } = this.state
		return (
			<form onSubmit={this.onSubmit}>
				<h1>Welcome Login</h1>

				<div className="form-group">
					<label className="control-label">Username</label>
					<input 
						type="text" 
						name="username"
						value={username}
						onChange={this.onChange}
						className={classnames("form-control", {"is-invalid": errors.message})}
					/>
				</div>

				<div className="form-group">
					<label className="control-label">Password</label>
					<input 
						type="password" 
						name="password"
						value={password}
						onChange={this.onChange}
						className={classnames("form-control", {"is-invalid": errors.message})}
					/>
				</div>
		    <div className="from-group">{errors && <span className="text text-muted">{errors.message}</span>}</div>
				<div className="form-group">
					<button disabled={isLoading} className="btn btn-primary btn-lg">登录</button>
				</div>
			</form>
		)
	}
}