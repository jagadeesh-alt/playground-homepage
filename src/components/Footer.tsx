export default function Footer() {
    return (
      <footer className="w-full bg-gray-900 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Left Side - Branding */}
          <p className="text-sm">&copy; {new Date().getFullYear()} Darion Playground. All rights reserved.</p>
  
          {/* Right Side - Links */}
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="/docs" className="text-sm hover:text-blue-400 transition">Documentation</a>
            <a href="/help" className="text-sm hover:text-blue-400 transition">Support</a>
            <a href="/deploy" className="text-sm hover:text-blue-400 transition">Deploy</a>
          </div>
        </div>
      </footer>
    );
  }
  
  