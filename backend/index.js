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

let content, collection, result, db;

async function dbConnect() {
  result = await client.connect();
  db = result.db(dbname);
  return db.collection('user_queries');
}

(async () => {
  collection = await dbConnect();
})();

async function insertData(item) {
  result = await collection.insertOne(item);
  if(result.acknowledged) {
    console.log('data is inserted!');
  }
}

async function deleteData(id) {
  result = await collection.deleteOne(id);
  if(result.acknowledged) {
    console.log('data is deleted!')
  }
}

async function selectData() {
  content = collection.find().sort({'created_at': 1});
  let rows = [];
  await content.forEach((row) => {
    rows.push(row);
  });
  return rows;
}

app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/', async (req, res) => { 
  content = await selectData();
  res.json(content);
});

app.post('/insert/', async (req, res) => {
  let {query} = req.body;
  insertData({'query': query});
  content = await selectData();
  res.json(content);
});

app.post('/delete/', async (req, res) => {
  let {id} = req.body;
  deleteData({'_id': id});
  content = await selectData();
  res.json(content);
});


mongoose.connect(url).then(
  () => app.listen(port, 
    () => console.log(`server started at http://localhost:${port}, connected to database`))
).catch((error) => console.log(`${error} could not connect`));

