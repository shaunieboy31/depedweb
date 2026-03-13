export default function LearningPrograms() {
  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Learning Programs</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Core learning programs offered across all schools in the Schools Division Office of Imus City, aligned with the Department of Education standards.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Program Categories</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Early Childhood Education (ECE)</h3>
                  <p>Foundation program for children ages 3-5 focusing on holistic development</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Elementary Education</h3>
                  <p>Primary education covering Grades 1-6 with emphasis on literacy and numeracy</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Junior High School (JHS)</h3>
                  <p>Secondary education for Grades 7-10 with subject specialization</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Senior High School (SHS)</h3>
                  <p>Advanced secondary education for Grades 11-12 with track specialization</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Learning Outcomes</h2>
              <p>Students who complete our learning programs demonstrate:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Mastery of core academic competencies</li>
                <li>Development of critical thinking skills</li>
                <li>Enhancement of communication abilities</li>
                <li>Understanding of cultural and environmental values</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
