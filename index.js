'use strict';

const http = require('http');
const fs = require('fs');

// const hostname = '127.0.0.1';
const port = process.env.PORT || 5000;

const sendData = (file, type, res) => {
    let stream = fs.createReadStream(file);
    stream.on('open', () => {
        res.setHeader('Content-Type', type);
        stream.pipe(res);
    });
    stream.on('error', () => {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 404;
        res.end('Not found');
    });
};

const routing = {
    '/': sendData.bind(null, 'main.html', 'text/html'),
};

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.statusCode = 501;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Method not implemented');
    }
    console.log(req.url);
    const dataSender = routing[req.url];
    dataSender(res);
});

/* server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
}); */
server.listen(port);

server.on('error', (err) => {
    if (err.code === 'EACCES') {
        console.log(`No access to port: ${port}`);
    }
});





'use strict';

const http = require('http');
//const fs = require('fs');
const hostname = '127.0.0.1'
const port = 3000


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello world")
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/')
})

const _ = require('lodash')



