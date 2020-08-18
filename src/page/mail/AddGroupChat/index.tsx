import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { tim, TIM } from '../../../utils/tim';
import { BaseButton } from 'react-native-gesture-handler';

const AddGroupChat = ({}) => {
	const [ value, setvalue ] = useState('');

	const applyAddFriend = () => {
		if (value == '') {
			alert('--');
			return;
		}

		try {
			let promise = tim.joinGroup({ groupID: value, type: TIM.TYPES.GRP_AVCHATROOM });
			promise
				.then(function(imResponse: any) {
					switch (imResponse.data.status) {
						case TIM.TYPES.JOIN_STATUS_WAIT_APPROVAL: // 等待管理员同意
							console.log('等待管理员同意');
							break;
						case TIM.TYPES.JOIN_STATUS_SUCCESS: // 加群成功
							console.log(imResponse.data.group); // 加入的群组资料
							break;
						case TIM.TYPES.JOIN_STATUS_ALREADY_IN_GROUP: // 已经在群中
							console.log('已经在群中');
							break;
						default:
							break;
					}
				})
		} catch (error) {
			console.log('error error:', error); // 申请加群失败的相关信息
		}
	};
	return (
		<View style={styles.page}>
			<View
				style={{
					width: '100%',
					marginTop: 200,
					height: 60,
					paddingHorizontal: 10
				}}
			>
				<Text style={{}}>群id</Text>
				<TextInput
					value={value}
					selectionColor={'red'}
					onChangeText={(text) => {
						setvalue(text);
					}}
					numberOfLines={1}
					maxLength={100}
					style={styles.input}
				/>
			</View>
			<BaseButton
				onPress={() => {
					applyAddFriend();
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
				<Text>添加</Text>
			</BaseButton>
		</View>
	);
};



const styles = StyleSheet.create({
	page: {},
	input: {
		flex: 1,
		paddingHorizontal: 10,
		backgroundColor: '#ccc',
		padding: 0,
		fontSize: 14
	}
});

export default AddGroupChat;
