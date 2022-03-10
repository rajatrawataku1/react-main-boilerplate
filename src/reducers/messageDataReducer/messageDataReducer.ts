import { MESSAGE_DATA_ACTIONS } from 'src/actions/getDataAction';

const defaultState = { data: [] };

export default function messageDataReducer(state = defaultState, action) {
	switch (action.type) {
		case MESSAGE_DATA_ACTIONS.GET_MESSAGE_DATA_RESPONSE: {
			return {
				...state,
				data: action.data
			};
		}
		case MESSAGE_DATA_ACTIONS.GET_MESSAGE_DATA_REQUEST:
		case MESSAGE_DATA_ACTIONS.GET_MESSAGE_DATA_ERROR: {
			return state;
		}
		default: {
			return defaultState;
		}
	}
}
