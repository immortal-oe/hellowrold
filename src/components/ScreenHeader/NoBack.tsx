import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { px2dp, statusBarHeight } from '../../utils/utils';

const heade = px2dp(160) - statusBarHeight;

const NoBack = ({ props: { scene } }: any) => {
	const { options: { headerTitle = '', title = '' } } = scene.descriptor;
	const titleName = headerTitle || title || scene.route.name;
	return (
		<View style={styles.page}>
			<View style={styles.content} />
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
	name: {
		flex: 1,
		textAlign: 'center',
		fontSize: 16,
		color: '#000'
	},
	content: {
		height: heade,
		alignItems: 'center',
		justifyContent: 'center',
		width: heade
	}
});

export default NoBack;
