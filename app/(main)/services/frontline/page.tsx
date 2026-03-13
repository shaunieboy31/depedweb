export default function FrontlineServices() {
  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Frontline Services</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              The Schools Division Office of Imus City provides frontline educational services directly to students, teachers, and school communities. These services ensure quality delivery of basic education and support academic excellence.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Core Services</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Curriculum Implementation</h3>
                  <p>Support and guidance for curriculum implementation across all schools in the division.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Teacher Development</h3>
                  <p>Professional development programs and training for teachers to enhance instructional quality.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Student Support</h3>
                  <p>Academic counseling, special education services, and student welfare programs.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Assessment and Monitoring</h3>
                  <p>Regular assessment and monitoring of student learning outcomes and school performance.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Service Hours</h2>
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Closed on weekends and holidays</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Information</h2>
              <p>📞 Phone: (046) 419-8450 local 204, 227</p>
              <p>📧 Email: sgod.imus@deped.gov.ph</p>
              <p>📍 Address: Satorre St. Toclong I.C, Imus, City Cavite, 4103 Philippines</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
