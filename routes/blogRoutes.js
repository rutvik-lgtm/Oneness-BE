import express from 'express';
import { getBlogs, getBlogBySlug, createBlog, addComment } from '../controllers/blogController.js';

const router = express.Router();

router.get('/', getBlogs);
router.get('/:slug', getBlogBySlug);
router.post('/', createBlog);
router.post('/:id/comment', addComment);

export default router;
