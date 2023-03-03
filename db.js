import { MongoClient} from 'mongodb';
import dotenv from 'dotenv'
import Obj from "mongodb"
dotenv.config()
//for commonjs setup
// const { MongoClient} = require('mongodb');
// const objectId = require('mongodb').ObjectId


//localhost url
// const MONGO_URL = 'mongodb://127.0.0.1:27017/'
//Mongodb Atlas host url
const MONGO_URL = process.env.MONGO_URL

async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    return client;
  }
export var ObjectId = Obj.ObjectId;
export const client = await createConnection()