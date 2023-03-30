import { useContext, useState, createContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface AuthCtx {
  userId: string | null;
}

const AuthContext = createContext<AuthCtx | null>(null);

interface AuthProviderProps {
  children?: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const user_id = localStorage.getItem('userId');
    if (!user_id) {
      const id = uuidv4();
      localStorage.setItem('userId', id);
      setUserId(id);
    } else {
      setUserId(user_id);
    }
  }, []);

  const value = {
    userId,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext');
  }

  return auth;
};
