import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-ocean-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Ganesh Oil Industry</h3>
                <p className="text-gray-400">Pure & Natural</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              For over 35 years, Ganesh Oil Industry has been committed to delivering 
              the highest quality edible oils. Our dedication to purity, quality, and 
              customer satisfaction has made us a trusted name in the industry.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-ocean-500 text-ocean-400 hover:bg-ocean-500 hover:text-white">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-ocean-500 text-ocean-400 hover:bg-ocean-500 hover:text-white">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-ocean-500 text-ocean-400 hover:bg-ocean-500 hover:text-white">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-ocean-500 text-ocean-400 hover:bg-ocean-500 hover:text-white">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-ocean-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-ocean-400 transition-colors">About Us</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-ocean-400 transition-colors">Products</a></li>
              <li><a href="/quality" className="text-gray-300 hover:text-ocean-400 transition-colors">Quality</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-ocean-400 transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-ocean-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-ocean-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123, Industrial Area,<br />
                    Oil Mill Road,<br />
                    Mumbai - 400001, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-ocean-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-ocean-400" />
                <span className="text-gray-300">info@ganeshoil.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Ganesh Oil Industry. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-ocean-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-ocean-400 text-sm transition-colors">
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
