import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Leads from "./Leads";

class Home extends Component {
	render() {
		const { isLoggedIn } = this.props;

		return isLoggedIn ? <Leads /> : <Redirect to="log-in" />;
	}
}

const mapStateToProps = state => ({ isLoggedIn: state.user.isLoggedIn });

export default connect(mapStateToProps, null)(Home);
