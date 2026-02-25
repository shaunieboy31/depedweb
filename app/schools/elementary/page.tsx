export default function ElementarySchools() {
  const schools = [
    { id: 1, name: 'Imus Central Elementary School', district: 'District I', contact: '(046) 111-3333' },
    { id: 2, name: 'Imus West Elementary School', district: 'District III', contact: '(046) 111-5555' },
    { id: 3, name: 'Imus South Elementary School', district: 'District II', contact: '(046) 111-7777' },
    { id: 4, name: 'Imus East Elementary School', district: 'District II', contact: '(046) 111-8888' },
    { id: 5, name: 'Imus North Elementary School', district: 'District I', contact: '(046) 111-9999' },
  ];

  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Elementary Schools</h1>
          <p className="text-lg text-gray-700 mb-12">
            Public elementary schools serving Imus City
          </p>

          <div className="grid grid-cols-1 gap-4">
            {schools.map((school) => (
              <div key={school.id} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">SCHOOL NAME</p>
                    <p className="text-lg font-bold text-gray-900">{school.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">LEVEL</p>
                    <p className="text-gray-700">Elementary</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">DISTRICT</p>
                    <p className="text-gray-700">{school.district}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">CONTACT</p>
                    <p className="text-blue-600 font-semibold">{school.contact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Program Information</h2>
            <p className="text-gray-700 mb-4">
              Our elementary schools offer comprehensive programs designed to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Build strong foundations in literacy and numeracy</li>
              <li>Develop social-emotional skills</li>
              <li>Foster cultural awareness and values</li>
              <li>Encourage critical thinking and creativity</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
