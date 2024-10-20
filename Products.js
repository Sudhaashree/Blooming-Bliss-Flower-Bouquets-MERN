import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css'; 

const OrderPlacement = () => {
  // State variables for managing inputs and price calculations
  const [flowerName, setFlowerName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [pricePerUnit, setPricePerUnit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderPhoneNumber, setOrderPhoneNumber] = useState(''); // Add phone number for order
  const [registeredPhoneNumber, setRegisteredPhoneNumber] = useState(''); // For comparison
  const [orderDate, setOrderDate] = useState(''); // State to store order date
  const [orderTime, setOrderTime] = useState(''); // State to store order time

  // Prices for flowers
  const flowerPrices = {
    "Roses": 100,
    "Lilly": 200,
    "Jasmine": 9000,
    "Tulip": 150,
    "Daisy": 80,
    "Sunflower": 120,
    "Orchid": 300,
    "Nosegay Bouquet": 500,
    "Pomander Bouquet": 1500,
    "Biedermeier Bouquet": 1000
  };

  // On mount, retrieve the registered phone number from local storage
  useEffect(() => {
    const phone = localStorage.getItem('phoneNumber'); // Assuming phone number is stored during registration/login
    if (phone) {
      setRegisteredPhoneNumber(phone);
    }
  }, []);

  // Update price when a flower is selected
  const updatePrice = (event) => {
    const selectedFlower = event.target.value;
    setFlowerName(selectedFlower);
    const newPricePerUnit = flowerPrices[selectedFlower] || 0;
    setPricePerUnit(newPricePerUnit);
    updateTotalPrice(quantity, newPricePerUnit);
  };

  // Update the total price when quantity or price changes
  const updateTotalPrice = (quantity, unitPrice) => {
    const total = quantity * unitPrice;
    setTotalPrice(total);
  };

  // Handle quantity change
  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
    updateTotalPrice(newQuantity, pricePerUnit);
  };

  // Function to place the order and send the data to the backend
  const placeOrder = async () => {
    try {
      // Check if the order phone number matches the registered phone number
      if (orderPhoneNumber !== registeredPhoneNumber) {
        alert('Phone number does not match. Please use the registered phone number.');
        return;
      }

      // Capture the current date and time
      const currentDate = new Date();
      const orderDate = currentDate.toLocaleDateString(); // Format: MM/DD/YYYY
      const orderTime = currentDate.toLocaleTimeString(); // Format: HH:MM:SS AM/PM

      // Create the order data object to send
      const orderData = {
        flowerName,
        quantity,
        pricePerUnit,
        totalPrice,
        orderPhoneNumber, // Send the phone number with the order
        orderDate, // Add order date to the data
        orderTime  // Add order time to the data
      };

      // Send the order data to the backend
      const response = await axios.post('http://localhost:7001/api/order', orderData);
      
      // Show success message if the order is placed successfully
      alert(`Your order has been placed successfully on ${orderDate} at ${orderTime}!`);
      
      // Redirect or reset the form after order is placed
      window.location.href = "/";
    } catch (error) {
      // Show error message in case of failure
      alert('Error placing order. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Place Your Order</h1>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          value={orderPhoneNumber}
          onChange={(e) => setOrderPhoneNumber(e.target.value)} // Capture phone number for order
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="flower-name">Flower Name</label>
        <select id="flower-name" value={flowerName} onChange={updatePrice}>
          <option value="">Select a flower</option>
          <option value="Roses">Roses</option>
          <option value="Lilly">Lilly</option>
          <option value="Jasmine">Jasmine</option>
          <option value="Tulip">Tulip</option>
          <option value="Daisy">Daisy</option>
          <option value="Sunflower">Sunflower</option>
          <option value="Orchid">Orchid</option>
          <option value="Nosegay Bouquet">Nosegay Bouquet</option>
          <option value="Pomander Bouquet">Pomander Bouquet</option>
          <option value="Biedermeier Bouquet">Biedermeier Bouquet</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          min="1"
          onChange={handleQuantityChange}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="price-per-unit">Price per Unit ($)</label>
        <input type="text" id="price-per-unit" value={pricePerUnit} readOnly />
      </div>
      <div className="total-price">Total Price: ${totalPrice}</div>
      <button className="place-order-btn" onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
};

export default OrderPlacement;
