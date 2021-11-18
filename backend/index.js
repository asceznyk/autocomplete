import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.post('/', function (req, res) {
  let {query} = req.body;
  query = '-- ' + query + ' --';
  res.json(query);
});

app.listen(port, () => console.log('server started at http://localhost:' + port));

