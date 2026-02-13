
import logo from "../assets/logo.png";


function Header(){
    return (
        <>
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center justify-between px-8 py-3 
                      bg-white/70 backdrop-blur-xl 
                      shadow-lg rounded-full 
                      border border-gray-200
                      w-[90vw] max-w-5xl">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
    src={logo} 
    alt="Siksha Sethu Logo" 
    className="w-8 h-8 object-contain"
  />
          <span className="font-semibold text-gray-800 text-lg">
            Siksha Sethu
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Opportunities
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            AI Chatbot
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Contact
          </a>
        </nav>

        {/* Login Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white 
                           px-5 py-2 rounded-full 
                           transition shadow-md">
          Login
        </button>

      </div>
    </div>



        </>
    )
}


export default Header;