import axios from 'axios'

const INIT = {
    method: 'GET',
    headers: axios.defaults.headers,
    params: {},
}

axios.defaults.baseURL = 'https://api.github.com/';

export function fetch (url, init) {
    let { method, params,  } = init || INIT;
    if (method === 'GET') {
        return promiseGet(url, params);
    } else if (method === 'POST') {
        return promisePost(url, params);
    }
}

function promiseGet (url, init) {
    let config ={ params: init };
    return new Promise((resolve, reject) => {
        axios.get(url, config)
        .then((response) => {
            resolve(response.data, response.status, response.statusText);
        })
        .catch((err) => {
            reject(err);
        });
    })
}

function promisePost (url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
        .then((response) => {
            resolve(response.data, response.status, response.statusText);
        })
        .catch((err) => {
            reject(err);
        })
    })
}