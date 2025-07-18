import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Loading = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="relative z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">
                REVOLUT
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Personal
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Business
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Revolut Pro
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Company
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Help
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-6 py-2 text-gray-700 hover:text-green-600 font-medium transition-colors">
                Log in
              </button>
              <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium">
                Sign up
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-green-600 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-green-600 font-medium transition-colors">
                Personal
              </a>
              <a href="#" className="block text-gray-700 hover:text-green-600 font-medium transition-colors">
                Business
              </a>
              <a href="#" className="block text-gray-700 hover:text-green-600 font-medium transition-colors">
                Revolut Pro
              </a>
              <a href="#" className="block text-gray-700 hover:text-green-600 font-medium transition-colors">
                Company
              </a>
              <a href="#" className="block text-gray-700 hover:text-green-600 font-medium transition-colors">
                Help
              </a>
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button className="block w-full text-left text-gray-700 hover:text-green-600 font-medium transition-colors">
                  Log in
                </button>
                <button className="block w-full px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Loading Content */}
      <main className="flex-1 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center max-w-md mx-auto px-4">
          {/* Loading Spinner */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="w-16 h-16 border-4 border-gray-200 border-t-green-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-green-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
          </div>

          {/* Loading Text */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Loading Your
            <br />
            Financial Future
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Preparing your personalized IPO investment experience...
          </p>

          {/* Progress Indicator */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
          </div>
          
          <p className="text-sm text-gray-500">
            This may take a few moments
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-500">
            <p>&copy; 2024 Revolut. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Loading;