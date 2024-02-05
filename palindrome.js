const http = require('http');
const url = require('url');
const querystring = require('querystring');

function isPalindrome(word) {
  const cleanWord = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversedWord = cleanWord.split('').reverse().join('');
  return cleanWord === reversedWord;
}

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (req.method === 'GET' && pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <head>
          <title>Palindrome Checker</title>
        </head>
        <body>
          <h1>Palindrome Checker</h1>
          <form method="POST" action="/check">
            <input type="text" name="word" placeholder="Enter a word" />
            <button type="submit">Check Palindrome</button>
          </form>
        </body>
      </html>
    `);
  } else if (req.method === 'POST' && pathname === '/check') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const postData = querystring.parse(body);
      const { word } = postData;
      const result = isPalindrome(word) ? 'Yes' : 'No';

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`Is Palindrome: ${result}`);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 4242;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
