
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Shield, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 professional-gradient"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              <div className="space-y-3 lg:space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="gradient-text">
                    Pure & Natural
                  </span>
                  <br />
                  <span className="text-foreground">Edible Oils</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Trusted manufacturer of premium quality edible oils for over 35 years. 
                  ISO certified excellence in every drop.
                </p>
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 py-4 lg:py-6">
                <div className="flex flex-col items-center lg:items-start space-y-2">
                  <div className="p-2 lg:p-3 bg-emerald-100 rounded-full">
                    <Leaf className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-600" />
                  </div>
                  <span className="text-sm lg:text-base font-medium text-slate-700">100% Natural</span>
                </div>
                <div className="flex flex-col items-center lg:items-start space-y-2">
                  <div className="p-2 lg:p-3 bg-blue-100 rounded-full">
                    <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                  </div>
                  <span className="text-sm lg:text-base font-medium text-slate-700">ISO Certified</span>
                </div>
                <div className="flex flex-col items-center lg:items-start space-y-2">
                  <div className="p-2 lg:p-3 bg-indigo-100 rounded-full">
                    <Award className="w-5 h-5 lg:w-6 lg:h-6 text-indigo-600" />
                  </div>
                  <span className="text-sm lg:text-base font-medium text-slate-700">35+ Years</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="professional-shadow brand-shadow text-sm lg:text-base px-6 lg:px-8 py-2.5 lg:py-3 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Products
                  <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 text-sm lg:text-base px-6 lg:px-8 py-2.5 lg:py-3"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Right Content - Image */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl transform -rotate-2 scale-110 opacity-10"></div>
                
                {/* Main image container */}
                <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-4 lg:p-8 transform transition-transform duration-300 hover:scale-105">
                  <div className="aspect-square bg-gradient-to-br from-emerald-100 via-blue-100 to-indigo-100 rounded-xl lg:rounded-2xl flex items-center justify-center">
                    <div className="text-center space-y-3 lg:space-y-4">
                      <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mx-auto flex items-center justify-center">
                        <Leaf className="w-8 h-8 lg:w-12 lg:h-12 text-white" />
                      </div>
                      <div className="space-y-1 lg:space-y-2">
                        <h3 className="text-lg lg:text-2xl font-bold text-slate-800">Premium Quality</h3>
                        <p className="text-sm lg:text-base text-slate-600">Oil Products</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
