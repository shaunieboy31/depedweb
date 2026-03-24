"use client";

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-12" id="contact-us-title">Contact Us</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 font-poppins">Get in Touch</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-blue-600 text-lg mb-3">📍 Address</h3>
                  <p className="text-gray-700">
                    Satorre St. Toclong I.C<br/>
                    Imus, City Cavite 4103<br/>
                    Philippines
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-blue-600 text-lg mb-3">📞 Phone</h3>
                  <p className="text-gray-700">
                    (046) 419-8450 local 204<br/>
                    (046) 419-8450 local 227
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-blue-600 text-lg mb-3">📧 Email</h3>
                  <p className="text-gray-700">
                    sgod.imus@deped.gov.ph<br/>
                    planning.imus@deped.gov.ph
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-blue-600 text-lg mb-3">⏰ Office Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 8:00 AM - 5:00 PM<br/>
                    Closed on weekends and holidays
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-blue-600 text-lg mb-3">🚀 Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Facebook</a>
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Twitter</a>
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">YouTube</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 lg:px-16 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center font-poppins">Find Us</h2>
          <div className="w-full h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
            <p className="text-gray-700 font-semibold">Map placeholder - Satorre St. Toclong I.C, Imus, City Cavite</p>
          </div>
        </div>
      </section>
    </div>
  );
}
