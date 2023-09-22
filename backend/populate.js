import { readFile } from 'fs/promises';

import dotenv from 'dotenv';
dotenv.config();

import connectDB from './connectDatabase/connectDB.js';
import products from './databaseModels/products.js';

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    const jsonProducts = JSON.parse(
      await readFile(new URL('./data.json', import.meta.url))
    );
    await products.create(jsonProducts);
    console.log('Success!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
