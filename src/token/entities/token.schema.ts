import * as mongoose from 'mongoose';

export const TokenSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hash: { type: String, required: true },
});
