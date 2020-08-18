const createChatstore = () => {
	let state: any = {};
	let ary: Array<any> = [];
	let getState = (key?: string) => (key ? state[key] : state);

	const dispatch = (key: string, value: any) => {
		state = { ...state, [key]: value };
	};

	const subScript = (fuc: Function) => {
		ary.push(fuc);
	};

	return {
		getState,
		dispatch,
		subScript
	};
};

const chatstore = createChatstore();

export { chatstore };
