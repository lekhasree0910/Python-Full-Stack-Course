function ProductList({ products }) {
  return (
    <div className="card">
      <h3>Task 61 - Product List (20 Products)</h3>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <p><strong>{product.name}</strong> - ₹{product.price.toLocaleString()}</p>
            <div className="badges">
              {product.onSale && <span className="badge sale">Sale</span>}
              {product.quantity === 0 && <span className="badge out-of-stock">Out of Stock</span>}
              {product.featured && <span className="badge featured">Featured</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
