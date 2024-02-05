const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (req.method === 'GET' && pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <head>
          <title>Name Swapper</title>
        </head>
        <body>
          <h1>Name Swapper</h1>
          <form method="POST" action="/swap">
            <input type="text" name="names" placeholder="Enter First and Last Name" />
            <button type="submit">Swap Names</button>
          </form>
        </body>
      </html>
    `);
  } else if (req.method === 'POST' && pathname === '/swap') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const postData = querystring.parse(body);
      const { names } = postData;
      const [firstName, lastName] = names.split(' ');
      const swappedNames = `${lastName} ${firstName}`;

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`Swapped Names: ${swappedNames}`);
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
