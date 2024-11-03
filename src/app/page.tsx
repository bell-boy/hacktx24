// app/preview_page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Preview() {
  const [isLoading, setIsLoading] = useState(false);

  const handleStartChat = () => {
    setIsLoading(true); // Show loading screen
    setTimeout(() => {
      window.location.href = '/chat'; // Redirect to chat page after loading
    }, 2000); // Display loading for 2 seconds
  };

  return (
    <div className="min-h-screen overflow-hidden flex flex-col items-center justify-center bg-stone-800 font-sans">
      {isLoading ? (
        <div className="min-h-screen flex items-center justify-center bg-stone-800 text-gray-100">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-300 mx-auto mb-4"></div>
            <p className="text-xl">Loading...</p>
          </div>
        </div>
      ) : (
        <>
          {/* Fixed Header */}
          <header className="fixed top-0 w-full bg-stone-900 text-white p-5 text-center flex items-center justify-center space-x-2">
            <Image
              src="/casemindlogo.png" // Path to the PNG file
              alt="Logo"
              width={50} // Adjust width as needed
              height={50} // Adjust height as needed
              className="align-bottom"
            />
            <h1 className="text-3xl font-bold">casemind.tech</h1>
          </header>

          {/* Main Content */}
          <main className="flex-grow flex flex-col items-center justify-center p-4">
            <h2 className="text-gray-100 text-2xl font-semibold">Your Legal Assistant</h2>
            <p className="mt-2 text-gray-100 text-center max-w-lg">
              casemind.tech is a legal assistant, designed specifically to engage in conversations of constitutional law.
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
