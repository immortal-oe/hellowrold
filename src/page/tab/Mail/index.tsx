import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { layout } from '../../../utils/layout';
import { onePx } from '../../../utils/utils';
import { navigate } from '../../../RootNavigation';

const Mail = () => {
	const LineM = (title = '', router = '') => {
		return (
			<TouchableOpacity
				onPress={() => {
					navigate(router);
				}}
				style={styles.line}
			>
				<Text style={{}}>{title}</Text>
			</TouchableOpacity>
		);
	};

	return (
		<View style={layout.page}>
			<View style={styles.page}>
				{LineM('🌹 新的联系人', 'FriendApplication')}
				{LineM('🌷 我的群聊', 'GroupChat')}
				{LineM('🌺 添加好友', 'AddFriends')}
				{LineM('💐 添加群聊', 'AddGroupChat')}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		flex: 1
	},
	line: {
		height: 50,
		borderBottomColor: 'rgb(224, 224, 224)',
		borderBottomWidth: onePx,
		paddingHorizontal: 10,
		justifyContent: 'center'
	}
});

export default Mail;
