import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { px2dp, statusBarHeight, HeaderHeight } from '../../utils/utils';
import { back } from '../../RootNavigation';

interface CoustmHeader {
	titleName: string;
	Left?: (() => React.ReactNode) | null;
	Right?: (() => React.ReactNode) | null;
}

const CoustmHeader = ({ titleName, Left, Right }: CoustmHeader) => {
	const LeftBox = Left || (
		<RectButton onPress={back} style={styles.content}>
			<Image style={styles.back} source={require('./../../assets/imgs/back.png')} />
		</RectButton>
	);

	const RightBox = Right || null;

	return (
		<View style={styles.page}>
			{LeftBox}
			<Text style={styles.name}>{titleName}</Text>
			<View style={styles.content}>{RightBox()}</View>
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		width: '100%',
		height: HeaderHeight + statusBarHeight,
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
		width: HeaderHeight,
		height: HeaderHeight,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default CoustmHeader;
