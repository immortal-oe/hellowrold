import { createStore, combineReducers } from 'redux';

import token from './reducers/token';
import userInfo from './reducers/userInfo';

const rootReducer = combineReducers({
	token,
	userInfo
});

const store = createStore(rootReducer);

export default store;
