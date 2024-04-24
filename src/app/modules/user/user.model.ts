import { Schema, model } from 'mongoose';
import { TRole, TUser } from './user.interface';

const role: TRole[] = ['user', 'admin'];

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, 'User name is required'],
    },

    email: {
      type: String,
      required: [true, 'User email is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    role: {
      type: String,
      required: true,
      enum: role,
      default: 'user',
    },
  },
  {
    timestamps: true,
  },
);


export const User =  model< TUser, >