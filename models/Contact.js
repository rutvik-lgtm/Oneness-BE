import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['Contact', 'general', 'other'], // Options from the frontend contact form
    default: 'general'
  },
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  details: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
