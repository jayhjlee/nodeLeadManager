import axios from "axios";
import { GET_LEADS, CREATE_LEAD, ENABLE_FORM, EDIT_LEAD } from "../types/home";

export const init = () => async dispatch => {
	try {
		const res = await axios.get("/api/lead/getLeads");
		const { data } = res;

		dispatch({ type: GET_LEADS, payload: data });
	} catch (err) {
		console.error(err);
	}
};

export const createLead = lead => async dispatch => {
	try {
		const res = await axios.post("/api/lead/createLead", lead);
		const { data } = res;

		dispatch({ type: CREATE_LEAD, payload: data.isSuccess });
	} catch (err) {
		console.error(err);
	}
};

export const enableForm = () => dispatch => {
	dispatch({ type: ENABLE_FORM, payload: true });
};

export const updateLead = updatedLead => async dispatch => {
	try {
		const { id } = updatedLead;

		const res = await axios.put(`/api/lead/updateLead/${id}`, updatedLead);
		const { data } = res;

		dispatch({ type: EDIT_LEAD, payload: data.isSuccess });
	} catch (err) {
		console.error(err);
	}
};
