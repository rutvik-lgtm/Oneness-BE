import express from 'express';
import {
  submitGetInvolved,
  getApplications,
  getApplicationById
} from '../controllers/getInvolvedController.js';

const router = express.Router();

router.post('/', submitGetInvolved);
router.get('/', getApplications);
router.get('/:id', getApplicationById);

export default router;

