export const saveUserInfo = (userInfo: any) => {
	return {
		type: 'USERINFO',
		userInfo
	};
};


export const cleanUserInfo = (userInfo: any) => {
	return {
		type: 'cleanUserInfo',
		userInfo
	};
};
