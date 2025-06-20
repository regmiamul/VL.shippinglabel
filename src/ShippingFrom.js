import React, { useState } from 'react';

const ShippingForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    attention: '', // New field
    phone: '',
    address: '',
    email: '' // New field
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!form.name.trim()) {
      setError('Receiver name is required.');
      return;
    }

    if (!form.address.trim()) {
      setError('Receiver address is required.');
      return;
    }

    // Optional: Validate phone number format
    const phoneRegex = /^[0-9\s+\-()]{7,}$/;
    if (form.phone && !phoneRegex.test(form.phone)) {
      setError('Please enter a valid phone number.');
      return;
    }

    // Clear errors
    setError('');

    // Submit valid data
    onSubmit({
      name: form.name.trim(),
      attention: form.attention.trim(), // Include attention
      phone: form.phone.trim(),
      address: form.address.trim(),
      email: form.email.trim() // Include email
    });

    // Optionally reset form after submit
    // setForm({ name: '', attention: '', phone: '', address: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>Receiver Details</h2>

      {error && <p style={{ color: 'red' }}><strong>Error:</strong> {error}</p>}

      <div style={{ marginBottom: '10px' }}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
          style={{ marginLeft: '10px', width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Attention (Attn):</label>
        <input
          type="text"
          name="attention"
          value={form.attention}
          onChange={handleChange}
          placeholder="John"
          style={{ marginLeft: '10px', width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="e.g. +61 412 345 678"
          style={{ marginLeft: '10px', width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Address:</label>
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="123 Street Name, City, State, ZIP"
          required
          style={{ marginLeft: '10px', width: '100%', height: '80px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="hello@world.com"
          style={{ marginLeft: '10px', width: '100%' }}
        />
      </div>

      <button type="submit" style={{ padding: '10px 20px' }}>Generate Label</button>
    </form>
  );
};

export default ShippingForm;