// app/preview_page.tsx
'use client';
import Link from 'next/link';

export default function Preview() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sky-900 font-sans-serif">
      <header className="bg-sky-950 text-white p-5 text-center w-full">
        <h1 className="text-3xl font-bold">casemind.tech</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h2 className="text-gray-100 text-2xl font-semibold">Your Legal Assistant</h2>
        <p className="mt-2 text-gray-100 text-center max-w-lg">
          Legalis.tech is a legal assistant, designed specifically to engage in conversations of constitutional law. 
        </p>
        <Link href="/chat" className="mt-4 p-2 bg-sky-950 text-white rounded hover:bg-sky-950 transition duration-200">
          Start Chatting
        </Link>
      </main>
    </div>
  );
}
