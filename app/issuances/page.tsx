export default function Issuances() {
  const issuances = [
    {
      number: 'SDOIC-2024-001',
      title: 'Guidelines on School Registration for SY 2024-2025',
      date: 'January 2024',
      category: 'Circular'
    },
    {
      number: 'SDOIC-2023-045',
      title: 'Policies and Procedures on Learner Assessment',
      date: 'November 2023',
      category: 'Memorandum'
    },
    {
      number: 'SDOIC-2023-042',
      title: 'Teacher Performance Evaluation System',
      date: 'October 2023',
      category: 'Directive'
    },
    {
      number: 'SDOIC-2023-038',
      title: 'School Safety and Health Protocols',
      date: 'September 2023',
      category: 'Advisory'
    },
  ];

  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Issuances</h1>
          <p className="text-lg text-gray-700 mb-12">
            Official circulars, memoranda, and directives from the Schools Division Office
          </p>

          <div className="space-y-4">
            {issuances.map((item, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-blue-600 font-bold text-sm mb-1">{item.number}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">{item.title}</h3>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>📅 {item.date}</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">{item.category}</span>
                    </div>
                  </div>
                  <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 whitespace-nowrap">
                    Download →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Archive Section */}
          <div className="mt-12 p-8 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Archives</h2>
            <p className="text-gray-700 mb-4">
              Browse our complete archive of issuances from previous years:
            </p>
            <div className="flex gap-3 flex-wrap">
              {['2024', '2023', '2022', '2021', '2020'].map((year) => (
                <a
                  key={year}
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  {year}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
