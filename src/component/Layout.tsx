import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-800">
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-blue-700 tracking-tight">Dashlap</h1>
          <nav>
            <ul className="flex gap-6 text-sm font-medium">
              <li><a href="/" className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="/loginpage" className="hover:text-blue-600 transition-colors">Login</a></li>
              <li><a href="/registerpage" className="hover:text-blue-600 transition-colors">Register</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-200 text-center py-6 text-sm text-gray-500">
        &copy; 2025 Dashlap. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
