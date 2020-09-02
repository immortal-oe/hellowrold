import axios from '../utils/axios';

/**
 *
 * @param params  offset
 */
export const video_timeline_all = (params = {}) => {
  return axios.post('video/timeline/all', params);
};

export const video_group_list = (params = {}) => {
  return axios.post('video/group', params);
};

export const m_login = (params = {}) => {
  return axios.post('login/cellphone', params);
};

// setData('15774063795', result);

// m_login({
//   phone: '15774063795',
//   password: 'm1229308017',
// })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log('00', err);
//   });


    // let ary = [];
    // for (let index = 0; index < 23; index++) {
    //   ary.push({
    //     width: 200,
    //     height: 50 + Math.random() * 90,
    //     title:
    //       (Math.random() * 10) % 2
    //         ? '世界你好'
    //         : '世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好',
    //   });
    // }

    // console.log(ary);
    // setData('ary', ary);
