import { Request, Response } from 'express';
import { Inquiry } from '../models/Inquiry';
import { isDBConnected } from '../config/db';
import { dispatchInquiryEmails } from '../utils/mailer';

// Sanitize string helper to prevent XSS / script injection
const sanitizeString = (input: unknown): string => {
  if (typeof input !== 'string') return '';
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/[<>]/g, '')
    .trim();
};

export const submitContactInquiry = async (req: Request, res: Response): Promise<void> => {
  try {
    const rawName = req.body.name;
    const rawEmail = req.body.email;
    const rawTopic = req.body.topic;
    const rawMessage = req.body.message;

    const name = sanitizeString(rawName);
    const email = rawEmail ? String(rawEmail).trim().toLowerCase() : '';
    const topic = sanitizeString(rawTopic) || 'General Inquiry';
    const message = sanitizeString(rawMessage);

    // Validation
    if (!name || name.length < 2) {
      res.status(400).json({
        success: false,
        message: 'Please provide your name (at least 2 characters).',
      });
      return;
    }

    if (!message || message.length < 5) {
      res.status(400).json({
        success: false,
        message: 'Please provide a project description or message (at least 5 characters).',
      });
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
      return;
    }

    const ipAddress = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '';

    // Save to Database if connected
    let savedInquiry = null;
    if (isDBConnected()) {
      try {
        savedInquiry = await Inquiry.create({
          name,
          email: email || undefined,
          topic,
          message,
          ipAddress: typeof ipAddress === 'string' ? ipAddress.split(',')[0].trim() : '',
        });
      } catch (dbErr) {
        console.warn('[ContactController] DB save error:', (dbErr as Error).message);
      }
    } else {
      console.log('[ContactController] DB offline: inquiry cached in memory & log.');
    }

    // Dispatch Emails asynchronously (Admin notification + Client auto-reply)
    const emailResult = await dispatchInquiryEmails({
      name,
      email,
      topic,
      message,
    });

    res.status(201).json({
      success: true,
      message: 'Your inquiry has been received successfully! A confirmation notice was dispatched.',
      data: {
        id: savedInquiry ? savedInquiry._id : null,
        name,
        topic,
        emailNotified: emailResult.adminSent,
        clientAutoReplied: emailResult.clientSent,
      },
    });
  } catch (error) {
    console.error('[ContactController] Error submitting inquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process inquiry. Please try again later or contact via WhatsApp directly.',
    });
  }
};

export const getInquiries = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!isDBConnected()) {
      res.status(200).json({
        success: true,
        count: 0,
        data: [],
        notice: 'Database offline or pending connection in server/.env',
      });
      return;
    }
    const inquiries = await Inquiry.find().sort({ createdAt: -1 }).limit(100);
    res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching inquiries',
    });
  }
};

export const updateInquiryStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['unread', 'read', 'replied'].includes(status)) {
      res.status(400).json({ success: false, message: 'Invalid status value' });
      return;
    }

    const updated = await Inquiry.findByIdAndUpdate(id, { status }, { new: true });
    if (!updated) {
      res.status(404).json({ success: false, message: 'Inquiry not found' });
      return;
    }

    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating inquiry status' });
  }
};

export const deleteInquiry = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await Inquiry.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ success: false, message: 'Inquiry not found' });
      return;
    }
    res.status(200).json({ success: true, message: 'Inquiry deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting inquiry' });
  }
};
