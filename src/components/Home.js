import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { validateUser } from "../store/actions/user";

import Leads from "./Leads";
// import Login from "./Login";

class Home extends Component {
	UNSAFE_componentWillMount() {
		this.props.validateUser();
	}

	render() {
		const { isLoggedIn, token } = this.props;

		return isLoggedIn && token ? <Leads /> : <Redirect to="/log-in" />;
	}
}

const mapStateToProps = state => ({
	isLoggedIn: state.user.isLoggedIn,
	token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
	validateUser: () => dispatch(validateUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
