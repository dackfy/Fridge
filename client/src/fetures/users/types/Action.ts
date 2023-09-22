import { User, UserId } from './types';

export type Action =
  | { type: 'users/load'; payload: User[] }
  | { type: 'users/delete'; payload: UserId };
