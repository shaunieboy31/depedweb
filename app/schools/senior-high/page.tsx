export default function SeniorHighSchools() {
  const schools = [
    { id: 1, name: 'Imus National High School (SHS)', district: 'District I', contact: '(046) 111-2222', tracks: ['STEM', 'GAS', 'ABM', 'HE'] },
    { id: 2, name: 'Imus East National High School (SHS)', district: 'District II', contact: '(046) 111-4444', tracks: ['STEM', 'GAS'] },
    { id: 3, name: 'Imus North High School (SHS)', district: 'District I', contact: '(046) 111-6666', tracks: ['STEM', 'ABM'] },
  ];

  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Senior High Schools</h1>
          <p className="text-lg text-gray-700 mb-12">
            Public senior high schools (Grades 11-12) serving Imus City
          </p>

          <div className="grid grid-cols-1 gap-6">
            {schools.map((school) => (
              <div key={school.id} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">SCHOOL NAME</p>
                    <p className="text-lg font-bold text-gray-900">{school.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">LEVEL</p>
                    <p className="text-gray-700">Senior High</p>
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
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600 font-semibold mb-2">AVAILABLE TRACKS</p>
                  <div className="flex flex-wrap gap-2">
                    {school.tracks.map((track, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {track}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Senior High Program</h2>
            <p className="text-gray-700 mb-4">
              Senior High School covers Grades 11-12 and offers specialized tracks:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">STEM</h3>
                <p className="text-sm text-gray-700">Science, Technology, Engineering, and Mathematics</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">GAS</h3>
                <p className="text-sm text-gray-700">General Academic Strand</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">ABM</h3>
                <p className="text-sm text-gray-700">Accountancy, Business, and Management</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">HE</h3>
                <p className="text-sm text-gray-700">Home Economics</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
