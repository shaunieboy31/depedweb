'use client';

import React from 'react';
import Link from 'next/link';

export default function Header() {
  const [currentTime, setCurrentTime] = React.useState('');

  React.useEffect(() => {
    setCurrentTime(new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }));

    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-white">
      {/* Main Header Section with Custom Blue Background */}
      <div style={{ backgroundColor: '#00214f' }} className="px-4 lg:px-8 py-6">
        <Link href="/" className="block hover:opacity-90 transition-opacity">
          <div className="max-w-full flex justify-between items-start">
            {/* Logo and Department Info */}
            <div className="flex gap-6 items-start flex-1">
              <div className="w-24 h-24 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg">
                {/* Logo placeholder - Replace with actual image */}
                <div className="text-center text-xs font-bold text-gray-600">DepEd<br/>Logo</div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-100">Department of Education</p>
                <p className="text-sm text-gray-100">Region IV-A, CALABARZON</p>
                <h1 className="text-2xl font-bold text-white mt-1">SCHOOLS DIVISION OFFICE OF IMUS CITY</h1>
                <p className="text-sm text-gray-100 mt-1">Satorre St. Toclong I.C., Imus, City Cavite, 4103 Philippines</p>
              </div>
            </div>

            {/* Right Side - Date/Time */}
            <div className="text-right text-sm">
              <p className="font-semibold text-gray-100">Philippine Standard Time:</p>
              <p className="text-gray-100">{currentTime}</p>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}
