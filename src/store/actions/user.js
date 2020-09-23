import axios from "axios";

import { CREATE_USER } from "../types/user";

export const createUser = userInfo => async dispatch => {
	try {
		const res = await axios.post("/api/user/register/", userInfo);
		const { data } = res;

		dispatch({ type: CREATE_USER, payload: data.isSuccess });
	} catch (err) {
		console.error(err);
	}
};
