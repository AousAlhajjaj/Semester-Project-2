import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

export default function Products() {
  const [products, , , , deleteProduct] = useContext(ProductsContext);

  return (
    <div className="container-fluid py-3">
      {products.length > 0 ? (
        <div className="col-8 mx-auto">
          <div className="d-flex justify-content-between">
            <h3>Products</h3>
            <Link to="/admin/products/add" className="btn btn-primary">
              Add Product
            </Link>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Featured</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>{product.featured ? 'Yes' : 'No'}</td>
                  <td>
                    <Link to={`/admin/products/edit/${product.id}`} className="btn btn-sm btn-info mb-1">
                      Edit
                    </Link>
                    <button onClick={() => deleteProduct(product.id)} className="btn btn-sm btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}
