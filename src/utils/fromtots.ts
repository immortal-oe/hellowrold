'use strict';

function isObject(arr: any) {
	return Object.prototype.toString.call(arr) === '[object Object]';
}

function isArray(arr: any) {
	return Object.prototype.toString.call(arr) === '[object Array]';
}

function isString(arr: any) {
	return Object.prototype.toString.call(arr) === '[object String]';
}

function isNumber(arr: any) {
	return Object.prototype.toString.call(arr) === '[object Number]';
}

function isBoolean(arr: any) {
	return Object.prototype.toString.call(arr) === '[object Boolean]';
}

let fucobj = (oj: any) => {
	if (oj.length == 0) {
	} else {
		Object.keys(oj).forEach((key) => {
			if (isObject(oj[key])) {
				oj[key] = fucobj(oj[key]);
			} else if (isArray(oj[key])) {
				if (oj[key].length == 0) {
					oj[key] = 'Array';
				} else {
					if (isObject(oj[key][0])) {
						let mi = { ...oj[key][0] };
						oj[key] = {};
						oj[key] = 'Array<' + fromts(mi) + '>';
					} else if (isString(oj[key][0])) {
						oj[key] = 'Array<String>';
					} else if (isNumber(oj[key][0])) {
						oj[key] = 'Array<Number>';
					} else if (isBoolean(oj[key][0])) {
						oj[key] = 'Array<Boolean>';
					}
				}
			} else if (isString(oj[key])) {
				oj[key] = 'String';
			} else if (isNumber(oj[key])) {
				oj[key] = 'Number';
			} else if (isBoolean(oj[key])) {
				oj[key] = 'Boolean';
			}
		});
	}

	return oj;
};

const fromts = (objc: any) => {
	if (isObject(objc)) {
		if (objc.length == 0) {
			return;
		} else {
			objc = fucobj(objc);
		}
	}

	objc = JSON.stringify(objc);
	objc = objc.replace(/\"/g, '');
	return objc;
};

const fromtots = (data: any) => {
	let t = 'export interface State ' + fromts(data);
	console.log(t);
};

export { fromtots };
