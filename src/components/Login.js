import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { logInUser } from "../store/actions/user";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
		};
	}

	handleChange(e) {
		const { value } = e.target;
		this.setState({
			[e.target.name]: value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.logInUser(this.state);
	}
	render() {
		const { isLoggedIn } = this.props;

		if (isLoggedIn) return <Redirect to="/" />;

		const { username, password } = this.state;
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
								name="username"
								value={username}
								aria-describedby="username"
								placeholder="Enter Username"
								onChange={this.handleChange.bind(this)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								className="form-control"
								id="password"
								name="password"
								value={password}
								placeholder="Enter Password"
								onChange={this.handleChange.bind(this)}
							/>
						</div>
						<button
							type="submit"
							className="btn btn-primary btn-block"
							onClick={this.handleSubmit.bind(this)}>
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

const mapStateToProps = state => ({
	isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
	logInUser: credential => dispatch(logInUser(credential)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
