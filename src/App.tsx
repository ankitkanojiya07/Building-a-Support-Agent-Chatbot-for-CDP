import React from 'react';
import ChatContainer from './components/ChatContainer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-500 text-white p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-more">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M8 10h.01" />
                <path d="M12 10h.01" />
                <path d="M16 10h.01" />
              </svg>
            </div>
            <h1 className="text-xl font-bold">CDP Support Agent</h1>
          </div>
          <div className="text-sm text-gray-500">
            Powered by CDP Documentation
          </div>
        </div>
      </header>
      
      <main className="flex-1 max-w-7xl w-full mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-[calc(100vh-8rem)]">
          <ChatContainer />
        </div>
      </main>
      
      <footer className="bg-white py-3 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          CDP Support Agent Chatbot - Assignment 2 - 2025
        </div>
      </footer>
    </div>
  );
}

export default App;