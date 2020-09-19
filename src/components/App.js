import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import { store } from "../store";

import Home from "./Home";
import CreateLead from "./CreateLead";
import ViewLead from "./ViewLead";
import Nav from "./Nav";
import Login from "./Login";

class App extends Component {
	render() {
		return (
			<div className="container">
				<Provider store={store}>
					<Router>
						<Nav />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/log-in" component={Login} />
							<Route path="/create-lead" component={CreateLead} />
							<Route path="/lead/:id" component={ViewLead} />
						</Switch>
					</Router>
				</Provider>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
