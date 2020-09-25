import axios from "axios";

import { CREATE_USER, LOGIN_USER, VALIDATE_USER } from "../types/user";

export const createUser = userInfo => async dispatch => {
	try {
		const res = await axios.post("/api/user/register", userInfo);
		const { data } = res;

		dispatch({ type: CREATE_USER, payload: data.isSuccess });
	} catch (err) {
		console.error(err);
	}
};

export const logInUser = credential => async dispatch => {
	try {
		const res = await axios.post("/api/user/login", credential);
		const { data } = res;

		localStorage.setItem("isLoggedIn", data.isSuccess);
		localStorage.setItem("token", data.token);

		dispatch({ type: LOGIN_USER, payload: data });
	} catch (err) {
		console.error(err);
	}
};

export const validateUser = () => async dispatch => {
	try {
		const token = localStorage.getItem("token");
		const body = { token };

		if (token) {
			const res = await axios.post("/api/user/auth", body);
			const { data } = res;

			dispatch({ type: VALIDATE_USER, payload: data });
		}
	} catch (err) {
		console.error(err);
	}
};
