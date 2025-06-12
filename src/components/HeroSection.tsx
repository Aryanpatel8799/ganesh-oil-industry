
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Shield, Truck } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-golden-50 to-warm-50">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Placeholder for oil production/factory image */}
          <div className="w-full h-full bg-gradient-to-br from-golden-200 via-golden-300 to-golden-400 opacity-80"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Pure & Natural
              <span className="text-golden-600 block">Edible Oils</span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-600 block mt-2">
                Since 1985
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              Ganesh Oil Industry is committed to delivering the highest quality, 
              hygienically processed edible oils that meet both domestic and 
              international standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-golden-500 hover:bg-golden-600 text-white text-lg px-8 py-4"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-golden-500 text-golden-600 hover:bg-golden-50 text-lg px-8 py-4"
              >
                Learn About Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-golden-600">35+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-golden-600">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-golden-600">99%</div>
                <div className="text-sm text-gray-600">Quality Assured</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-golden-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Premium Quality</h3>
              </div>
              <p className="text-gray-600">
                ISO certified production facility ensuring the highest standards 
                of quality and purity in every drop of oil.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-golden-500 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Hygienic Processing</h3>
              </div>
              <p className="text-gray-600">
                State-of-the-art processing units with strict hygiene protocols 
                maintaining nutritional value and freshness.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-golden-500 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Pan India Delivery</h3>
              </div>
              <p className="text-gray-600">
                Efficient distribution network ensuring fresh products reach 
                customers across India and international markets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-24 text-white"
          fill="currentColor"
          viewBox="0 0 1000 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,100 C150,0 350,0 500,50 C650,100 850,100 1000,50 L1000,100 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
