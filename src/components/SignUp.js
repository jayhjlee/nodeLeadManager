import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { createUser } from "../store/actions/user";

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
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
		this.props.createUser(this.state);
	}

	render() {
		const { firstName, lastName, email, username, password } = this.state;
		const { userCreated } = this.props;

		if (userCreated) return <Redirect to="/log-in" />;

		return (
			<div className="card mt-3 mx-auto mt-5" style={{ width: "25rem" }}>
				<div className="card-body">
					<form>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								className="form-control"
								id="email"
								name="email"
								value={email}
								aria-describedby="email"
								onChange={this.handleChange.bind(this)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="username">Username</label>
							<input
								type="text"
								className="form-control"
								id="username"
								name="username"
								value={username}
								aria-describedby="username"
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
								onChange={this.handleChange.bind(this)}
							/>
							<small id="emailHelp" className="form-text text-muted">
								Password must be at least 8 characters long
							</small>
							<small id="emailHelp" className="form-text text-muted">
								Password must be in the combination of upper / lower cases,
								numbers and special characters
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="firstName">First Name</label>
							<input
								type="text"
								className="form-control"
								id="firstName"
								name="firstName"
								value={firstName}
								aria-describedby="firstName"
								onChange={this.handleChange.bind(this)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="lastName">Last Name</label>
							<input
								type="text"
								className="form-control"
								id="lastName"
								name="lastName"
								value={lastName}
								aria-describedby="lastName"
								onChange={this.handleChange.bind(this)}
							/>
						</div>
						<button
							type="submit"
							className="btn btn-primary btn-block"
							onClick={this.handleSubmit.bind(this)}>
							Create an account
						</button>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	userCreated: state.user.userCreated,
});

const mapDispatchToProps = dispatch => ({
	createUser: userInfo => dispatch(createUser(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
