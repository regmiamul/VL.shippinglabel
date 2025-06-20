// src/components/SenderForm.js
import React from 'react';

const SenderForm = ({ sender, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...sender, [name]: value });
  };

  return (
    <div style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px' }}>
      <h2>Sender Details</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={sender.name}
          onChange={handleChange}
          placeholder="VIVA Leisure"
          style={{ marginLeft: '10px', width: '80%' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phone"
          value={sender.phone}
          onChange={handleChange}
          placeholder="e.g. +61 412 345 678"
          style={{ marginLeft: '10px', width: '80%' }}
        />
      </div>

      <div>
        <label>Address:</label>
        <textarea
          name="address"
          value={sender.address}
          onChange={handleChange}
          placeholder="23 Challis Street Dickson ACT"
          style={{ marginLeft: '10px', width: '80%', height: '60px' }}
        />
      </div>
    </div>
  );
};

export default SenderForm;