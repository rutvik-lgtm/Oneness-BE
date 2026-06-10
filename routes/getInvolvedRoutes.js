import express from 'express';
import { submitGetInvolved, getApplications } from '../controllers/getInvolvedController.js';

const router = express.Router();

router.post('/', submitGetInvolved);
router.get('/', getApplications);

export default router;
