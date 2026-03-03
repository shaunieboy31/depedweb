import Image from "next/image";

export default function DivisionProfile() {
  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Division Profile
          </h1>

          <div className="mb-8">
            <Image
              src="/images/newbuilding.webp"
              alt="Schools Division Office of Imus City"
              width={1200}
              height={640}
              className="w-full rounded-lg object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                About Schools Division Office of Imus City
              </h2>
              <p>
                The Schools Division Office of Imus City is committed to
                providing quality, equitable, culture-based, and complete basic
                education to all learners in Imus City. The division operates
                under the Department of Education and aims to implement national
                education policies and programs at the local level.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Vision</h2>
              <p>
                We dream of Filipinos who passionately love their country and
                whose values and competencies enable them to realize their full
                potential and contribute meaningfully to building the nation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Mission</h2>
              <p className="mb-4">
                To protect and promote the right of every Filipino to quality,
                equitable, culture-based, and complete basic education where:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Students learn in a child-friendly, gender-sensitive, safe,
                  and motivating environment
                </li>
                <li>
                  Teachers facilitate learning and constantly nurture every
                  learner
                </li>
                <li>
                  Administrators and staff, as stewards of the institution,
                  ensure an enabling and supportive environment for effective
                  learning
                </li>
                <li>
                  Family, community, and other stakeholders are actively engaged
                  in developing life-long learners
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Key Statistics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-600">Districts</p>
                  <p className="text-3xl font-bold text-blue-600">3</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-600">Public Schools</p>
                  <p className="text-3xl font-bold text-blue-600">60+</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Quality Policy
              </h2>
              <p>
                Schools Division Office of Imus City Commits to delivering
                quality services responsive to the needs of its clientele in
                accordance with mandated standards, principles of transparent,
                ethical and accountable governance, and continuous improvement
                process towards the holistic development of "BIDAng" Imusenyo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
