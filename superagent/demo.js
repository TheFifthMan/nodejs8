const request = require('superagent')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

request
    .get('https://www.baidu.com')
    .then( res => {
        console.log(res.body)
    })