'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function EmployeeOfMonth() {
  const [currentMonth, setCurrentMonth] = useState(0);

  const employees = [
    {
      month: 'January 2024',
      name: 'Maria Santos',
      position: 'Teacher I',
      school: 'Imus National High School',
      achievement: 'Outstanding performance in student mentoring and curriculum development',
      image: '/employee-1.jpg'
    },
    {
      month: 'February 2024',
      name: 'Juan dela Cruz',
      position: 'Principal II',
      school: 'Imus Central Elementary School',
      achievement: 'Excellent school governance and community engagement initiatives',
      image: '/employee-2.jpg'
    },
    {
      month: 'March 2024',
      name: 'Rosa Lopez',
      position: 'Counselor',
      school: 'Imus East National High School',
      achievement: 'Exceptional dedication to student welfare and holistic development',
      image: '/employee-3.jpg'
    },
    {
      month: 'April 2024',
      name: 'Roberto Reyes',
      position: 'Administrative Officer II',
      school: 'Schools Division Office',
      achievement: 'Exemplary service and innovative administrative processes',
      image: '/employee-4.jpg'
    },
  ];

  const nextEmployee = () => {
    setCurrentMonth((prev) => (prev + 1) % employees.length);
  };

  const prevEmployee = () => {
    setCurrentMonth((prev) => (prev - 1 + employees.length) % employees.length);
  };

  const current = employees[currentMonth];

  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Employee of the Month</h1>

          {/* Featured Employee Carousel */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image Section */}
              <div className="flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-5xl mb-2">👤</div>
                    <p className="text-sm font-semibold">Photo Placeholder</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div>
                <p className="text-blue-600 font-semibold text-lg mb-2">{current.month}</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{current.name}</h2>
                <p className="text-blue-600 font-semibold mb-1">{current.position}</p>
                <p className="text-gray-600 mb-6">{current.school}</p>
                
                <div className="bg-white rounded-lg p-4 mb-6">
                  <p className="text-gray-700">
                    <span className="font-semibold text-blue-600">Achievement:</span><br/>
                    {current.achievement}
                  </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={prevEmployee}
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextEmployee}
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* All Employees List */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Featured Employees</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {employees.map((employee, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentMonth(index)}
                  className={`p-6 rounded-lg cursor-pointer transition-all ${
                    index === currentMonth
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white border-2 border-gray-200 hover:border-blue-600'
                  }`}
                >
                  <p className="font-semibold mb-1">{employee.month}</p>
                  <p className="text-lg font-bold mb-1">{employee.name}</p>
                  <p className="text-sm opacity-90">{employee.position}</p>
                  <p className="text-sm opacity-75">{employee.school}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
