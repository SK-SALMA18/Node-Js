var http = require('http');
const PORT = 5000
var server= http.createServer(function(req,res){
    if((req.url)=='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><h2>Hi Welcome to Home Page</h2></body></html>')
        res.end();
    }
    else if((req.url)=='/Student'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><h2>Hi Welcome to Student Page</h2></body></html>')
        res.end();
    }
    else if ((req.url)=='/Admin'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><h2>Hi Welcome to Admin Page</h2></body></html>')
        res.end();
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><h2>unDefine Page</h2></body></html>')
        res.end();
    }
}); server.listen(5000)
console.log(`Node is Running on Port ${PORT}`);