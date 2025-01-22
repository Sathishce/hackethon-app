class ChatMessage {
    constructor({ sender, message }) {
      this.sender = sender; // "user" or "bot"
      this.message = message; // Message content
    }
  
    // Helper to check if the sender is the user
    isUser() {
      return this.sender === 'user';
    }
  
    // Helper to format the message
    getFormattedMessage() {
      return this.isUser() ? `You: ${this.message}` : `Neuronauts: ${this.message}`;
    }
  }
  
  export default ChatMessage;
  