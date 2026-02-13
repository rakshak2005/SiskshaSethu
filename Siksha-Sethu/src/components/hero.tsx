import heroimg from "../assets/heroimg.png";
import heromobile from "../assets/heromobile.png";

function HERO() {
  return (
    <section className="relative pt-44 pb-20 md:pt-36 overflow-hidden bg-gradient-to-br from-[#f7f9ff] to-[#eef3ff] min-h-screen flex flex-col justify-center">
      <div
        className="absolute inset-0 z-0 opacity-40 md:opacity-100"
        style={{
          backgroundImage: `url(${window.innerWidth < 768 ? heromobile : heroimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "130vh"
        }}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          .hero-bg { background-image: url(${heromobile}); }
          @media (min-width: 768px) {
            .hero-bg { background-image: url(${heroimg}); }
          }
        `}} />
        <div className="hero-bg absolute inset-0 bg-cover bg-center"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
  <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">

    {/* Heading */}
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
      Internships, Scholarships & 
      <span className="text-blue-600"> Free Courses</span>
    </h1>

    {/* Subheading */}
    <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-gray-700">
      All in one place.
    </h2>

    {/* Description */}
    <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
      Integrated From All Verified Website With Ai Assistance
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
      <button className="w-full sm:w-auto px-7 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition duration-200">
        Browse Opportunities
      </button>

      <button className="w-full sm:w-auto px-7 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-100 transition duration-200">
        Get AI Assistance
      </button>
    </div>

  </div>
</div>



      {/* STATS */}
      <div className="relative z-10 max-w-[190vh] mx-auto mt-16 md:mt-28 px-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: "40+", label: "Total Scholarships & Internships", color: "text-blue-600" },
            { value: "5+", label: "Platforms Taken From", color: "text-green-500" },
            { value: "1", label: "AI Chatbot", color: "text-purple-500" },
            { value: "10+", label: "Sorting and Filters", color: "text-orange-500" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-5 md:p-6 text-center border border-gray-100 hover:shadow-xl transition"
            >
              <h2 className={`text-2xl md:text-3xl font-bold ${item.color}`}>
                {item.value}
              </h2>
              <p className="mt-1 md:mt-2 text-gray-500 text-xs md:text-sm font-medium">
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