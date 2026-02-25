export default function OrganizationalStructure() {
  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Organizational Structure</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              The Schools Division Office of Imus City operates under a structured organizational framework designed to efficiently deliver educational services to all learners and stakeholders.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Administrative Structure</h2>
              
              <div className="bg-blue-50 p-8 rounded-lg mb-6">
                <div className="text-center mb-6">
                  <p className="font-bold text-lg text-blue-900">Division Superintendent</p>
                  <p className="text-gray-600">Executive Head</p>
                </div>
                <div className="flex justify-center gap-4 flex-wrap">
                  <div className="bg-white border-2 border-blue-600 p-4 rounded w-40">
                    <p className="font-semibold text-blue-600">Assistant Schools Division Superintendent</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-blue-600 mb-4">Three Districts Structure</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-900 mb-3">District I</h4>
                  <p className="text-gray-700 text-sm">
                    Elementary and Secondary Schools serving specific areas of Imus City
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-900 mb-3">District II</h4>
                  <p className="text-gray-700 text-sm">
                    Elementary and Secondary Schools serving specific areas of Imus City
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-900 mb-3">District III</h4>
                  <p className="text-gray-700 text-sm">
                    Elementary and Secondary Schools serving specific areas of Imus City
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Department Units</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p>Office of the Schools Division Superintendent</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p>Curriculum Management and Development Division (CMDD)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p>Human Resource Management Division (HRMD)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p>Finance Division</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p>Administrative Division</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p>Planning and Research Division (PRD)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
