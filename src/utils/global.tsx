// @ts-nocheck
Object.assign(process.env, { name: '222' });
// console.log(process);

global.config = {
	env: 'release',
	version: '1.0.0',
	version_num: 1,
	url: 'http://saoyear.top:7000'
};

if (process.env.NODE_ENV === 'development') {
	global.config.env = 'dev';
	global.config.url = 'http://saoyear.top:7001';
}
