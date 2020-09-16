import axios from "axios";
import { IS_LOADED, GET_LEADS, CREATE_LEAD } from "../types/home";

export const init = () => async dispatch => {
	try {
		const res = await axios.get("/api/lead/getLeads");
		const { data } = res;

		dispatch({ type: IS_LOADED, payload: true });
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
