import React, { Component } from "react";
import { connect } from "react-redux";
import { init } from "../store/actions/home";

import Nav from "./Nav";
import Leads from "./Leads";

class Home extends Component {
	componentDidMount() {
		this.props.init();
	}

	render() {
		const { leads } = this.props;

		return (
			<div className="container">
				<Nav />
				<Leads leads={leads} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { isLoaded, leads } = state.home;
	return {
		isLoaded,
		leads,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		init: () => dispatch(init()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
