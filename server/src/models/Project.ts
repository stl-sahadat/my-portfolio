import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
  id?: string;
  title: string;
  category: string;
  badge?: string;
  description: string;
  tags: string[];
  contributions: string[];
  demoUrl?: string;
  altUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
  order?: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    id: {
      type: String,
      trim: true,
    },
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
      maxlength: [180, 'Title cannot exceed 180 characters'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },
    badge: {
      type: String,
      trim: true,
      default: 'PRODUCTION SYSTEM',
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      maxlength: [3000, 'Description cannot exceed 3000 characters'],
    },
    tags: {
      type: [String],
      default: [],
    },
    contributions: {
      type: [String],
      default: [],
    },
    demoUrl: {
      type: String,
      trim: true,
      default: '',
    },
    altUrl: {
      type: String,
      trim: true,
      default: '',
    },
    githubUrl: {
      type: String,
      trim: true,
      default: '',
    },
    image: {
      type: String,
      trim: true,
      default: '',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Project = mongoose.model<IProject>('Project', ProjectSchema);
