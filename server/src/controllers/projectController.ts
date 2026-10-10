import { Request, Response } from 'express';
import { Project } from '../models/Project';
import { isDBConnected } from '../config/db';

export const getAllProjects = async (req: Request, res: Response): Promise<void> => {
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
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch projects',
    });
  }
};

export const getProjectById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      res.status(404).json({ success: false, message: 'Project not found' });
      return;
    }
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error retrieving project' });
  }
};

export const createProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      title,
      category,
      badge,
      description,
      tags,
      contributions,
      demoUrl,
      altUrl,
      githubUrl,
      image,
      featured,
      order,
    } = req.body;

    if (!title || !category || !description) {
      res.status(400).json({
        success: false,
        message: 'Title, category, and description are required fields.',
      });
      return;
    }

    const newProject = await Project.create({
      title: String(title).trim(),
      category: String(category).trim(),
      badge: badge ? String(badge).trim() : 'PRODUCTION SYSTEM',
      description: String(description).trim(),
      tags: Array.isArray(tags) ? tags : [],
      contributions: Array.isArray(contributions) ? contributions : [],
      demoUrl: demoUrl || '',
      altUrl: altUrl || '',
      githubUrl: githubUrl || '',
      image: image || '',
      featured: Boolean(featured),
      order: Number(order) || 0,
    });

    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: newProject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create project: ' + (error as Error).message,
    });
  }
};

export const updateProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedProject = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProject) {
      res.status(404).json({ success: false, message: 'Project not found' });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Project updated successfully',
      data: updatedProject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update project: ' + (error as Error).message,
    });
  }
};

export const deleteProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await Project.findByIdAndDelete(id);

    if (!deleted) {
      res.status(404).json({ success: false, message: 'Project not found' });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Project deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete project',
    });
  }
};
