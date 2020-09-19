import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Leads from "./Leads";

class Home extends Component {
	render() {
		const isLoggedIn = false;

		return isLoggedIn ? <Leads /> : <Redirect to="log-in" />;
	}
}

export default Home;
