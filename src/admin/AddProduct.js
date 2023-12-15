import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

export default function AddProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [featured, setFeatured] = useState(false);
  const [, , addProduct] = useContext(ProductsContext);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!title || !description || !price || !image_url) {
      return;
    }

    await addProduct({ title, description, price, image_url, featured });
  };

  return (
    <div className="container py-5 px-xl-5">
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column h-100">
            <div className="row mb-3">
              <div className="col d-flex align-items-center justify-content-between">
                <h1 className="mb-0">Add Product</h1>
                <Link to="/admin/products" className="btn btn-warning">
                  View Products
                </Link>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <input type="number" className="form-control" min={1} max={99999} value={price} onChange={e => setPrice(e.target.value)} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea className="form-control resize-none" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                      Image Url
                    </label>
                    <input type="text" className="form-control" value={image_url} onChange={e => setImageUrl(e.target.value)} />
                  </div>

                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" checked={featured} onChange={() => setFeatured(!featured)} />
                    <label htmlFor="featured" className="form-check-label">
                      Featured
                    </label>
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
