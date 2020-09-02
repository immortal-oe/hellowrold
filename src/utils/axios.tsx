import maxios from 'axios';

export type Method = 'POST' | 'GET';

interface Data {
  url: string;
  params: Object;
  method: Method;
}

const instance = maxios.create({
  //   baseURL: 'http://localhost:3000/',
  
  baseURL: 'http://saoyears.top:9001/',
  timeout: 5000,
  headers: {
    'content-type': 'application/json; charset=UTF-8',
  },
});

const axios = {
  post: function (url: string, params: Object) {
    console.log(url);

    return this.request({url, params, method: 'POST'});
  },
  get: function (url: string, params: Object) {
    return this.request({url, params, method: 'GET'});
  },
  request: function ({url = '', params = {}, method}: Data) {
    return new Promise((resolve, reject) => {
      instance({
        method,
        url,
        params: {
          timestamp: new Date().getTime(),
          ...params,
        },
      })
        .then((res) => {
          const {data, status} = res;
          if (status === 200) {
            resolve(data);
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
};

export default axios;
