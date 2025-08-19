import HeroSection from '@/components/HeroSection';
import ProductsOverview from '@/components/ProductsOverview';
import TrustSection from '@/components/TrustSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
    { number: "27+", label: "Years Experience", icon: Award },
    { number: "500000+", label: "Happy Customers", icon: Users },
    { number: "90+", label: "Dealers", icon: Shield },
    { number: "30%", label: "Milk Increase", icon: TrendingUp }
  ];

  // Customer testimonials
  const testimonials = [
    {
      name: "Ramesh Patel",
      location: "Rajkot, Gujarat",
      rating: 5,
      comment: "Our milk production increased by 28% within a month of using Gajanand Oil Industry cotton seed cake. Excellent quality!"
    },
    {
      name: "Suresh Kumar",
      location: "Ahmedabad, Gujarat", 
      rating: 5,
      comment: "Best cotton seed cake in the market. My cattle are healthier and milk quality has improved significantly."
    },
    {
      name: "Mahesh Shah",
      location: "Surat, Gujarat",
      rating: 5,
      comment: "Gajanand Oil Industry provides consistent quality and timely delivery. Highly recommended for dairy farmers."
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

  // Enhanced product benefits
  const productBenefits = [
    "Increases milk production by 25-30%",
    "Rich in protein (28-30%) and essential nutrients",
    "Improves cattle health and immunity",
    "Cost-effective feed solution",
    "FSSAI certified for safety",
    "100% natural processing methods"
  ];

  return (
    <div ref={ref} className="min-h-screen">
      {/* Enhanced Hero Section with Parallax */}
      <motion.div style={{ y, opacity }} className="relative">
        <HeroSection />
      </motion.div>

      {/* Enhanced Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-emerald-600 to-green-700 py-16 -mt-8 relative z-10"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <motion.div 
                  className="text-4xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm font-medium opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
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
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-6 bg-emerald-100 text-emerald-700">
                Product Benefits
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Proven Benefits for Your Cattle
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our premium cotton seed cake delivers exceptional results that you can see and measure. 
                Join thousands of satisfied farmers who have transformed their dairy operations.
              </p>
              
              <div className="space-y-4">
                {productBenefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg">
                  Get Premium Cotton Seed Cake
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl p-8"
            >
              <img 
                src="/lovable-uploads/bd4b6051-e1ee-4b43-b411-7bf70528fc2a.png"
                alt="Cotton Seed Cake Benefits"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Customer Testimonials */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-slate-50 to-white"
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
              What Our Farmers Say
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Real experiences from farmers who trust Gajanand Oil Industry for their cattle feed needs
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
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

      {/* Enhanced Final CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-emerald-600 to-green-700"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Boost Your Milk Production?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Contact us today and join thousands of successful farmers who trust Gajanand Oil Industry
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-white text-emerald-600 hover:bg-slate-50 px-8 py-4 text-lg">
              <Phone className="mr-2 w-5 h-5" />
              Call Now: +91 98765 43210
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg">
              Get Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
