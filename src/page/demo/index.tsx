// @ts-nocheck
import React, { useState, useEffect, createRef, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, PanResponder, Animated } from 'react-native';
import { connect } from 'react-redux';
import { layout } from '../../utils/layout';
import ChatHeadsExample from './ChatHeadsExample';
import { fromtots } from '../../utils/fromtots';

interface componentNameProps {}
export interface GestureState {
	stateID: Number;
	moveX: Number;
	moveY: Number;
	x0: Number;
	y0: Number;
	dx: Number;
	dy: Number;
	vx: Number;
	vy: Number;
	numberActiveTouches: Number;
	_accountsForMovesUpTo: Number;
}

const App = () => {
	let roadeTm = useRef(null);
	let touch = useRef({
		touchX: 0,
		touchY: 0
	});

	// 移动手势处理
	const _onPanResponderMove = (evt, g) => {
		// fromtots(g)
		// console.log('        ');
		// console.log(evt);
		// console.log('=================');
		// console.log(g);

		//2. 根据触发点计算真实的左侧,顶侧位移变化
		let realMarginLeft = g.moveX - touch.current.touchX;
		let realMarginTop = g.moveY - touch.current.touchY;

		console.log(realMarginTop);
		console.log(realMarginLeft);

		let de = Math.atan2(realMarginTop, realMarginLeft) + 'deg';
		console.log(de);

		// roadeTm.current &&
		// 	roadeTm.current.setNativeProps({
		// 		transform: [{rotateZ : de}]
		// 		// [ { translateX: realMarginLeft }, { translateY: realMarginTop } ]
		// 	});
	};

	const panResponder = useRef(
		PanResponder.create({
			/***************** 要求成为响应者 *****************/
			// 单机手势是否可以成为响应者
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			// 移动手势是否可以成为响应者
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			// 拦截子组件的单击手势传递,是否拦截
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			// 拦截子组件的移动手势传递,是否拦截
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

			/***************** 响应者事件回调处理 *****************/
			// 单击手势监听回调
			onPanResponderGrant: (e, gestureState) => {
				console.log('onPanResponderGrant==>' + '单击手势申请成功,开始处理手势');
				touch.current.touchX = e.nativeEvent.pageX;
				touch.current.touchY = e.nativeEvent.pageY;
			},
			// 移动手势监听回调
			onPanResponderMove: (e, gestureState) => {
				console.log('onPanResponderMove==>' + '移动手势申请成功,开始处理手势');
				_onPanResponderMove(e, gestureState);
			},
			onPanResponderEnd: (evt, gestureState) => {
				console.log('onPanResponderEnd==>' + '手势操作完成了,用户离开');
				let realMarginLeft = gestureState.x0;
				let realMarginTop = gestureState.y0;
				console.log(realMarginTop);
				console.log(realMarginLeft);
				console.log(evt);
				roadeTm.current &&
					roadeTm.current.setNativeProps({
						transform: [ { translateX: evt.pageX }, { translateY: evt.pageY } ]
					});
			},
			onShouldBlockNativeResponder: (evt, gestureState) => {
				// 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
				// 默认返回true。目前暂时只支持android。
				return true;
			}
		})
	).current;

	return (
		<View style={styles.container}>
			<Animated.View
				style={[
					styles.container,
					{
						backgroundColor: '#eef'
						// transform: [ { translateX: pan.x }, { translateY: pan.y } ]
					}
				]}
				ref={roadeTm}
				{...panResponder.panHandlers}
			>
				<View style={styles.box} />
			</Animated.View>
		</View>
	);
};

const ComponentName = (props: componentNameProps) => {
	// let roadePan = useRef(null);
	// let roadeTm = useRef(null);

	let ary = [];
	for (let index = 0; index < 60; index++) {
		ary.push({ y: 360 / 60 * index + 'deg' });
	}

	// console.log(ary);

	useEffect(() => {}, []);

	return (
		<View
			style={{
				flex: 1
				// alignItems: 'center',
				// flexDirection: 'row'
			}}
		>
			<App />
			{/* <View
				style={{
					width: 300,
					height: 300,
					backgroundColor: '#def',
					position: 'relative',
					zIndex: 9,
					borderRadius: 300
					// transform: [ { rotateZ: y } ]
				}}
				// ref={roadeTm}
				// {roadePan.current.panHandlers}
			>
				<View
					style={{
						position: 'absolute',
						top: 0,
						left: 140,
						zIndex: 2,
						width: 20,
						height: 20,
						borderRadius: 20,
						backgroundColor: '#efd'
					}}
				/>
			</View>
			<View
				style={{
					width: 300,
					height: 300,
					backgroundColor: '#eee',
					position: 'relative'
				}}
			>
				{ary.map((item, index) => {
					const { y = '0deg' } = item;
					if (index > 40 && index < 50) {
						return null;
					}
					return (
						<View
							style={[
								styles.魔力圈,
								{
									transform: [ { rotateZ: y } ]
								}
							]}
							key={index}
						>
							<View
								style={{
									width: 15,
									height: 3,
									backgroundColor: 'red',
									borderRadius: 3
								}}
							>
								<View
									style={{
										width: 3,
										height: 3,
										backgroundColor: '#ed0',
										marginLeft: 25,
										borderRadius: 3
									}}
								/>
							</View>
						</View>
					);
				})}
			</View>
	 */}
		</View>
	);
};

const Demo = ({ dispatch }: any) => {
	return (
		<View style={layout.page}>
			<ComponentName />
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		flex: 1
	},
	container: {
		width: 200,
		height: 200
	},
	box: {
		width: 20,
		height: 20,
		backgroundColor: '#000'
	},

	input: {
		flex: 1,
		paddingHorizontal: 10,
		backgroundColor: '#ccc',
		padding: 0,
		fontSize: 14
	},
	魔力圈: {
		position: 'absolute',
		bottom: 146,
		left: 0,
		zIndex: 1,
		width: 300,
		height: 3,
		borderRadius: 5,
		margin: 2,
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});

export default connect((state) => state)(Demo);
