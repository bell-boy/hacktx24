'use client';

import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-800 text-gray-100 font-sans">
      <div className="text-center">
        {/* Bouncing logo */}
        <div className="animate-bounce mb-4 flex justify-center">
          <Image
            src="/gaveled.png" // Ensure this file exists in the public directory
            alt="Loading Logo"
            width={60} // Adjust size as neededs
            height={60} // Adjust size as needed
            priority // Ensure it loads quickly
          />
        </div>
        <p className="text-xl">Loading...</p>
      </div>
    </div>
  );
}
