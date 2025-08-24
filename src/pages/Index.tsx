import HeroSection from '@/components/HeroSection';
import ProductsOverview from '@/components/ProductsOverview';
import TrustSection from '@/components/TrustSection';
import SEO from '@/components/SEO';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { ArrowRight, Award, Users, Shield, Phone, Star, CheckCircle, TrendingUp, Leaf, Heart, Factory } from 'lucide-react';
import { useRef } from 'react';

const Index = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Quick stats for hero enhancement
  const quickStats = [
    { number: 27, label: "Years Experience", icon: Award, suffix: "+" },
    { number: 5000000, label: "Happy Customers", icon: Users, suffix: "+" },
    { number: 90, label: "Dealers", icon: Shield, suffix: "+" },
    { number: 30, label: "Milk Increase", icon: TrendingUp, suffix: "%" }
  ];

  // Customer testimonials
  const testimonials = [
    {
      name: "Ramesh Patel",
      location: "Tharad, Gujarat",
      rating: 5,
      comment: "Our milk production increased by 28% within a month of using Gajanand Oil Industry cotton seed cake. Excellent quality!"
    },
    {
      name: "Suresh Kumar",
      location: "Deesa, Gujarat", 
      rating: 5,
      comment: "Best cotton seed cake in the market. My cattle are healthier and milk quality has improved significantly."
    },
    {
      name: "Mahesh Shah",
      location: "Dhanera, Gujarat",
      rating: 5,
      comment: "Gajanand Oil Industry provides consistent quality and timely delivery. Highly recommended for dairy farmers."
    },
    {
      name: "Kiran Joshi",
      location: "Patan, Gujarat",
      rating: 5,
      comment: "Amazing results! My cattle's health improved dramatically and milk yield increased by 35%. Highly satisfied!"
    },
    {
      name: "Deepak Singh",
      location: "Jaipur, Rajasthan",
      rating: 5,
      comment: "Using Gajanand's cotton seed cake for 2 years. Consistent quality and excellent customer service."
    },
    {
      name: "Rajesh Chaudhary",
      location: "Sirohi, Rajasthan",
      rating: 5,
      comment: "Best investment for dairy farming. Milk production increased significantly and cattle are healthier than ever."
    },
    {
      name: "Vikram Solanki",
      location: "Barmer, Rajesthan",
      rating: 5,
      comment: "Excellent protein content and digestibility. My cows love this feed and produce more milk daily."
    },
    {
      name: "Harsh Patel",
      location: "Pali, Rajesthan",
      rating: 5,
      comment: "Outstanding quality and timely delivery. Gajanand Oil Industry is our trusted partner for cattle feed."
    },
    {
      name: "Gopal Mehta",
      location: "Sojat, Rajesthan",
      rating: 5,
      comment: "Recommended by fellow farmers and it exceeded expectations. Milk fat content increased noticeably."
    },
    {
      name: "Nitin Dave",
      location: "Gudha Gorji, Rajesthan",
      rating: 5,
      comment: "Premium quality cotton seed cake at competitive prices. Our dairy farm's productivity has improved."
    },
    {
      name: "Ashwin Kumar",
      location: "Palanpur, Gujarat",
      rating: 5,
      comment: "Excellent customer support and product quality. Been using for 3 years with consistent results."
    },
    {
      name: "Jayesh Thakkar",
      location: "Raniwara, Rajesthan",
      rating: 5,
      comment: "High protein content and natural processing makes it perfect for organic dairy farming."
    }
  ];

  // Why choose us section
  const whyChooseUs = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "28-30% protein content with FSSAI certification",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Proven Results", 
      description: "25-30% increase in milk production guaranteed",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Trusted Brand",
      description: "27+ years of excellence serving farmers",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated team for consultation and guidance",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Leaf,
      title: "Natural Process",
      description: "Chemical-free processing with organic methods",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Heart,
      title: "Cattle Health",
      description: "Improved immunity and overall cattle wellness",
      color: "from-red-500 to-red-600"
    }
  ];



  return (
    <div ref={ref} className="min-h-screen">
      <SEO 
        title="Ganesh Oil Industries - Premium Cotton Seed Cake Manufacturers in Gujarat"
        description="Leading manufacturer of high-quality cotton seed cake for cattle feed in Gujarat. Premium nutrition for healthier livestock with our Ganesh Gold, Durga Brand, and Kisan products."
        keywords="cotton seed cake, cattle feed, livestock nutrition, Gujarat manufacturers, Ganesh Oil Industries, animal feed, cotton seed oil cake"
        ogImage="/lovable-uploads/1d0cfaae-58fc-4cb1-b8ce-544667a95a3d.png"
      />
      
      {/* Enhanced Hero Section with Parallax */}
      <motion.div style={{ y, opacity }} className="relative">
        <HeroSection />
      </motion.div>

      {/* Enhanced Products Overview */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <ProductsOverview />
      </motion.div>

      {/* Enhanced Why Choose Us Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-slate-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6"
            >
              <Factory className="w-4 h-4" />
              <span>Why Choose Gajanand Oil Industry</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-slate-900 mb-6"
            >
              The Trusted Choice for Quality Feed
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              Experience the difference with our premium cotton seed cake that has been trusted by farmers for over three decades
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Product Benefits Section */}


      {/* Enhanced Customer Testimonials */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-slate-900 mb-6"
            >
              What Our Customers Say
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Real experiences from Customers who trust Gajanand Oil Industry for their cattle feed needs
            </motion.p>
          </div>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Moving Right Row */}
            <div className="relative mb-8 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
              
              <motion.div 
                animate={{ x: ["-50%", "0%"] }}
                transition={{ 
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex gap-6 w-[200%]"
              >
                {/* First set of testimonials */}
                {testimonials.slice(0, 6).map((testimonial, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed italic text-sm">
                      "{testimonial.comment}"
                    </p>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-slate-500">{testimonial.location}</div>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {testimonials.slice(0, 6).map((testimonial, index) => (
                  <div
                    key={`first-duplicate-${index}`}
                    className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed italic text-sm">
                      "{testimonial.comment}"
                    </p>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-slate-500">{testimonial.location}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Moving Left Row */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
              
              <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex gap-6 w-[200%]"
              >
                {/* Second set of testimonials */}
                {testimonials.slice(6, 12).map((testimonial, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed italic text-sm">
                      "{testimonial.comment}"
                    </p>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-slate-500">{testimonial.location}</div>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {testimonials.slice(6, 12).map((testimonial, index) => (
                  <div
                    key={`second-duplicate-${index}`}
                    className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed italic text-sm">
                      "{testimonial.comment}"
                    </p>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-slate-500">{testimonial.location}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      

      {/* Enhanced Trust Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <TrustSection />
      </motion.div>

    </div>
  );
};

export default Index;
