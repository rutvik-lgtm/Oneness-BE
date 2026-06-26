import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://oneness:onetwothree@oneness.u2yys6b.mongodb.net/oneness?retryWrites=true&w=majority';

console.log('Attempting to connect to MongoDB...');
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('SUCCESS: Connected to MongoDB successfully.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('ERROR: Connection failed.');
    console.error(err);
    process.exit(1);
  });
