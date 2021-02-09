import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

const cachedDb;
const cachedClient;

if(!url) {
  throw new Error(
    'Please define the MONGDB_URI enviroment variable inside .env.local',
  );
}

if(!dbName) {
  throw new Error(
    'Please define the MONGODB_DB enviroment variable inside .env.local',
  );
}

export async function connectToDatabase() {
  if(cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb};
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export default connectToDatabase