import mongoose from 'mongoose';

const getInvolvedSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['Volunteer', 'Performer', 'Bazaar Stall', 'Sponsor'],
    default: 'Volunteer'
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
  experience: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Reviewed', 'Accepted', 'Rejected'],
    default: 'Pending'
  }
}, {
  timestamps: true
});

const GetInvolved = mongoose.model('GetInvolved', getInvolvedSchema);

export default GetInvolved;
