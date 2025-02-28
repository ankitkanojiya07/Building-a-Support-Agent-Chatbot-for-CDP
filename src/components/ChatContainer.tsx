import React, { useState, useCallback } from 'react';
import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';
import CDPSelector from './CDPSelector';
import { Message, CDP } from '../types';
import { createMessage, getMockResponse } from '../utils/chatUtils';

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCDP, setSelectedCDP] = useState<CDP | null>(null);

  const handleSendMessage = useCallback(async (content: string) => {
    // Add user message
    const userMessage = createMessage('user', content);
    setMessages((prev) => [...prev, userMessage]);
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // In a real application, this would be an API call to a backend service
      // that would process the question and return a response
      // For this demo, we'll use a mock response
      
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Get mock response
      const responseContent = getMockResponse(content);
      
      // Add assistant message
      const assistantMessage = createMessage('assistant', responseContent);
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      const errorMessage = createMessage(
        'assistant',
        'Sorry, I encountered an error while processing your request. Please try again.'
      );
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSelectCDP = useCallback((cdp: CDP) => {
    setSelectedCDP(cdp);
    
    // Add a system message about the selected CDP
    const systemMessage = createMessage(
      'assistant',
      `You've selected ${cdp === 'all' ? 'to compare all CDPs' : `to focus on ${cdp}`}. How can I help you with ${cdp === 'all' ? 'these platforms' : 'this platform'}?`
    );
    setMessages((prev) => [...prev, systemMessage]);
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-gray-200 p-4">
        <h1 className="text-xl font-bold mb-2">CDP Support Agent</h1>
        <CDPSelector selectedCDP={selectedCDP} onSelectCDP={handleSelectCDP} />
      </div>
      <ChatHistory messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatContainer;