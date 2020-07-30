import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import JPush from './JPush';

interface componentNameProps {}

const AppPush = (props: componentNameProps) => {
	React.useEffect(() => {
		JPush.init();
		//连接状态
		const connectListener = (result) => {
			console.log('connectListener:连接状态' + JSON.stringify(result));
		};
		JPush.addConnectEventListener(connectListener);
		//通知回调
		const notificationListener = (result) => {
			console.log('notificationListener:通知回调' + JSON.stringify(result));
		};
		JPush.addNotificationListener(notificationListener);
		//本地通知回调
		const localNotificationListener = (result) => {
			console.log('localNotificationListener:本地通知回调' + JSON.stringify(result));
		};
		JPush.addLocalNotificationListener(localNotificationListener);
		//自定义消息回调
		const customMessageListener = (result) => {
			console.log('customMessageListener:自定义消息回调' + JSON.stringify(result));
		};
		JPush.addCustomMessageListener(customMessageListener);
		//tag alias事件回调
		const tagAliasListener = (result) => {
			console.log('tagAliasListener:tag alias事件回调' + JSON.stringify(result));
		};
		JPush.addTagAliasListener(tagAliasListener);
		//手机号码事件回调
		const mobileNumberListener = (result) => {
			console.log('mobileNumberListener:手机号码事件回调' + JSON.stringify(result));
		};
		JPush.addMobileNumberListener(mobileNumberListener);
	}, []);

	return <View style={styles.container} />;
};

export default AppPush;

const styles = StyleSheet.create({
	container: {}
});
