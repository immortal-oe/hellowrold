import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { px2dp } from '../../../utils/utils';

const RenderRightItem = ({ item: { payload: { text = '' }, nick = '' } }) => {
	return (
		<View style={styles.rightbox}>
			<View style={styles.imgbox}>
				<Image
					style={styles.headimg}
					source={{
						uri: 'http://p4.music.126.net/jfJnoJ8qSoiUtNf1AnmxLw==/109951164951115726.jpg?param=100y100'
					}}
				/>
			</View>
			<View
				style={{
					alignItems: 'flex-end'
				}}
			>
				<Text style={styles.title}>{nick || '未设置昵称'}</Text>
				<View style={styles.conbg}>
					<View style={styles.bigd} />
					<Text style={styles.contnt}>{text}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	rightbox: {
		paddingHorizontal: px2dp(20),
		marginVertical: px2dp(20),
		flexDirection: 'row-reverse'
	},
	imgbox: {
		width: px2dp(80),
		height: px2dp(80),
		marginLeft: px2dp(30)
	},
	headimg: {
		width: px2dp(80),
		height: px2dp(80),
		borderRadius: px2dp(80),
		marginTop: px2dp(20)
	},
	title: {
		fontSize: 14,
		color: '#000',
		paddingBottom: px2dp(10)
	},
	conbg: {
		minHeight: px2dp(40),
		paddingHorizontal: px2dp(20),
		paddingVertical: px2dp(16),
		backgroundColor: '#fff',
		flexDirection: 'row',
		borderRadius: px2dp(10),
		position: 'relative',
		maxWidth: px2dp(480)
	},
	bigd: {
		position: 'absolute',
		top: px2dp(20),
		right: -px2dp(20),
		zIndex: 1,
		width: px2dp(20),
		borderBottomWidth: px2dp(20),
		borderBottomColor: '#fff',
		borderBottomRightRadius: px2dp(16),
		borderTopLeftRadius: px2dp(20),
		borderTopStartRadius: px2dp(20)
	},
	contnt: {
		lineHeight: px2dp(40),
		fontSize: 16
	}
});

export default RenderRightItem;
