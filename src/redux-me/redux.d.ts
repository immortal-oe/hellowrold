export interface State {
	[key: string]: Object;
}
export interface Action {
	type: string;
}

export interface Reducer {
	[key: string]: (state: State, action: Action) => void;
}
