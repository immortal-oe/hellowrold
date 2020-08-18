// import { Reducer, State, Action } from './redux';

const createTheme = (reducer: any) => {
	let state: any = {};

	let listeners: Array<any> = [];

	let getState = () => {
		listeners.push((state) => {
			return state;
		});
		console.log("11");
		
		return state;
	};

	const dispatch = (action: any) => {
		if (action) {
			state = { ...state, ...action };
		} else {
			state = reducer();
		}
		// console.log(state);
		listeners.forEach((f: any) => f(state));
	};

	// const subscribe = (reducer: never) => {
	// 	listeners.push(reducer);
	// };

	dispatch(null);

	return {
		getState,
		// subscribe,
		dispatch
	};
};

export { createTheme };
