import React, { useRef, useEffect } from 'react';
import { Message } from '../types';
import ChatMessage from './ChatMessage';

interface ChatHistoryProps {
  messages: Message[];
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
          <h2 className="text-2xl font-bold mb-2">CDP Support Agent</h2>
          <p className="max-w-md">
            Ask me how-to questions about Segment, mParticle, Lytics, or Zeotap. I can help you understand how to perform specific tasks in these platforms.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="font-medium text-gray-700">Example questions:</p>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>"How do I set up a new source in Segment?"</li>
                <li>"How can I create a user profile in mParticle?"</li>
                <li>"How do I build an audience segment in Lytics?"</li>
                <li>"How can I integrate my data with Zeotap?"</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="font-medium text-gray-700">Advanced questions:</p>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>"How does Segment's audience creation compare to Lytics'?"</li>
                <li>"What are the differences between mParticle and Zeotap?"</li>
                <li>"Which CDP is best for real-time data processing?"</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        messages.map((message) => <ChatMessage key={message.id} message={message} />)
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatHistory;