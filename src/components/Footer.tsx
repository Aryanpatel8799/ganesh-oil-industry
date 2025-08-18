
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">G</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold">Gajanand Oil Industry</h3>
                <p className="text-emerald-400 font-medium">Pure & Natural</p>
              </div>
            </div>
            <p className="text-slate-300 mb-8 max-w-md leading-relaxed text-lg">
              For over 35 years, Gajanand Oil Industry has been committed to delivering 
              the highest quality edible oils. Our dedication to purity, quality, and 
              customer satisfaction has made us a trusted name in the industry.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 p-3">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 p-3">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 p-3">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 p-3">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="/" className="text-slate-300 hover:text-emerald-400 transition-colors text-lg">Home</a></li>
              <li><a href="/about" className="text-slate-300 hover:text-emerald-400 transition-colors text-lg">About Us</a></li>
              <li><a href="/products" className="text-slate-300 hover:text-emerald-400 transition-colors text-lg">Products</a></li>
              <li><a href="/quality" className="text-slate-300 hover:text-emerald-400 transition-colors text-lg">Quality</a></li>
              <li><a href="/gallery" className="text-slate-300 hover:text-emerald-400 transition-colors text-lg">Gallery</a></li>
              <li><a href="/contact" className="text-slate-300 hover:text-emerald-400 transition-colors text-lg">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Contact Info</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 leading-relaxed">
                    123, Industrial Area,<br />
                    Oil Mill Road,<br />
                    Mumbai - 400001, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-emerald-400" />
                <span className="text-slate-300 text-lg">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-emerald-400" />
                <span className="text-slate-300 text-lg">info@ganeshoil.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-lg">
              © 2024 Gajanand Oil Industry. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
