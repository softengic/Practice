"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const mime_types_1 = __importDefault(require("mime-types"));
const port = 3000;
let lookup = mime_types_1.default.lookup;
const server = http_1.default.createServer(function (req, res) {
    let path = req.url;
    if (path == "/" || path == "/home") {
        path = "/index.html";
    }
    ;
    let mime_type = lookup(path.substring(1));
    console.log(`mime-type: ${mime_type}`);
    fs_1.default.readFile(__dirname + path, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end("ERROR: 404");
        }
        res.writeHead(200, { 'Content-Type': mime_type });
        return res.end(data);
    });
});
server.listen(port, function () {
    console.log(`Server Running at Port: ${port}`);
});
//# sourceMappingURL=server.js.map