import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-16 mt-16">
      <div className="px-4 lg:px-16">
        {/* Seals/Logos Section */}
        <div className="flex justify-center gap-12 mb-12">
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center">
            <div className="text-yellow-800 text-center">
              <p className="text-xs font-bold">Transparency</p>
              <p className="text-xs">Seal</p>
            </div>
          </div>
          <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
            <div className="text-blue-800 text-center">
              <p className="text-xs font-bold">Freedom of</p>
              <p className="text-xs">Information</p>
            </div>
          </div>
        </div>

        {/* Three Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Republic of the Philippines</h3>
            <p className="text-sm text-gray-700">
              All content is in the public domain unless otherwise stated.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">About GOVPH</h3>
            <p className="text-sm text-gray-700 mb-3">
              Learn more about the Philippine government, its structure, how government works and the people behind it.
            </p>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">GOV.PH</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Open Data Portal</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Official Gazette</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Government Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Office of the President</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Office of the Vice President</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Senate of the Philippines</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">House of Representatives</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Supreme Court</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Court of Appeals</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Sandiganbayan</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 pt-6 text-center text-xs text-gray-600">
          <p>&copy; 2024 Department of Education - Schools Division Office of Imus City. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
