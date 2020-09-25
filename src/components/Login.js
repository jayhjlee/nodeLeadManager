import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

export default function Login(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { logInUser, isLoggedIn, token } = props;

	const login = e => {
		e.preventDefault();

		const credential = { username, password };

		logInUser(credential);
	};

	if (isLoggedIn && token) return <Redirect to="/" />;

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
							onChange={e => setUsername(e.target.value)}
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
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<button
						type="submit"
						className="btn btn-primary btn-block"
						onClick={e => login(e)}>
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
