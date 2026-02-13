import React from "react";
import scholar from "../assets/scholarship.png";
import interbship from "../assets/internship.png";
import grants from "../assets/grants.png";
import botIcon from "../assets/botimage.png"; // Ensure you have your bot asset here

const ExploreOpportunities = () => {
  const cards = [
    {
      title: "Scholarships",
      description: "Find and apply for various types of scholarships to fund your education.",
      button: "Find Scholarships",
      image: scholar,
      accent: "bg-blue-600 hover:bg-blue-700 shadow-blue-200",
    },
    {
      title: "Internships",
      description: "Discover internship programs for hands-on experience in your field of study.",
      button: "View Internships",
      image: interbship,
      accent: "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-200",
    },
    {
      title: "Grants",
      description: "Learn about and apply for educational and research grants available globally.",
      button: "Find Grants",
      image: grants,
      accent: "bg-orange-500 hover:bg-orange-600 shadow-orange-200",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text  text-zinc-700">
            Explore Opportunities
          </h2>
          <div className="mt-4 h-1.5 w-24 bg-gradient-to-r from-[#33ccff] to-[#4ade80] rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center 
                         border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 
                         transition-all duration-500 ease-out"
            >
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-48 h-40 object-contain"
                />
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>

              <button
                className={`w-full py-4 rounded-2xl text-white font-semibold text-lg shadow-lg 
                           transition-all duration-300 active:scale-95 ${card.accent}`}
              >
                {card.button}
              </button>
            </div>
          ))}
        </div>

        {/* --- AI Chatbot Assistance Section --- */}
        <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
          {/* Subtle background wave/gradient for that "patchy-fix" look */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            {/* Robot Image with soft floating animation */}
            <div className="w-32 h-32 md:w-44 md:h-44 shrink-0 animate-float">
              <img 
                src={botIcon} 
                alt="AI Chatbot" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
                AI Chatbot Assistance
              </h3>
              <p className="text-slate-500 max-w-lg text-lg leading-relaxed">
                Need support? Our AI-powered chatbot is here to assist you. 
                Get instant answers and personalized guidance.
              </p>
            </div>
          </div>

          <button className="relative z-10 bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-100 transition-all active:scale-95">
            Chat Now
          </button>
        </div>
      </div>

      {/* Embedded CSS for the floating effect */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ExploreOpportunities;