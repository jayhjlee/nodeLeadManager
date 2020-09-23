import { CREATE_USER, LOGIN_USER } from "../types/user";

const initialState = {
	userCreated: false,
	isLoggedIn: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case CREATE_USER:
			return {
				...state,
				userCreated: action.payload,
			};
		case LOGIN_USER:
			return {
				...state,
				isLoggedIn: action.payload,
			};
		default:
			return state;
	}
}
