import { Reducer, State, Action } from './redux';

const createStore = (reducer: any) => {
	let state: State = {};

	let listeners: Array<any> = [];

	let getState = () => state;

	const dispatch = (action: Action) => {
		state = reducer(state, action);
		listeners.forEach((f: any) => f(state));
	};

	const subscribe = (reducer: never) => {
		listeners.push(reducer);
	};

	dispatch({
		type: 'default'
	});

	return {
		getState,
		subscribe,
		dispatch
	};
};

export { createStore };
