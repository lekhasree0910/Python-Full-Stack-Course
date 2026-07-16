import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => setLoading(true), 0);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    return () => clearTimeout(timerId);
  }, [id]);

  if (loading) {
    return (
      <div className="container" style={styles.loadingContainer}>
        <div className="spinner"></div>
        <p style={{ marginTop: '12px' }}>Fetching Product Details...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container" style={styles.loadingContainer}>
        <span className="badge badge-danger" style={{ marginBottom: '16px' }}>Error</span>
        <h2>Failed to load product details</h2>
        <p>{error || 'Product details are unavailable.'}</p>
        <button onClick={() => navigate('/#fetch-api')} className="btn btn-primary" style={{ marginTop: '16px' }}>
          Back to Playground
        </button>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ padding: '60px 24px' }}>
      <button
        onClick={() => navigate(-1)}
        className="btn btn-secondary btn-sm"
        style={{ marginBottom: '24px' }}
      >
        ← Back to list
      </button>

      <div className="card" style={styles.gridContainer}>
        <div style={styles.imageCol}>
          <img src={product.image} alt={product.title} style={styles.image} />
        </div>
        <div style={styles.detailsCol}>
          <span className="badge badge-info" style={{ marginBottom: '8px' }}>
            {product.category}
          </span>
          <h1 style={styles.title}>{product.title}</h1>
          <div style={styles.priceContainer}>
            <span style={styles.priceLabel}>Price:</span>
            <span style={styles.price}>${product.price.toFixed(2)}</span>
          </div>

          <div style={styles.divider}></div>

          <h3 style={{ marginBottom: '8px' }}>Description</h3>
          <p style={styles.description}>{product.description}</p>

          <div style={{ marginTop: '24px' }}>
            <button className="btn btn-primary" onClick={() => alert('Product added to shopping cart!')}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '400px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: '40px',
    padding: '40px',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  imageCol: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid var(--border-color)',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '350px',
    objectFit: 'contain',
  },
  detailsCol: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '16px',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px',
    marginBottom: '20px',
  },
  priceLabel: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: 'var(--text-secondary)',
  },
  price: {
    fontSize: '2rem',
    fontWeight: 800,
    color: 'var(--success-color)',
  },
  divider: {
    height: '1px',
    backgroundColor: 'var(--border-color)',
    margin: '20px 0',
  },
  description: {
    fontSize: '0.975rem',
    lineHeight: 1.6,
  },
};

// Add raw CSS styling to handle responsive styles since inline style queries aren't natively supported
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid var(--border-color);
      border-top: 4px solid var(--primary-color);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    @media (max-width: 768px) {
      .card > div:first-child {
        grid-column: span 2;
      }
    }
  `;
  document.head.appendChild(styleEl);
}

export default ProductDetails;
