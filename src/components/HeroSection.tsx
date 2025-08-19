
import { Button } from '@/components/ui/button';
import { MovingText, ScrollingText } from '@/components/ui/moving-text';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { ArrowRight, Leaf, Shield, Award, Truck, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
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

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Clean Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left space-y-8"
              >
                <div className="space-y-6">
                  <div className="inline-block">
                    <span className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                      <Star className="w-4 h-4 mr-2 fill-current" />
                      Premium Quality Since 1998
                    </span>
                  </div>
                  
                  <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                    <span className="text-emerald-600">Gajanand</span> Oil Industry
                    <br />
                    <div className="text-3xl lg:text-4xl text-slate-700 mt-2">
                      <MovingText 
                        texts={movingTexts}
                        className="min-h-[1.2em]"
                      />
                    </div>
                  </h1>
                  
                  <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Leading manufacturer of high-protein cotton seed cake. 
                    Our feed increases milk production 
                    and improves cattle health naturally.
                  </p>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 py-6">
                  <div className="text-center lg:text-left">
                    <AnimatedCounter
                      end={27}
                      duration={2500}
                      delay={300}
                      suffix="+"
                      className="text-2xl font-bold text-emerald-600"
                    />
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <AnimatedCounter
                      end={500000}
                      duration={2500}
                      delay={600}
                      suffix="+"
                      className="text-2xl font-bold text-emerald-600"
                    />
                    <div className="text-sm text-slate-600">Happy Customers</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <AnimatedCounter
                      end={30}
                      duration={2500}
                      delay={900}
                      suffix="%"
                      className="text-2xl font-bold text-emerald-600"
                    />
                    <div className="text-sm text-slate-600">Milk Increase</div>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 text-base"
                  >
                    View Products
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-3 text-base font-semibold"
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
                className="relative"
              >
                <div className="relative max-w-lg mx-auto">
                  {/* Main Product Image */}
                  <div className="relative bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl p-8 shadow-2xl">
                    <img 
                      src="/lovable-uploads/happy-cow-illustration-while-farmer-milking_9645-1436 2.AVIF"
                      alt="Premium Cotton Seed Cake"
                      className="w-full h-auto rounded-2xl"
                    />
                    
                    {/* Quality Badge */}
                    <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      ISO Certified
                    </div>
                    
                    {/* Features */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-xl p-4 border">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <Leaf className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                          <div className="text-xs font-medium">Natural</div>
                        </div>
                        <div>
                          <Shield className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                          <div className="text-xs font-medium">Safe</div>
                        </div>
                        <div>
                          <Award className="w-6 h-6 text-amber-600 mx-auto mb-1" />
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
