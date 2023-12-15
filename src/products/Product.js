import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BASE_URL } from '../constants';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { CartContext } from '../context/CartContext';

function Product({ product }) {
  const [cart, toggleProduct] = useContext(CartContext);
  const [inCart, setInCart] = useState(false);
  const image = product?.image != null ? BASE_URL + product?.image?.formats?.small.url : product.image_url;

  useEffect(() => {
    const cartProduct = cart.find(item => item.id === product.id);
    setInCart(Boolean(cartProduct));
  }, [cart, product.id]);

  return (
    <div className="col">
      <div className="card shadow-sm">
        <Link to={`/products/${product.id}`} href="!#" replace>
          <img className="card-img-top bg-dark cover" height="200" alt="" src={image} />
        </Link>
        <div className="card-body">
          <h5 className="card-title text-center text-dark text-truncate">{product.title}</h5>
          <p className="card-text text-center text-muted mb-0">${product.price}</p>
          <div className="d-grid d-block">
            <button className={`btn btn-outline-dark ${inCart ? 'btn-dark text-white' : ''} mt-3`} onClick={() => toggleProduct(product)}>
              <FontAwesomeIcon icon={['fas', 'cart-plus']} /> {inCart ? 'Remove from cart' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
