import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList } from 'react-native';
import { tim } from '../../../utils/tim';
import { BaseButton, RectButton } from 'react-native-gesture-handler';
import { px2dp } from '../../../utils/utils';
import { navigate } from '../../../RootNavigation';

const GroupChat = ({}) => {
	const [ data, setdata ] = useState([]);

	useEffect(() => {
		getgroup();
	}, []);

	const getgroup = () => {
		// 该接口默认只会拉取这些资料：群类型、群名称、群头像、最后一条消息的时间。
		let promise = tim.getGroupList();
		promise
			.then(function(imResponse: any) {
				console.log(imResponse);

				console.log(imResponse.data.groupList); // 群组列表
				setdata(imResponse.data.groupList);
			})
			.catch(function(imError: any) {
				console.warn('getGroupList error:', imError); // 获取群组列表失败的相关信息
			});
	};

	return (
		<View style={styles.page}>
			<FlatList
				data={data}
				renderItem={({ item, index }) => {
					console.log(item);

					const { avatar, name, conversationID, groupID } = item;
					return (
						<RectButton
							onPress={() => {
								// navigate('ChatRoom', {
								// 	conversationID: conversationID,
								// 	groupID: groupID
								// });
							}}
							style={styles.listbox}
						>
							<Image
								style={styles.headimg}
								source={{
									uri: avatar
										? avatar
										: 'http://p4.music.126.net/jfJnoJ8qSoiUtNf1AnmxLw==/109951164951115726.jpg?param=100y100'
								}}
							/>
							<Text style={{}}>{name}</Text>
						</RectButton>
					);
				}}
				keyExtractor={(item, index) => index + ''}
				style={styles.flat}
				removeClippedSubviews={true}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		flex: 1
	},
	flat: {
		flex: 1
	},
	headimg: {
		width: px2dp(60),
		height: px2dp(60),
		marginRight: px2dp(20),
		borderRadius: px2dp(10)
	},
	listbox: {
		height: px2dp(80),
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: px2dp(20),
		marginTop: px2dp(10)
	}
});

export default GroupChat;
