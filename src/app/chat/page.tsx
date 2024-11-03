// app/chat.tsx
'use client';

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import Image from 'next/image';
import '@/styles/custom.css'; // Import the custom CSS file here

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput("");

      // Mock chatbot response after a short delay (for demo purposes)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is a response from the chatbot.", isUser: false },
        ]);
      }, 500);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-900 text-gray-100 font-sans">
      {/* Fixed Header */}
      <header className="fixed top-0 w-full bg-stone-900 text-white p-4 text-center w-full flex items-center justify-center space-x-2 z-10">
        <Image
          src="/casemindlogo.png" // Path to the PNG file
          alt="Logo"
          width={50} // Adjust width as needed
          height={50} // Adjust height as needed
          className="align-bottom"
        />
        <h1 className="text-3xl font-bold">casemind.tech</h1>
      </header>

      {/* Chat Messages Area */}
      <div className="flex-grow pt-20 pb-24 overflow-y-auto space-y-4 p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`inline-block p-3 rounded-lg shadow-md ${message.isUser
                ? 'bg-stone-800 text-white rounded-br-none' // User's message on the right
                : 'bg-stone-700 text-white rounded-bl-none' // Chatbot's message on the left
                }`}
              style={{ maxWidth: '70%' }}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Input Area */}
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full bg-stone-800 p-4 flex items-center justify-center shadow-inner z-10"
      >
        <div className="flex items-center w-full max-w-3xl bg-stone-700 rounded-lg shadow-lg p-2">
          <Textarea
            className="flex-grow h-10 p-3 rounded-lg border-none bg-transparent text-white placeholder-stone-700 focus:ring-0 focus:border-none outline-none shadow-none resize-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
          />

          <button
            type="submit"
            className="ml-1000 h-10 w-10 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-stone-700 transition duration-150 -ml-20"
          >
            {/* Up arrow icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7 7 7M12 3v18" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
