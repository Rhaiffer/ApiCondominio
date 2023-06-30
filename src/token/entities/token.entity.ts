import { Document } from 'mongoose';

export interface Token extends Document {
  email: string;
  hash: string;
}
