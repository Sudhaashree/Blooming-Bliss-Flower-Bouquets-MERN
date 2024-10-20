import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Products from './Products.js'; 
import About from './About.js'; 
import Register from './Register.js';


const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // For selected product
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal state

  // Sample data for product specifications
  const productSpecifications = {
    "Bouquet of Roses": "This bouquet includes a dozen fresh red roses. Perfect for romantic gestures.",
    "Spring Flower Bouquet": "A colorful arrangement of tulips, lilies, and daffodils, perfect for spring celebrations.",
    "Sunflower Arrangement": "A bouquet of bright, cheerful sunflowers that will light up any room.",
    "snapdragon": "A luxurious bouquet of snapdragons that showcases elegance and beauty.",
    "Tropical Bliss": "This bouquet features exotic flowers from tropical regions.",
    "Sweet Peony": "Beautifully arranged peonies, perfect for any celebration.",
    "Elegant White": "A classic bouquet of white lilies and roses, ideal for weddings and formal events.",
    "Autumn Splendor": "Warm-toned flowers to represent the colors of autumn.",
    "Romantic Whispers": "A romantic combination of soft pink roses and baby's breath.",
    "Spring Serenity Bouquet": "Calm, pastel flowers in a serene arrangement.",
    "Sunny Delight": "Bright yellow flowers for a joyful atmosphere.",
    "Lavender Dreams": "Soothing lavender flowers that bring a sense of calm."
  };

  // Function to show the specification
  const showSpecification = (productName) => {
    setSelectedProduct(productName);
    setIsModalOpen(true); // Open modal with specifications
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null); // Clear selected product
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Blooming Bliss Flower Bouquets !</h1>
        <p>Find the perfect bouquet for every occasion.</p>
      </header>
      
      <section className="home-intro">
        <h2>Our Specialties</h2>
        <p>We offer a wide range of fresh flowers and custom bouquets made to order.</p>
        <p>Order today and make someone's day bloom with happiness!</p>
      </section>
      
      <div className="home-actions">
        <Link to="/products" className="btn">
          Shop Now
        </Link>
        <Link to="/register" className="btn">
          Signup
        </Link>
       
        <Link to="/about" className="btn">
          About Us
        </Link>
      </div>

      <section className="products-section">
        <h2>Featured Products</h2>
        <div className="products-container">
          {/* Example Product 1 */}
          <div className="product-card">
            <img src="flower1.jpeg" alt="Bouquet 1" className="product-image" />
            <h3>Bouquet of Roses</h3>
            <p>Price: $25.00</p>
            <p className="product-offer">Special Offer: 10% off</p>
            <button className="btn-add-to-cart" onClick={() => showSpecification('Bouquet of Roses')}>Specifications</button>
          </div>

          {/* Example Product 2 */}
          <div className="product-card">
            <img src="flower3.jpeg" alt="Bouquet 2" className="product-image" />
            <h3>Spring Flower Bouquet</h3>
            <p>Price: $30.00</p>
            <p className="product-offer">Special Offer: 12%</p>
            <button className="btn-add-to-cart" onClick={() => showSpecification('Spring Flower Bouquet')}>Specifications</button>
          </div>
           {/* Example Product 3 */}
           <div className="product-card">
            <img src="flower6.jpeg" alt="Bouquet 3" className="product-image" />
            <h3>Sunflower Arrangement</h3>
            <p>Price: $20.00</p>
            <p className="product-offer">Special Offer: 20%</p>
            <button className="btn-add-to-cart" onClick={() => showSpecification('Sunflower Arrangement')}>Specifications</button>
      </div>

          <div className="product-card">
            <img src="img2.jpg" alt="Bouquet 3" className="product-image" />
            <h3>snapdragon</h3>
            <p>Price: $400.00</p>
            <p className="product-offer">Special Offer: NO offer</p>
            <button className="btn-add-to-cart" onClick={() => showSpecification('snapdragon')}>Specifications</button>

          </div>
        </div>
      </section>

      <section className="products-section">
        <h2>"You belong among the wildflowers"</h2>
        <div className="products-container">
          {/* Example Product 1 */}
          <div className="product-card">
            <img src="img.jpg" alt="Bouquet 1" className="product-image" />
            <h3>Tropical Bliss</h3>
            <p>Price: $250.00</p>
            <p className="product-offer">Special Offer: 30% off</p>
            <button className="btn-add-to-cart" onClick={() => showSpecification('Tropical Bliss')}>Specifications</button>
     
              </div>

          {/* Example Product 2 */}
          <div className="product-card">
            <img src="img2.jpg" alt="Bouquet 2" className="product-image" />
            <h3>Sweet Peony</h3>
            <p>Price: $300.00</p>
            <p className="product-offer">Special Offer: Buy 1 Get 1 Free</p>
            <button className="btn-add-to-cart" onClick={() => showSpecification('Sweet Peony')}>Specifications</button>

          </div>


          {/* Example Product 3 */}
          <div className="product-card">
            <img src="img3.jpg" alt="Bouquet 3" className="product-image" />
            <h3>Elegant White</h3>
            <p>Price: $210.00</p>
            <p className="product-offer">Special Offer: Free Delivery</p>
            <button className="btn-add-to-cart" onClick={() => showSpecification('Elegant White')}>Specifications</button>   
             </div>

          <div className="product-card">
            <img src="img4.jpg" alt="Bouquet 3" className="product-image" />
            <h3>Autumn Splendor</h3>
            <p>Price: $200.00</p>
            <p className="product-offer">Special Offer: 12%</p>
            <button className="btn-add-to-cart" onClick={() => showSpecification('Autumn Splendor')}>Specifications</button>
            </div>
        </div>
      </section>

      <section className="products-section">
        <h2>Flora Heaven Make you feels as New Bloom's</h2>
        <div className="products-container">
          {/* Example Product 1 */}
          <div className="product-card">
            <img src="images 5.jpg" alt="Bouquet 1" className="product-image" />
            <h3>Romantic Whispers</h3>
            <p>Price: $50.00</p>
            <p className="product-offer">Special Offer: 10% off </p>
            <button className="btn-add-to-cart" onClick={() => showSpecification('Romantic Whispers')}>Specifications</button>
     
              </div>

          {/* Example Product 2 */}
          <div className="product-card">
            <img src="images 3.jpg" alt="Bouquet 2" className="product-image" />
            <h3>Spring Serenity Bouquet</h3>
            <p>Price: $90.00</p>
            <p className="product-offer">Special Offer: 5% </p>
            <button className="btn-add-to-cart" onClick={() => showSpecification('Spring Serenity Bouquet')}>Specifications</button>

          </div>

          {/* Example Product 3 */}
          <div className="product-card">
            <img src="images 7.jpg" alt="Bouquet 3" className="product-image" />
            <h3>Sunny Delight </h3>
            <p>Price: $200.00</p>
            <p className="product-offer">Special Offer: No offer</p>
            <button className="btn-add-to-cart" onClick={() => showSpecification('Sunny Delight')}>Specifications</button>
       
             </div>

          <div className="product-card">
            <img src="images 8.jpg" alt="Bouquet 3" className="product-image" />
            <h3>Lavender Dreams</h3>
            <p>Price: $120.00</p>
            <p className="product-offer">Special Offer: 9%</p>
            <button className="btn-add-to-cart" onClick={() => showSpecification('Lavender Dreams')}>Specifications</button>

           </div>
        </div>
      </section>

      {/* Specification Modal */}
      {isModalOpen && (
        <div className="spec-modal">
          <div className="spec-modal-content">
            <h2>Product Specifications</h2>
            <p>{selectedProduct}: {productSpecifications[selectedProduct]}</p>
            <button onClick={closeModal} className="btn-close-modal">Close</button>
          </div>
        </div>
      )}

       <div class="about-us-container">
  
  <div class="about-us-left">
    <h2>Our Address</h2>
    <p>Flower Shop Inc.</p>
    <p>123 Blossom Street</p>
    <p>Garden City, FL 12345</p>
    <p>Email: contact@flowershop.com</p>
    <p>Phone: (123) 456-7890</p>
  </div>

  
  <div class="about-us-right">
    <h3>Follow Us</h3>
    <div class="social-icons">
     
      <a href="" target="_blank" title="Follow us on Instagram">🌸 Instagram : flower_AS</a>
      <a href="" target="_blank" title="Follow us on Twitter">🐦 Twitter :flower_AS</a>
      
    </div>
  </div>
</div>


    </div>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
