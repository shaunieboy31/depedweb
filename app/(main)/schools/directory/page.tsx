export default function SchoolDirectory() {
  const schools = [
    { name: 'Imus National High School', type: 'Secondary', district: 'District I', contact: '(046) 111-2222' },
    { name: 'Imus Central Elementary School', type: 'Primary', district: 'District I', contact: '(046) 111-3333' },
    { name: 'Imus East National High School', type: 'Secondary', district: 'District II', contact: '(046) 111-4444' },
    { name: 'Imus West Elementary School', type: 'Primary', district: 'District III', contact: '(046) 111-5555' },
    { name: 'Imus North High School', type: 'Secondary', district: 'District I', contact: '(046) 111-6666' },
    { name: 'Imus South Elementary School', type: 'Primary', district: 'District II', contact: '(046) 111-7777' },
  ];

  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">School Directory</h1>
          <p className="text-lg text-gray-700 mb-12">
            Complete directory of public schools in Imus City
          </p>

          <div className="grid grid-cols-1 gap-4">
            {schools.map((school, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">SCHOOL NAME</p>
                    <p className="text-lg font-bold text-gray-900">{school.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-semibold">TYPE</p>
                    <p className="text-gray-700">{school.type}</p>
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">Need More Information?</h2>
            <p className="text-gray-700 mb-4">
              For more detailed information about specific schools, please contact the Schools Division Office:
            </p>
            <p className="text-gray-700"><span className="font-semibold">📞 Phone:</span> (046) 419-8450</p>
            <p className="text-gray-700"><span className="font-semibold">📧 Email:</span> sgod.imus@deped.gov.ph</p>
          </div>
        </div>
      </section>
    </div>
  );
}
