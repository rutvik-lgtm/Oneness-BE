import express from 'express';
import { getAccommodations, bookAccommodation } from '../controllers/accommodationController.js';

const router = express.Router();

router.get('/', getAccommodations);
router.post('/book', bookAccommodation);

export default router;
