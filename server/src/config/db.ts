import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio';
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 3000,
    });
    console.log(`[Database] MongoDB Connected successfully to: ${mongoUri.replace(/\/\/.*@/, '//<credentials>@')}`);
  } catch (error) {
    console.error('[Database] MongoDB connection error:', (error as Error).message);
    console.warn('[Database] Running in graceful fallback mode. Set valid MONGODB_URI in server/.env when ready.');
  }
};

export const isDBConnected = (): boolean => {
  return mongoose.connection.readyState === 1;
};
