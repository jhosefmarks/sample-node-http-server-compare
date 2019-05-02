const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home');
  }

  if (req.url === '/profile') {
    res.end('Profile');
  }

  res.end('Not found :(');
});

server.listen(3000, 'localhost', () => {
  console.log('Server HTTP listening on port: 3000');
}); 
