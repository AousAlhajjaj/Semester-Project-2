import Banner from './Banner';
import FeaturedProduct from './FeaturedProduct';
import ScrollToTopOnMount from '../layout/ScrollToTopOnMount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import Loading from '../common/Loading';

function Landing() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [products, loading] = useContext(ProductsContext);

  useEffect(() => {
    if (products.length > 0) setFeaturedProducts(products.filter(product => product.featured));
  }, [products]);

  return (
    <>
      <ScrollToTopOnMount />
      <Banner />
      <div className="d-flex flex-column bg-white py-4">
        <p className="text-center px-5">Welcome to our store!</p>
        <div className="d-flex justify-content-center">
          <Link to="/products" className="btn btn-primary" replace>
            Browse products
          </Link>
        </div>
      </div>
      <h2 className="text-muted text-center mt-4 mb-3">New Arrival</h2>
      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
          {loading ? <Loading /> : featuredProducts.map(product => <FeaturedProduct product={product} key={product.id} />)}
        </div>
      </div>
    </>
  );
}

export default Landing;
