import React from "react";

export default function Leads({ leads }) {
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
								<button className="btn btn-warning">View</button>
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
