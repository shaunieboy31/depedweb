export default function OnlineServices() {
  const services = [
    {
      name: 'Student Information System',
      description: 'Access and manage student records, grades, and academic information',
      icon: '📊'
    },
    {
      name: 'Online Enrollment',
      description: 'Register and enroll online for school year',
      icon: '📝'
    },
    {
      name: 'Request for Transcript of Records',
      description: 'Request official transcript of records online',
      icon: '📄'
    },
    {
      name: 'Scholarship Application',
      description: 'Apply for scholarship programs and financial assistance',
      icon: '🎓'
    },
    {
      name: 'Payment Services',
      description: 'Pay school fees and miscellaneous charges online',
      icon: '💳'
    },
    {
      name: 'Faculty Portal',
      description: 'Access teaching resources and grade management system',
      icon: '👨‍🏫'
    },
  ];

  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Online Services</h1>
          <p className="text-lg text-gray-700 mb-12">
            Access our digital services conveniently from anywhere, anytime
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-t-4 border-blue-600">
                <p className="text-4xl mb-4">{service.icon}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Information Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Benefits of Online Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">⏰ Convenient</h3>
                <p>Access services 24/7 from any location</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">🔒 Secure</h3>
                <p>Protected with advanced security measures</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">⚡ Fast</h3>
                <p>Quick processing and immediate confirmation</p>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="mt-16 p-8 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Support</h2>
            <p className="text-gray-700 mb-4">
              For technical issues or assistance with online services, please contact our IT Support Team:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">📧 Email:</span> itsupport.imus@deped.gov.ph</p>
              <p><span className="font-semibold">📞 Phone:</span> (046) 419-8450 local 205</p>
              <p><span className="font-semibold">⏰ Hours:</span> Monday - Friday, 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
