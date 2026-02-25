export default function News() {
  const news = [
    {
      date: 'February 2024',
      title: 'Early Registration Opens for SY 2024-2025',
      excerpt: 'Students and parents are encouraged to register early for the upcoming school year. Visit your respective schools for more details.'
    },
    {
      date: 'January 2024',
      title: 'Teacher Recognition Program Held',
      excerpt: 'Outstanding teachers from all districts were recognized for their exceptional contribution to education excellence.'
    },
    {
      date: 'December 2023',
      title: 'INHS Wins Regional Competition',
      excerpt: 'Imus National High School wins the regional quiz bowl championship, showcasing academic excellence.'
    },
  ];

  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">News & Announcements</h1>

          <div className="space-y-8">
            {news.map((item, index) => (
              <article key={index} className="border-b-2 border-gray-200 pb-8 last:border-b-0">
                <p className="text-blue-600 font-semibold text-sm mb-2">{item.date}</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">{item.title}</h2>
                <p className="text-gray-700 mb-4">{item.excerpt}</p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-800">Read Full Story →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-16 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-700 mb-6">Subscribe to our newsletter for the latest news and updates from the Schools Division Office.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
