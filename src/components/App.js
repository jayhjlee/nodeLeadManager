import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "../store";

import Root from "./Root";

class App extends Component {
	render() {
		return (
			<div className="container">
				<Provider store={store}>
					<Root />
				</Provider>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
