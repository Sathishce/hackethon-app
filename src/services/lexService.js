import axios from 'axios';
import ChatMessage from '../models/ChatModel';

const LEX_API_URL = process.env.REACT_APP_API_GATEWAY_URL; // Assuming the backend exposes Lex API via API Gateway

export const sendMessageToLex = async (userMessage) => {
  try {
    const response = await axios.post(`${LEX_API_URL}/sendMessage`, {
      message: userMessage,
    });

    // Convert user and bot responses into instances of ChatMessage
    const userChatMessage = new ChatMessage({ sender: 'user', message: userMessage });
    const botChatMessage = new ChatMessage({
      sender: 'bot',
      message: response.data.message, // The message from Lex
    });

    return [userChatMessage, botChatMessage];
  } catch (error) {
    console.error('Error communicating with AWS Lex:', error);
    throw error;
  }
};
