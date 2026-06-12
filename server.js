import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import ticketRoutes from './routes/ticketRoutes.js';
import accommodationRoutes from './routes/accommodationRoutes.js';
import tourRoutes from './routes/tourRoutes.js';
import teacherRoutes from './routes/teacherRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import getInvolvedRoutes from './routes/getInvolvedRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import { submitInquiry } from './controllers/inquiryController.js';

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
app.use('/api/teachers', teacherRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/get-involved', getInvolvedRoutes);
app.use('/api/inquiries', inquiryRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Oneness Festival API Server is running...');
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is healthy' });
});

// Route for backward compatibility with /api/inquiry POST
app.post('/api/inquiry', submitInquiry);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

