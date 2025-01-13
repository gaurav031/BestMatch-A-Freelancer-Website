// ChatbotWidget.js
import React, { useState } from 'react';
import './ChatbotWidget.css'; // Create this CSS file for styling

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { type: 'user', text: input }]);
      setInput('');
      // Simulate a bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'bot', text: "I'm here to help you!" }]);
      }, 1000);
    }
  };

  return (
    <div className="chatbot-widget">
      <button className="chatbot-icon" onClick={toggleWidget}>
        💬
      </button>
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h4>Chatbot</h4>
            <button onClick={toggleWidget}>&times;</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.type === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
