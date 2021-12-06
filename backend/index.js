import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import MongoClient from 'mongodb';

const app = express();
const port = process.env.PORT || 5000;
const dbendpoint = 'mongodb+srv://ahanh:ahan0208@testdb.zbnu7.mongodb.net/testdb?retryWrites=true&w=majority';

app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.post('/', function (req, res) {
  let {query} = req.body;

  let item = {
    query: query
  }

  MongoClient.connect(dbendpoint, function(err, db) {
    if(err) throw err;
    let dbo = db.db('testdb');
    dbo.collection('user_queries').insertOne(item, function(err, res) {
      if(err) throw err;
      console.log('1 document inserted');
      db.close();
    });
  });

  let content = {
    header: query,
    body: 'lorem ipsum ' + query
  }
  res.json(content);
});

mongoose.connect(dbendpoint).then(
  () => app.listen(port, 
    () => console.log(`server started at http://localhost:${port}, connected to database`))
).catch((error) => console.log(`${error} could not connect`));

