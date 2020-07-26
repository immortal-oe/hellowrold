import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { px2dp } from '../../../utils/utils';
import { layout } from '../../../utils/layout';
import { BaseButton } from 'react-native-gesture-handler';
import { tim, TIM } from '../../../utils/tim';
import { getsign } from '../../../api/config';
import { saveUserInfo } from '../../../redux/actions/saveUserInfo';
import { replace } from '../../../RootNavigation';
import { storeData, getData, storekey } from '../../../utils/Store';

const Login = ({ dispatch }: any) => {
	const [ value, setvalue ] = useState('');
	const [ password, setpassword ] = useState('');

	useEffect(() => {
		getData('loginmsg')
			.then((res) => {
				console.log(res);
				res && setvalue(res.value);
				res && setpassword(res.password);
			})
			.catch((err) => {
				console.log('err', err);
			});
	}, []);

	const getlogin = () => {
		if (value == '') {
			return;
		}
		let va = /^[\d\w]+$/.test(value);
		if (!va) {
			alert('userid只能是数字和字母');
			return;
		}

		if (password == '') {
			return;
		}
		comlogin();
	};

	const comlogin = () => {
		getsign({
			signame: value
		})
			.then((res: any) => {
				// console.log(res);
				imlogin(res.sig);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const imlogin = (userSig: string) => {
		let promise = tim.login({ userID: value, userSig: userSig });
		promise
			.then(function(imResponse: any) {
				console.log('登录成功', imResponse.data); // 登录成功
				if (imResponse.data.repeatLogin === true) {
					// 标识账号已登录，本次登录操作为重复登录。v2.5.1 起支持
					console.log('账号已登录', imResponse.data.errorInfo);
					replace('MyTab');
				} else {
					storekey.setkey(value);

					storeData('loginmsg', { value, password }).then((res: any) => {
						// console.log(res);
					});
					let onSdkReady = function(event: any) {
						let getmy = tim.getMyProfile();
						getmy
							.then(function(res: any) {
								// console.log(.data); // 个人资料 - Profile 实例
								dispatch(
									saveUserInfo({
										...res,
										...imResponse.data,
										repeatLogin: true,
										userid: value,
										password
									})
								);
								replace('MyTab');
							})
							.catch(function(imError: any) {
								console.log('getMyProfile error:', imError); // 获取个人资料失败的相关信息
							});
					};
					tim.on(TIM.EVENT.SDK_READY, onSdkReady);
				}
			})
			.catch(function(imError: any) {
				console.warn('登录失败:', imError); // 登录失败的相关信息
			});
	};

	return (
		<View style={layout.page}>
			<View style={styles.page}>
				<View
					style={{
						width: '100%',
						marginTop: 200,
						height: 120,
						paddingHorizontal: 10
					}}
				>
					<Text style={{}}>userid</Text>
					<TextInput
						value={value}
						onChangeText={(text) => {
							setvalue(text);
						}}
						numberOfLines={1}
						maxLength={100}
						style={styles.input}
					/>
					<Text style={{}}>密码</Text>
					<TextInput
						value={password}
						onChangeText={(text) => {
							setpassword(text);
						}}
						numberOfLines={1}
						maxLength={100}
						style={styles.input}
					/>
				</View>
				<BaseButton
					onPress={() => {
						getlogin();
					}}
					style={{
						width: '100%',
						height: 60,
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: 'red',
						marginTop: 20
					}}
				>
					<Text>登陆</Text>
				</BaseButton>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		flex: 1
	},
	input: {
		flex: 1,
		paddingHorizontal: 10,
		backgroundColor: '#ccc',
		padding: 0,
		fontSize: 14
	}
});

export default connect((state) => state)(Login);
