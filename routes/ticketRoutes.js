import express from 'express';
import {
  getTickets,
  getTicketById,
  bookTicket,
  getTicketBookings,
  getTicketBookingById
} from '../controllers/ticketController.js';

const router = express.Router();

router.get('/', getTickets);
router.get('/bookings/all', getTicketBookings);
router.get('/bookings/:id', getTicketBookingById);
router.get('/:id', getTicketById);
router.post('/book', bookTicket);

export default router;

