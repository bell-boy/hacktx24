'use client';
import { useState, useEffect, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import Image from 'next/image';
import '@/styles/custom.css';
import ReactMarkdown from 'react-markdown';

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const allMessages = [...messages, { text: input, isUser: true }];
      setMessages(allMessages);
      setInput("");
      setIsLoading(true);
      try {
        // Send the input to the Flask server
        const response = await fetch("http://137.184.44.223:8000/query", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({"messages": allMessages.map((message) => {
            const roleString = message.isUser ? "user" : "assistant";
            return { "role" : roleString , "content": message.text }
          })}),
        });

        if (response.ok) {
          const data = await response.json(); // Expecting JSON response from the server
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: data.reply || "Server response received", isUser: false },
          ]);
        } else {
          console.error("Server error:", response.statusText);
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "Error: Unable to get response from the server.", isUser: false },
          ]);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Error: Failed to connect to the server.", isUser: false },
        ]);
      }
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Scroll to the bottom of the chat when messages are updated
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-900 text-gray-100 font-sans">
      <header className="fixed top-0 w-full bg-stone-900 text-white p-4 text-center flex items-center justify-center space-x-2 z-10">
        <Image
          src="/casemindlogo.png"
          alt="Logo"
          width={50}
          height={50}
          className="align-bottom"
        />
        <h1 className="text-3xl font-bold">Paralegal.tech</h1>
      </header>

      <div className="flex-grow pt-20 pb-40 overflow-y-auto space-y-4 p-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`inline-block p-3 rounded-lg shadow-md ${message.isUser
                ? 'bg-stone-800 text-white rounded-br-none'
                : 'bg-stone-700 text-white rounded-bl-none'
                }`}
              style={{ maxWidth: '70%' }}
            >
              {/* Render Markdown here */}
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="loading-dots bg-stone-700 text-white p-3 rounded-lg shadow-md">
              <div className="dot-flashing"></div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

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
            className="ml-2 h-10 w-10 bg-stone-900 text-white rounded-full flex items-center justify-center hover:bg-stone-700 transition duration-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7 7 7M12 3v18" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
