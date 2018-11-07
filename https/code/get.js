'use strict'
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'

const http = require('https')
const options = {
    host: 'www.baidu.com',
    method: 'get'
}

const req = http.request(options,(res) => {
    // clientRequest对象
    // 如果要取的返回的数据，需要监控 data 事件，从回掉函数中取得结果。
    res.on('data',chunk => {
        console.log(chunk.toString());
    })
})
req.on('error',err => {
    if (err) {
        console.error(err);
    }
})

req.end()
