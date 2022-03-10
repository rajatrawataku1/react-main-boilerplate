import { combineReducers } from 'redux';
import sampleData from './sampleReducers/sampleReducer';
import messsageData from './messageDataReducer/messageDataReducer';

const reducers = {
	sampleData,
	messsageData
};

export default combineReducers(reducers);
