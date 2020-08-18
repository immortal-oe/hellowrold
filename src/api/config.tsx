import axios from '../utils/axios';

export const getsign = (params = {}) => {
	return axios.get('web/imsign', params);
};
