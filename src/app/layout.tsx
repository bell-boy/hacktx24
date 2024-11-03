// app/layout.tsx
import React from 'react';
import './globals.css'; // Optional: Include any global CSS here

export const metadata = {
  title: 'casemind.tech',
  description: 'Welcome to casemind.tech, your simple chat application',
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
