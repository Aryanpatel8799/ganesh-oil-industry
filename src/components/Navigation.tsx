
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
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/lovable-uploads/66af7340-4154-4493-a512-910acdf22d64.png" 
              alt="Gajanand Oil Industry Logo" 
              className="w-20 h-20 lg:w-24 lg:h-24 object-contain hover:scale-110 transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-2xl"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button className="professional-shadow">
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
                <div className="flex items-center justify-center p-6 border-b border-slate-200 bg-gradient-to-r from-primary/5 to-accent/5">
                  <div className="flex items-center">
                    <img 
                      src="/lovable-uploads/66af7340-4154-4493-a512-910acdf22d64.png" 
                      alt="Gajanand Oil Industry Logo" 
                      className="w-16 h-16 object-contain drop-shadow-lg"
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
                      className={`block px-4 py-3 text-base font-medium transition-colors duration-200 ${
                        isActive(item.path)
                          ? 'text-primary bg-primary/10 border-r-2 border-primary'
                          : 'text-foreground hover:text-primary hover:bg-muted'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="p-4 border-t border-slate-200">
                  <Button 
                    className="w-full professional-shadow"
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
