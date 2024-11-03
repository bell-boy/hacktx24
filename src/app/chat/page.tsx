// app/chat.tsx
'use client';
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

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
    <div className="min-h-screen flex flex-col bg-grey-100 font-sans text-gray-800">
      {/* Fixed Header */}
      <header className="fixed top-0 w-full bg-indigo-950 text-white p-4 text-center shadow-md z-10">
        <h1 className="text-xl font-semibold">casemind.tech</h1>
      </header>

      {/* Chat Messages Area */}
      <div className="flex-grow pt-16 pb-20 overflow-y-auto space-y-4 p-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg shadow-md max-w-[80%] ${
              message.isUser
                ? 'bg-indigo-950 text-white self-end text-right' // User's message on the right
                : 'bg-gray-200 text-black self-start text-left' // Chatbot's message on the left
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      {/* Fixed Input Area */}
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full bg-grey-100 p-4 flex items-center justify-center shadow-inner"
      >
        <div className="flex items-center w-full max-w-3xl bg-white rounded-lg shadow-lg p-2">
          <Textarea
            className="flex-grow h-10 p-3 rounded-lg border-none focus:ring-0"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="ml-2 h-10 w-10 bg-indigo-950 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition duration-150"
          >
            h
          </button>
        </div>
      </form>
    </div>
  );
}
