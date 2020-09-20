import React, { Component } from "react";

import { Link } from "react-router-dom";

class Login extends Component {
	render() {
		return (
			<div className="card mt-3 mx-auto mt-5" style={{ width: "25rem" }}>
				<div className="card-body">
					<form>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter email"
							/>
							<small id="emailHelp" className="form-text text-muted">
								We'll never share your email with anyone else.
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
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
