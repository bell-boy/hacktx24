// app/layout.tsx
import React from 'react';
import './globals.css'; // Optional: Include any global CSS here

export const metadata = {
  title: 'legalQ.tech',
  description: 'Welcome to legalQ.tech, a legal assistant in the palm of your hands',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
