'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function LearningLeaders() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const leaders = [
    {
      id: 1,
      name: 'Dr. Lualhati O. Cadavedo',
      position: 'Former OIC Division Superintendent',
      bio: 'Founding leader of the Schools Division Office of Imus City, serving from 2013 with exceptional dedication to educational excellence.',
      quote: 'Leadership is about empowering others to achieve their full potential.',
      quote_author: 'Dr. Lualhati O. Cadavedo'
    },
    {
      id: 2,
      name: 'Mr. Homer N. Mendoza',
      position: 'Educational Administrator',
      bio: 'Visionary leader focused on innovation and excellence in educational service delivery.',
      quote: 'Leadership is the ability to translate vision into reality.',
      quote_author: 'Mr. Homer N. Mendoza'
    },
    {
      id: 3,
      name: 'Bro. Armin A. Luistro FSC',
      position: 'Former Secretary, Department of Education',
      bio: 'Key figure in establishing the City Schools Division of Imus through collaborative governance and strategic partnerships.',
      quote: 'Education is the cornerstone of nation-building.',
      quote_author: 'Bro. Armin A. Luistro FSC'
    },
    {
      id: 4,
      name: 'Hon. Emmanuel L. Maliksi',
      position: 'Mayor of Imus City',
      bio: 'Instrumental in the creation of Imus City and strong advocate for quality education for all citizens.',
      quote: 'A well-educated community builds a better future for all.',
      quote_author: 'Hon. Emmanuel L. Maliksi'
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Learning Leaders</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="text-center text-lg">
              Meet the visionary leaders who have shaped the Schools Division Office of Imus City and continue to inspire educational excellence.
            </p>
          </div>

          {/* Leaders Grid */}
          <div className="space-y-6">
            {leaders.map((leader) => (
              <div
                key={leader.id}
                className="border-2 border-gray-200 rounded-lg hover:border-blue-600 transition-colors overflow-hidden"
              >
                {/* Header - Always Visible */}
                <button
                  onClick={() => toggleExpand(String(leader.id))}
                  className="w-full px-6 py-6 flex items-start justify-between gap-4 bg-gradient-to-r from-gray-50 to-white hover:from-blue-50 hover:to-blue-50 transition-colors text-left"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                    <p className="text-blue-600 font-semibold mt-1">{leader.position}</p>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`text-gray-600 flex-shrink-0 transition-transform ${
                      expandedId === String(leader.id) ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expandable Content */}
                {expandedId === String(leader.id) && (
                  <div className="px-6 py-6 bg-blue-50 border-t-2 border-gray-200 space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Biography</h4>
                      <p className="text-gray-700">{leader.bio}</p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                      <p className="italic text-gray-700 mb-2">"{leader.quote}"</p>
                      <p className="text-sm text-blue-600 font-semibold">— {leader.quote_author}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Inspirational Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Leadership Philosophy</h2>
            <p className="mb-4">
              Our learning leaders embody the vision of the Department of Education through their commitment to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Student-centered learning and holistic development</li>
              <li>Quality, equitable, and culture-based education</li>
              <li>Collaborative governance and stakeholder engagement</li>
              <li>Continuous improvement and innovation</li>
              <li>Ethical and accountable service</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
