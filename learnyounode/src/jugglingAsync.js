const http = require('http');

function _http(url) {
  return new Promise((resolve, reject) => {
    return http.get(url, function (response) {
      let result = '';
      response.setEncoding('utf-8');
      response.on('data', function(data) {
        result += data;
      });
      response.on('end', function(){
        resolve(result);
      });
    })
  })
}

(async function() {
  for (const url of process.argv.slice(2)) {
    console.log(await _http(url));
  }
}());
