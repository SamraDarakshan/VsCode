
var http = require('http');

var server = http.createServer(function(req,res){

console.log('request was made: ' + req.url);
res.writeHead(200,{'Content-Type':'text plain'})
res.write('hey samra');
//add another line
res.write('hey samra');
res.write('hello worrld');
res.end();
  //checking for pull
});

//server.listen(3000,'127.0.0.1');
server.listen(3000);
console.log('Now listening to port 3000');
//samra
