import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://127.0.0.1:27017/oneness';

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
