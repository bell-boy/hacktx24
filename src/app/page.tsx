'use client'
import { useState } from "react";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="mb-2 p-2 border rounded">
            {message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="self-end mx-auto w-full max-w-3xl flex">
        <Textarea
          className="min-h-[24px] flex-grow"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
          Send
        </button>
      </form>
    </div>
  );
}
