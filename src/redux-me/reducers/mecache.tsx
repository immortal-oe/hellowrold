const INITIAL_STATE = {};

export default function mecache(state = INITIAL_STATE, action: any) {
	if (!action) {
		return state;
	}

	switch (action.type) {
		case 'mecache':
			return state;
		default:
			return state;
	}
}
