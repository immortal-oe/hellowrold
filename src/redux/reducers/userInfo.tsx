import { setData } from '../../utils/Store';

export default function userInfo(
	state: State = {
		repeatLogin: false,
		nick: ''
	},
	action: any
) {
	switch (action.type) {
		case 'USERINFO':
			const data = { ...state, ...action.userInfo };
			setData('USERINFO', data);
			return data;
		case 'cleanUserInfo':
			return { repeatLogin: false };
		default:
			return state;
	}
}

export interface State {
	repeatLogin?: Boolean;
	actionStatus?: String;
	errorInfo?: String;
	errorCode?: Number;
	a2Key?: String;
	tinyID?: String;
	userid?: String;
	password?: String;
	userID?: String;
	nick?: String;
	gender?: String;
	birthday?: Number;
	location?: String;
	selfSignature?: String;
	allowType?: String;
	language?: Number;
	avatar?: String;
	messageSettings?: Number;
	adminForbidType?: String;
	level?: Number;
	role?: Number;
	lastUpdatedTime?: Number;
	profileCustomField?: Array<any>;
}
