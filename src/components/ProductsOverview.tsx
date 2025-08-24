import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { useScrollAnimation, fadeInUp, slideInFromBottom } from '@/hooks/use-scroll-animation';
import { ArrowRight, Droplets, Star, Award, TrendingUp,CheckCircle, Users, Truck, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductsOverview = () => {
  // WhatsApp function
  const handleGetQuote = (productName: string) => {
    const phoneNumber = "919898537506";
    const message = `Hi! I'm interested in getting a quote for ${productName}. Could you please provide me with pricing and availability details?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Scroll animation hooks
  const { ref: heroRef, controls: heroControls } = useScrollAnimation(0.2);
  const { ref: statsRef, controls: statsControls } = useScrollAnimation(0.3);
  const { ref: benefitsRef, controls: benefitsControls } = useScrollAnimation(0.2);
  const { ref: productsRef, controls: productsControls } = useScrollAnimation(0.2);

  // Professional stats inspired by Mayank's site
  const statsData = [
    { number: 90, label: "Dealers", icon: Users, suffix: "+" },
    { number: 20, label: "Increase in Fats", icon: TrendingUp, suffix: "%" },
    { number: 1, label: "Extra Milk Daily", icon: Droplets, suffix: "L+" },
    { number: 12, label: "Increase in SNF", icon: Award, suffix: "%" }
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

  // Benefits section inspired by Mayank's design
  const benefits = [
    {
      icon: "🥛",
      title: "Effective In Milk Production",
      description: "Significantly increases daily milk yield with high-quality protein content and essential nutrients for lactating cattle."
    },
    {
      icon: "🧬", 
      title: "Better Genetic Potential",
      description: "Enhances reproductive performance and genetic expression, leading to healthier offspring and improved breeding outcomes."
    },
    {
      icon: "🐄",
      title: "For Fetal Growth",
      description: "Provides essential nutrients for proper fetal development during pregnancy, ensuring healthy calf birth and growth."
    },
    {
      icon: "🦴",
      title: "For Bone Formation & Growth",
      description: "Rich in calcium and phosphorus to support strong bone development and skeletal growth in young and adult cattle."
    },
    {
      icon: "📈",
      title: "To Maintain Higher Productivity",
      description: "Sustained high performance with consistent milk quality, fat content, and overall dairy farm productivity."
    }
  ];

  // Featured products - simplified and professional
  const featuredProducts = [
    {
      name: "Ganesh Gold Cotton Seed Cake",
      description: "Premium quality with 28-30% protein content for maximum milk yield",
      image: "/lovable-uploads/cebabb95-3562-40a4-a4c3-c55a85187f63.png",
      features: ["28-30% Protein", "Increases Milk Yield by 25%", "FSSAI Certified"],
      price: "Best Price",
      category: "Premium Grade"
    },
    {
      name: "Durga Brand Cotton Seed Cake",
      description: "Mechanically extracted cake perfect for commercial dairy farms",
      image: "/lovable-uploads/57319956-8fac-4bd4-b90c-1f26ddd3e5f9.jpg", 
      features: ["24-26% Protein", "High Digestibility", "Bulk Supply Available"],
      price: "Wholesale Rate",
      category: "Commercial Grade"
    },
    {
      name: "Kisan Cotton Seed Cake",
      description: "100% organic cake from pesticide-free cotton cultivation",
      image: "/lovable-uploads/ab1f78de-2f19-4b3a-940b-ef7e0bb86bea.png",
      features: ["100% Organic", "Chemical Free", "Premium Quality"],
      price: "Premium Rate", 
      category: "Organic Grade"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        
        {/* Professional Header */}
        <motion.div 
          ref={heroRef}
          initial="hidden"
          animate={heroControls}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            <span>The Finest Facilities</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Premium Cotton Seed Cake Products
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            The process of manufacturing cattle feed becomes remarkably straightforward once 
            the feed mixture formulation is established. Our team of experts takes immense pride 
            in delivering products of the highest quality.
          </p>
        </motion.div>

        {/* Statistics Section - Clean Design */}
        <motion.div 
          ref={statsRef}
          initial="hidden"
          animate={statsControls}
          variants={fadeInUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={slideInFromBottom}
              className="text-center bg-white rounded-xl p-6 shadow-sm border border-slate-100"
            >
              <AnimatedCounter
                end={stat.number}
                duration={2500}
                delay={index * 200}
                suffix={stat.suffix}
                className="text-4xl font-bold text-emerald-600 mb-2"
              />
              <div className="text-sm font-medium text-slate-600 mb-3">{stat.label}</div>
              <stat.icon className="w-8 h-8 text-emerald-500 mx-auto" />
            </motion.div>
          ))}
        </motion.div>

      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        

        {/* Benefits Section - Professional Grid */}
        <motion.div 
          ref={benefitsRef}
          initial="hidden"
          animate={benefitsControls}
          variants={fadeInUp}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Benefits</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={slideInFromBottom}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Products - Clean Layout */}
        <motion.div 
          ref={productsRef}
          initial="hidden"
          animate={productsControls}
          variants={fadeInUp}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Products</h2>
            <p className="text-lg text-slate-600">
              High-quality cotton seed cake products for all your cattle feed requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                variants={slideInFromBottom}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-emerald-50 to-green-100 p-6">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                      {product.category}
                    </Badge>
                    <div className="text-right">
                      <div className="text-lg font-bold text-emerald-600">{product.price}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-600 mb-4">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => handleGetQuote(product.name)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>       
      </div>
    </section>
  );
};

export default ProductsOverview;
