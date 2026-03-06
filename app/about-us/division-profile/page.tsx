export default function DivisionProfile() {
  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="relative rounded-3xl overflow-hidden shadow-md">
            <div
              className="h-[520px] md:h-[680px] bg-center bg-cover"
              style={{ backgroundImage: "url('/images/newbuilding.webp')" }}
              role="img"
              aria-label="Schools Division Office building"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />

              <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-10 flex items-start">
                <div className="mt-12 md:mt-20 max-w-2xl text-white">
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Division Profile
                  </h1>
                  <p className="mt-3 text-lg opacity-90">
                    Overview and key information about the building and office.
                  </p>
                </div>

                <div className="ml-auto mt-12 md:mt-20 flex gap-6">
                  <a
                    href="#gallery"
                    className="hidden md:inline-flex items-center bg-green-600 text-white px-8 py-4 rounded shadow-lg hover:-translate-y-1 transition-transform"
                  >
                    <span className="font-semibold mr-3">View Gallery</span>
                    <span aria-hidden>→</span>
                  </a>
                  <a
                    href="#specs"
                    className="hidden md:inline-flex items-center bg-white/10 text-white px-8 py-4 rounded border border-white/20 hover:bg-white/20"
                  >
                    <span className="font-semibold mr-3">Building Specs</span>
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>

              <div className="absolute left-6 bottom-6 bg-black/40 text-xs text-white px-3 py-2 rounded">
                Photo: Division archive
              </div>
            </div>

            {/* Overlapping small summary card (tighter) */}
            <div className="-mt-16 md:-mt-24 px-4 md:px-10">
              <div className="max-w-5xl mx-auto">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-md border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
                    <div className="md:col-span-2">
                      <h2 className="text-xl md:text-2xl font-bold mb-2">
                        About Schools Division Office of Imus City
                      </h2>
                      <p className="text-gray-800 text-sm md:text-base">
                        The Schools Division Office of Imus City is committed to
                        providing quality, equitable, culture-based, and
                        complete basic education to all learners in Imus City.
                        The division operates under the Department of Education
                        and aims to implement national education policies and
                        programs at the local level.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 md:gap-4 items-stretch">
                      <a
                        href="#contact"
                        className="w-full md:w-auto bg-green-600 text-white px-4 py-3 rounded text-center font-semibold"
                      >
                        Contact
                      </a>
                      <a
                        href="#visit"
                        className="w-full md:w-auto bg-sky-600 text-white px-4 py-3 rounded text-center font-semibold"
                      >
                        Visit &amp; Hours
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full content cards below hero */}
          <div className="mt-8 px-6 md:px-10 max-w-6xl mx-auto space-y-6">
            <div className="bg-sky-700/80 text-white rounded-lg p-8 border border-sky-600/30">
              <h3 className="text-2xl font-bold mb-4">About</h3>
              <p>
                The Schools Division Office of Imus City is committed to
                providing quality, equitable, culture-based, and complete basic
                education to all learners in Imus City. The division operates
                under the Department of Education and aims to implement national
                education policies and programs at the local level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-sky-600/75 text-white rounded-lg p-6 border border-sky-600/30">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Mission
                </h3>
                <p className="text-white mb-3">
                  To protect and promote the right of every Filipino to quality,
                  equitable, culture-based, and complete basic education where:
                </p>
                <ul className="list-disc list-inside text-white space-y-2">
                  <li>
                    Students learn in a child-friendly, gender-sensitive, safe,
                    and motivating environment
                  </li>
                  <li>
                    Teachers facilitate learning and constantly nurture every
                    learner
                  </li>
                  <li>
                    Administrators and staff ensure an enabling and supportive
                    environment for effective learning
                  </li>
                  <li>
                    Family, community, and other stakeholders are actively
                    engaged in developing life-long learners
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-600/75 text-white rounded-lg p-6 border border-sky-600/30">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Vision
                </h3>
                <p className="text-white">
                  We dream of Filipinos who passionately love their country and
                  whose values and competencies enable them to realize their
                  full potential and contribute meaningfully to building the
                  nation.
                </p>
              </div>
            </div>

            <div className="bg-sky-700/70 text-white rounded-lg p-6 border border-sky-600/25">
              <h3 className="text-xl font-semibold text-white mb-3">
                Quality Policy
              </h3>
              <p className="text-white">
                Schools Division Office of Imus City commits to delivering
                quality services responsive to the needs of its clientele in
                accordance with mandated standards, principles of transparent,
                ethical and accountable governance, and continuous improvement
                processes towards the holistic development of "BIDAng" Imusenyo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
