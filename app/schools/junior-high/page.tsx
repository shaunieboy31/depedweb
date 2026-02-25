export default function JuniorHighSchools() {
  const schools = [
    { id: 1, name: 'Imus National High School (JHS)', district: 'District I', contact: '(046) 111-2222' },
    { id: 2, name: 'Imus East National High School', district: 'District II', contact: '(046) 111-4444' },
    { id: 3, name: 'Imus North High School', district: 'District I', contact: '(046) 111-6666' },
    { id: 4, name: 'Imus West High School', district: 'District III', contact: '(046) 111-1010' },
    { id: 5, name: 'Imus South High School', district: 'District II', contact: '(046) 111-1111' },
  ];

  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Junior High Schools</h1>
          <p className="text-lg text-gray-700 mb-12">
            Public junior high schools (Grades 7-10) serving Imus City
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
                    <p className="text-gray-700">Junior High</p>
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">Program Structure</h2>
            <p className="text-gray-700 mb-4">
              Junior High School program covers Grades 7-10 with the following features:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Subject specialization in core and specialized subjects</li>
              <li>Development of 21st century skills</li>
              <li>Values formation and character development</li>
              <li>Preparation for senior high school</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
