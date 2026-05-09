import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white/70 backdrop-blur-md border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Brand */}
          <div className="text-xl font-extrabold tracking-tight opacity-80 hover:opacity-100 transition duration-300">
            <Link to="/">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-slate-600 to-slate-900">
                StudentSync
              </span>
            </Link>
          </div>

          {/* Made with & Connect */}
          <div className="flex flex-wrap justify-center items-center gap-2 text-slate-600 font-medium text-sm">
            <span>Made with 💻 & ❤️</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            
            {/* 👇 Paste your actual LinkedIn Profile URL in the href below 👇 */}
            <a 
              href="https://www.linkedin.com/in/codewithamrat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors duration-300 font-bold ml-1 bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
              Connect with me
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}