import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants';
import { CartContext } from '../../context/CartContext';
import { ProductsContext } from '../../context/ProductsContext';
import ScrollToTopOnMount from '../../layout/ScrollToTopOnMount';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [products] = useContext(ProductsContext);
  const [cart, toggleProduct] = useContext(CartContext);
  const [inCart, setInCart] = useState(false);
  const image = product?.image != null ? BASE_URL + product?.image?.formats?.small.url : product?.image_url;

  useEffect(() => {
    const product = cart.find(item => item.id === Number(id));
    setInCart(Boolean(product));
  }, [id, products, cart]);

  useEffect(() => {
    const product = products.find(product => product.id === Number(id));
    setProduct(product);
  }, [id, products]);

  return (
    <div className="container mt-5 px-xl-5">
      <ScrollToTopOnMount />
      <div className="row mb-4">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-12 mb-4">
              <img className="border rounded ratio ratio-1x1" alt="" src={image} />
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="d-flex flex-column h-100">
            <h2 className="mb-1">{product?.title}</h2>
            <h4 className="text-muted mb-4">${product?.price}</h4>

            <div className="row g-3 mb-4">
              <div className="col">
                <button className={`btn btn-outline-dark ${inCart ? 'btn-dark text-white' : ''} py-2 w-100`} onClick={() => toggleProduct(product)}>
                  {inCart ? 'Remove from cart' : 'Add to cart'}
                </button>
              </div>
            </div>

            <h4 className="mb-0">Description</h4>
            <hr />
            <p className="lead flex-shrink-0">
              <small>{product?.description}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
