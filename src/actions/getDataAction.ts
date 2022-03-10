import ApiCaller from 'src/ApiCaller/ApiCaller';

export enum MESSAGE_DATA_ACTIONS {
	GET_MESSAGE_DATA_REQUEST = 'GET_MESSAGE_DATA_REQUEST',
	GET_MESSAGE_DATA_RESPONSE = 'GET_MESSAGE_DATA_RESPONSE',
	GET_MESSAGE_DATA_ERROR = 'GET_MESSAGE_DATA_ERROR'
}

export const actionFactory = (reqAction, responseAction, errorAction) => config => {
	return dispatch => {
		dispatch({
			type: reqAction
		});

		return ApiCaller.get(config).then(
			response => {
				dispatch({
					type: responseAction,
					data: response
				});

				return Promise.resolve(response);
			},
			err => {
				dispatch({
					type: errorAction
				});
				return Promise.reject(err);
			}
		);
	};
};

const getMessageData = actionFactory(
	MESSAGE_DATA_ACTIONS.GET_MESSAGE_DATA_REQUEST,
	MESSAGE_DATA_ACTIONS.GET_MESSAGE_DATA_RESPONSE,
	MESSAGE_DATA_ACTIONS.GET_MESSAGE_DATA_ERROR
);

export { getMessageData };
