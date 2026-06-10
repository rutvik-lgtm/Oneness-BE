import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Inquiry from './models/Inquiry.js';
import ticketRoutes from './routes/ticketRoutes.js';
import accommodationRoutes from './routes/accommodationRoutes.js';
import tourRoutes from './routes/tourRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import teacherRoutes from './routes/teacherRoutes.js';
import galleryRoutes from './routes/galleryRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import getInvolvedRoutes from './routes/getInvolvedRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes Integration
app.use('/api/tickets', ticketRoutes);
app.use('/api/accommodations', accommodationRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/get-involved', getInvolvedRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Oneness Festival API Server is running...');
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is healthy' });
});

// Route for inquiries (Contact/Accommodation) - Save to MongoDB
app.post('/api/inquiry', async (req, res) => {
  try {
    const { type, fullName, email, phone, details } = req.body;
    
    // Create new inquiry in the database
    const newInquiry = new Inquiry({
      type,
      fullName,
      email,
      phone,
      details
    });

    await newInquiry.save();

    res.status(201).json({
      success: true,
      message: 'Inquiry saved to database successfully!',
      data: newInquiry
    });
  } catch (error) {
    console.error('Error saving inquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to save inquiry. Server error.',
      error: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
