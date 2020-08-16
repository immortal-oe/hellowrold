import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { statusBarHeight, HeaderHeight } from '../../utils/utils';

const NoBack = ({ props: { scene } }: any) => {
	const { options: { title = '' } } = scene.descriptor;
	return (
		<View style={styles.page}>
			<Text style={styles.name}>{title}</Text>
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
	name: {
		flex: 1,
		textAlign: 'center',
		fontSize: 16,
		color: '#000'
	}
});

export default NoBack;
