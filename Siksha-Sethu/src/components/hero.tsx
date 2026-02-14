import heroimg from "../assets/heroimg.png";
import heromobile from "../assets/heromobile.png";

function HERO() {
  return (
    <section className="relative pt-44 pb-20 md:pt-36 overflow-hidden bg-gradient-to-br from-[#f7f9ff] to-[#eef3ff] min-h-screen flex flex-col justify-center">

      {/* Background */}
      <div
        className="absolute inset-0 z-0 opacity-30 md:opacity-100"
        style={{
          backgroundImage: `url(${heroimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Mobile Background Override */}
      <div
        className="absolute inset-0 z-0 md:hidden opacity-50"
        style={{
          backgroundImage: `url(${heromobile})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      />

      {/* Soft White Overlay ONLY for mobile */}
      <div className="absolute inset-0 bg-white/0 md:hidden backdrop-blur-xs"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Internships, Scholarships &
            <span className="text-blue-600 block md:inline"> Free Courses</span>
          </h1>

          {/* Subheading */}
          <h2 className="mt-4 text-xl sm:text-3xl font-semibold text-gray-700">
            All in one place.
          </h2>

          {/* Description */}
          <p className="mt-5 text-sm sm:text-lg text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Integrated from trusted, verified platforms with AI-powered assistance.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">

            {/* Primary Button - Mobile Enhanced */}
            <button className="w-full sm:w-auto px-7 py-4 md:py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-xl hover:scale-105 transition duration-300">
              Browse Opportunities
            </button>

            {/* Secondary Button */}
            <button className="w-full sm:w-auto px-7 py-4 md:py-3 rounded-2xl border border-gray-300 bg-white/90 backdrop-blur-sm text-gray-700 font-semibold hover:bg-gray-100 transition duration-300">
              Get AI Assistance
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="relative z-10 max-w-6xl mx-auto mt-20 md:mt-28 px-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            { value: "40+", label: "Total Scholarships & Internships", color: "text-blue-600" },
            { value: "5+", label: "Platforms Taken From", color: "text-green-500" },
            { value: "1", label: "AI Chatbot", color: "text-purple-500" },
            { value: "10+", label: "Sorting and Filters", color: "text-orange-500" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/95 md:bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 text-center border border-gray-100 hover:shadow-xl transition duration-300"
            >
              <h2 className={`text-3xl font-bold ${item.color}`}>
                {item.value}
              </h2>
              <p className="mt-2 text-gray-600 text-sm font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default HERO;
