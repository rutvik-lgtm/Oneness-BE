import express from 'express';
import { getTours, bookTour } from '../controllers/tourController.js';

const router = express.Router();

router.get('/', getTours);
router.post('/book', bookTour);

export default router;
