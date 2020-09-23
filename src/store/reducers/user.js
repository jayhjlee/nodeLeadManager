import { CREATE_USER } from "../types/user";

const initialState = {
	userCreated: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case CREATE_USER:
			return {
				...state,
				userCreated: action.payload,
			};
		default:
			return state;
	}
}
