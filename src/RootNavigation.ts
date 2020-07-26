import React from 'react';
import { StackActions, CommonActions } from '@react-navigation/native';

export const navigationRef: any = React.createRef();

export function navigate(name: string, params?: Object) {
	navigationRef.current && navigationRef.current.navigate(name, params);
}

export function back() {
	navigationRef.current && navigationRef.current.goBack();
}

export function reset(name: string, params?: Object) {
	navigationRef.current &&
		navigationRef.current.dispatch(
			CommonActions.reset({
				index: 1,
				routes: [ { name: name, params: params } ]
			})
		);
}

export function backUtils(backStackSize: number, handel?: Function) {
	const popAction = StackActions.pop(backStackSize);
	navigationRef.current && navigationRef.current.dispatch(popAction);
}

export function replace(name: string, params?: Object) {
	const popAction = StackActions.replace(name, params);
	navigationRef.current && navigationRef.current.dispatch(popAction);
}
