export function NewsUpdates() {
  return (
    <div className="mb-12 bg-blue-50/50 border-4 border-blue-400 rounded-2xl p-8 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">News & Updates</h2>
        <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            id: 1,
            date: "Feb 28, 2026",
            title: "Division Announces Early Registration Schedule",
            excerpt:
              "The Schools Division Office of Imus City announces early registration dates for incoming learners for SY 2024-2025.",
            color: "border-t-blue-500",
          },
          {
            id: 2,
            date: "Jan 15, 2026",
            title: "Learner Support Program Expanded",
            excerpt:
              "New support initiatives were launched to assist learners with distance and blended learning modalities.",
            color: "border-t-emerald-500",
          },
          {
            id: 3,
            date: "Dec 10, 2025",
            title: "Division Awards Exemplary Teachers",
            excerpt:
              "Outstanding teachers from elementary and secondary levels were recognized during the division awards ceremony.",
            color: "border-t-amber-500",
          },
        ].map((n) => (
          <article
            key={n.id}
            className={`bg-white border border-gray-100 border-t-4 ${n.color} rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300`}
          >
            <p className="text-sm text-gray-500 mb-2">{n.date}</p>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{n.title}</h3>
            <p className="text-sm text-gray-700 mb-4">{n.excerpt}</p>
            <a href="#" className="text-blue-600 font-medium hover:underline text-sm">
              Read more
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
