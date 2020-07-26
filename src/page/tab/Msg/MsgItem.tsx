import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { px2dp, onePx } from '../../../utils/utils';
import { navigate } from '../../../RootNavigation';

import { TIM } from '../../../utils/tim';
import { ItemConversationList } from '../../../utils/timType';
import { conversion } from '../../../utils/comfuc';

const MsgItem = ({ item }: { item: ItemConversationList }) => {
	const { type, conversationType,time, payload: { text = '' }, isPlaceMessage } = item;

	const typename = () => {
		if (type == TIM.TYPES.CONV_SYSTEM) {
			return '系统通知';
		} else if (type == TIM.TYPES.CONV_GROUP) {
			return ''; // （群组）会话
		} else if (type == TIM.TYPES.CONV_C2C) {
			return '对方'; // （端到端）会话
		}
		return '';
	};

	const title = typename();

	return (
		<TouchableOpacity
			onPress={() => {
				if (item.type == TIM.TYPES.CONV_SYSTEM) {
					alert('系统消息暂时不接');
					return;
				}
				navigate('ChatRoom', {
					conversationID: item.conversationID,
					groupID: item.to
				});
			}}
			style={styles.msgbox}
			activeOpacity={0.8}
		>
			<Image
				style={styles.msgimg}
				source={{
					uri: 'http://p1.music.126.net/aMVPsO00OqlVTS2yMH8RgA==/109951163785600029.jpg?param=34y34'
				}}
			/>
			<View style={styles.mrigth}>
				<View style={styles.mtop}>
					<Text style={styles.mtitle} numberOfLines={1}>
						{title}
					</Text>
					<Text style={styles.time}>{conversion(time, 'HMS')}</Text>
				</View>
				<View style={styles.mbottom}>
					<Text numberOfLines={1} style={styles.mdesc}>
						{text}
					</Text>
					{isPlaceMessage > 0 ? (
						<View style={styles.uncont}>
							<Text style={styles.num}>{isPlaceMessage}</Text>
						</View>
					) : null}
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1
	},
	msgbox: {
		flex: 1,
		paddingHorizontal: px2dp(20),
		height: px2dp(160),
		flexDirection: 'row',
		backgroundColor: '#fff',
		alignItems: 'center',
		borderBottomColor: 'rgb(224, 224, 224)',
		borderBottomWidth: onePx,
		position: 'relative'
	},
	msgimg: {
		width: px2dp(120),
		height: px2dp(120),
		borderRadius: px2dp(120)
	},
	mrigth: {
		flex: 1,
		flexDirection: 'column',
		paddingLeft: px2dp(30)
	},
	mtop: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	mbottom: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: px2dp(20)
	},
	uncont: {
		width: px2dp(40),
		height: px2dp(40),
		backgroundColor: 'red',
		borderRadius: px2dp(40),
		alignItems: 'center',
		justifyContent: 'center'
	},
	mtitle: {
		fontSize: 18,
		flex: 1
	},
	time: {
		fontSize: 11,
		color: '#999'
	},
	mdesc: {
		maxWidth: px2dp(400),
		fontSize: 14,
		color: '#999'
	},
	num: {
		color: '#fff',
		fontSize: 12
	}
});

export default MsgItem;
