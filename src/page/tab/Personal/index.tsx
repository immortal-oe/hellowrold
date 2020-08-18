import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';

import { px2dp } from '../../../utils/utils';
import { layout } from '../../../utils/layout';
import { BaseButton } from 'react-native-gesture-handler';
import { cleanUserInfo, saveUserInfo } from '../../../redux/actions/saveUserInfo';
import { replace, navigate } from '../../../RootNavigation';
import { tim } from '../../../utils/tim';
import { GetMyProfile } from './tsme';

const Personal = ({ dispatch, userInfo, navigation }: any) => {
	useEffect(() => {
		getmsg();
	}, []);

	const outlogin = () => {
		let promise = tim.logout();
		promise
			.then(function(imResponse: any) {
				console.log(imResponse.data); // 登出成功
				dispatch(cleanUserInfo({}));
				replace('Login');
			})
			.catch(function(imError: any) {
				console.warn('logout error:', imError);
			});
	};

	const getmsg = () => {
		let promise = tim.getMyProfile();
		promise
			.then(function(imResponse: GetMyProfile) {
				// console.log(.data); // 个人资料 - Profile 实例
				dispatch(saveUserInfo({ ...imResponse.data }));
			})
			.catch(function(imError: any) {
				console.log('getMyProfile error:', imError); // 获取个人资料失败的相关信息
			});
	};

	const LineView = (title = '', url = '') => {
		return (
			<BaseButton
				onPress={() => {
					url && navigate(url);
				}}
				style={styles.linebox}
			>
				<Text style={styles.linetxt}>{title}</Text>
				<Text>{'>'}</Text>
			</BaseButton>
		);
	};

	return (
		<View style={layout.page}>
			<View style={styles.head}>
				<Image
					style={styles.avater}
					source={{
						uri: 'http://p1.music.126.net/eNyms7cGuYfNJhk7LGT2VA==/109951164249103228.jpg?param=80y80'
					}}
				/>
				<Text style={styles.name}>账号：{userInfo.nick || '未设置昵称'}</Text>
			</View>
			{LineView('设置')}
			{LineView('修改昵称', 'Setinfo')}
			{LineView('修改个性签名', '')}
			{LineView('加我为好友时', '')}
			{LineView('关于即时通讯', '')}
			<BaseButton
				onPress={() => {
					outlogin();
				}}
				style={styles.cubotton}
			>
				<Text style={styles.outtxt}>退出登陆</Text>
			</BaseButton>
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		flex: 1
	},
	head: {
		height: px2dp(200),
		backgroundColor: '#fff',
		paddingHorizontal: px2dp(20),
		flexDirection: 'row',
		alignItems: 'center'
	},
	avater: {
		height: px2dp(160),
		width: px2dp(160),
		marginRight: px2dp(40)
	},
	name: {
		fontSize: 14,
		color: '#666'
	},
	linebox: {
		height: px2dp(92),
		paddingHorizontal: px2dp(20),
		marginTop: px2dp(20),
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center'
	},
	linetxt: {
		flex: 1
	},
	cubotton: {
		width: '100%',
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
		backgroundColor: '#fff'
	},
	outtxt: {
		color: 'red'
	}
});

export default connect((state) => state)(Personal);
