import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { store } from "../store";

import Leads from "./Leads";
import CreateLead from "./CreateLead";
import ViewLead from "./ViewLead";
import Nav from "./Nav";

class App extends Component {
	render() {
		return (
			<div className="container">
				<Provider store={store}>
					<Router>
						<Nav />
						<Switch>
							<Route exact path="/" component={Leads} />
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
