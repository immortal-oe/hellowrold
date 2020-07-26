import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Keyboard } from 'react-native';
import { connect } from 'react-redux';

import RoomFixd from './RoomFixd';
import RenderRightItem from './RenderRightItem';
import RenderLeftItem from './RenderLeftItem';

import { tim, TIM } from '../../../utils/tim';
import { chatstore } from './chatStore';
import { px2dp } from '../../../utils/utils';

const ChatRoom = ({ navigation, route, userInfo: { nick = '' } }: any) => {
	let store = chatstore.getState(route.params.conversationID);

	const flatlistRef: any = useRef(null);
	const keyboardDidShowListner: any = useRef(null);
	const [ data, setData ] = useState<Array<any>>(store || []);

	useEffect(() => {
		// 打开某个会话时，第一次拉取消息列表
		let promise = tim.getMessageList({ conversationID: route.params.conversationID, count: 15 });
		promise.then(function(imResponse: any) {
			console.log(imResponse.data.messageList);
			chatstore.dispatch(route.params.conversationID, imResponse.data.messageList);
			setData(imResponse.data.messageList);
			// const messageList = imResponse.data.messageList; // 消息列表。
			// const nextReqMessageID = imResponse.data.nextReqMessageID; // 用于续拉，分页续拉时需传入该字段。
			// const isCompleted = imResponse.data.isCompleted; // 表示是否已经拉完所有消息。
		});

		keyboardDidShowListner.current = Keyboard.addListener('keyboardDidShow', () => {
			_onLayout(false);
		});
		return () => {
			keyboardDidShowListner.current && keyboardDidShowListner.current.remove();
		};
	}, []);

	const onSetref = () => {
		setTimeout(() => {
			flatlistRef.current.scrollToEnd({
				animated: true
			});
		}, 10);
	};

	const onSend = (value: string) => {
		let list = data.length == 0 ? [] : [ ...data ];

		// 发送文本消息，Web 端与小程序端相同
		// 1. 创建消息实例，接口返回的实例可以上屏
		let message = tim.createTextMessage({
			to: route.params.groupID, // 消息接收方的 userID 或 groupID
			conversationType: TIM.TYPES.CONV_GROUP,
			// 会话类型，取值TIM.TYPES.CONV_C2C （端到端会话） 或 TIM.TYPES.CONV_GROUP （群组会话）
			// 消息优先级，用于群聊（v2.4.2起支持）。如果某个群的消息超过了频率限制，后台会优先下发高优先级的消息，详细请参考：https://cloud.tencent.com/document/product/269/3663#.E6.B6.88.E6.81.AF.E4.BC.98.E5.85.88.E7.BA.A7.E4.B8.8E.E9.A2.91.E7.8E.87.E6.8E.A7.E5.88.B6)
			// 支持的枚举值：TIM.TYPES.MSG_PRIORITY_HIGH, TIM.TYPES.MSG_PRIORITY_NORMAL（默认）, TIM.TYPES.MSG_PRIORITY_LOW, TIM.TYPES.MSG_PRIORITY_LOWEST
			// priority: TIM.TYPES.MSG_PRIORITY_NORMAL,
			payload: {
				text: value
			}
		});
		message.nick = nick;
		list.push(message);
		setData(list);
		// 2. 发送消息
		let promise = tim.sendMessage(message);
		promise
			.then(function(imResponse: any) {
				// 发送成功
				console.log(imResponse);
				onSetref();
			})
			.catch(function(imError: any) {
				// 发送失败
				console.warn('sendMessage error:', imError);
			});
	};

	const _onLayout = (animated = true) => {
		flatlistRef.current.scrollToEnd({
			animated
		});
	};

	const _renderItem = (item: any) => {
		if (item.type == TIM.TYPES.MSG_TEXT) {
			// in 为收到的消息
			if (item.flow == 'in') {
				return <RenderLeftItem item={item} />;
			} else {
				// out 为发出的消息
				return <RenderRightItem item={item} />;
			}
		}
		return <Text />;
	};

	return (
		<View style={styles.page}>
			<View style={styles.main}>
				<FlatList
					ref={flatlistRef}
					data={data}
					renderItem={({ item, index }) => {
						return _renderItem(item);
					}}
					keyExtractor={(item, index) => index + ''}
					style={styles.flat}
					onLayout={() => {
						_onLayout();
					}}
					onContentSizeChange={() => {
						_onLayout();
					}}
					removeClippedSubviews={true}
				/>
			</View>
			<RoomFixd onSend={onSend} />
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		flex: 1
	},
	main: {
		flex: 1,
		backgroundColor: '#000',
		marginBottom: px2dp(100)
	},
	flat: {
		flex: 1,
		backgroundColor: '#67dbf9'
	}
});

//@ts-ignore
export default connect((state) => state)(ChatRoom);
