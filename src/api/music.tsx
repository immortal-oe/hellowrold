import axios from '../utils/axios';

/**
 * 
 * @param params  offset
 */
export const videotimeline = (params = {}) => {
	return axios.get('search?keywords=海阔天空', {});
};
