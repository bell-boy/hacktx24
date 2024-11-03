// app/preview_page.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Preview() {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col items-center justify-center bg-stone-800 font-sans-serif">
      <header className="fixed top-0 w-full bg-stone-900 text-white p-5 text-center w-full flex items-center justify-center space-x-2">
        {/* PNG Logo */}
        <Image
          src="/casemindlogo.png" // Path to the PNG file
          alt="Logo"
          width={50} // Adjust width as needed
          height={50} // Adjust height as needed
          className="align-bottom"
        />
        <h1 className="text-3xl font-bold">casemind.tech</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h2 className="text-gray-100 text-2xl font-semibold">Your Legal Assistant</h2>
        <p className="mt-2 text-gray-100 text-center max-w-lg">
          casemind.tech is a legal assistant, designed specifically to engage in conversations of constitutional law.
        </p>
        <Link href="/chat" className="mt-4 p-2 bg-stone-900 text-white rounded hover:bg-stone-900 transition duration-200">
          Start Chatting
        </Link>
      </main>
    </div>
  );
}
