import { IS_LOADED, GET_LEADS, OPEN_LEAD_FORM } from "../types/home";

const initialState = {
	isLoaded: false,
	leads: [],
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
		default:
			return state;
	}
}
