// var http = require('http');
// const PORT = 8000;
// var server = http.createServer(function(req,res){
//     if((req.url)=='/'){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write('<html><body><h1>Hi Welcome To Home Page</h1></body></html>')
//     }
//     res.end();
// }); server.listen(8000);
// console.log(`Node is Running on Port ${PORT}`);

var http = require('http')
var fs = require('fs');
const PORT =2000;
var filename = './index.txt';
var server = http.createServer(function(req,res){
fs.readFile(filename,"utf-8",function(err,data){
    if(err){
        throw err;
    }
    console.log(data)
})
});
server.listen(2000);
console.log(`Node is Running on Port ${PORT}`);