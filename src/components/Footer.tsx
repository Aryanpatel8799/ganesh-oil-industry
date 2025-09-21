
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart, ArrowUp, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-transparent opacity-50"></div>
      
      {/* Main Footer */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-12">
          
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 text-center lg:text-left"
          >
            <div className="flex flex-col items-center lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 mb-6">
              <div className="bg-gradient-to-br from-emerald-100 to-yellow-100 p-3 rounded-xl shadow-lg border border-emerald-300/50 hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/66af7340-4154-4493-a512-910acdf22d64.png" 
                  alt="Gajanand Oil Industries Logo" 
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-emerald-200 to-yellow-200 bg-clip-text text-transparent mb-1">
                  Gajanand Oil Industries
                </h3>
                <p className="text-yellow-400 font-semibold text-sm lg:text-base">Premium Cotton Seed Cake</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed text-sm lg:text-base max-w-lg mx-auto lg:mx-0 mb-6">
              For over 27 years, Gajanand Oil Industries has been committed to delivering 
              the highest quality cotton seed cake for enhanced cattle nutrition. Our dedication to purity, quality, and 
              customer satisfaction has made us a trusted name in dairy farming across Gujarat.
            </p>
            
            {/* Social Media Links */}
            <div className="flex justify-center lg:justify-start space-x-3">
              <Button 
                size="sm" 
                variant="outline" 
                className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500 hover:text-white hover:scale-110 transition-all duration-300 p-3"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500 hover:text-white hover:scale-110 transition-all duration-300 p-3"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500 hover:text-white hover:scale-110 transition-all duration-300 p-3"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500 hover:text-white hover:scale-110 transition-all duration-300 p-3"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-emerald-500 inline-block pb-2">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-slate-300 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 text-base inline-flex items-center justify-center lg:justify-start group">
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-slate-300 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 text-base inline-flex items-center justify-center lg:justify-start group">
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="text-slate-300 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 text-base inline-flex items-center justify-center lg:justify-start group">
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Products
                </a>
              </li>
              <li>
                <a href="/quality" className="text-slate-300 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 text-base inline-flex items-center justify-center lg:justify-start group">
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Quality
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-slate-300 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 text-base inline-flex items-center justify-center lg:justify-start group">
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-300 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 text-base inline-flex items-center justify-center lg:justify-start group">
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-emerald-500 inline-block pb-2">
              Contact Info
            </h4>
            <div className="space-y-5">
              <div className="flex flex-col items-center lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-center lg:text-left">
                  <p className="text-slate-300 leading-relaxed text-sm lg:text-base">
                    MG5H+R97, Saduthala,<br />
                    Gujarat 384315, India
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1 text-center lg:text-left">
                  <a href="tel:+919898537506" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm lg:text-base block">
                    +91 98985 37506
                  </a>
                  <a href="tel:+919824926552" className="text-slate-300 hover:text-emerald-400 transition-colors text-sm lg:text-base block">
                    +91 98249 26552
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col items-center lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:gajanandoilindustry@gmail.com" 
                  className="text-slate-300 hover:text-emerald-400 transition-colors text-sm lg:text-base break-words text-center lg:text-left"
                >
                  gajanandoilindustry@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700/50 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col space-y-4 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
            <div className="flex flex-col items-center space-y-3 lg:flex-row lg:space-y-0 lg:space-x-4 text-center lg:text-left order-2 lg:order-1">
              <p className="text-slate-400 text-sm">
                © {currentYear} Gajanand Oil Industries. All rights reserved.
              </p>
              <div className="flex items-center text-slate-400 text-sm">
                <span className="mr-1">Made with</span>
                <Heart className="w-4 h-4 text-red-400 mx-1" />
                <span>for better nutrition</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3 lg:flex-row lg:space-y-0 lg:space-x-6 order-1 lg:order-2">
              <div className="flex space-x-6">
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </div>
              
              {/* Scroll to Top Button */}
              <Button
                onClick={scrollToTop}
                size="sm"
                variant="outline"
                className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 px-4 py-2"
              >
                <ArrowUp className="w-4 h-4" />
                <span className="ml-2">Back to Top</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
