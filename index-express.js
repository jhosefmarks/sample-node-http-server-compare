const express = require('express');
const server = express();

server.get('/', (req, res) => {
  res.send('Home');
});

server.get('/profile', (req, res) => {
  res.send('Profile');
});

server.post('/profile', (req, res) => {
  res.send('New profile');
});

server.listen(3002, () => {
  console.log('Express Server HTTP listening on port: 3002');
});
