export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Frontline Services',
      description: 'Quality educational services delivered directly to students, teachers, and school communities',
      icon: '📚',
      link: '/services/frontline'
    },
    {
      id: 2,
      title: 'Satisfaction',
      description: 'Client satisfaction survey and feedback mechanisms to ensure continuous service improvement',
      icon: '⭐',
      link: '/services/satisfaction'
    },
    {
      id: 3,
      title: 'Innovation',
      description: 'Innovative programs and initiatives to enhance educational quality and student outcomes',
      icon: '💡',
      link: '/services/innovation'
    },
    {
      id: 4,
      title: 'SDOIC Easy Links',
      description: 'Quick access to frequently needed services and information from the Schools Division Office',
      icon: '🔗',
      link: '/services/easy-links'
    },
    {
      id: 5,
      title: 'Online Services',
      description: 'Digital services and online platforms for student enrollment, records, and inquiries',
      icon: '💻',
      link: '/services/online'
    },
  ];

  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-700 mb-12">
            The Schools Division Office of Imus City is committed to providing quality, responsive, and accessible services to all stakeholders.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <a
                key={service.id}
                href={service.link}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:border-blue-600 border-2 border-transparent overflow-hidden"
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center group-hover:from-blue-100 group-hover:to-blue-200 transition-colors">
                  <p className="text-5xl mb-4">{service.icon}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <p className="text-blue-600 font-semibold group-hover:text-blue-800">Learn More →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Key Information Section */}
      <section className="px-4 lg:px-16 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Service Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-blue-600 mb-3">Accessibility</h3>
              <p className="text-gray-700">
                All services are designed to be accessible to students, parents, teachers, and community members during office hours.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-blue-600 mb-3">Quality</h3>
              <p className="text-gray-700">
                We maintain high standards of service quality in all our operations and interactions with stakeholders.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-blue-600 mb-3">Responsiveness</h3>
              <p className="text-gray-700">
                Our team is committed to promptly addressing inquiries and concerns from all stakeholders.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-blue-600 mb-3">Accountability</h3>
              <p className="text-gray-700">
                We maintain transparent and ethical governance in all service delivery processes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
