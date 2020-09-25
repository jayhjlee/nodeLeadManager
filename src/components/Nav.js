import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ isLoggedIn, logout }) {
	const handleLogOut = e => {
		e.preventDefault();

		logout();
	};

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
				<div>
					<a className="navbar-brand" href="/">
						Lead Manager
					</a>
				</div>

				<div id="navbarColor03">
					{isLoggedIn ? (
						<form className="form-inline my-2 my-lg-0">
							<button className="btn btn-success my-2 my-sm-0 mx-2 mx-sm-2">
								<Link to="/create-lead" style={{ color: "white" }}>
									Create New Lead
								</Link>
							</button>
							<button
								className="btn btn-danger my-2 my-sm-0 mx-2 mx-sm-2"
								onClick={e => handleLogOut(e)}>
								Log Out
							</button>
						</form>
					) : null}
				</div>
			</nav>
		</div>
	);
}
