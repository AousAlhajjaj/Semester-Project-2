import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BASE_URL } from '../constants';
import { UserContext } from '../context/UserContext';

function Login() {
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    try {
      const data = await fetch(BASE_URL + '/auth/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      }).then(res => res.json());

      if (data.user) {
        setUser({ ...data.user, jwt: data.jwt });
        localStorage.setItem('user', JSON.stringify({ ...data.user, jwt: data.jwt }));
        history.push('/admin/products');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user.id) history.push('/admin/products');
  }, [history, user.id]);

  return (
    <div className="container py-5 px-xl-5">
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column h-100">
            <div className="row mb-3">
              <div className="col">
                <h1 className="mb-0">Login</h1>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
