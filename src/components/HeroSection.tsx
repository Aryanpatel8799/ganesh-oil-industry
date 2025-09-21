
import { Button } from '@/components/ui/button';
import { MovingText, ScrollingText } from '@/components/ui/moving-text';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { ArrowRight, Leaf, Shield, Award, Truck, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // WhatsApp function
  const handleGetQuote = () => {
    const phoneNumber = "919898537506";
    const message = "Hi! I'm interested in getting a quote for your cotton seed cake products. Could you please provide me with pricing and availability details?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const movingTexts = [
    "Premium Cotton Seed Cake",
    "Increase Milk Production by 30%",
    "Trusted by 500000+ Farmers",
    "ISO Certified Quality Products"
  ];

  return (
    <>
      {/* Moving Text Banner */}
      <div className="bg-emerald-600 text-white py-3 overflow-hidden">
        <ScrollingText 
          text="★ Premium Cotton Seed Cake ★ Increase Milk Production ★ 27+ Years Experience ★ ISO Certified Quality ★ Trusted by Farmers Nationwide ★ Free Home Delivery ★ Best Prices Guaranteed"
          speed={25}
          className="text-sm font-medium"
        />
      </div>

            <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Clean Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
        
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left space-y-6 lg:space-y-8"
              >
                <div className="space-y-4 lg:space-y-6">
                  <div className="inline-block">
                    <span className="inline-flex items-center px-3 py-2 sm:px-4 bg-emerald-100 text-emerald-700 rounded-full text-xs sm:text-sm font-semibold">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 fill-current" />
                      Premium Quality Since 1989
                    </span>
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
                    <span className="text-emerald-600">Gajanand</span> Oil Industries
                    <br />
                    <div className="text-2xl sm:text-3xl lg:text-4xl text-slate-700 mt-2">
                      <MovingText 
                        texts={movingTexts}
                        className="min-h-[1.2em]"
                      />
                    </div>
                  </h1>
                  
                  <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 lg:px-0">
                    Leading manufacturer of high-protein cotton seed cake. 
                    Our scientifically formulated feed increases milk production 
                    and improves cattle health naturally.
                  </p>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-4 sm:py-6">
                  <div className="text-center lg:text-left bg-white rounded-lg p-3 sm:p-0 sm:bg-transparent shadow-sm sm:shadow-none">
                    <AnimatedCounter
                      end={27}
                      duration={2500}
                      delay={300}
                      suffix="+"
                      className="text-xl sm:text-2xl font-bold text-emerald-600"
                    />
                    <div className="text-xs sm:text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center lg:text-left bg-white rounded-lg p-3 sm:p-0 sm:bg-transparent shadow-sm sm:shadow-none">
                    <AnimatedCounter
                      end={500000}
                      duration={2500}
                      delay={600}
                      suffix="+"
                      className="text-xl sm:text-2xl font-bold text-emerald-600"
                    />
                    <div className="text-xs sm:text-sm text-slate-600">Happy Farmers</div>
                  </div>
                  <div className="text-center lg:text-left bg-white rounded-lg p-3 sm:p-0 sm:bg-transparent shadow-sm sm:shadow-none">
                    <AnimatedCounter
                      end={30}
                      duration={2500}
                      delay={900}
                      suffix="%"
                      className="text-xl sm:text-2xl font-bold text-emerald-600"
                    />
                    <div className="text-xs sm:text-sm text-slate-600">Milk Increase</div>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
                  <Button 
                    onClick={handleGetQuote}
                    size="lg" 
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base w-full sm:w-auto"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button 
                    onClick={handleGetQuote}
                    variant="outline" 
                    size="lg"
                    className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold w-full sm:w-auto"
                  >
                    Contact Us
                  </Button>
                </div>
              </motion.div>
              
              {/* Right Content - Professional Image */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative order-first lg:order-last"
              >
                <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                  {/* Main Product Image */}
                  <div className="relative bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl lg:shadow-2xl">
                    <img 
                      src="/lovable-uploads/happy-cow-illustration-while-farmer-milking_9645-1436 2.AVIF"
                      alt="Premium Cotton Seed Cake"
                      className="w-full h-auto rounded-xl lg:rounded-2xl"
                    />
                    
                    {/* Quality Badge */}
                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 bg-yellow-400 text-yellow-900 px-2 py-1 sm:px-3 sm:py-2 lg:px-4 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                      ISO Certified
                    </div>
                    
                    {/* Features */}
                    <div className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl p-3 sm:p-4 border w-11/12 sm:w-auto">
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 text-center">
                        <div>
                          <Leaf className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-emerald-600 mx-auto mb-1" />
                          <div className="text-xs font-medium">Natural</div>
                        </div>
                        <div>
                          <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600 mx-auto mb-1" />
                          <div className="text-xs font-medium">Safe</div>
                        </div>
                        <div>
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-amber-600 mx-auto mb-1" />
                          <div className="text-xs font-medium">Premium</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
