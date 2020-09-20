import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import CreateLead from "./CreateLead";
import ViewLead from "./ViewLead";
import Nav from "./Nav";
import Login from "./Login";

class Root extends Component {
	render() {
		return (
			<Router>
				<Nav {...this.props} />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/log-in" component={Login} />
					<Route path="/create-lead" component={CreateLead} />
					<Route path="/lead/:id" component={ViewLead} />
				</Switch>
			</Router>
		);
	}
}

const mapStateToProps = state => ({
	isLoggedIn: state.home.isLoggedIn,
});

export default connect(mapStateToProps, null)(Root);
