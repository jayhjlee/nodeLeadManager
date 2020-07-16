import React, { Component } from "react";
import { connect } from "react-redux";
import { init } from "../store/actions/home";

class Home extends Component {
	componentDidMount() {
		this.props.init();
	}

	render() {
		return (
			<div>
				<h1>hello world!!!</h1>
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
