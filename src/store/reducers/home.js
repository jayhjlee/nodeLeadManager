import {
	GET_LEADS,
	CREATE_LEAD,
	ENABLE_FORM,
	EDIT_LEAD,
	DELETE_LEAD,
} from "../types/home";

const initialState = {
	isLoaded: false,
	leads: [],
	isLeadCreated: false,
	isLeadUpdated: false,
	isFormEnabled: false,
	isLoggedIn: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
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
		case ENABLE_FORM:
			return {
				...state,
				isFormEnabled: action.payload,
			};
		case EDIT_LEAD:
			return {
				...state,
				isLeadUpdated: action.payload,
			};
		case DELETE_LEAD:
			return {
				...state,
				leads: state.leads.filter(lead => lead.id !== action.payload),
			};
		default:
			return state;
	}
}
