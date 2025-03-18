import React from 'react';
import { Instagram, Search, Heart, PlusSquare, Home } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 h-16">
        <div className="flex items-center space-x-2">
          <Instagram className="h-8 w-8" />
          <h1 className="text-xl font-semibold hidden sm:block">Instagram</h1>
        </div>
        
        <div className="hidden sm:block max-w-xs w-full">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
        </div>
        
        <nav className="flex items-center space-x-6">
          <Home className="h-6 w-6 cursor-pointer" />
          <PlusSquare className="h-6 w-6 cursor-pointer" />
          <Heart className="h-6 w-6 cursor-pointer" />
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            alt="Profile"
            className="h-8 w-8 rounded-full cursor-pointer"
          />
        </nav>
      </div>
    </header>
  );
}