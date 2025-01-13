import { Github, GithubIcon } from 'lucide-react';
import React from 'react';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer id="footer" className="bg-neutral-950 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2 animate__animated animate__fadeIn">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
             Aurpit
            </h3>
            <p className="text-gray-400 mb-6">
              Passionate MERN stack developer creating innovative web solutions. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/arpitbhatia23" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all duration-300">
                <GithubIcon/>
              </a>
              <a href="https://linkedin.com/in/aurpit-bhatia" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all duration-300">
                <AiFillLinkedin/>
              </a>
              <a href="https://www.instagram.com/_arpit_bhatia_/" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all duration-300">
                <AiFillInstagram/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate__animated animate__fadeIn" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to={"Home"} className="text-gray-400 hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to={"About"} className="text-gray-400 hover:text-blue-500 transition-colors">About</Link></li>
              <li><Link to={"Project"} className="text-gray-400 hover:text-blue-500 transition-colors">Projects</Link></li>
              <li><Link to={"contact"} className="text-gray-400 hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate__animated animate__fadeIn" style={{ animationDelay: "0.4s" }}>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                aurpitaurpit@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                +91 8628047655
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
               Chandigarh India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Aurpit. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
