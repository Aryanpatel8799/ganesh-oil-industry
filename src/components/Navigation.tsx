
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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 lg:space-x-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
              <Leaf className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base lg:text-xl font-bold text-slate-800">Ganesh Oil</h1>
              <p className="text-xs lg:text-sm text-slate-600 hidden sm:block">Industry</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  isActive(item.path)
                    ? 'text-emerald-600'
                    : 'text-slate-700 hover:text-emerald-600'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button 
              className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
            >
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
                <div className="flex items-center justify-between p-4 border-b border-slate-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Leaf className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold text-slate-800">Ganesh Oil</h1>
                      <p className="text-sm text-slate-600">Industry</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 py-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-base font-medium transition-colors duration-200 ${
                        isActive(item.path)
                          ? 'text-emerald-600 bg-emerald-50 border-r-2 border-emerald-500'
                          : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="p-4 border-t border-slate-200">
                  <Button 
                    className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
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
