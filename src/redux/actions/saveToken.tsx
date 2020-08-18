export const saveToken = (token: string) => {
	return {
		type: 'SAVETOKEN',
		token
	};
};
