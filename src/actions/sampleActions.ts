import * as Redux from 'redux';

export enum SAMPLE_ACTIONS {
	GET_ACTIONS_REQUEST = 'GET_ACTIONS_REQUEST',
	GET_ACTIONS_RESPONSE = 'GET_ACTIONS_RESPONSE',
	GET_ACTIONS_ERROR = 'GET_ACTIONS_ERROR',
	UPDATE_DATA = 'UPDATE_DATA'
}

const actionFactory =
	({ actionType }) =>
	params => {
		return (dispatch: Redux.Dispatch<any>) => {
			dispatch({
				type: actionType,
				data: params
			});
		};
	};

export const getDataAction = actionFactory({ actionType: SAMPLE_ACTIONS.GET_ACTIONS_REQUEST });
export const updateData = actionFactory({ actionType: SAMPLE_ACTIONS.UPDATE_DATA });
