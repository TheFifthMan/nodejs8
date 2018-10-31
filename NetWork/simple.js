// 取得html
const http = require('http');
const options = {
    host:'www.baidu.com'
}
const req = http.request(options,(res) => {
    res.on('data',chunk => {
        console.log(chunk.toString())
    })
})
req.on('error',err => {
    console.error(err.message)
})
req.end()