const request = require('superagent')
//禁止ssl验证   
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'
request
    .post('https://postman-echo.com/post')
    .set('Content-Type','application/x-www-form-urlencoded')
    .send('strange=boom')
    .then(res => {
        console.log(res.body)
    })