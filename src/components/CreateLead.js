import React, { Component } from "react";

export class CreateLead extends Component {
	render() {
		return (
			<div className="card mt-3 mx-auto">
				<div className="card-body">
					<form>
						<div className="form-group">
							<div className="form-row">
								<div className="col-md-4 mb-3">
									<label for="validationDefault01">First name</label>
									<input
										type="text"
										className="form-control"
										id="validationDefault01"
										value="Mark"
										required
									/>
								</div>
								<div className="col-md-4 mb-3">
									<label for="validationDefault02">Last name</label>
									<input
										type="text"
										className="form-control"
										id="validationDefault02"
										value="Otto"
										required
									/>
								</div>
								<div className="col-md-4 mb-3">
									<label for="validationDefault03">Email</label>
									<input
										type="email"
										className="form-control"
										id="validationDefault03"
										required
									/>
								</div>
							</div>
						</div>
						<div className="form-group">
							<div className="form-row">
								<div className="col-md mb-3">
									<label for="validationDefault05">Message</label>
									<textarea
										type="text"
										rows="10"
										className="form-control"
										id="validationDefault05"
										required
									/>
								</div>
							</div>
						</div>
						<div className="form-group">
							<div className="form-row">
								<div className="col-md mb-3">
									<button className="btn btn-primary btn-block" type="submit">
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

export default CreateLead;
