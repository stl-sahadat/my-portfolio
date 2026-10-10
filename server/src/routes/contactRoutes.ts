import { Router } from 'express';
import {
  submitContactInquiry,
  getInquiries,
  updateInquiryStatus,
  deleteInquiry,
} from '../controllers/contactController';
import { contactLimiter } from '../middlewares/rateLimiter';
import { verifyAdminToken } from '../middlewares/authMiddleware';

const router = Router();

// Public: Submit inquiry with anti-spam rate limiting
router.post('/', contactLimiter, submitContactInquiry);

// Protected: Admin access
router.get('/', verifyAdminToken, getInquiries);
router.patch('/:id', verifyAdminToken, updateInquiryStatus);
router.delete('/:id', verifyAdminToken, deleteInquiry);

export default router;
