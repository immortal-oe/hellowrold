export interface noItemConversationList {
	conversationID: String; // GROUP@TGS#2NG6EVPG4
	// C2C+userID（单聊）
	// GROUP+groupID（群聊）
	// @TIM#SYSTEM（系统通知会话）
	groupProfile: GroupProfile; // 群组会话的群组资料
	lastMessage: LastMessage; // 会话最新的消息
	type: String; //  GROUP
	// TIM.TYPES.CONV_C2C	C2C（Client to Client, 端到端）会话
	// TIM.TYPES.CONV_GROUP	GROUP（群组）会话
	// TIM.TYPES.CONV_SYSTEM	SYSTEM（系统）会话。该会话只能接收来自系统的通知消息，不能发送消息。
	unreadCount: Number;
	// 未读计数。TIM.TYPES.GRP_CHATROOM / TIM.TYPES.GRP_AVCHATROOM 类型的群组会话不记录未读计数，该字段值为0
	_isInfoCompleted: Boolean;
	subType: String; // "Public"
	// TIM.TYPES.GRP_PRIVATE	私有群
	// TIM.TYPES.GRP_PUBLIC	公开群
	// TIM.TYPES.GRP_CHATROOM	聊天室
	// TIM.TYPES.GRP_AVCHATROOM	音视频聊天室
	toAccount: String; //@TGS#2NG6EVPG4
}

export interface LastMessage {
	fromAccount: '@TIM#SYSTEM'; // 最新消息来源用户的 userID
	isRevoked: Boolean;
	lastSequence: 2; // 当前会话的最新消息的 Sequence
	lastTime: 1590557180; //当前会话最新消息的时间戳，单位：秒
	messageForShow: '[群提示消息]'; // 最新消息的内容，用于展示。可能值：文本消息内容、"[图片]"、"[语音]"、"[位置]"、"[表情]"、"[文件]"、"[自定义消息]"。
	// 若该字段不满足您的需求，您可以使用 payload 来自定义渲染。
	payload: {
		groupProfile: {
			from: '@TIM#SYSTEM'; // 从系统发送消息来
			groupID: '@TGS#2NG6EVPG4';
			// 群组的唯一标识，群组 ID，App 内保证唯一，其格式前缀为 @TGS#。另外，App 亦可自定义群组 ID
			to: 'ad2344d222'; // 到我这边接受
		};
		operationType: 4;
		// 1	有用户申请加群	群管理员/群主接收
		// 2	申请加群被同意	申请加群的用户接收
		// 3	申请加群被拒绝	申请加群的用户接收
		// 4	被踢出群组	被踢出的用户接收
		// 5	群组被解散	全体群成员接收
		// 6	创建群组	创建者接收
		// 7	邀请加群	被邀请者接收
		// 8	退群	退群者接收
		// 9	设置管理员	被设置方接收
		// 10	取消管理员	被取消方接收
		// 255	用户自定义通知	默认全员接收
		operatorID: '100007476630'; // 执行该操作的用户 ID
		userIDList: ['ad2344d222'];
	};
	type: 'TIMGroupTipElem';
	// TIM.TYPES.MSG_TEXT	文本消息
	// TIM.TYPES.MSG_IMAGE	图片消息
	// TIM.TYPES.MSG_SOUND	音频消息（已废弃，请使用 TIM.TYPES.MSG_AUDIO ）
	// TIM.TYPES.MSG_AUDIO	音频消息
	// TIM.TYPES.MSG_FILE	文件消息
	// TIM.TYPES.MSG_GRP_TIP	群提示消息
	// TIM.TYPES.MSG_GRP_SYS_NOTICE	群系统通知消息
}

export interface GroupProfile {
	avatar: '';
	createTime: 1590556979;
	groupCustomField: [];
	groupID: '@TGS#2NG6EVPG4';
	infoSequence: 9;
	introduction: '';
	joinOption: 'NeedPermission';
	lastInfoTime: 1590557177;
	lastMessage: {
		lastTime: '';
		lastSequence: '';
		fromAccount: '';
		messageForShow: '';
	};
	maxMemberNum: 2000;
	memberNum: 1;
	muteAllMembers: false;
	name: 'quns';
	nextMessageSeq: 3;
	notification: '';
	ownerID: '';
	selfInfo: {
		messageRemindType: '';
		joinTime: 1590557177;
		nameCard: '';
		role: 'Member';
	};
	type: 'Public';
}

export interface ItemConversationList {
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
