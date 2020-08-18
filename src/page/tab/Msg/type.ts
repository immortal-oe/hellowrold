export interface ConversationListType {
	conversationID: String;
	unreadCount: number;
	type: String;
	lastMessage: {
		lastTime: Number;
		lastSequence: Number;
		fromAccount: String;
		messageForShow: String;
		type: String;
		payload: { text: String };
		isRevoked: Boolean;
	};
	_isInfoCompleted: Boolean;
	peerReadTime: Number;
	groupProfile: {
		groupID: String;
		name: String;
		avatar: String;
		type: String;
		introduction: String;
		notification: String;
		ownerID: String;
		createTime: String;
		infoSequence: String;
		lastInfoTime: String;
		selfInfo: { messageRemindType: String; joinTime: Number; nameCard: String; role: String };
		lastMessage: { lastTime: String; lastSequence: String; fromAccount: String; messageForShow: String };
		nextMessageSeq: Number;
		memberNum: String;
		maxMemberNum: String;
		joinOption: String;
		groupCustomField: Array<any>;
	};
}

export interface RECEIVED_Type {
	ID: String;
	conversationID: String;
	conversationType: String;
	time: Number;
	sequence: Number;
	clientSequence: Number;
	random: Number;
	priority: String;
	nick: String;
	avatar: String;
	isPeerRead: Boolean;
	_elements: Array<{ type: String; content: { text: String } }>;
	isPlaceMessage: Number;
	isRevoked: Boolean;
	geo: {};
	from: String;
	to: String;
	flow: String;
	isSystemMessage: Boolean;
	protocol: String;
	isResend: Boolean;
	isRead: Boolean;
	status: String;
	payload: { text: String };
	type: String;
}
