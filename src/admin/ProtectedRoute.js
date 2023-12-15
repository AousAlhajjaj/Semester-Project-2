import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function ProtectedRoute(props) {
  const [user] = useContext(UserContext);

  if (!user.id) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
}
