import {
	CREATE_USER,
	LOGIN_USER,
	VALIDATE_USER,
	LOGOUT_USER,
} from "../types/user";

const initialState = {
	userCreated: false,
	isLoggedIn: false,
	token: "",
};

export default function (state = initialState, action) {
	switch (action.type) {
		case CREATE_USER:
			return {
				...state,
				userCreated: action.payload,
			};
		case LOGIN_USER:
		case VALIDATE_USER:
		case LOGOUT_USER:
			return {
				...state,
				isLoggedIn: action.payload.isSuccess,
				token: action.payload.token,
			};

		default:
			return state;
	}
}
