import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['Contact', 'Accommodation', 'general', 'other'], // Adjust based on frontend needs
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

const Inquiry = mongoose.model('Inquiry', inquirySchema);

export default Inquiry;
