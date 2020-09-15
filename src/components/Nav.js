import React, { Component } from "react";

class Nav extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
					<div>
						<a className="navbar-brand" href="/">
							Lead Manager
						</a>
					</div>

					<div id="navbarColor03">
						<form className="form-inline my-2 my-lg-0">
							<input
								className="form-control mr-sm-2"
								type="text"
								placeholder="Search"
							/>
							<button className="btn btn-primary my-2 my-sm-0 mx-2 mx-sm-2">
								Search
							</button>
							<button className="btn btn-success my-2 my-sm-0 mx-2 mx-sm-2">
								Create New Lead
							</button>
						</form>
					</div>
				</nav>
			</div>
		);
	}
}

export default Nav;
