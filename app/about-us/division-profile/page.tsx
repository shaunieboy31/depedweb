export default function DivisionProfile() {
  return (
    <div className="w-full">
      <section className="px-4 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden shadow-md p-8 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/newbuilding.webp')" }}
          >
            <div className="absolute inset-0 bg-black/40" aria-hidden />
            <div className="relative z-10">
              <div className="bg-sky-400/80 text-white rounded-lg p-2 mb-3">
                <h1 className="text-center text-4xl font-bold text-white">
                  Division Profile
                </h1>
              </div>
              <div className="space-y-6">
                {/* Large About card */}
                <div className="bg-sky-700/80 text-white rounded-lg p-10 border border-sky-600/30">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    About Schools Division Office of Imus City
                  </h2>
                  <p className="text-white">
                    The Schools Division Office of Imus City is committed to
                    providing quality, equitable, culture-based, and complete
                    basic education to all learners in Imus City. The division
                    operates under the Department of Education and aims to
                    implement national education policies and programs at the
                    local level.
                  </p>
                </div>

                {/* Two-column Vision & Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-sky-600/75 text-white rounded-lg p-6 border border-sky-600/30">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Mission
                    </h3>
                    <p className="text-white mb-3">
                      To protect and promote the right of every Filipino to
                      quality, equitable, culture-based, and complete basic
                      education where:
                    </p>
                    <ul className="list-disc list-inside text-white space-y-2">
                      <li>
                        Students learn in a child-friendly, gender-sensitive,
                        safe, and motivating environment
                      </li>
                      <li>
                        Teachers facilitate learning and constantly nurture
                        every learner
                      </li>
                      <li>
                        Administrators and staff, as stewards of the
                        institution, ensure an enabling and supportive
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
                      We dream of Filipinos who passionately love their country
                      and whose values and competencies enable them to realize
                      their full potential and contribute meaningfully to
                      building the nation.
                    </p>
                  </div>
                </div>

                {/* Full-width Quality Policy card */}
                <div className="bg-sky-700/70 text-white rounded-lg p-6 border border-sky-600/25">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Quality Policy
                  </h3>
                  <p className="text-white">
                    Schools Division Office of Imus City commits to delivering
                    quality services responsive to the needs of its clientele in
                    accordance with mandated standards, principles of
                    transparent, ethical and accountable governance, and
                    continuous improvement processes towards the holistic
                    development of "BIDAng" Imusenyo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
