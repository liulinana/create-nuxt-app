// 配置API接口地址
let root = 'http://sunhaojie.com.test';
// 引用axios
let axios = require('axios');
// 自定义判断元素类型JS
function toType (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
    for (let key in o) {
        if (o[key] === null) {
            delete o[key]
        }
        if (toType(o[key]) === 'string') {
            o[key] = o[key].trim()
        } else if (toType(o[key]) === 'object') {
            o[key] = filterNull(o[key])
        } else if (toType(o[key]) === 'array') {
            o[key] = filterNull(o[key])
        }
    }
    return o
}
/*
 * 接口处理函数
 */

export const headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
};

const ajaxPromise =function (method, url, data){
    return new Promise ( (resolve,reject) => {
        axios({
            url,
            method: method,
            headers:{...headers},
            data: data?JSON.stringify(data):null,
            // baseURL: root,
            withCredentials: false
        }).then(
            res => {
                resolve(res)
            }
        ).catch(
            err => {
                this.$Message.error('This is a info tip');
                // message.error(err.message, 3);
                reject(err);
            }
        )
    })
};

const apiAxios = (method, url, params, success, failure) => {
    if (params) {
        params = filterNull(params)
    }
    axios({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
        baseURL: root,
        withCredentials: false
    })
        .then(
            res => {
                if (res.data.status === 200) {
                    if (success) {
                        success(res.data)
                    }
                } else {
                    if (failure) {
                        failure(res.data)
                    } else {
                        window.alert('error: ' + JSON.stringify(res.data))
                    }
                }
            }
        )
        .catch(function (err) {
            let res = err.response;
            if (res) {
                window.alert('api error, HTTP CODE: ' + res.status)
            }
        })
};

// 返回在vue模板中的调用接口
export default {
    get: function (url, data) {
        return ajaxPromise("GET",url,data)
    },
    post: function (url, params, success, failure) {
        return apiAxios('POST', url, params, success, failure)
    },
    put: function (url, params, success, failure) {
        return apiAxios('PUT', url, params, success, failure)
    },
    delete: function (url, params, success, failure) {
        return apiAxios('DELETE', url, params, success, failure)
    }
}