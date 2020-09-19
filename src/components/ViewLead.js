import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { enableForm, updateLead } from "../store/actions/home";

class ViewLead extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: 0,
			firstName: "",
			lastName: "",
			email: "",
			content: "",
		};
	}

	componentDidMount() {
		const { state } = this.props.location;

		this.setState({
			id: state.id,
			firstName: state.firstName,
			lastName: state.lastName,
			email: state.email,
			content: state.content,
		});
	}

	handleUpdate(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	enableForm(e) {
		e.preventDefault();
		this.props.enableForm();
	}

	updateLead(e) {
		e.preventDefault();
		const updatedLead = this.state;

		this.props.updateLead(updatedLead);
	}

	render() {
		const { firstName, lastName, email, content } = this.state;
		const { isFormEnabled, isLeadUpdated } = this.props;

		return isLeadUpdated ? (
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
										onChange={this.handleUpdate.bind(this)}
										required
										disabled={!isFormEnabled || false}
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
										onChange={this.handleUpdate.bind(this)}
										required
										disabled={!isFormEnabled || false}
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
										onChange={this.handleUpdate.bind(this)}
										required
										disabled={!isFormEnabled || false}
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
										value={content}
										onChange={this.handleUpdate.bind(this)}
										required
										disabled={!isFormEnabled || false}
									/>
								</div>
							</div>
						</div>
						<div className="form-group">
							<div className="form-row">
								<div className="col-md-6 mb-3">
									<button
										className="btn btn-secondary btn-block"
										onClick={this.enableForm.bind(this)}>
										Edit Lead
									</button>
								</div>
								<div className="col-md-6 mb-3">
									<button
										className="btn btn-primary btn-block"
										type="submit"
										disabled={!isFormEnabled || false}
										onClick={this.updateLead.bind(this)}>
										Update Lead
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
	const { isFormEnabled, isLeadUpdated } = state.home;
	return {
		isFormEnabled,
		isLeadUpdated,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		enableForm: () => dispatch(enableForm()),
		updateLead: updatedLead => dispatch(updateLead(updatedLead)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewLead);
