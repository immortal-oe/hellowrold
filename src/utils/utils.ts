import React, { useEffect, useCallback, useRef } from 'react';
import { Dimensions, Platform, PixelRatio, StatusBar, TimerMixin, NativeModules } from 'react-native';

const { height, width } = Dimensions.get('window');

function px2dp(px: Number) {
	let w = <number>px * width / 750;
	return Number(w.toFixed(2)) - 0;
}

// // iPhoneX  & XS
// const X_WIDTH = 375;
// const X_HEIGHT = 812;

// // iPhoneXR & XsMax
// const XR_WIDTH = 414;
// const XR_HEIGHT = 896;

// function isIphoneX() {
// 	return (
// 		Platform.OS === 'ios' &&
// 		((height === X_HEIGHT && width === X_WIDTH) || (height === X_WIDTH && width === X_HEIGHT))
// 	);
// }

// //判断是否为iphoneXR或XsMAX
// function isIphoneXR() {
// 	return (
// 		Platform.OS === 'ios' &&
// 		((height === XR_HEIGHT && width === XR_WIDTH) || (height === XR_WIDTH && width === XR_HEIGHT))
// 	);
// }

// const iosHeight: number = isIphoneX() || isIphoneXR() ? 44 : 20;
const iosHeight: number = NativeModules.StatusBarManager.HEIGHT;

const andHeight: any = StatusBar.currentHeight;
const statusBarHeight: number = Platform.OS === 'ios' ? iosHeight : andHeight;

const onePx = 1 / PixelRatio.get();

export { statusBarHeight, onePx, height, width, px2dp };
