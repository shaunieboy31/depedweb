export default function Innovation() {
  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16 flex items-center justify-center min-h-[60vh]">
        <div className="max-w-md w-full text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Do you have any ideas or Innovations?</h1>
          
          <p className="text-lg text-gray-700 mb-8">
            You may submit it by using the link or QR Code below
          </p>

          {/* QR Code Placeholder */}
          <div className="bg-gray-100 p-8 rounded-lg mb-8">
            <div className="w-48 h-48 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center mx-auto mb-6">
              <div className="text-gray-700 font-semibold text-center">
                <p className="text-sm">QR Code</p>
                <p className="text-xs mt-2">bit.ly/sdoicinnovations</p>
              </div>
            </div>
          </div>

          {/* Submission Link */}
          <div>
            <p className="text-gray-700 font-semibold mb-4">OR</p>
            <a
              href="https://bit.ly/sdoicinnovations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Submit Your Innovation
            </a>
            <p className="text-sm text-blue-600 mt-4">bit.ly/sdoicinnovations</p>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              Share your ideas and innovations to help improve our educational services and better serve our learners and stakeholders.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
