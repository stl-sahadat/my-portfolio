import { Router } from 'express';
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController';
import { verifyAdminToken } from '../middlewares/authMiddleware';

const router = Router();

// Public Routes
router.get('/', getAllProjects);
router.get('/:id', getProjectById);

// Protected Admin Routes (Requires valid JWT)
router.post('/', verifyAdminToken, createProject);
router.put('/:id', verifyAdminToken, updateProject);
router.delete('/:id', verifyAdminToken, deleteProject);

export default router;
