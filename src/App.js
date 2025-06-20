import React, { useState } from 'react';
import './App.css';

// Components
import ShippingForm from './ShippingFrom';
import SenderForm from './SenderForm';
import ShippingLabel from './ShippingLabel';

function App() {
  const [sender, setSender] = useState({
    name: 'VIVA Leisure',
    attention: 'Puskar Adhikari',
    address: 'Level 3, 23 Challis Street, Dickson, ACT, 2602',
    phone: '(02) 6198 8733'
  });

  const [receiver, setReceiver] = useState(null);

  const handleReceiverSubmit = (data) => {
    setReceiver(data);
  };

  const handleSenderChange = (updatedSender) => {
    setSender(updatedSender);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <img src="/logo.png" alt="Viva Leisure Logo" className="logo" />
        <h1 className="title">Generate Shipping Label</h1>
      </header>

      {/* Main Content */}
      <main className="content">
        {/* Sender Form */}
        <SenderForm sender={sender} onChange={handleSenderChange} />

        {/* Receiver Form */}
        <ShippingForm onSubmit={handleReceiverSubmit} />

        {/* Display Label */}
        {receiver && (
          <ShippingLabel
            senderName={sender.name}
            senderAttention={sender.attention}
            senderAddress={sender.address}
            senderPhone={sender.phone}

            receiverName={receiver.name}
            receiverAttention={receiver.attention}
            receiverAddress={receiver.address}
            receiverPhone={receiver.phone}
            receiverEmail={receiver.email}
          />
        )}
      </main>
    </div>
  );
}

export default App;