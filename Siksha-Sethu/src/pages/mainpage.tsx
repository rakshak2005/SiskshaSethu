import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import logo from "../assets/logo.png";
import botimage from "../assets/botimage.png";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

type ViewType = "search" | "tracker" | "calendar" | "ai" | "login";

interface Opportunity {
  _id: string;
  title: string;
  company: string;
  source: string;
  applyUrl: string;
  stipend?: string;
  status?: string;
  type: string;
  deadline?: string;
  stipendAmount?: number;
}

export default function SikshaSethuDashboard() {
  const [activeView, setActiveView] = useState<ViewType>("search");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [allOpportunities, setAllOpportunities] = useState<Opportunity[]>([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState<Opportunity[]>([]);
  const [savedOpportunities, setSavedOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filters, setFilters] = useState({
    type: "All Types",
    source: "All Sources",
    stipendSort: "Default",
    sourceSort: "Default",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [internshipsRes, scholarshipsRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/api/internships/active`),
          axios.get(`${API_BASE_URL}/api/scholarships`)
        ]);

        const internships = internshipsRes.data.map((item: any) => ({
          ...item,
          type: "internship",
          stipendAmount: parseInt(item.stipend?.replace(/[^0-9]/g, "") || "0"),
        }));

        const scholarships = scholarshipsRes.data.map((item: any) => ({
          ...item,
          type: "scholarship",
          company: item.provider || "Government",
          stipend: item.amount || "Financial Aid",
          stipendAmount: parseInt(item.amount?.replace(/[^0-9]/g, "") || "0"),
        }));

        const combined = [...internships, ...scholarships];
        setAllOpportunities(combined);
        setFilteredOpportunities(combined);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let results = [...allOpportunities].filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filters.type === "All Types" || item.type.toLowerCase() === filters.type.toLowerCase();
      const matchesSource = filters.source === "All Sources" || item.source.toUpperCase() === filters.source.toUpperCase();
      return matchesSearch && matchesType && matchesSource;
    });

    if (filters.stipendSort === "High to Low") {
      results.sort((a, b) => (b.stipendAmount || 0) - (a.stipendAmount || 0));
    } else if (filters.stipendSort === "Low to High") {
      results.sort((a, b) => (a.stipendAmount || 0) - (b.stipendAmount || 0));
    }

    if (filters.sourceSort === "A-Z") {
      results.sort((a, b) => a.source.localeCompare(b.source));
    } else if (filters.sourceSort === "Z-A") {
      results.sort((a, b) => b.source.localeCompare(a.source));
    }

    setFilteredOpportunities(results);
  }, [searchTerm, filters, allOpportunities]);

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setActiveView("search");
  };

  const handleOnboardingChoice = (choice: ViewType | "internship" | "scholarship") => {
    if (choice === "internship" || choice === "scholarship") {
      setActiveView("search");
      setFilters(prev => ({ ...prev, type: choice }));
    } else {
      setActiveView(choice);
    }
    setShowOnboarding(false);
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const hasDeadline = allOpportunities.some((opp) => {
        if (!opp.deadline) return false;
        return new Date(opp.deadline).toDateString() === date.toDateString();
      });
      return hasDeadline ? <div className="mt-1 h-1 w-1 bg-red-500 rounded-full mx-auto"></div> : null;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#f3f6ff] to-[#e9efff] p-4 md:p-6 font-sans relative">
      {showOnboarding && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-300">
            <div className="text-center mb-6">
              <img src={logo} alt="Siksha Sethu" className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800">Welcome to Siksha Sethu</h2>
              <p className="text-gray-500 mt-2 text-sm">What can we help you find today?</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onClick={() => handleOnboardingChoice("internship")} className="p-4 rounded-2xl border-2 border-[#eaf0ff] hover:border-[#4f6cff] hover:bg-[#f8faff] transition-all text-left">
                <span className="text-2xl block mb-1">💼</span>
                <span className="font-semibold text-gray-700 block text-sm">Internships</span>
                <span className="text-[10px] text-gray-400">Paid & Online roles</span>
              </button>
              <button onClick={() => handleOnboardingChoice("scholarship")} className="p-4 rounded-2xl border-2 border-[#eaf0ff] hover:border-[#4f6cff] hover:bg-[#f8faff] transition-all text-left">
                <span className="text-2xl block mb-1">🎓</span>
                <span className="font-semibold text-gray-700 block text-sm">Scholarships</span>
                <span className="text-[10px] text-gray-400">Grants & Financial Aid</span>
              </button>
              <button onClick={() => handleOnboardingChoice("ai")} className="p-4 rounded-2xl border-2 border-[#eaf0ff] hover:border-[#4f6cff] hover:bg-[#f8faff] transition-all text-left">
                <span className="text-2xl block mb-1">🤖</span>
                <span className="font-semibold text-gray-700 block text-sm">AI Chatbot</span>
                <span className="text-[10px] text-gray-400">Instant Career Guidance</span>
              </button>
              <button onClick={() => setShowOnboarding(false)} className="p-4 rounded-2xl border-2 border-[#eaf0ff] hover:border-gray-400 hover:bg-[#f8faff] transition-all text-left">
                <span className="text-2xl block mb-1">🏠</span>
                <span className="font-semibold text-gray-700 block text-sm">Dashboard</span>
                <span className="text-[10px] text-gray-400">Explore everything</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-72 bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/40 md:sticky md:top-6 md:h-[calc(100vh-3rem)] overflow-y-auto overflow-x-hidden">
          <div className="flex items-center justify-between md:justify-start gap-2 mb-8">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveView("search")}>
              <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
              <h1 className="text-xl font-semibold text-gray-700">Siksha Sethu</h1>
            </div>
            <button className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>⚙️</button>
          </div>

          <div className={`${isSidebarOpen ? "block" : "hidden"} md:block space-y-3`}>
            <button onClick={() => setActiveView("search")} className={`w-full text-left px-4 py-3 rounded-xl transition-all ${activeView === "search" ? "bg-[#eaf0ff] text-[#4f6cff] font-medium" : "text-gray-600 hover:bg-[#f2f4ff]"}`}>🔍 Search Opportunities</button>
            <button onClick={() => isLoggedIn ? setActiveView("tracker") : setActiveView("login")} className={`w-full text-left px-4 py-3 rounded-xl transition-all ${activeView === "tracker" ? "bg-[#eaf0ff] text-[#4f6cff] font-medium" : "text-gray-600 hover:bg-[#f2f4ff]"}`}>📁 My Tracker ({savedOpportunities.length})</button>
            <button onClick={() => setActiveView("calendar")} className={`w-full text-left px-4 py-3 rounded-xl transition-all ${activeView === "calendar" ? "bg-[#eaf0ff] text-[#4f6cff] font-medium" : "text-gray-600 hover:bg-[#f2f4ff]"}`}>📅 Deadline Calendar</button>
            <button onClick={() => setActiveView("ai")} className={`w-full text-left px-4 py-3 rounded-xl transition-all ${activeView === "ai" ? "bg-[#eaf0ff] text-[#4f6cff] font-medium" : "text-gray-600 hover:bg-[#f2f4ff]"}`}>🤖 AI Assistant</button>

            <div className="mt-8 pt-8 border-t border-white/40 space-y-5 pb-4">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Filters & Sort</h3>
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">Type</label>
                <select name="type" value={filters.type} onChange={handleFilterChange} className="w-full p-2 text-sm rounded-lg bg-white/70 border border-gray-200 outline-none">
                  <option>All Types</option>
                  <option value="internship">Internships</option>
                  <option value="scholarship">Scholarships</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">Source</label>
                <select name="source" value={filters.source} onChange={handleFilterChange} className="w-full p-2 text-sm rounded-lg bg-white/70 border border-gray-200 outline-none">
                  <option>All Sources</option>
                  <option value="AICTE">AICTE</option>
                  <option value="FRESHERSWORLD">Freshersworld</option>
                  <option value="VTU">VTU</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 block mb-1">Sort Stipend</label>
                <select name="stipendSort" value={filters.stipendSort} onChange={handleFilterChange} className="w-full p-2 text-sm rounded-lg bg-white/70 border border-gray-200 outline-none">
                  <option value="Default">Default</option>
                  <option value="High to Low">High to Low</option>
                  <option value="Low to High">Low to High</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">
          {activeView !== "ai" && activeView !== "login" && (
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              <input type="text" placeholder="Search by title or company..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full md:w-2/3 px-5 py-3 rounded-full bg-white/70 backdrop-blur-md shadow-md border border-white/40 outline-none" />
              <button onClick={() => isLoggedIn ? setIsLoggedIn(false) : setActiveView("login")} className="w-full md:w-auto px-8 py-3 rounded-full bg-linear-to-r from-[#5db3ff] to-[#6f7cff] text-white font-medium shadow-lg hover:opacity-90">{isLoggedIn ? "Logout" : "Login"}</button>
            </div>
          )}

          {activeView === "search" && (
            <>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Found <span className="text-[#5c7cff]">{filteredOpportunities.length}</span> Opportunities</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {loading ? <p className="text-center col-span-full">Loading...</p> : filteredOpportunities.map((opp) => (
                  <div key={opp._id} className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/40 flex flex-col justify-between hover:shadow-2xl transition-shadow">
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="px-3 py-1 text-[10px] font-bold bg-[#eaf0ff] text-[#4f6cff] rounded-full uppercase tracking-tighter">{opp.type}</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase">{opp.status}</span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-gray-700 leading-tight">{opp.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{opp.company}</p>
                      <div className="flex flex-wrap gap-2 mt-4 text-xs text-gray-600">
                        <span className="bg-white/70 px-3 py-1 rounded-full border border-gray-100 flex items-center gap-1">💼 {opp.source}</span>
                        <span className="bg-white/70 px-3 py-1 rounded-full border border-gray-100 flex items-center gap-1">💰 {opp.stipend || "TBD"}</span>
                      </div>
                    </div>
                    <div className="flex justify-end gap-3 mt-6">
                      <button onClick={() => window.open(opp.applyUrl, "_blank")} className="flex-1 px-6 py-2 rounded-full bg-linear-to-r from-[#5db3ff] to-[#6f7cff] text-white text-sm font-medium shadow-md hover:brightness-110">Apply</button>
                      <button onClick={() => isLoggedIn ? setSavedOpportunities([...savedOpportunities, opp]) : setActiveView("login")} className="px-6 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm hover:bg-gray-50">Save</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeView === "calendar" && (
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/40">
              <h2 className="text-2xl font-bold text-gray-700 mb-6">Deadline Calendar</h2>
              <div className="flex flex-col lg:flex-row gap-8">
                <Calendar tileContent={tileContent} className="rounded-xl border-none shadow-sm" />
                <div className="flex-1 space-y-4">
                  <h3 className="font-bold text-gray-700">Upcoming Deadlines</h3>
                  {allOpportunities.filter(o => o.deadline).sort((a,b) => new Date(a.deadline!).getTime() - new Date(b.deadline!).getTime()).slice(0, 4).map(o => (
                    <div key={o._id} className="p-3 bg-white/40 rounded-lg border flex justify-between">
                      <span className="text-sm font-medium">{o.title}</span>
                      <span className="text-xs font-bold text-[#5c7cff]">{new Date(o.deadline!).toLocaleDateString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeView === "tracker" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-700">My Tracker</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {savedOpportunities.map((opp) => (
                  <div key={opp._id} className="bg-white/60 p-6 rounded-3xl border shadow-xl">
                    <h3 className="font-bold text-gray-700">{opp.title}</h3>
                    <p className="text-sm text-gray-500">{opp.company}</p>
                    <button onClick={() => setSavedOpportunities(savedOpportunities.filter(i => i._id !== opp._id))} className="text-red-400 text-xs mt-4 uppercase font-bold hover:underline">Remove</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeView === "ai" && (
            <div className="bg-white/80 h-[85vh] rounded-3xl flex flex-col shadow-2xl overflow-hidden border border-white/40">
              <div className="bg-linear-to-r from-[#5db3ff] to-[#6f7cff] p-5 text-white flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-white rounded-full p-1 shadow-md">
                    <img src={botimage} className="w-10 h-10 rounded-full" alt="bot" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">AI Career Assistant</h2>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <span className="text-xs text-blue-50 font-medium">Online</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setActiveView("search")} className="text-white/80 hover:text-white transition-colors">✕</button>
              </div>
              <div className="flex-1 w-full h-full bg-white">
                <iframe
                  src="https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/02/17/14/20260217145257-RUSP27CP.json"
                  title="Siksha Sethu AI Bot"
                  className="w-full h-full border-none"
                  allow="geolocation; microphone; camera; clipboard-read; clipboard-write;"
                />
              </div>
            </div>
          )}

          {activeView === "login" && (
            <div className="max-w-md mx-auto mt-20 bg-white/60 p-8 rounded-3xl shadow-2xl border">
              <h2 className="text-2xl font-bold text-center mb-6">Welcome back</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <input type="email" required className="w-full p-3 rounded-xl border" placeholder="Email" />
                <input type="password" required className="w-full p-3 rounded-xl border" placeholder="Password" />
                <button type="submit" className="w-full py-3 bg-linear-to-r from-[#5db3ff] to-[#6f7cff] text-white font-bold rounded-xl shadow-lg">Login</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}