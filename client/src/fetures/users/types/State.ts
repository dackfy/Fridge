import { User } from './types';

export type State = {
  users: User[];
  error: undefined | string;
};
