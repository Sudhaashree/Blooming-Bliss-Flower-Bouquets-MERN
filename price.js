const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 7001;  // You can change this port if needed

// Middleware setup
app.use(cors());  // Allows cross-origin requests
app.use(bodyParser.json());  // Parses incoming JSON requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/flower-shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define the Order schema
const orderSchema = new mongoose.Schema({
    flowerName: { type: String, required: true },
    quantity: { type: Number, required: true },
    pricePerUnit: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    orderPhoneNumber: { type: String, required: true },
    orderDate: { type: String, required: true },
    orderTime: { type: String, required: true }
});

// Create the Order model based on the schema
const Order = mongoose.model('Order', orderSchema);

// Endpoint to handle order submission
app.post('/api/order', async (req, res) => {
    try {
        // Extract order details from the request body
        const { flowerName, quantity, pricePerUnit, totalPrice, orderPhoneNumber } = req.body;

        // Get the current date and time for the order
        const currentDate = new Date();
        const orderDate = currentDate.toLocaleDateString();  // Format: MM/DD/YYYY
        const orderTime = currentDate.toLocaleTimeString();  // Format: HH:MM:SS AM/PM

        // Create a new order document
        const newOrder = new Order({
            flowerName,
            quantity,
            pricePerUnit,
            totalPrice,
            orderPhoneNumber,
            orderDate,
            orderTime
        });

        // Save the order to the database
        await newOrder.save();

        // Send a success response
        res.status(201).json({ message: 'Order placed successfully' });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ message: 'Error placing order', error });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
