import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../assets/logo512.png';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

function Header() {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const [cart] = useContext(CartContext);

  const logout = () => {
    localStorage.removeItem('user');
    setUser({});
    history.push('/login');
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="logo" style={{ width: '64px', height: '64px' }} />
              <span className="ms-2 h5">E-store</span>
            </Link>

            <Link to="/products" className="nav-link" replace>
              Explore
            </Link>
          </div>

          <div className="d-flex align-items-center">
            <Link to="/cart" className="btn btn-outline-dark me-3 d-inline" replace>
              <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
              <span className="ms-3 badge rounded-pill bg-dark">{cart.length}</span>
            </Link>

            {user.id ? (
              <button onClick={logout} className="btn btn-danger">
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn btn-primary" replace>
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
