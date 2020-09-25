import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { logInUser, validateUser, logout } from "../store/actions/user";

import Home from "./Home";
import CreateLead from "./CreateLead";
import ViewLead from "./ViewLead";
import Nav from "./Nav";
import SignUp from "./SignUp";
import Login from "./Login";

class Root extends Component {
	componentDidMount() {
		this.props.validateUser();
	}

	render() {
		return (
			<Router>
				<Nav {...this.props} />
				<Switch>
					<Route exact path="/" render={() => <Home {...this.props} />} />
					<Route path="/log-in" render={() => <Login {...this.props} />} />
					<Route path="/sign-up" component={SignUp} />
					<Route
						path="/create-lead"
						render={() => <CreateLead {...this.props} />}
					/>
					<Route path="/lead/:id" component={ViewLead} />
				</Switch>
			</Router>
		);
	}
}

const mapStateToProps = state => ({
	isLoggedIn: state.user.isLoggedIn,
	token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
	validateUser: () => dispatch(validateUser()),
	logInUser: credential => dispatch(logInUser(credential)),
	logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
