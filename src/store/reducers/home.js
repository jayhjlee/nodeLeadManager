import { IS_LOADED, GET_LEADS, CREATE_LEAD } from "../types/home";

const initialState = {
	isLoaded: false,
	leads: [],
	isLeadCreated: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case IS_LOADED:
			return {
				...state,
				isLoaded: true,
			};
		case GET_LEADS:
			return {
				...state,
				leads: action.payload,
			};
		case CREATE_LEAD:
			return {
				...state,
				isLeadCreated: action.payload,
			};
		default:
			return state;
	}
}
