const http = require('http')
const options = {
    hostname: 'postman-echo.com',
    path: "/post",
    port: 443,
    headers: {
        "Content-Type":"application/x-www-form-urlencoded"
    }
}
let req = http.request(options, res => {
    res.on("data", chunk => {
        console.log(chunk.toString());
    })
    res.on('end',() => {
        console.log('end');
    })

});
req.on('error', error => {
    throw error
})
payload = "strange=boom"
req.write(payload)
req.end()