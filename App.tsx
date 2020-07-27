/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import './src/utils/global';

import { Provider } from 'react-redux';
import store from './src/redux';

import Router from './src/Router';
// import AppCodePush from './src/codepush/AppCodePush';

const App = () => {
	useEffect(() => {
		// @ts-ignore
		TextInput.defaultProps = Object.assign({}, TextInput.defaultProps, {
			defaultProps: false,
			placeholderTextColor: '#ccc',
			style: { color: '#333333', paddingVertical: 0 }
		});
		// @ts-ignore
		Text.defaultProps = Object.assign({}, Text.defaultProps, {
			allowFontScaling: false,
			style: { color: '#333', fontSize: 14, fontWeight: '400' }
		});
		// @ts-ignore
		TouchableOpacity.defaultProps = Object.assign({}, TouchableOpacity.defaultProps, { activeOpacity: 0.72 });
	}, []);
	// console.log(StatusBar.currentHeight);
	return (
		<View style={styles.page}>
			<Provider store={store}>
				<Router />
			</Provider>
			{/* <AppCodePush /> */}
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: '#ffffff'
	}
});

export default App;
