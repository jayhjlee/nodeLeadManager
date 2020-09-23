import React, { Component } from "react";

import { Link } from "react-router-dom";

class Login extends Component {
	render() {
		return (
			<div className="card mt-3 mx-auto mt-5" style={{ width: "25rem" }}>
				<div className="card-body">
					<form>
						<div className="form-group">
							<label htmlFor="username">Username</label>
							<input
								type="text"
								className="form-control"
								id="username"
								aria-describedby="username"
								placeholder="Enter username"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								className="form-control"
								id="password"
								placeholder="Password"
							/>
						</div>
						<button type="submit" className="btn btn-primary btn-block">
							Log In
						</button>
					</form>
					<div className="mt-3" style={{ textAlign: "center" }}>
						<Link to="/sign-up">Create an account</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
