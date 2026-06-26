import mongoose from 'mongoose';
import Contact from './models/Contact.js';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://oneness:onetwothree@oneness.u2yys6b.mongodb.net/';

mongoose.connect(MONGO_URI)
  .then(async () => {
    const contacts = await Contact.find();
    console.log('Contacts in database:', contacts);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
