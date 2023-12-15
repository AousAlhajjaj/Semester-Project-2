import { Link } from 'react-router-dom';
import { BASE_URL } from '../constants';

function FeaturedProduct({ product }) {
  const image = product?.image != null ? BASE_URL + product?.image?.formats?.small.url : product.image_url;

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img className="card-img-top bg-dark cover" height="240" alt="" src={image} />
        <div className="card-body">
          <h5 className="card-title text-center">{product.title}</h5>
          <p className="card-text text-center text-muted">${product.price}</p>
          <div className="d-grid gap-2">
            <Link to={`/products/${product.id}`} className="btn btn-outline-dark" replace>
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
