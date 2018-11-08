const https = require('https');
const querystring = require('querystring')
const fs = require('fs')
const postData = querystring.stringify({
    "ticket":"",
    "uniqueID":"",
    "appId":"",
    "submitApp":false,
    "normalAccountProfileId":"",
    "SAMLResponse":"",
    "groupId":"",
    "eeNum":"",
    "backUrl":"",
    "email":"test123%40123.com123",
    "password":"Qwer.1234"    
})
const postRequest = () => {
    return new Promise((resolve,reject) => {
        const options = {
            host: 'www.cm.ehealthinsurance.com',
            method:'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        const req = https.request(options,res => {
            console.log(res.statusCode);
            resolve(res);
        })
        req.on('error',err => {
            console.error(err.message);
        })
        req.write(postData);
        req.end();
    })
} 
const saveFile = (content) => {
    return new Promise((resolve,reject) => {
        fs.appendFile('test.html',content,err => {
            if (err) return reject(err);
        })
    })
}
async function test() {
    let res = await postRequest();
    console.log(res.statusCode)
    res.on('data',chunk => {
        saveFile(chunk.toString());
    } )
}
test()