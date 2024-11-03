// app/preview_page.tsx
'use client';

import '@/styles/custom.css';
import { useState } from 'react';
import Image from 'next/image';


export default function Preview() {
  const [isLoading, setIsLoading] = useState(false);

  const handleStartChat = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = '/chat';
    }, Math.random()*2500 + 500);
  };

  return (
    <div className="min-h-screen overflow-hidden flex flex-col items-center justify-center bg-stone-800 font-sans">
      {isLoading ? (
        <div className="min-h-screen flex items-center justify-center bg-stone-800 text-gray-100">
          <div className="text-center">
            <div className="animate-gavel mb-4 flex justify-center">
              <Image
                src="/gaveled.png" // Ensure this file exists in the public directory
                alt="Loading Logo"
                width={120}
                height={120}
                priority
              />
            </div>
            <p className="text-xl">Almost There!</p>
          </div>
        </div>
      ) : (
        <>
          {/* Fixed Header */}
          <header className="fixed top-0 w-full bg-stone-900 text-white p-5 text-center flex items-center justify-center space-x-2">
            <Image
              src="/casemindlogo.png"
              alt="Logo"
              width={50}
              height={50}
              className="align-bottom"
            />
            <h1 className="text-3xl font-Bold">Paralegal.tech</h1>
          </header>

          {/* Main Content */}
          <main className="flex-grow flex flex-col items-center justify-center p-4">
            <h2 className="text-gray-100 text-2xl font-semibold">Your Legal Assistant</h2>
            <p className="mt-2 text-gray-100 text-center max-w-lg">
              legalQ.tech is a legal assistant, designed specifically to engage in conversations of constitutional law.
            </p>
            <button
              onClick={handleStartChat}
              className="mt-4 px-6 py-3 bg-stone-900 text-white rounded hover:bg-stone-700 transition duration-200"
            >
              Start Chatting
            </button>
          </main>
        </>
      )}
    </div>
  );
}
