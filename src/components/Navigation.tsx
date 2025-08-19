
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Leaf } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
      <div className="container mx-auto px-4">
        {/* Golden accent line at top */}
        {/* <div className="h-1 bg-gradient-to-r from-emerald-500 via-yellow-400 to-emerald-500"></div> */}
        <div className="flex items-center justify-between h-32 lg:h-40">
          {/* Logo */}
          <Link to="/" className="flex items-center group hover:scale-105 transition-all duration-300">
            <img 
              src="/lovable-uploads/66af7340-4154-4493-a512-910acdf22d64.png" 
              alt="Gajanand Oil Industry Logo" 
              className="w-32 h-32 lg:w-40 lg:h-40 object-contain "
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base font-bold transition-all duration-300 relative group ${
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
            <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-6 py-3 professional-shadow border-2 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="relative">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-center p-10 ">
                  <div className="flex items-center">
                    <img 
                      src="/lovable-uploads/66af7340-4154-4493-a512-910acdf22d64.png" 
                      alt="Gajanand Oil Industry Logo" 
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
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 professional-shadow border-2 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
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
