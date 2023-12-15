import Product from './Product';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollToTopOnMount from '../layout/ScrollToTopOnMount';
import { ProductsContext } from '../context/ProductsContext';
import { useContext } from 'react';
import Loading from '../common/Loading';

function ProductList() {
  const [products, loading] = useContext(ProductsContext);
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) setSearchedProducts(products);
  }, [products]);

  const searchProducts = keyword => {
    if (!keyword.length) return setSearchedProducts(products);

    const results = products.filter(product => {
      return product.title.toLowerCase().includes(keyword.toLowerCase()) || product.description.toLowerCase().includes(keyword.toLowerCase());
    });
    setSearchedProducts(results);
  };

  return (
    <div className="container py-4 px-xl-5">
      <ScrollToTopOnMount />

      <div className="row">
        <div className="col">
          <div className="d-flex flex-column h-100">
            <div className="row mb-3">
              <div className="col  d-flex flex-row">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search products..."
                    onChange={e => searchProducts(e.target.value)}
                    aria-label="search input"
                  />
                  <button className="btn btn-outline-dark">
                    <FontAwesomeIcon icon={['fas', 'search']} />
                  </button>
                </div>
              </div>
            </div>
            <div className={'row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-4 flex-shrink-0'}>
              {loading ? (
                <Loading />
              ) : (
                searchedProducts.map(product => {
                  return <Product product={product} key={product.id} />;
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
