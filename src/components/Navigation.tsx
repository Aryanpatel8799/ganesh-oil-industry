
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Leaf } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // WhatsApp function
  const handleGetQuote = () => {
    const phoneNumber = "919898537506";
    const message = "Hi! I'm interested in getting a quote for your cotton seed cake products. Could you please provide me with pricing and availability details?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Quality', path: '/quality' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-emerald-100">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20 sm:h-24 lg:h-32 xl:h-40">
          {/* Logo */}
          <Link to="/" className="flex items-center group hover:scale-105 transition-all duration-300">
            <img 
              src="/lovable-uploads/66af7340-4154-4493-a512-910acdf22d64.png" 
              alt="Gajanand Oil Industries Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm xl:text-base font-bold transition-all duration-300 relative group ${
                  isActive(item.path)
                    ? 'text-emerald-700'
                    : 'text-slate-800 hover:text-emerald-700'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-yellow-400 rounded-full"></div>
                )}
                {!isActive(item.path) && (
                  <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-yellow-400 rounded-full transition-all duration-300 group-hover:w-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button 
              onClick={handleGetQuote}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base professional-shadow border-2 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="relative h-10 w-10 sm:h-12 sm:w-12">
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-center p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center">
                    <img 
                      src="/lovable-uploads/66af7340-4154-4493-a512-910acdf22d64.png" 
                      alt="Gajanand Oil Industries Logo" 
                      className="w-32 h-32 object-contain "
                    />
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 py-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-6 py-4 text-base font-bold transition-all duration-200 ${
                        isActive(item.path)
                          ? 'text-emerald-700 bg-gradient-to-r from-emerald-50 to-yellow-50 border-r-4 border-emerald-500'
                          : 'text-slate-800 hover:text-emerald-700 hover:bg-emerald-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-slate-200 bg-gradient-to-r from-emerald-50 to-yellow-50">
                  <Button 
                    onClick={() => {
                      handleGetQuote();
                      setIsOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 professional-shadow border-2 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
