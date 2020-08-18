import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { tim, TIM } from '../../../utils/tim';

import CoustmHeader from '../../../components/CoustmHeader';
import { RectButton } from 'react-native-gesture-handler';
import { navigate, back } from '../../../RootNavigation';
import { px2dp, HeaderHeight } from '../../../utils/utils';
import { saveUserInfo } from '../../../redux/actions/saveUserInfo';

const Setinfo = ({ dispatch, navigation }: any) => {
	const [ count, setCount ] = React.useState('');

	const set = () => {
		if (!count) {
			return;
		}
		// 修改个人标配资料
		let promise = tim.updateMyProfile({
			nick: count
			// avatar: 'http(s)://url/to/image.jpg',
			// gender: TIM.TYPES.GENDER_MALE,
			// selfSignature: '我的个性签名',
			// allowType: TIM.TYPES.ALLOW_TYPE_ALLOW_ANY
		});
		promise
			.then(function(imResponse: any) {
				console.log(imResponse.data); // 更新资料成功

				dispatch(saveUserInfo({ ...imResponse.data }));
				back();
			})
			.catch(function(imError: any) {
				console.warn('updateMyProfile error:', imError); // 更新资料失败的相关信息
			});
	};

	return (
		<View style={styles.page}>
			<CoustmHeader
				titleName="修改昵称"
				Right={() => {
					return (
						<RectButton onPress={set} style={styles.rightbox}>
							<Text style={styles.righttxt}>确定</Text>
						</RectButton>
					);
				}}
			/>
			<View style={styles.main}>
				<View style={styles.boxinput}>
					<TextInput
						value={count}
						onChangeText={(text) => {
							setCount(text);
						}}
						maxLength={20}
						style={styles.input}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		flex: 1
	},
	righttxt: {
		color: '#00CCFF'
	},
	rightbox: {
		flex: 1,
		width: HeaderHeight,
		alignItems: 'center',
		justifyContent: 'center'
	},
	main: {
		flex: 1,
		paddingHorizontal: px2dp(40)
	},
	boxinput: {
		height: px2dp(70),
		paddingBottom: px2dp(10),
		borderBottomWidth: 1,
		borderBottomColor: '#00CCFF',
		marginTop: px2dp(40)
	},
	input: {
		flex: 1,
		padding: 0,
		fontSize: 16
	}
});

export default connect((state) => state)(Setinfo);
