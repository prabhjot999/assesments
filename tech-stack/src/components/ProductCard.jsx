// components/ProductCard.jsx

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-box">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="product-info">
        <p className="brand-name">
          {product.brand}
        </p>

        <h3 className="product-title">
          {product.title}
        </h3>

        <div className="price-row">
          <span className="current-price">
            {product.price}
          </span>

          <span className="old-price">
            {product.oldPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;