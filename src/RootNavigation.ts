import React from 'react';
import { StackActions, CommonActions } from '@react-navigation/native';

export const navigationRef: any = React.createRef();

export const navigate = (name: string, params?: Object) => {
	navigationRef.current && navigationRef.current.navigate(name, params);
};

export const back = () => {
	navigationRef.current && navigationRef.current.goBack();
};

export const reset = (name: string, params?: Object) => {
	navigationRef.current &&
		navigationRef.current.dispatch(
			CommonActions.reset({
				index: 1,
				routes: [ { name: name, params: params } ]
			})
		);
};

export const backUtils = (backStackSize: number, handel?: Function) => {
	const popAction = StackActions.pop(backStackSize);
	navigationRef.current && navigationRef.current.dispatch(popAction);
};

export const replace = (name: string, params?: Object) => {
	const popAction = StackActions.replace(name, params);
	navigationRef.current && navigationRef.current.dispatch(popAction);
};
