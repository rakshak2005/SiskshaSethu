
import raka from '../assets/Raka.jpeg'
import varsha from '../assets/varsha.jpeg'

function BuiltBySection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#f7f9ff] to-[#eef3ff]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900">
          Built with Passion for Students
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          100% handcrafted with passion and purpose.
        </p>

        {/* Developer Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">

          {/* Rakshak */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition">
            <img
  src={raka}
  alt="Rakshak Patel"
  className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
/>

            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              Rakshak Patel V
            </h3>

            <p className="mt-2 text-gray-600">
              Full Stack Developer — Focused on building scalable and intelligent platforms.
            </p>

            <div className="mt-6 flex justify-center gap-4 flex-wrap">
                <a href="https://www.linkedin.com/in/rakshak-patel-v-12b2b624a/">
                <button className="px-5 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
                LinkedIn
              </button>
              </a>
              
              <button className="px-5 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-black transition">
                Gmail
              </button>
            </div>
          </div>

          {/* Varsha */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition">
            <img
  src={varsha}
  alt="Rakshak Patel"
  className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
/>

            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              Varsha S Gowda
            </h3>

            <p className="mt-2 text-gray-600">
              Developer & Designer — Focused on intuitive UI and seamless user experience.
            </p>

            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <a href="https://www.linkedin.com/in/varsha-gowda-94295b2b9/"><button className="px-5 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
                LinkedIn
              </button></a>

              <a href="varshagowda@gmail.com"><button className="px-5 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-black transition">
                Gmail
              </button></a>
              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default BuiltBySection;
