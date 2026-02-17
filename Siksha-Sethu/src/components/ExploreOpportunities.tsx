import { useNavigate } from "react-router-dom"; // Import useNavigate
import scholar from "../assets/scholarship.png";
import internship from "../assets/internship.png";
import grants from "../assets/grants.png";
import botIcon from "../assets/botimage.png";

const ExploreOpportunities = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavigation = () => {
    navigate("/opportunities");
  };

  const cards = [
    {
      title: "Scholarships",
      description: "Find and apply for various types of scholarships to fund your education.",
      button: "Explore",
      image: scholar,
      accent: "bg-blue-600 hover:bg-blue-700 shadow-blue-100",
    },
    {
      title: "Internships",
      description: "Discover internship programs for hands-on experience in your field of study.",
      button: "Browse",
      image: internship,
      accent: "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-100",
    },
    {
      title: "Grants",
      description: "Learn about and apply for educational and research grants available globally.",
      button: "Search",
      image: grants,
      accent: "bg-orange-500 hover:bg-orange-600 shadow-orange-100",
    },
  ];

  return (
    <section className="relative py-20 bg-slate-50/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Medium Title Section */}
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-slate-800 tracking-tight">
            Explore Opportunities ✨
          </h2>
          <div className="mt-3 h-1.5 w-20 bg-blue-500 rounded-full"></div>
        </div>

        {/* Medium-sized Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white rounded-[2rem] p-8 flex flex-col items-center text-center 
                         border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 
                         transition-all duration-300"
            >
              <div className="mb-6 h-32 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-32 h-32 object-contain"
                />
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <button
                onClick={handleNavigation} // Added navigation handler
                className={`w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg 
                            transition-all active:scale-95 ${card.accent}`}
              >
                {card.button}
              </button>
            </div>
          ))}
        </div>

        {/* Balanced AI Assistant Section */}
        <div className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center animate-float shrink-0">
              <img src={botIcon} alt="AI Bot" className="w-14 h-14 object-contain" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-800 mb-1 text-left">AI Chatbot Assistance</h3>
              <p className="text-slate-500 text-md text-left">
                Need support? Get instant answers and personalized guidance from our AI.
              </p>
            </div>
          </div>
          <button 
            onClick={handleNavigation} // Added navigation handler
            className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-3.5 rounded-2xl font-bold text-base transition-all active:scale-95 shadow-lg w-full md:w-auto"
          >
            Chat Now
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ExploreOpportunities;