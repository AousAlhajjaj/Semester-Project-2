import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

export const UserContext = createContext([]);

export default function UserProvider({ children }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    setUser(user);
  }, []);

  return <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>;
}
