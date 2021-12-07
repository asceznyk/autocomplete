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

async function insertData(item) {
  collection = await dbConnect();
  result = await collection.insertOne(item);
  if(result.acknowledged) {
    console.log('data is inserted!');
  }
}

async function selectData() {
  collection = await dbConnect();
  content = collection.find({});
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

app.get('/', function (req, res) {
  content = selectData();
  res.json(content);
});

app.post('/', function (req, res) {
  let {query} = req.body;
  insertData({'query': query});
  content = selectData();
  res.json(content);
});

mongoose.connect(url).then(
  () => app.listen(port, 
    () => console.log(`server started at http://localhost:${port}, connected to database`))
).catch((error) => console.log(`${error} could not connect`));

