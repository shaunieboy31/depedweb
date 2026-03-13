export default function SpecialPrograms() {
  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Special Programs</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Special programs designed to support learners with unique needs, talents, and circumstances in their educational journey.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Programs Offered</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Inclusive Education Program</h3>
                  <p>Support services for learners with disabilities and special learning needs</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Gifted and Talented Program</h3>
                  <p>Advanced curriculum and enrichment activities for high-achieving students</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Scholarship Programs</h3>
                  <p>Financial assistance and support for deserving and underprivileged students</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Alternative Learning System (ALS)</h3>
                  <p>Educational opportunities for out-of-school youth and adults</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Commitment to Inclusivity</h2>
              <p>
                We are committed to ensuring that all learners, regardless of their background or circumstances, have access to quality education and opportunities for success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
