import mongoose from 'mongoose';
import Inquiry from './models/Inquiry.js';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://oneness:onetwothree@oneness.u2yys6b.mongodb.net/';

mongoose.connect(MONGO_URI)
  .then(async () => {
    const inquiries = await Inquiry.find();
    console.log('Inquiries in database:', inquiries);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
