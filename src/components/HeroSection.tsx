
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Shield, Truck, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-50 via-emerald-50 to-amber-50">
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent)] "></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.1),transparent)]"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-amber-200 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-200 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fadeInUp">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Premium Quality Since 1985
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Pure & Natural
              </span>
              <span className="block bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                Edible Oils
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Ganesh Oil Industry delivers premium quality, hygienically processed 
              edible oils that exceed both domestic and international standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6 font-semibold transition-all duration-300"
              >
                Learn About Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  38+
                </div>
                <div className="text-sm text-slate-600 font-medium">Years Experience</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  1000+
                </div>
                <div className="text-sm text-slate-600 font-medium">Happy Clients</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  99.9%
                </div>
                <div className="text-sm text-slate-600 font-medium">Quality Assured</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Premium Quality</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                ISO certified production facility ensuring the highest standards 
                of quality and purity in every drop of oil.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Hygienic Processing</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                State-of-the-art processing units with strict hygiene protocols 
                maintaining nutritional value and freshness.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Pan India Delivery</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Efficient distribution network ensuring fresh products reach 
                customers across India and international markets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
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
