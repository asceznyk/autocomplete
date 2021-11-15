const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.post('/movies', async(req, res) => {
  const query = req.body.query;
  res.send(query);
});

app.listen(port, () => {
  console.log('server started at http://localhost:' + port);
});

