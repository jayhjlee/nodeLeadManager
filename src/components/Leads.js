import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { init } from "../store/actions/home";

export class Leads extends Component {
	componentDidMount() {
		this.props.init();
	}

	render() {
		const { leads } = this.props;

		return (
			<div className="table-responsive">
				<table className="table table-striped">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">First</th>
							<th scope="col">Last</th>
							<th scope="col">Email</th>
							<th scope="col">Created At</th>
							<th scope="col"></th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						{leads.map((lead, index) => (
							<tr key={`${index}-${lead.id}`}>
								<td>{lead.id}</td>
								<td>{lead.firstName}</td>
								<td>{lead.lastName}</td>
								<td>{lead.email}</td>
								<td>{lead.createdAt}</td>
								<td
									style={{
										textAlign: "right",
										padding: "0 0 0 0",
										verticalAlign: "middle",
									}}>
									<button className="btn btn-info">
										<Link
											to={{ pathname: `/lead/${lead.id}`, state: lead }}
											style={{ color: "white" }}>
											View
										</Link>
									</button>
								</td>
								<td
									style={{
										textAlign: "center",
										padding: "0 0 0 0",
										verticalAlign: "middle",
									}}>
									<button className="btn btn-danger">Delete</button>
								</td>
							</tr>
						))}
						<tr></tr>
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { leads } = state.home;
	return {
		leads,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		init: () => dispatch(init()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Leads);
