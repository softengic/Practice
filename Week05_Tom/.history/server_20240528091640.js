const http = require('http');  
const fs = require('fs');

const server = http.createServer(function(req, res)
{
    fs.readFileSync(__dirname + req.url)
});