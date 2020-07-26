export default function token(state = '', action: any) {
	switch (action.type) {
		case 'SAVETOKEN':
			const token = action.token;
			return token;
		default:
			return state;
	}
}
