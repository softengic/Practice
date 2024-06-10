const http = require('http');  
const fs = require('fs');
const mime = require('mime-types');

const port = 3000;

let lookup = mime.lookup;

const server = http.createServer(function(req, res)
{
    let path = req.url;

    if (path == "/" || path == "/home")
    {
        path = "/index.html";
    };

    let mime_type = lookup(path.substring(1));
    console.log(`mime-type: ${mime_type}`);

    fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end("ERROR: 404");
        }

        res.setHeader("X-Content-Type-Options", "nosniff");
        res.writeHead(200, { 'Content-Type: mime_type'});
        res.end(data);
    });
});

server.listen(port, function () {
    console.log(`Server Running at Port: ${port}`);
});