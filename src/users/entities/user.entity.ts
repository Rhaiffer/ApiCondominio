import { Document } from 'mongoose';

export interface User extends Document {
  readonly _id?: number;
  name: string;
  email: string;
  password: string;
  door: number;
  tower: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  role: string;
}
