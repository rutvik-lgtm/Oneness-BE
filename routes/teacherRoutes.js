import express from 'express';
import { getTeachers, getTeacherById, createTeacher } from '../controllers/teacherController.js';

const router = express.Router();

router.get('/', getTeachers);
router.get('/:id', getTeacherById);
router.post('/', createTeacher);

export default router;
