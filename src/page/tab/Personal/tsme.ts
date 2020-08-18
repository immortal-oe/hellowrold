export interface GetMyProfile {
	code: Number;
	data: {
		userID: String;
		nick: String;
		gender: String;
		birthday: Number;
		location: String;
		selfSignature: String;
		allowType: String;
		language: Number;
		avatar: String;
		messageSettings: Number;
		adminForbidType: String;
		level: Number;
		role: Number;
		lastUpdatedTime: Number;
		profileCustomField: Array<any>;
	};
}
