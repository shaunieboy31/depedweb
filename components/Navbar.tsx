'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, Volume2, Type } from 'lucide-react';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = [
    { 
      label: 'Home Page', 
      href: '/',
      dropdown: false
    },
    { 
      label: 'About Us', 
      href: '/about-us',
      dropdown: true,
      submenu: [
        { label: 'History', href: '/about-us/history' },
        { label: 'Division Profile', href: '/about-us/division-profile' },
        { label: 'Organizational Structure', href: '/about-us/organizational-structure' },
        { label: 'Employee of the Month', href: '/about-us/employee-of-month' },
        { label: 'Learning Leaders', href: '/about-us/learning-leaders' },
      ]
    },
    { 
      label: 'Services', 
      href: '#',
      dropdown: true,
      submenu: [
        { label: 'Frontline Services', href: '/services/frontline' },
        { label: 'Satisfaction', href: '/services/satisfaction' },
        { label: 'Innovation', href: '/services/innovation' },
        { label: 'SDOIC Easy Links', href: '/services/easy-links' },
        { label: 'Online Services', href: '/services/online' },
      ]
    },
    { 
      label: 'Programs', 
      href: '#',
      dropdown: true,
      submenu: [
        { label: 'Learning Programs', href: '/programs/learning' },
        { label: 'Special Programs', href: '/programs/special' },
        { label: 'Development Programs', href: '/programs/development' },
      ]
    },
    { label: 'News', href: '/news', dropdown: false },
    { 
      label: 'Schools', 
      href: '#',
      dropdown: true,
      submenu: [
        { label: 'Schools', href: '/schools' },
        { label: 'School Directory', href: '/schools/directory' },
        { label: 'Featured Schools', href: '/schools/featured' },
        { label: 'Elementary', href: '/schools/elementary' },
        { label: 'Junior High School', href: '/schools/junior-high' },
        { label: 'Senior High School', href: '/schools/senior-high' },
      ]
    },
    { label: 'Issuances', href: '/issuances', dropdown: false },
    { label: 'Contact Us', href: '/contact', dropdown: false },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-full px-4 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Center - Menu with GOVPH first */}
          <ul className="flex items-center gap-0 text-sm font-medium text-gray-700 flex-1 justify-center">
            <li className="text-gray-700 font-semibold text-sm px-3 py-3.5">GOVPH</li>
            {menuItems.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="hover:text-blue-600 transition-colors py-3.5 px-3 flex items-center gap-1"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 top-full">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors first:rounded-t-md last:rounded-b-md text-sm"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right - Search and Accessibility Icons */}
          <div className="flex items-center gap-3 ml-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="px-3 py-1.5 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 w-32"
              />
              <Search className="absolute right-2 top-1.5 text-gray-400" size={14} />
            </div>
            <button className="text-gray-700 hover:text-gray-900" aria-label="Accessibility">
              <Volume2 size={18} />
            </button>
            <button className="text-gray-700 hover:text-gray-900" aria-label="Font size">
              <Type size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
