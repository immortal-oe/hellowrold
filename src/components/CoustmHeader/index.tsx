import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { px2dp, statusBarHeight } from '../../utils/utils';
import { back } from '../../RootNavigation';

const CoustmWidth = px2dp(160) - statusBarHeight;

export { CoustmWidth };

interface CoustmHeader {
	titleName: string;
	Left?: (() => React.ReactNode) | null;
	Right?: (() => React.ReactNode) | null;
}

const CoustmHeader = ({ titleName, Left, Right }: CoustmHeader) => {
	const LeftBox = Left
		? Left
		: () => {
				return (
					<RectButton onPress={back} style={styles.content}>
						<Image style={styles.back} source={require('./../../assets/imgs/back.png')} />
					</RectButton>
				);
			};

	const RightBox = Right ? Right : () => null;

	return (
		<View style={styles.page}>
			{LeftBox()}
			<Text style={styles.name}>{titleName}</Text>
			<View style={styles.content}>{RightBox()}</View>
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
		width: CoustmWidth,
		height: CoustmWidth,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default CoustmHeader;
