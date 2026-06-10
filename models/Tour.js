import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  duration: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  route: {
    type: [String],
    default: []
  },
  images: {
    type: [String],
    default: []
  }
}, {
  timestamps: true
});

const Tour = mongoose.model('Tour', tourSchema);

export default Tour;
