import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { tim, TIM } from '../../../utils/tim';
import { RectButton } from 'react-native-gesture-handler';
import { navigate } from '../../../RootNavigation';

const Setting = ({}) => {
	const set = () => {
		// 修改个人标配资料
		let promise = tim.updateMyProfile({
			nick: '我的昵称',
			avatar: 'http(s)://url/to/image.jpg',
			gender: TIM.TYPES.GENDER_MALE,
			selfSignature: '我的个性签名',
			allowType: TIM.TYPES.ALLOW_TYPE_ALLOW_ANY
		});
		promise
			.then(function(imResponse: any) {
				console.log(imResponse.data); // 更新资料成功
			})
			.catch(function(imError: any) {
				console.warn('updateMyProfile error:', imError); // 更新资料失败的相关信息
			});
	};

	return (
		<View style={styles.page}>
			<RectButton
				onPress={() => {
					// navigate('Setting');
				}}
				style={styles.cubotton}
			>
				<Text>昵称</Text>
			</RectButton>
			<RectButton
				onPress={() => {
					// navigate('Setting');
				}}
				style={styles.cubotton}
			>
				<Text>头像</Text>
			</RectButton>
			<RectButton
				onPress={() => {
					// navigate('Setting');
				}}
				style={styles.cubotton}
			>
				<Text>性别</Text>
			</RectButton>
			<RectButton
				onPress={() => {
					// navigate('Setting');
				}}
				style={styles.cubotton}
			>
				<Text>个性签名</Text>
			</RectButton>
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		flex: 1
	},
	cubotton: {
		width: '100%',
		height: 60,
		justifyContent: 'center',
		backgroundColor: '#fff',
		paddingHorizontal: 10,
		marginBottom: 10
	}
});

export default Setting;
