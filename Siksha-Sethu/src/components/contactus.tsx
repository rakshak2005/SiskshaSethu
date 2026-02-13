function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f7f9ff] to-[#eef3ff] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions, suggestions, or partnership inquiries?  
            We’d love to hear from you.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Contact Information
            </h2>

            <div className="mt-6 space-y-4 text-gray-600">
              <p>
                📧 <span className="font-medium text-gray-800">Email:</span> support@sikshasethu.com
              </p>
              <p>
                📍 <span className="font-medium text-gray-800">Location:</span> India
              </p>
              <p>
                ⏳ <span className="font-medium text-gray-800">Response Time:</span> Within 24–48 hours
              </p>
            </div>

            <div className="mt-8 p-6 bg-white rounded-2xl shadow-md border border-gray-100">
              <h3 className="font-semibold text-gray-900">
                Why Contact Us?
              </h3>
              <ul className="mt-3 text-gray-600 space-y-2 text-sm">
                <li>• Report an issue</li>
                <li>• Suggest new platforms</li>
                <li>• Partnership inquiries</li>
                <li>• General support</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
            <form className="space-y-6">

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  
                  placeholder="Write your message..."
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>

      
    </section>

    
  );
}

export default Contact;
