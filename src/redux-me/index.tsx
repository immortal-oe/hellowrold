import { createStore } from './store';
import combineReducers from './combineReducers';

import mecache from './reducers/mecache';

const store = createStore(combineReducers({ mecache: mecache }));

export default store;
