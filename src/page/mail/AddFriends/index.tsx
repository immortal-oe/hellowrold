import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { tim } from '../../../utils/tim';

const AddFriends = ({}) => {
	const add = () => {
		let promise = tim.searchGroupByID('group1');
		promise
			.then(function(imResponse: any) {
				console.log(imResponse);

				const group = imResponse.data.group; // 群组信息
			})
			.catch(function(imError: any) {
				console.log('searchGroupByID error:', imError); // 搜素群组失败的相关信息
			});
	};
	add();
	return (
		<View style={styles.page}>
			{/*  */}
			{/*  */}
		</View>
	);
};

const styles = StyleSheet.create({
	page: {}
});

export default AddFriends;
