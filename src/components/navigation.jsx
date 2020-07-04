import React from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends React.Component {
	render(){
		return (
			<div className="navbar navbar-expand-lg navbar-light mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">Login 功能</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarsExample">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarsExample">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/signup">注册</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}