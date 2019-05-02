const restify = require('restify');

const server = restify.createServer();

server.get('/', (req, res) => {
  res.send('Home');
});

server.get('/profile', (req, res) => {
  res.send('Profile');
});

server.post('/profile', (req, res) => {
  res.send('New profile');
});

server.listen(3001, () => {
  console.log('Restify Server HTTP listening on port: 3001');
});
