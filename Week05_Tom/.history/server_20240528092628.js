const http = require('http');  
const fs = require('fs');

const port = 3000;

const server = http.createServer(function(req, res)
{
    fs.readFileSync(__dirname + req.url, function (err, data)
    {
        if (err)
        {
            res.writeHead(404);
            res.end(err.message);
        }
        res.writeHead(200);
        res.end(data);
    })
});

server.listen(port, function () {
    console.log(`Server Running at Port: ${port}`);
});