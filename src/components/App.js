import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { store } from "../store";

import Home from "./Home";
import CreateLead from "./CreateLead";
import Nav from "./Nav";

class App extends Component {
	render() {
		return (
			<div className="container">
				<Provider store={store}>
					<Router>
						<Nav />
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/create-lead">
								<CreateLead />
							</Route>
						</Switch>
					</Router>
				</Provider>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
