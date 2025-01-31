import React from 'react';
import ReactDOM from 'react-dom/client';

// Sample Product Data 
const products = [
  {
    image: '/path/to/chocolate.png',
    name: 'Chocolate Raspberry Cacao',
    price: '$12.00',
  },
  {
    image: '/path/to/matcha.png',
    name: 'Matcha Lemon',
    price: '$12.00',
  },
  {
    image: '/path/to/mango.png',
    name: 'Mango Turmeric',
    price: '$12.00',
  },
];

// Header Component
function Header() {
  return (
    <header>
      <div class="header-content">
      <div className="logo">Purposefuel</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
      </nav>
      <div className="icons">
        <span>🔍</span>
        <span>🛒</span>
        <span>👤</span>
      </div>
      </div>
    </header>
  );
}

// Hero Section Component
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>DESSERT SNACKS <br /> WITH FUNCTIONALITY</h1>
        <p>A Revolutionary Superfood Snack Bite Inspired by Global Cultures and Packed with Nostalgia</p>
        <button>Shop Now</button>
      </div>
      <div className="hero-image">
        <img src="/path/to/product-image.png" alt="Product" />
      </div>
    </section>
  );
}

// Features Section Component
function Features() {
  return (
    <section className="features">
      <div className="feature">
        <span>🌱</span> {/* Replace with icon image */}
        <p>100% Plant-based</p>
      </div>
      <div className="feature">
        <span>🍎</span> {/* Replace with icon image */}
        <p>Real Fruits, Nuts, & Superfoods</p>
      </div>
      <div className="feature">
        <span>🚫</span> {/* Replace with icon image */}
        <p>No Preservatives or Added Sugar</p>
      </div>
    </section>
  );
}

// Product Card Component
function ProductCard({ product }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p> {/* Display the price */}
      <button>Shop Now</button>
    </div>
  );
}

// Products Section Component
function Products() {
  return (
    <section className="products">
      <h2>Enjoy Our Purposefuel</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Purposefuel</p>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <Products />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
