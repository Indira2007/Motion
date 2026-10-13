"use client";
import { useState } from "react";
import { content } from "@/data/content";
import { Menu, X } from "lucide-react";

export function NavBar() {
  const { navbar } = content;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-900">{navbar.logo}</span>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            {navbar.links.map((link, idx) => (
              <a key={idx} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-slate-700 hover:text-blue-900 font-medium transition-colors">
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium transition-colors">
              {navbar.applyNow}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 hover:text-blue-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navbar.links.map((link, idx) => (
              <a key={idx} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-900 hover:bg-gray-50 rounded-md">
                {link}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2 px-3">
              <button className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg font-medium">
                {navbar.applyNow}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
