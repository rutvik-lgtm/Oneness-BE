import express from 'express';
import {
  getTours,
  getTourById,
  bookTour,
  getTourBookings,
  getTourBookingById
} from '../controllers/tourController.js';

const router = express.Router();

router.get('/', getTours);
router.get('/bookings/all', getTourBookings);
router.get('/bookings/:id', getTourBookingById);
router.get('/:id', getTourById);
router.post('/book', bookTour);

export default router;

