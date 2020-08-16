import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { px2dp, statusBarHeight, HeaderHeight } from '../../utils/utils';
import { back } from '../../RootNavigation';

const ScreenHeader = ({ props: { scene } }: any) => {
	const { options: { title = '' } } = scene.descriptor;
	return (
		<View style={styles.page}>
			<RectButton onPress={back} style={styles.content}>
				<Image style={styles.back} source={require('./../../assets/imgs/back.png')} />
			</RectButton>
			<Text style={styles.name}>{title}</Text>
			<View style={styles.content} />
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
		alignItems: 'center',
		position: 'relative'
	},
	back: {
		width: px2dp(40),
		height: px2dp(40)
	},
	name: {
		flex: 1,
		textAlign: 'center',
		fontSize: 16,
		color: '#000'
	},
	content: {
		width: HeaderHeight,
		height: HeaderHeight,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default ScreenHeader;
