import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';

const app = express();
const port = process.env.PORT || 5000;
const dbname = 'testdb';
const url = 'mongodb+srv://ahanh:ahan0208@testdb.zbnu7.mongodb.net/testdb?retryWrites=true&w=majority';
const client = new MongoClient(url);

async function dbConnect() {
  let res = await client.connect();
  let db = res.db(dbname);
  return db.collection('user_queries');
}

async function insertData(item) {
  let collection = await dbConnect();
  let res = await collection.insert(item);
  if(res.acknowledged) {
    console.log('data is inserted!');
  }
}

app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.post('/', function (req, res) {
  let {query} = req.body;

  insertData({'query': query});

  let content = {
    header: query,
    body: 'lorem ipsum ' + query
  }
  res.json(content);
});

mongoose.connect(url).then(
  () => app.listen(port, 
    () => console.log(`server started at http://localhost:${port}, connected to database`))
).catch((error) => console.log(`${error} could not connect`));

