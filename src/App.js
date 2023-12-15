import Layout from './layout/Layout';
import ProductDetail from './products/detail/ProductDetail';
import { Switch, Route, useHistory } from 'react-router-dom';
import Landing from './landing/Landing';
import ProductList from './products/ProductList';
import ProductsProvider from './context/ProductsContext';
import CartProvider from './context/CartContext';
import Cart from './cart/Cart';
import Login from './admin/Login';
import UserProvider from './context/UserContext';
import AddProduct from './admin/AddProduct';
import ProtectedRoute from './admin/ProtectedRoute';
import Products from './admin/Products';
import EditProduct from './admin/EditProduct';
import { useEffect } from 'react';

function App() {
  const history = useHistory();

  useEffect(() => {
    history.push('/admin/products');
  }, [history]);

  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <Layout>
            <Switch>
              <ProtectedRoute path="/admin/products" exact>
                <Products />
              </ProtectedRoute>

              <ProtectedRoute path="/admin/products/add" exact>
                <AddProduct />
              </ProtectedRoute>

              <ProtectedRoute path="/admin/products/edit/:id" exact>
                <EditProduct />
              </ProtectedRoute>

              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/products" exact>
                <ProductList />
              </Route>
              <Route path="/products/:id" exact>
                <ProductDetail />
              </Route>
              <Route path="/" index>
                <Landing />
              </Route>
            </Switch>
          </Layout>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
}

export default App;
