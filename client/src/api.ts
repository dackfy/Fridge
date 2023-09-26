import { AuthUser } from './fetures/auth/types/types';

import { User } from './fetures/users/types/types';

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('/api/users');
  return res.json();
};

export const fetchSignUp = async (user: AuthUser): Promise<AuthUser> => {
  const res = await fetch('/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return res.json();
};
export const fetchCheckUser = async (): Promise<AuthUser> => {
  const res = await fetch('/api/auth/check');
  return res.json();
};

export const fetchSignIn = async (user: AuthUser): Promise<AuthUser> => {
  const res = await fetch('/api/auth/sign-in', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  return data.user;
};

export const fetchLogOut = async (): Promise<{ message: string }> => {
  const res = await fetch('/api/auth/logout');
  return res.json();
};
