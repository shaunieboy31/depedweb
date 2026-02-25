export default function EasyLinks() {
  const departments = [
    {
      name: 'OSDS',
      title: 'Office of Special Development Services',
      units: [
        'Admin Proper',
        'Cash',
        'HR Personnel',
        'Records',
        'Supply',
        'Finance Unit',
        'Legal Unit',
        'ICT Unit'
      ],
      links: [
        { name: '0365 Account Creation/Deletion', url: 'https://depedph-my.sharepoint.com/:x:/g/personal/icts_sdd_deped_gov_ph/ETVeWrhuPl9BltZfYZiHABgBWczpVb13IWSUqsZWryXjzQ' },
        { name: '0365 Accounts Created', url: 'https://depedph-my.sharepoint.com/personal/icts_sdd_deped_gov_ph/_layouts/15/onedrive.aspx' },
        { name: '0365 Password Reset for Teachers', url: 'https://mystaff.microsoft.com/' },
        { name: 'DepEd Email & Account Creation', url: 'http://admin.google.com/' },
      ]
    },
    {
      name: 'SGOD',
      title: 'Systems & Governance Operations Division',
      units: [
        'Planning',
        'HRMS',
        'SMME',
        'SocMob',
        'Physical Facilities',
        'Medical'
      ],
      links: []
    },
    {
      name: 'CID',
      title: 'Curriculum & Instruction Division',
      units: [
        'ALS (Alternative Learning System)',
        'LRMS (Learning Resources Management Services)',
        'I LeaRN (Imus Learning Resources Navigator)'
      ],
      links: [
        { name: 'I LeaRN Portal', url: 'https://bit.ly/SDOIC-LR-Portal-ILeaRN' },
      ]
    }
  ];

  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SDOIC Easy Links</h1>
          <p className="text-lg text-gray-700 mb-12">
            Quick access to internal systems, office resources, and important links
          </p>

          {/* Departments Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border-l-4 border-blue-600">
                <div className="bg-blue-50 px-6 py-4">
                  <h2 className="text-2xl font-bold text-blue-600 mb-1">{dept.name}</h2>
                  <p className="text-sm text-gray-600">{dept.title}</p>
                </div>
                
                <div className="p-6">
                  {/* Units */}
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-3">Units & Services:</h3>
                    <div className="space-y-2">
                      {dept.units.map((unit, uIndex) => (
                        <div key={uIndex} className="flex items-center gap-2 text-gray-700 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          {unit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {dept.links.length > 0 && (
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3">Important Links:</h3>
                      <div className="space-y-2">
                        {dept.links.map((link, lIndex) => (
                          <a
                            key={lIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-blue-600 hover:text-blue-800 text-sm font-semibold hover:underline"
                          >
                            → {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links Section */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Access Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="https://bes-online-portal.com/home" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                <p className="font-semibold text-blue-600">Online Enrollment</p>
                <p className="text-xs text-gray-600">BES Online Portal</p>
              </a>
              <a href="https://uis.depedimuscity.com/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                <p className="font-semibold text-blue-600">Unified Information System</p>
                <p className="text-xs text-gray-600">UIS Portal</p>
              </a>
              <a href="https://bida.depedimuscity.com/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                <p className="font-semibold text-blue-600">Health Check System</p>
                <p className="text-xs text-gray-600">BIDA System</p>
              </a>
              <a href="https://depedimuscity.com/feedbacksystem/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                <p className="font-semibold text-blue-600">Online Feedback</p>
                <p className="text-xs text-gray-600">Feedback Portal</p>
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdsQbtV6YqCu0fBojOjbZtAmDYzW2_rcpHJ0CczWOz3bWEtuQ/viewform" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                <p className="font-semibold text-blue-600">Complaint Form</p>
                <p className="text-xs text-gray-600">Report Issues</p>
              </a>
              <a href="https://docs.google.com/spreadsheets/d/1SIeX2NFiIdN-VM-tLWWKuoW2gXva1kgBKHaZl38no80/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                <p className="font-semibold text-blue-600">ICT Easy Links</p>
                <p className="text-xs text-gray-600">Tech Resources</p>
              </a>
            </div>
          </div>

          {/* Support Section */}
          <div className="p-8 bg-blue-600 text-white rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Need Assistance?</h2>
            <p className="mb-4">Contact the ICT Unit or visit our main office for technical support</p>
            <p className="text-blue-100">
              📞 (046) 419-8450 | 📧 sgod.imus@deped.gov.ph
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
