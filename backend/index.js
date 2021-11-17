import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hellooo!');
});

app.post('/', function (req, res) {
  //const query = req;
  res.send('sample string -->');
});

app.listen(port, () => console.log('server started at http://localhost:' + port));

