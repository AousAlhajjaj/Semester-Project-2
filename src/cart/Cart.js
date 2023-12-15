import Product from '../products/Product';
import ScrollToTopOnMount from '../layout/ScrollToTopOnMount';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const [cart] = useContext(CartContext);

  return (
    <div className="container py-5 px-xl-5">
      <ScrollToTopOnMount />

      <div className="row">
        <div className="col">
          <div className="d-flex flex-column h-100">
            <div className="row mb-3">
              <div className="col">
                <h1 className="mb-0">Your cart</h1>
              </div>
            </div>

            <div className={'row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-4 flex-shrink-0'}>
              {cart.length > 0 &&
                cart.map(product => {
                  return <Product product={product} key={product.id} />;
                })}
            </div>

            {/* display cart total */}
            {cart.length > 0 && (
              <div className="row mt-auto">
                <div className="col">
                  <h3 className="mb-0">Total: ${cart.reduce((total, product) => total + product.price, 0)}</h3>
                </div>
              </div>
            )}

            {cart.length === 0 && (
              <div className="row mb-3">
                <div className="col">
                  <p className="mb-0">Your cart is empty.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
