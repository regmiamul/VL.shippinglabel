import React from 'react';

const ShippingLabel = ({ senderName, senderAttention, senderAddress, senderPhone, receiverName, receiverAttention, receiverAddress, receiverPhone, receiverEmail }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="shipping-label"
      style={{
        fontFamily: "'IBM Plex Mono Nerd Font', monospace",
        maxWidth: '600px',
        width: '100%',
        margin: '40px auto',
        padding: '30px',
        backgroundColor: '#000',
        color: '#fff',
        border: '2px solid #fff',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        boxSizing: 'border-box',
        whiteSpace: 'pre-wrap' // Preserve line breaks
      }}
    >
      {/* To Section */}
      <div style={{ marginBottom: '30px' }}>
        <p>To,</p>
        <p>{receiverName}</p>
        <p>{receiverAddress}</p>
        {receiverAttention && <p>Attn: {receiverAttention}</p>}
        <p>Contact number: {receiverPhone || 'N/A'}</p>
        {receiverEmail && <p>Email: {receiverEmail}</p>}
      </div>

      {/* From Section */}
      <div>
        <p>From,</p>
        <p>{senderName}</p>
        {senderAttention && <p>ATT: {senderAttention}</p>}
        <p>{senderAddress}</p>
        <p>Contact number: {senderPhone || 'N/A'}</p>
      </div>

      {/* Print Button */}
      <div style={{
        textAlign: 'center',
        marginTop: '30px'
      }}>
        <button
          onClick={handlePrint}
          className="no-print"
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: 'bold',
            border: '2px solid #fff',
            backgroundColor: '#000',
            color: '#fff',
            cursor: 'pointer',
            borderRadius: '6px',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#111'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#000'}
        >
          Print Label
        </button>
      </div>
    </div>
  );
};

export default ShippingLabel;