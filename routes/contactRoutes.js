import express from 'express';
import {
  submitContact,
  getContacts,
  getContactById,
  deleteContact
} from '../controllers/contactController.js';

const router = express.Router();

router.get('/', getContacts);
router.post('/', submitContact);
router.get('/:id', getContactById);
router.delete('/:id', deleteContact);

export default router;
