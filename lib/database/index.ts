import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'event track',
    bufferCommands: false,
  })

  cached.conn = await cached.promise;

  return cached.conn;
}

// Server actions will call DB multiple times, connectToDatabase() many times, if not caching it, new connection to DB will be made
// So by caching the connection or the promise of the connection, connection can be reused if it's still open