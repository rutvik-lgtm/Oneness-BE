import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  features: {
    type: [String],
    default: []
  },
  stock: {
    type: Number,
    required: true,
    default: 100 // Default stock limit
  }
}, {
  timestamps: true
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
