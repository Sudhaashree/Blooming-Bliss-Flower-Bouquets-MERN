import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Make sure to include your CSS for styling

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        state: '',
        phoneNumber: '',
        gender: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');
    
    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate if passwords match
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        // Clear previous error messages
        setError('');

        try {
            // Send a POST request to the backend
            const response = await axios.post('http://localhost:8001/api/register', formData);
            
            // Store the phone number in local storage
            localStorage.setItem('phoneNumber', formData.phoneNumber);

            // Show success message
            alert('Registration successful! Welcome ' + formData.name);
            
            // Optional: Redirect user to a different page after registration
            window.location.href = "/login"; // Change to the desired route

            // Reset form fields
            setFormData({
                name: '',
                email: '',
                city: '',
                state: '',
                phoneNumber: '',
                gender: '',
                password: '',
                confirmPassword: '',
            });
        } catch (err) {
            setError('Error registering user: ' + err.response?.data?.message || err.message);
        }
    };

    return (
        <div className="container">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="state">State</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Register</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
};

export default RegistrationPage;
