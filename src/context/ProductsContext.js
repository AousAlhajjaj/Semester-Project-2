import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { BASE_URL } from '../constants';
import { UserContext } from './UserContext';

export const ProductsContext = createContext([]);

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user] = useContext(UserContext);
  const history = useHistory();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(BASE_URL + '/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async product => {
    try {
      await fetch(BASE_URL + '/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.jwt}`,
        },
        body: JSON.stringify(product),
      }).then(res => res.json());

      await refetchProducts();
      history.push('/admin/products');
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async product => {
    try {
      await fetch(BASE_URL + '/products/' + product.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.jwt}`,
        },
        body: JSON.stringify(product),
      }).then(res => res.json());

      await refetchProducts();
      history.push('/admin/products');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async id => {
    try {
      await fetch(BASE_URL + '/products/' + id, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });

      await refetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const refetchProducts = () => fetchProducts();

  return <ProductsContext.Provider value={[products, loading, addProduct, editProduct, deleteProduct]}>{children}</ProductsContext.Provider>;
}
