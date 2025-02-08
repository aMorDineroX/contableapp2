'use client';

import { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser({
      id: '1',
      name: 'Utilisateur Test',
      email: 'test@example.com',
    });
  }, []);

  return { user };
};
