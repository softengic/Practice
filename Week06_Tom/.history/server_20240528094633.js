const http = require('http');  
const fs = require('fs');
const mime = require('mime-types');

const port = 3000;

let lookup = mime.lookup;

const server = http.createServer(function(req, res)
{
    let path = req.url;

    if (path = "/" || path = "/home")
    {
    path = "/index.html";
}
    fs.readFile(__dirname + req.url, function (err, data) {
        if (err) {
            res.writeHead(404);
            console.log(err.message);
            res.end(err.message);
        }
        res.writeHead(200);
        res.end(data);
        console.log(data);
    });
});

server.listen(port, function () {
    console.log(`Server Running at Port: ${port}`);
});