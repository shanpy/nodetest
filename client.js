var http = require('http');

    //Options to used by request
    var options = {
      host: 'localhost',
      port: '8081',
      path: '/index.htm'
    };

    //Deal with response from web server
    var callback = function(response){
      var body = '';
      //While data is being received by client, update body variable
      response.on('data', function(data){
        body += data;
      });
      //Finish data receiving process
      response.on('end', function(){
        console.log(body);
      });
    }

    //Make request to web server
    var req = http.request(options, callback);
    req.end();//Close request after finishing