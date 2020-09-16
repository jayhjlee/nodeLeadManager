import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { createLead } from "../store/actions/home";

export class CreateLead extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			content: "",
		};
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createLead(this.state);
	}

	render() {
		const { firstName, lastName, email, message } = this.state;
		const { leadCreated } = this.props;

		return leadCreated ? (
			<Redirect to="/" />
		) : (
			<div className="card mt-3 mx-auto">
				<div className="card-body">
					<form>
						<div className="form-group">
							<div className="form-row">
								<div className="col-md-4 mb-3">
									<label htmlFor="validationDefault01">First name</label>
									<input
										type="text"
										className="form-control"
										id="validationDefault01"
										name="firstName"
										value={firstName}
										onChange={this.handleChange.bind(this)}
										required
									/>
								</div>
								<div className="col-md-4 mb-3">
									<label htmlFor="validationDefault02">Last name</label>
									<input
										type="text"
										className="form-control"
										id="validationDefault02"
										name="lastName"
										value={lastName}
										onChange={this.handleChange.bind(this)}
										required
									/>
								</div>
								<div className="col-md-4 mb-3">
									<label htmlFor="validationDefault03">Email</label>
									<input
										type="email"
										className="form-control"
										id="validationDefault03"
										name="email"
										value={email}
										onChange={this.handleChange.bind(this)}
										required
									/>
								</div>
							</div>
						</div>
						<div className="form-group">
							<div className="form-row">
								<div className="col-md mb-3">
									<label htmlFor="validationDefault05">Message</label>
									<textarea
										type="text"
										rows="10"
										className="form-control"
										id="validationDefault05"
										name="content"
										value={message}
										onChange={this.handleChange.bind(this)}
										required
									/>
								</div>
							</div>
						</div>
						<div className="form-group">
							<div className="form-row">
								<div className="col-md mb-3">
									<button
										className="btn btn-primary btn-block"
										type="submit"
										onClick={this.handleSubmit.bind(this)}>
										Submit form
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { isLeadCreated } = state.home;

	return {
		leadCreated: isLeadCreated,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createLead: lead => dispatch(createLead(lead)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateLead);
