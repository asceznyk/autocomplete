import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.send('Hellooo!');
});

app.post('/', function (req, res) {
  const query = req.body.query;
  res.send(query);
});

app.listen(port, () => console.log('server started at http://localhost:' + port));

