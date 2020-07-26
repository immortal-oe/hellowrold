import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { px2dp, statusBarHeight } from '../../utils/utils';
import { back } from '../../RootNavigation';

const heade = px2dp(160) - statusBarHeight;

const ScreenHeader = ({ props: { scene, previous, navigation } }: any) => {

	const { options: { headerTitle = '', title = '' } } = scene.descriptor;
	const titleName = headerTitle || title || scene.route.name;
	const goback = () => {
		back();
	};
	return (
		<View style={styles.page}>
			<RectButton onPress={goback} style={styles.content}>
				<Image style={styles.back} source={require('./../../assets/imgs/back.png')} />
			</RectButton>
			<Text style={styles.name}>{titleName}</Text>
			<View style={styles.content} />
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		width: '100%',
		height: px2dp(160),
		paddingTop: statusBarHeight,
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center'
	},
	back: {
		width: px2dp(40),
		height: px2dp(40)
	},
	name: {
		flex: 1,
		textAlign: 'center'
	},
	content: {
		height: heade,
		alignItems: 'center',
		justifyContent: 'center',
		width: heade
	}
});

export default ScreenHeader;
