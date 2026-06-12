import express from 'express';
import {
  submitInquiry,
  getInquiries,
  getInquiryById,
  deleteInquiry
} from '../controllers/inquiryController.js';

const router = express.Router();

router.get('/', getInquiries);
router.post('/', submitInquiry);
router.get('/:id', getInquiryById);
router.delete('/:id', deleteInquiry);

export default router;
