const express = require('express');
const app = express();
const port = 3000;

console.log('something!')

app.get('/', function (req, res) {
  res.send('Hi there!');
});

app.post('/', function (req, res) {
  const query = req.body.query;
  res.send(query);
});

app.listen(port, () => {
  console.log('server started at http://localhost:' + port);
});

