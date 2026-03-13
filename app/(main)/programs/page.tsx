export default function Programs() {
  const programs = [
    {
      id: 1,
      title: 'Learning Programs',
      description: 'Core educational programs designed to meet DepEd standards and learner needs',
      link: '/programs/learning'
    },
    {
      id: 2,
      title: 'Special Programs',
      description: 'Specialized programs for students with unique learning needs and talents',
      link: '/programs/special'
    },
    {
      id: 3,
      title: 'Development Programs',
      description: 'Professional development and capacity building programs for educators',
      link: '/programs/development'
    },
  ];

  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Programs</h1>
          <p className="text-lg text-gray-700 mb-12">
            Comprehensive programs designed to support quality education and holistic student development
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <a
                key={program.id}
                href={program.link}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-blue-600 p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-700 mb-4">{program.description}</p>
                <p className="text-blue-600 font-semibold hover:text-blue-800">Learn More →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-16 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Philosophy</h2>
          <p className="text-gray-700 mb-4">
            All programs offered by the Schools Division Office of Imus City are designed with a learner-centered approach, emphasizing:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Quality and relevance of educational content</li>
            <li>Equity and inclusivity for all learners</li>
            <li>Alignment with national and international educational standards</li>
            <li>Integration of technology and innovation</li>
            <li>Holistic development of students</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
