import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Admin } from '../models/Admin';
import { isDBConnected } from '../config/db';
import { AuthRequest } from '../middlewares/authMiddleware';

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_jwt_key_sahadat_portfolio_2026_xyz';

export const loginAdmin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    if (!password) {
      res.status(400).json({ success: false, message: 'Password is required' });
      return;
    }

    const adminUser = username ? String(username).trim().toLowerCase() : 'sahadat';

    // 1. If DB is connected, use MongoDB + Bcrypt verification
    if (isDBConnected()) {
      let admin = await Admin.findOne({
        $or: [{ username: adminUser }, { email: adminUser }],
      });

      // Initialize admin if first time
      if (!admin) {
        if (password === '440055') {
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash('440055', salt);

          admin = await Admin.create({
            username: 'sahadat',
            email: 'sahadat.info01@gmail.com',
            passwordHash: hashedPassword,
          });

          const token = jwt.sign(
            { userId: admin._id, username: admin.username },
            JWT_SECRET,
            { expiresIn: '7d' }
          );

          res.status(200).json({
            success: true,
            message: 'Admin initialized & authenticated successfully',
            token,
            user: { username: admin.username, email: admin.email },
          });
          return;
        } else {
          res.status(401).json({ success: false, message: 'Invalid credentials' });
          return;
        }
      }

      // Verify bcrypt password
      const isMatch = await bcrypt.compare(password, admin.passwordHash);
      if (!isMatch) {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
        return;
      }

      const token = jwt.sign(
        { userId: admin._id, username: admin.username },
        JWT_SECRET,
        { expiresIn: '7d' }
      );

      res.status(200).json({
        success: true,
        message: 'Admin logged in successfully',
        token,
        user: { username: admin.username, email: admin.email },
      });
      return;
    }

    // 2. Offline / local fallback when DB connection is pending
    if (password === '440055') {
      const token = jwt.sign(
        { userId: 'admin-master', username: 'sahadat' },
        JWT_SECRET,
        { expiresIn: '7d' }
      );

      res.status(200).json({
        success: true,
        message: 'Admin authenticated successfully (Fallback mode)',
        token,
        user: {
          username: 'sahadat',
          email: 'sahadat.info01@gmail.com',
        },
      });
      return;
    }

    res.status(401).json({ success: false, message: 'Invalid credentials' });
  } catch (error) {
    console.error('[AuthController] Login error:', error);
    res.status(500).json({ success: false, message: 'Authentication server error' });
  }
};

export const getAdminProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const user = req.user;
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error retrieving profile' });
  }
};

export const updateAdminPassword = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user?.userId;

    if (!newPassword || newPassword.length < 6) {
      res.status(400).json({
        success: false,
        message: 'New password must be at least 6 characters long.',
      });
      return;
    }

    if (!isDBConnected()) {
      res.status(400).json({
        success: false,
        message: 'Database connection required to persist password update.',
      });
      return;
    }

    const admin = await Admin.findById(userId);
    if (!admin) {
      res.status(404).json({ success: false, message: 'Admin account not found' });
      return;
    }

    const isMatch = await bcrypt.compare(currentPassword, admin.passwordHash);
    if (!isMatch) {
      res.status(400).json({ success: false, message: 'Incorrect current password' });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    admin.passwordHash = await bcrypt.hash(newPassword, salt);
    await admin.save();

    res.status(200).json({
      success: true,
      message: 'Password updated successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error changing password' });
  }
};
