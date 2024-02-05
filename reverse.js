const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url);

  if (req.method === 'GET' && pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <head>
          <title>Number Reversal</title>
        </head>
        <body>
          <h1>Number Reversal</h1>
          <form method="POST" action="/reverse">
            <input type="text" name="number" placeholder="Enter a number" />
            <button type="submit">Reverse</button>
          </form>
        </body>
      </html>
    `);
  } else if (req.method === 'POST' && pathname === '/reverse') {
    let body = '';
    
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const postData = qs.parse(body);
      const { number } = postData;
      const reversedNumber = number.split('').reverse().join('');

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`Reversed Number: ${reversedNumber}`);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
