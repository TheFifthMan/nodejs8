'use strict'
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'
const https = require('https')

const getRequest = () => {
    return new Promise((resolve,reject) =>{
        const option = {
            host: "www.baidu.",
            method: 'get'
        }
        const req = https.request(option,res => {
            res.on('data',chunk => {
                resolve(chunk.toString());
            })
        })
        req.on('error',(err) => {
            return reject(err);
        })
        req.end();
    })
}

async function test(){
    try{
        let chunk = await getRequest();
        console.log(chunk);
    }catch(err){
        console.error(err);
    }
}
test()