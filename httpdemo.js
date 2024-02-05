const http = require('http');

const server = http.createServer((req, res)=> {
    res.end('hello World');
})

server.listen(4242, ()=> {
    console.log('server is running...')
})