import express from 'express';
import { getGallery, createGalleryItem } from '../controllers/galleryController.js';

const router = express.Router();

router.get('/', getGallery);
router.post('/', createGalleryItem);

export default router;
