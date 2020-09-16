import axios from "axios";
import { IS_LOADED, GET_LEADS, OPEN_LEAD_FORM } from "../types/home";

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
