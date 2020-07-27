import React, { useEffect, useCallback, useRef } from 'react';

export const filterData = (arr, key = 'id') => {
	const result = [];
	const obj = {};
	for (let i = 0; i < arr.length; i++) {
		if (!obj[arr[i][key]]) {
			result.push(arr[i]);
			obj[arr[i][key]] = true;
		}
	}
	return result;
};

// 时间转换
export const conversion = (time: any = 0, type: 'HMS' | 'YMD') => {
	if (time == 0) {
		return '';
	}
	const date = new Date(parseInt(time) * 1000);
	let tt = date.toTimeString().slice(0, 8);
	if (type == 'YMD') {
		tt = [ date.getFullYear(), date.getMonth() + 1, date.getDate() ].join('-') + ' ' + tt;
	}
	return tt;
};

// 同一时间内 执行最后一次 防抖 执行最后一次：
export const debounce = function(func: Function, time: number) {
	let timer: any = null;
	return (...args: any) => {
		clearTimeout(timer);
		timer = setTimeout(function() {
			//以集合形式传递参数，用apply
			// @ts-ignore
			func.apply(this, args);
		}, time);
	};
};