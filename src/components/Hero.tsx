export default function Hero() {
    return (
      <section className="relative w-full text-center py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-3xl"></div>
  
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-extrabold leading-tight tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Welcome to Darion Playground
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Code, Collaborate, Debug, and Deploy with AI-powered assistance.
          </p>
  
          {/* Buttons */}
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="/auth/signup"
              className="px-6 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-all transform hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="/playground"
              className="px-6 py-3 text-lg font-semibold border border-gray-300 hover:bg-gray-300 hover:text-gray-900 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              Try Demo
            </a>
          </div>
        </div>
      </section>
    );
  }
  