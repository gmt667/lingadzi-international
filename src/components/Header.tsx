import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Logo = () => (
  <img
    src="/logo.jpg"
    alt="Lingadzi Leadership Academy Logo"
    className="object-contain w-auto h-10 sm:h-12 md:h-14 lg:h-16"
  />
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'News', href: '/news' },
    { name: 'Events', href: '/events' },
    { name: 'Alumni', href: '/alumni' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="px-4 py-2 text-white bg-blue-900">
        <div className="flex items-center justify-between mx-auto text-sm max-w-7xl">
          <div className="flex items-center space-x-4">
            <span>📍 Mtandire, Chilimampunga Ground, Lilongwe, Malawi</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+265 995 07 51 01</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 sm:py-4">
            {/* Logo + Title */}
            <Link to="/" className="flex items-center space-x-3">
              <Logo />
              <div className="leading-tight">
                <h1 className="text-lg font-bold text-blue-900 sm:text-xl">
                  Lingadzi Leadership Academy
                </h1>
                <p className="text-xs italic text-gray-600 sm:text-sm">
                  "Create Future Leaders of Malawi"
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden space-x-8 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 rounded-md lg:hidden hover:text-blue-600 hover:bg-blue-50"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="bg-white border-t border-gray-200 lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
// This code defines a responsive header component for the Lingadzi Leadership Academy website.
// It includes a top bar with contact information, a main header with a logo and navigation links,
// and a mobile-friendly menu that toggles visibility on smaller screens.
// The header is styled using Tailwind CSS classes for a modern and clean look. 