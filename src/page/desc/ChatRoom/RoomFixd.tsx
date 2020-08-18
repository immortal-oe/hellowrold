import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { px2dp } from '../../../utils/utils';
const RoomFixd = ({ onSend = (v: string) => {} }) => {
	const [ value, setvalue ] = useState('');

	return (
		<View style={styles.fixd}>
			<View style={styles.mibox}>
				<Text style={{}}>🌹</Text>
			</View>
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
			{/* <View style={styles.mibox}>
				<Text style={{}}>😄</Text>
			</View> */}
			<TouchableOpacity
				onPress={() => {
					if (value) {
						onSend(value);
						setvalue('');
					}
				}}
				style={styles.sendbox}
			>
				<Text style={{ color: '#fff', fontSize: 12 }}>发送</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		flex: 1
	},
	fixd: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		zIndex: 9999,
		width: '100%',
		height: px2dp(100),
		flexDirection: 'row',
		alignItems: 'center'
	},
	mibox: {
		width: px2dp(80),
		alignItems: 'center'
	},
	sendbox: {
		width: px2dp(90),
		height: px2dp(52),
		backgroundColor: '#39b54a',
		borderRadius: px2dp(8),
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: px2dp(20)
	},
	input: {
		flex: 1,
		paddingHorizontal: px2dp(20),
		backgroundColor: '#ccc',
		padding: 0,
		fontSize: 14
	}
});

export default RoomFixd;
