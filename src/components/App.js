import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { store } from "../store";

import Home from "./Home";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Switch>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</Router>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
