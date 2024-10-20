const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors()); // To allow cross-origin requests
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/flower-shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Define the registration schema
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    city: String,
    state: String,
    phoneNumber: String,
    gender: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

// Register route
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, city, state, phoneNumber, gender, password } = req.body;

        // Create new user
        const newUser = new User({ name, email, city, state, phoneNumber, gender, password });

        // Save to the database
        await newUser.save();

        res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
});

// Start the server
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
