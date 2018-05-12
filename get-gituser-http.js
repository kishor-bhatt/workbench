
const https = require('https');
function initialize () {
    const options = {
        hostname: 'api.github.com',
        port: 443,
        path: '/users/kishor-bhatt',
        method: 'GET',
        headers: {
          'User-Agent': 'request'
        }
      }
      
      return new Promise(function(resolve,reject){
        https.get(options, function(resp) { 
            let data = '';
           
            // A chunk of data has been recieved.
            resp.on('data', function(chunk) {
              // console.log('chunk:'+chunk);
              data += chunk;
            });
           
            // The whole response has been received. Print out the result.
            resp.on('end', function() {
              // console.log('\n data:'+data);
              resolve(data);
            });
          
          }).on("error", function(err) {
              // console.log('error:'+err);
              reject(err);
          });
      });
}

function main() {
    initialize().then(function(result){
        console.log(`promise success:${result}`);
    }, function(error){
        console.log(`error:${error}`);
    });
}

main();