"use client";

import React from "react";
import Link from "next/link";

export default function AboutIndex() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About Us</h1>
      <p className="text-gray-700 mb-8">
        The Schools Division Office of Imus City — links to the History,
        Division Profile and other related pages are below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/about-us/history"
          className="block p-6 bg-white rounded-lg shadow hover:shadow-lg"
        >
          <h3 className="text-lg font-semibold text-blue-600">History</h3>
          <p className="text-sm text-gray-600 mt-2">
            Read the history and background of the division.
          </p>
        </Link>

        <Link
          href="/about-us/division-profile"
          className="block p-6 bg-white rounded-lg shadow hover:shadow-lg"
        >
          <h3 className="text-lg font-semibold text-blue-600">
            Division Profile
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Overview of the division office, leadership and contact details.
          </p>
        </Link>

        <Link
          href="/about-us/organizational-structure"
          className="block p-6 bg-white rounded-lg shadow hover:shadow-lg"
        >
          <h3 className="text-lg font-semibold text-blue-600">
            Organizational Structure
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            See how the division is organized, offices and units.
          </p>
        </Link>

        <Link
          href="/about-us/learning-leaders"
          className="block p-6 bg-white rounded-lg shadow hover:shadow-lg"
        >
          <h3 className="text-lg font-semibold text-blue-600">
            Learning Leaders
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Profiles and messages from our learning leaders.
          </p>
        </Link>

        <Link
          href="/about-us/employee-of-month"
          className="block p-6 bg-white rounded-lg shadow hover:shadow-lg"
        >
          <h3 className="text-lg font-semibold text-blue-600">
            Employee of the Month
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Recognition for outstanding staff from across the division.
          </p>
        </Link>

        <Link
          href="/contact"
          className="block p-6 bg-white rounded-lg shadow hover:shadow-lg"
        >
          <h3 className="text-lg font-semibold text-blue-600">Contact</h3>
          <p className="text-sm text-gray-600 mt-2">
            Get in touch with the Schools Division Office of Imus City.
          </p>
        </Link>
      </div>
    </div>
  );
}
