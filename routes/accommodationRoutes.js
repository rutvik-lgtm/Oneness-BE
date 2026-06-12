import express from 'express';
import {
  getAccommodations,
  getAccommodationById,
  bookAccommodation,
  getAccommodationBookings,
  getAccommodationBookingById
} from '../controllers/accommodationController.js';

const router = express.Router();

router.get('/', getAccommodations);
router.get('/bookings/all', getAccommodationBookings);
router.get('/bookings/:id', getAccommodationBookingById);
router.get('/:id', getAccommodationById);
router.post('/book', bookAccommodation);

export default router;

