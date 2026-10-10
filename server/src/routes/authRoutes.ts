import { Router } from 'express';
import {
  loginAdmin,
  getAdminProfile,
  updateAdminPassword,
} from '../controllers/authController';
import { authLimiter } from '../middlewares/rateLimiter';
import { verifyAdminToken } from '../middlewares/authMiddleware';

const router = Router();

// Login endpoint with brute-force rate limiter
router.post('/login', authLimiter, loginAdmin);

// Protected routes
router.get('/me', verifyAdminToken, getAdminProfile);
router.post('/change-password', verifyAdminToken, updateAdminPassword);

export default router;
