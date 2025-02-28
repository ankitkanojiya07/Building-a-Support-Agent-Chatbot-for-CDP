import React from 'react';
import { Message } from '../types';
import { MessageCircle, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex w-full mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex items-center justify-center h-10 w-10 rounded-full ${isUser ? 'bg-blue-500 ml-3' : 'bg-gray-300 mr-3'}`}>
          {isUser ? <MessageCircle size={20} className="text-white" /> : <Bot size={20} className="text-gray-700" />}
        </div>
        <div className={`py-3 px-4 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
          {isUser ? (
            <p>{message.content}</p>
          ) : (
            <div className="prose prose-sm max-w-none">
              <ReactMarkdown>{message.content}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;