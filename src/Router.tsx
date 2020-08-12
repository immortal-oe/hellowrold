import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { navigationRef } from './RootNavigation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import ScreenHeader from './components/ScreenHeader';
import NoBack from './components/ScreenHeader/NoBack';


import Login from './page/login/Login';

import Msg from './page/tab/Msg';
import Personal from './page/tab/Personal';
import Mail from './page/tab/Mail';
import ChatRoom from './page/desc/ChatRoom';
import GroupChat from './page/mail/GroupChat';
import AddGroupChat from './page/mail/AddGroupChat';
import AddFriends from './page/mail/AddFriends';
import FriendApplication from './page/mail/FriendApplication';
import Setting from './page/personal/setting';
import Setinfo from './page/personal/setinfo';
import Demo from './page/demo';
import Firing from './page/firing';
import { uniqueId } from 'lodash';

// dark: true,
// colors: {
// 	primary: 'rgb(10, 132, 255)',
// 	background: 'rgb(1, 1, 1)',
// 	card: 'rgb(18, 18, 18)',
// 	text: 'rgb(229, 229, 231)',
// 	border: 'rgb(39, 39, 41)'
// }

// dark: false,
// colors: {
// 	primary: 'rgb(0, 122, 255)',
// 	background: 'rgb(242, 242, 242)',
// 	card: 'rgb(255, 255, 255)',
// 	text: 'rgb(28, 28, 30)',
// 	border: 'rgb(224, 224, 224)'
// }

// @ts-ignore
// global.ErrorUtils.setGlobalHandler((error) => {
// 	//console.log('ErrorUtils发现了语法错误，避免了崩溃，具体报错信息：');
// 	//console.log(error.name, error.message);
// 	// alert('啊哦～，js线程报错' + error.message);
// }, true);

function MyTab() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName = '2';
					return <IconWithBadge name={iconName} size={size} color={color} />;
				}
			})}
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray'
			}}
		>
			<Tab.Screen
				name="Msg"
				component={Msg}
				options={{
					title: '消息'
				}}
			/>
			<Tab.Screen
				name="Mail"
				component={Mail}
				options={{
					title: '通讯录'
				}}
			/>
			<Tab.Screen
				name="Personal"
				component={Personal}
				options={{
					title: '我'
				}}
			/>
		</Tab.Navigator>
	);
}

export default function Router() {
	return (
		<NavigationContainer theme={DefaultTheme} ref={navigationRef}>
			<Stack.Navigator
				headerMode={'screen'}
				screenOptions={{
					...TransitionPresets.SlideFromRightIOS,
					header: (props) => {
						return <ScreenHeader props={props} />;
					}
				}}
			>
				<Stack.Screen
					name={'Firing'}
					options={{
						header: () => null
					}}
					component={Firing}
				/>
				<Stack.Screen
					name={'Login'}
					options={{
						title: '登录',
						header: (props) => {
							return <NoBack props={props} />;
						}
					}}
					component={Login}
				/>
				<Stack.Screen name={'Demo'} options={{ title: 'Demo', header: undefined }} component={Demo} />
				<Stack.Screen
					name={'MyTab'}
					options={{
						header: undefined
					}}
					component={MyTab}
				/>
				<Stack.Screen name={'ChatRoom'} options={{ title: '聊天详情' }} component={ChatRoom} />
				<Stack.Screen name={'GroupChat'} options={{ title: '我的群聊' }} component={GroupChat} />
				<Stack.Screen name={'AddGroupChat'} options={{ title: '添加群聊' }} component={AddGroupChat} />
				<Stack.Screen name={'AddFriends'} options={{ title: '添加好友' }} component={AddFriends} />
				<Stack.Screen name={'FriendApplication'} options={{ title: '好友申请' }} component={FriendApplication} />
				<Stack.Screen name={'Setting'} options={{ title: '个人设置' }} component={Setting} />
				<Stack.Screen
					name={'Setinfo'}
					options={{
						title: '修改昵称',
						header: () => null
					}}
					component={Setinfo}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const IconWithBadge = ({ name = '', color = '', size = 0 }) => {
	let badgeCount = 0;
	return (
		<View style={{ width: 24, height: 24, margin: 5 }}>
			{badgeCount > 0 && (
				<View
					style={{

						
						position: 'absolute',
						right: -6,
						top: -3,
						backgroundColor: 'red',
						borderRadius: 6,
						width: 12,
						height: 12,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{badgeCount}</Text>
				</View>
			)}
		</View>
	);
};
