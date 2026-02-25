export default function Satisfaction() {
  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Client Satisfaction</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              The Schools Division Office of Imus City values client feedback and continuously works to improve our services based on stakeholder satisfaction surveys and recommendations.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Satisfaction Survey</h2>
              <p>
                We conduct regular satisfaction surveys to gather feedback from:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Students and learners</li>
                <li>Parents and guardians</li>
                <li>Teachers and school administrators</li>
                <li>School board members</li>
                <li>Community stakeholders</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Commitment</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p>
                  We are committed to delivering responsive, high-quality services that meet the needs and expectations of all our stakeholders. Your feedback helps us continuously improve our operations and services.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Feedback Mechanism</h2>
              <p>
                Clients can submit feedback through:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Online feedback forms on this website</li>
                <li>Email: sgod.imus@deped.gov.ph</li>
                <li>Phone: (046) 419-8450</li>
                <li>In-person at our office</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
