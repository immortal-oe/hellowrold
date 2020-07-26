// @ts-nocheck
import React, { PureComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { PanGestureHandler, ScrollView, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
const USE_NATIVE_DRIVER = true;

class DraggableBox extends PureComponent {
	constructor(props) {
		super(props);

		this._translateX = new Animated.Value(0);
		this._translateY = new Animated.Value(0);
		this._lastOffset = { x: 0, y: 0 };

		// 这个针对的时所有Handler中的 onGestureEvent 属性
		// 当handler处于 'ACTIVE' 状态时， 对每一个后续的触摸事件的回调函数
		// event 参数包含 {state, numberOfPointers} 公共属性，还有一些特定Handlers包含的属性也不一样
		// 比如 PinchGestureHandler 还包含 'scale' 属性，表示手势开始后手指之间的距离如何变化
		// 除了使用回调函数，还可以使用 Animated.event 对象 也支持 'useNativeDriver' flag
		// 这里使用的时 Animated.event 对象
		this._onGestureEvent = Animated.event(
			[
				{
					nativeEvent: {
						// 注意这里是 translationX 不是 translateX
						translationX: this._translateX,
						translationY: this._translateY
					}
				}
			],
			// 注意这个对象不在上面的数组中
			{
				useNativeDriver: USE_NATIVE_DRIVER
			}
		);
	}

	// 这个针对的时所有Handler中的 onHandlerStateChange 属性
	// 当给定的handler的state发生变化时的回调
	// event和 onGestureEvent中的event 一样，但是这里的event还包含一个 'oldState' 属性，表示handler状态改变之前的state
	// 除了使用回调，也可以使用 Animated.event 对象，也支持 'useNativeDriver' flag
	// 这里使用的回调函数
	_onHandleStateChange = (event) => {
		// event 包含一个 'oldState' 属性，表示handler状态改变之前的state
		if (event.nativeEvent.oldState === State.ACTIVE) {
			// PanGestureHandler event的nativeEvent包含的 translationX, translationY 属性
			this._lastOffset.x += event.nativeEvent.translationX;
			this._lastOffset.y += event.nativeEvent.translationY;
			// this._translateX.setOffset(this._lastOffset.x);
			// this._translateX.setValue(0);
			// this._translateY.setOffset(this._lastOffset.y);
			// this._translateY.setValue(0);
		}
	};

	render() {
    console.log(this._translateX );
    
		return (
			<PanGestureHandler
				{...this.props}
				onGestureEvent={this._onGestureEvent}
				onHandlerStateChange={this._onHandleStateChange}
			>
				<Animated.View
					style={[
						styles.box,
						{
							transform: [ { translateX: this._translateX }, { translateY: this._translateY } ]
						},
						this.props.boxStyle
					]}
				/>
			</PanGestureHandler>
		);
	}
}

export default class DraggableExample extends PureComponent {
	render() {
		return (
			<ScrollView style={styles.scrollView}>
				<LoremIpsum words={40} />
				<DraggableBox />
				<LoremIpsum />
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		paddingHorizontal: 10,
		paddingVertical: 20
	},
	box: {
		width: 150,
		height: 150,
		alignSelf: 'center',
		backgroundColor: '#72a',
		margin: 10,
		zIndex: 200
  },
  lipsum: {
		padding: 10
	}
});


export class LoremIpsum extends React.Component {
	static defaultProps = {
		words: 1000,
		style: styles.lipsum
	};
	loremIpsum() {
		return LOREM_IPSUM.split(' ').slice(0, this.props.words).join(' ');
	}
	render() {
		return <Text style={this.props.style}>{this.loremIpsum()}</Text>;
	}
}

const LOREM_IPSUM = `
Curabitur accumsan sit amet massa quis cursus. Fusce sollicitudin nunc nisl, quis efficitur quam tristique eget. Ut non erat molestie, ullamcorper turpis nec, euismod neque. Praesent aliquam risus ultricies, cursus mi consectetur, bibendum lorem. Nunc eleifend consectetur metus quis pulvinar. In vitae lacus eu nibh tincidunt sagittis ut id lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque sagittis mauris rhoncus, maximus justo in, consequat dolor. Pellentesque ornare laoreet est vulputate vestibulum. Aliquam sit amet metus lorem.
`;
