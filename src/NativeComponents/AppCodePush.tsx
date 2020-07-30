// @ts-nocheck
import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, DeviceEventEmitter, TouchableOpacity } from 'react-native';

import codePush from 'react-native-code-push';

const codePushOptions = {
	//设置检查更新的频率
	//ON_APP_RESUME APP恢复到前台的时候
	//ON_APP_START APP开启的时候
	//MANUAL 手动检查
	checkFrequency: codePush.CheckFrequency.MANUAL
};

//生产
const deploymentKey = 'moXcy85MkNjkCrx9gJnov7WrbOQq4ksvOXqog';
//开发
// │ Production │ giy9RbKdVi6ZrDMzkNmtuzKwwIWR4ksvOXqog │
// ├────────────┼────────────────────────────────────────┤
// │ Staging    │ moXcy85MkNjkCrx9gJnov7WrbOQq4ksvOXqog  │

const updateDialog = {
	//是否显示更新描述
	appendReleaseDescription: true,
	//更新描述的前缀。 默认为"Description"
	descriptionPrefix: '更新内容：',
	//强制更新按钮文字，默认为continue
	mandatoryContinueButtonLabel: '立即更新',
	//强制更新时的信息. 默认为"An update is available that must be installed."
	mandatoryUpdateMessage: '必须更新后才能使用',
	//非强制更新时，按钮文字,默认为"ignore"
	optionalIgnoreButtonLabel: '稍后',
	//非强制更新时，确认按钮文字. 默认为"Install"
	optionalInstallButtonLabel: '后台更新',
	//非强制更新时，检查到更新的消息文本
	optionalUpdateMessage: '有新版本了，是否更新？',
	//Alert窗口的标题
	title: '更新提示'
};

class AppCodePush extends Component {
	state = {
		contont: ''
	};

	UNSAFE_componentWillMount() {
		// codePush.disallowRestart();//禁止重启
		// this.syncImmediate(); //开始检查更新
		// DeviceEventEmitter.addListener('updata', () => {
		// });
	}

	componentDidMount() {
		// this.updata();
		codePush.allowRestart(); //在加载完了，允许重启
	}

	updata = async () => {
		codePush
			.checkForUpdate(deploymentKey)
			.then((update) => {
				console.log('update-->>>', JSON.stringify(update));
				if (!update) {
					Alert.alert('提示', '已是最新版本--', [
						{
							text: 'Ok',
							onPress: () => {
								console.log('点了OK', update);
							}
						}
					]);
				} else {
					this.setState({
						contont: JSON.stringify(update)
					});
					codePush.sync(
						{
							deploymentKey,
							updateDialog,
							//安装模式
							//ON_NEXT_RESUME 下次恢复到前台时
							//ON_NEXT_RESTART 下一次重启时
							//IMMEDIATE 马上更新
							//表示要安装更新并立即重新启动应用程序。 IMMEDIATE
							installMode: codePush.InstallMode.IMMEDIATE
						},
						(status) => {
							switch (status) {
								// DOWNLOADING_PACKAGE 正在从CodePush服务器下载可用的更新。
								case codePush.SyncStatus.DOWNLOADING_PACKAGE:
									// 显示模态
									console.log('正在从CodePush服务器下载可用的更新');
									break;
								// 已下载可用更新，即将安装。
								case codePush.SyncStatus.INSTALLING_UPDATE:
									console.log('已下载可用更新，即将安装');
									break;
							}
						},
						(progress) => {
							// progress.totalBytes
							console.log(progress.receivedBytes + ' of received.');
							this.pross &&
								this.pross.setNativeProps({
									width: progress.receivedBytes / progress.totalBytes * 200
								});
						}
					);
				}
			})
			.catch((e) => {
				alert('catch', e);
			});
	};

	render() {
		return (
			<TouchableOpacity
				onPress={() => {
					this.updata();
				}}
				style={{}}
			>
				<View
					style={{
						width: 10,
						height: 3,
						backgroundColor: '#000'
					}}
					ref={(e) => (this.pross = e)}
				/>
			</TouchableOpacity>
		);
	}
}

// 这一行必须要写
AppCodePush = codePush(codePushOptions)(AppCodePush);

export default AppCodePush;
