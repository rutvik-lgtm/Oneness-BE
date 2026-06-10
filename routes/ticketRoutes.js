import express from 'express';
import { getTickets, bookTicket } from '../controllers/ticketController.js';

const router = express.Router();

router.get('/', getTickets);
router.post('/book', bookTicket);

export default router;
