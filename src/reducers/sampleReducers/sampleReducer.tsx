import { SAMPLE_ACTIONS } from 'src/actions/sampleActions';

export default function sampleReducer(
	state = {
		counter: 0
	},
	action
) {
	switch (action.type) {
		case SAMPLE_ACTIONS.UPDATE_DATA: {
			return {
				...state,
				counter: action.data
			};
		}
		case SAMPLE_ACTIONS.GET_ACTIONS_REQUEST:
		case SAMPLE_ACTIONS.GET_ACTIONS_RESPONSE:
		case SAMPLE_ACTIONS.GET_ACTIONS_ERROR:
		default:
			return state;
	}
}
