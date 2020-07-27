import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (key: string, value: any, nokey?: boolean) => {
	try {
		key = nokey ? '' : storekey.getkey() + '-' + key;
		const jsonValue = JSON.stringify({ v: value });
		AsyncStorage.setItem(key, jsonValue);
	} catch (e) {
		// saving error
		console.log('saving error', e);
	}
};

const getData = async (key: string, nokey?: boolean) => {
	try {
		key = nokey ? '' : storekey.getkey() + '-' + key;
		console.log(key);
		let data: any = await AsyncStorage.getItem(key);
		const { v } = JSON.parse(data);
		return v;
	} catch (e) {
		// console.log('error reading value', e);
		return null;
	}
};

const createKey = function() {
	let key = '';
	let getkey = () => key;
	let setkey = (name: string) => {
		key = name;
	};

	return {
		getkey,
		setkey
	};
};

const storekey = createKey();

export { storeData, getData, storekey };
