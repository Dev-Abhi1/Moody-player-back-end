var ImageKit = require("imagekit");
const { nanoid } = require("nanoid");

var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_ENDPOINT_URL
});

function uploadFile(file){
   return new Promise((resolve,reject)=>{
     imagekit.upload({
        file:file.buffer,
        fileName:nanoid(),
        folder:"moody-songs"
     },(error,result)=>{
        if(error){
            reject(error)
        }
        else {
            resolve(result)
        }
     })
   })
}


module.exports = uploadFile