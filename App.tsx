/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import './src/utils/global';

import { Provider } from 'react-redux';
import store from './src/redux';

import Router from './src/Router';
// import AppCodePush from './src/codepush/AppCodePush';


const App = () => {
	// console.log(StatusBar.currentHeight);
	return (
		<View style={styles.page}>
			<StatusBar
				//
				translucent={true}
				backgroundColor={'rgba(255,255,255,0)'}
				barStyle="light-content"
			/>
			<Provider store={store}>
				<Router />
			</Provider>
			{/* <AppCodePush /> */}
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		flex: 1
	}
});

export default App;