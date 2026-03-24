"use client";

import React from "react";

export default function SchoolsPage() {
  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Schools</h1>
          <p className="text-lg text-gray-700 mb-12">
            Explore our network of schools serving the Imus City community
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="/schools/directory"
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md hover:shadow-lg transition-all p-8 border-2 border-transparent hover:border-blue-600"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-3">📋 School Directory</h3>
              <p className="text-gray-700 mb-4">Browse our complete list of public schools, contact information, and locations across Imus City.</p>
              <p className="text-blue-600 font-semibold">View Directory →</p>
            </a>

            <a
              href="/schools/featured"
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-md hover:shadow-lg transition-all p-8 border-2 border-transparent hover:border-green-600"
            >
              <h3 className="text-2xl font-bold text-green-900 mb-3">⭐ Featured Schools</h3>
              <p className="text-gray-700 mb-4">Discover our highlighted schools with outstanding programs, achievements, and contributions to education.</p>
              <p className="text-green-600 font-semibold">Explore Featured →</p>
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-16 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Schools Network</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-3xl font-bold text-blue-600">3</p>
              <p className="text-gray-700 font-semibold">Districts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-3xl font-bold text-blue-600">60+</p>
              <p className="text-gray-700 font-semibold">Public Schools</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-3xl font-bold text-blue-600">50K+</p>
              <p className="text-gray-700 font-semibold">Learners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
