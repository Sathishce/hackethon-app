import React, { useState } from 'react';
import ChatMessage from '../models/ChatModel';
import { sendMessageToLex } from '../services/lexService'; // Import the Lex service

const ChatBox = () => {
  const [messages, setMessages] = useState([]); // Array of ChatMessage instances
  const [currentMessage, setCurrentMessage] = useState('');

  const sendMessage = async () => {
    if (!currentMessage.trim()) return;

    // Create a new user message
    const newUserMessage = new ChatMessage({ sender: 'user', message: currentMessage });

    // Add user message to chat
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);

    try {
      // Get response from Lex
      const [userMessage, botMessage] = await sendMessageToLex(currentMessage);

      // Add bot message to chat
      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error sending message to Lex:', error);
      const errorMessage = new ChatMessage({
        sender: 'bot',
        message: 'Sorry, there was an error. Please try again.',
      });
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    // Clear the input field after sending the message
    setCurrentMessage('');
  };

  return (
    <div className="chat-box">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <p key={index} className={msg.isUser() ? 'user-message' : 'bot-message'}>
            {msg.getFormattedMessage()}
          </p>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
