import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-sky-400 to-blue-600 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Lingadzi Leadership Academy</h3>
                <p className="text-sky-200 text-sm italic">"Create Future Leaders of Malawi"</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Committed to academic excellence and developing future leaders through quality education,
              character building, and community service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="text-blue-100 hover:text-white transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="text-blue-100 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/alumni" className="text-blue-100 hover:text-white transition-colors">Alumni</Link></li>
              <li><Link to="/news" className="text-blue-100 hover:text-white transition-colors">News & Updates</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100 text-sm">
                  Mtandire, Chilimampunga Ground<br />
                  Lilongwe, Malawi
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-sky-400" />
                <span className="text-blue-100">+265 995 07 51 01</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-sky-400" />
                <span className="text-blue-100">info@lingadziacademy.edu.mw</span>
              </li>
            </ul>
          </div>

          {/* Core Values */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Core Values</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-blue-100">Leadership</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-blue-100">Excellence</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-blue-100">Growth</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-blue-100">Community</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a 
                  href="https://www.facebook.com/p/Lingadzi-Leadership-Academy-100086575447432/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">
            © 2024 Lingadzi Leadership Academy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-blue-100 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-blue-100 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;