import rakshakImage from '../assets/Raka.jpeg';
import varshaImage from '../assets/varsha.jpeg';

const developers = [
  {
    name: "Rakshak Patel V",
    role: "Full Stack Developer",
    description: "Focused on building scalable and intelligent platforms.",
    image: rakshakImage,
    linkedin: "https://www.linkedin.com/in/rakshak-patel-v-12b2b624a/",
    email: "mailto:your-email@gmail.com",
  },
  {
    name: "Varsha S Gowda",
    role: "Developer & Designer",
    description: "Focused on intuitive UI and seamless user experience.",
    image: varshaImage,
    linkedin: "https://www.linkedin.com/in/varsha-gowda-94295b2b9/",
    email: "mailto:varshagowda@gmail.com",
  }
];

function BuiltBySection() {
  return (
    <section className="py-24 from-[#f7f9ff] to-[#eef3ff]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold text-gray-900">
          Built with Passion for Students
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          100% handcrafted with passion and purpose.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {developers.map((dev) => (
            <div key={dev.name} className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition">
              <img
                src={dev.image}
                alt={dev.name}
                className="w-24 h-24 mx-auto rounded-full object-cover shadow-md"
              />

              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                {dev.name}
              </h3>

              <p className="mt-2 text-gray-600">
                <span className="font-medium text-gray-800">{dev.role}</span> — {dev.description}
              </p>

              <div className="mt-6 flex justify-center gap-4 flex-wrap">
                <a href={dev.linkedin} target="_blank" rel="noreferrer">
                  <button className="px-5 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
                    LinkedIn
                  </button>
                </a>
                
                <a href={dev.email}>
                  <button className="px-5 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-black transition">
                    Gmail
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BuiltBySection;