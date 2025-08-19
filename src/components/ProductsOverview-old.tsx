
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, fadeInUp, slideInFromBottom } from '@/hooks/use-scroll-animation';
import { ArrowRight, Droplets, Heart, Star, Package, Leaf, Award, TrendingUp, Shield, Users, Truck, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductsOverview = () => {
  // Scroll animation hooks
  const { ref: heroRef, controls: heroControls } = useScrollAnimation(0.2);
  const { ref: statsRef, controls: statsControls } = useScrollAnimation(0.3);
  const { ref: benefitsRef, controls: benefitsControls } = useScrollAnimation(0.2);
  const { ref: productsRef, controls: productsControls } = useScrollAnimation(0.2);

  // Professional stats inspired by Mayank's site
  const statsData = [
    { number: "90+", label: "Dealers", icon: Users },
    { number: "20%", label: "Increase in Fats", icon: TrendingUp },
    { number: "1L+", label: "Extra Milk Daily", icon: Droplets },
    { number: "12%", label: "Increase in SNF", icon: Award }
  ];

  // Benefits section inspired by Mayank's design
  const benefits = [
    {
      icon: "🐄",
      title: "Happy Cattle",
      description: "Cattle fed with good feed are always happy and healthy with improved immunity and better reproduction rates."
    },
    {
      icon: "🌱", 
      title: "Organic Feed",
      description: "Feed your cattle organic feed with no added chemicals, antibiotics and growth hormones for pure milk production."
    },
    {
      icon: "🥛",
      title: "Fresh Milk",
      description: "Fresh milk from happy and well-fed cows brings you and your family health, power and increased daily income."
    }
  ];

  // Featured products - simplified and professional
  const featuredProducts = [
    {
      name: "High Protein Cotton Seed Cake",
      description: "Premium quality with 28-30% protein content for maximum milk yield",
      image: "/lovable-uploads/cebabb95-3562-40a4-a4c3-c55a85187f63.png",
      features: ["28-30% Protein", "Increases Milk Yield by 25%", "FSSAI Certified"],
      price: "Best Price",
      category: "Premium Grade"
    },
    {
      name: "Expeller Cotton Seed Cake",
      description: "Mechanically extracted cake perfect for commercial dairy farms",
      image: "/lovable-uploads/57319956-8fac-4bd4-b90c-1f26ddd3e5f9.png", 
      features: ["24-26% Protein", "High Digestibility", "Bulk Supply Available"],
      price: "Wholesale Rate",
      category: "Commercial Grade"
    },
    {
      name: "Organic Cotton Seed Cake",
      description: "100% organic cake from pesticide-free cotton cultivation",
      image: "/lovable-uploads/ab1f78de-2f19-4b3a-940b-ef7e0bb86bea.png",
      features: ["100% Organic", "Chemical Free", "Premium Quality"],
      price: "Premium Rate", 
      category: "Organic Grade"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 py-16 relative z-10">
        
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
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-slate-600 mb-3">{stat.label}</div>
              <stat.icon className="w-8 h-8 text-emerald-500 mx-auto" />
            </motion.div>
          ))}
        </motion.div>

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
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={slideInFromBottom}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-6xl mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
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
                  
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-emerald-600 to-green-700 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Boost Your Milk Production?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our experts today for the best cotton seed cake prices and free consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-slate-50 px-8 py-4 text-lg font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91 98765 43210
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold"
            >
              <Truck className="w-5 h-5 mr-2" />
              Free Home Delivery
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
  const cakeVarieties = [
    {
      name: "High Protein Cotton Seed Cake",
      description: "Premium quality cake with 28-30% protein content. Increases milk yield by 20-25% in dairy cows and buffaloes within 30 days of regular feeding.",
      icon: Star,
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      features: ["28-30% Protein", "Milk Boost Formula", "FSSAI Certified"],
      rating: 4.9,
      benefits: ["Increases Milk Yield", "Better Fat Content", "Enhanced Immunity"],
      specifications: {
        protein: "28-30%",
        fat: "5-7%",
        fiber: "18-22%",
        moisture: "8-10%"
      }
    },
    {
      name: "Expeller Cotton Seed Cake",
      description: "Mechanically extracted cake perfect for commercial dairy farms. Proven to increase milk production by 15-20% while improving overall animal health.",
      icon: Flame,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      features: ["High Digestibility", "Commercial Grade", "Bulk Supply"],
      rating: 4.8,
      benefits: ["Cost Effective", "Consistent Quality", "Better Reproduction"],
      specifications: {
        protein: "24-26%",
        fat: "6-8%",
        fiber: "20-24%",
        moisture: "9-11%"
      }
    },
    {
      name: "Organic Cotton Seed Cake",
      description: "100% organic cake from pesticide-free cotton. Naturally enhances milk quality and quantity in dairy animals without chemical residues.",
      icon: Heart,
      color: "from-yellow-500 to-amber-600",
      bgColor: "bg-yellow-50",
      features: ["100% Organic", "Chemical Free", "Premium Quality"],
      rating: 4.7,
      benefits: ["Pure Milk", "Safe for Animals", "Natural Growth"],
      specifications: {
        protein: "26-28%",
        fat: "5-6%",
        fiber: "19-23%",
        moisture: "8-9%"
      }
    },
    {
      name: "Pelletized Cotton Seed Cake",
      description: "Convenient pellet form for easy feeding and storage. Reduces wastage and ensures consistent nutrition for maximum milk output.",
      icon: Package,
      color: "from-emerald-400 to-green-500",
      bgColor: "bg-emerald-50",
      features: ["Easy Handling", "Less Wastage", "Better Storage"],
      rating: 4.9,
      benefits: ["Convenient Use", "Longer Shelf Life", "Uniform Nutrition"],
      specifications: {
        protein: "25-27%",
        fat: "6-7%",
        fiber: "21-25%",
        moisture: "7-9%"
      }
    }
  ];

  const cakeProducts = [
    {
      name: "Premium Cotton Seed Cake",
      description: "Our flagship cotton seed cake with exceptional protein content (22-24%) and balanced amino acid profile. Ideal for dairy cattle, buffaloes, and high-yield livestock. Cold-pressed extraction ensures maximum nutritional retention.",
      image: "/lovable-uploads/cebabb95-3562-40a4-a4c3-c55a85187f63.png",
      features: ["22-24% Protein", "Rich in Lysine", "High Digestibility", "Aflatoxin Free", "FSSAI Certified"],
      category: "Premium Cattle Feed",
      specifications: {
        protein: "22-24%",
        fat: "6-8%", 
        fiber: "12-15%",
        moisture: "Max 10%"
      },
      benefits: ["Increases Milk Yield", "Improves Fat Content", "Better Reproduction", "Enhanced Immunity"]
    },
    {
      name: "Processed Cotton Seed Cake (Expeller)",
      description: "Mechanically extracted cotton seed cake using modern expeller technology. Higher protein content (28-30%) with reduced oil residue. Perfect for commercial dairy farms and livestock operations.",
      image: "/lovable-uploads/57319956-8fac-4bd4-b90c-1f26ddd3e5f9.png",
      features: ["28-30% Protein", "Low Oil Residue", "Enhanced Palatability", "Extended Shelf Life", "Consistent Quality"],
      category: "Commercial Grade",
      specifications: {
        protein: "28-30%",
        fat: "4-6%",
        fiber: "10-12%", 
        moisture: "Max 8%"
      },
      benefits: ["Superior Nutrition", "Cost Effective", "Bulk Availability", "Quality Assurance"]
    },
    {
      name: "Organic Cotton Seed Cake", 
      description: "100% organic cotton seed cake from pesticide-free cotton cultivation. Traditional oil extraction methods preserve natural nutrients. Certified organic by authorized agencies.",
      image: "/lovable-uploads/ab1f78de-2f19-4b3a-940b-ef7e0bb86bea.png",
      features: ["100% Organic", "Pesticide Free", "Traditional Process", "Certified Quality", "Natural Nutrients"],
      category: "Organic Premium",
      specifications: {
        protein: "20-22%",
        fat: "7-9%",
        fiber: "14-16%",
        moisture: "Max 12%"
      },
      benefits: ["Chemical Free", "Natural Growth", "Safe for Animals", "Environmental Friendly"]
    },
    {
      name: "Cotton Seed Cake Pellets",
      description: "Compressed cotton seed cake in convenient pellet form for easy handling and storage. Reduced wastage, improved shelf life, and enhanced palatability for livestock.",
      image: "/lovable-uploads/1d0cfaae-58fc-4cb1-b8ce-544667a95a3d.png",
      features: ["Pelletized Form", "Easy Handling", "Reduced Wastage", "Better Storage", "Enhanced Palatability"],
      category: "Convenience Grade",
      specifications: {
        protein: "24-26%",
        fat: "5-7%",
        fiber: "11-13%",
        moisture: "Max 9%"
      },
      benefits: ["Convenient Use", "Less Dust", "Better Mixing", "Longer Shelf Life"]
    }
  ];

  const rawMaterials = [
    {
      name: "Premium Oil Seeds",
      description: "High-quality raw materials used in our oil production",
      image: "/lovable-uploads/bd4b6051-e1ee-4b43-b411-7bf70528fc2a.png",
      features: ["Natural", "Fresh", "Quality Assured"]
    },
    {
      name: "Raw Oil Cake",
      description: "Fresh oil cake before processing, rich in natural nutrients",
      image: "/lovable-uploads/356c9ecc-0c23-48f6-9d87-7d217a51cd70.png",
      features: ["Natural State", "High Nutrition", "Fresh Quality"]
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(16,185,129,0.03)_25%,transparent_25%,transparent_75%,rgba(16,185,129,0.03)_75%,rgba(16,185,129,0.03)),linear-gradient(45deg,rgba(16,185,129,0.03)_25%,transparent_25%,transparent_75%,rgba(16,185,129,0.03)_75%,rgba(16,185,129,0.03))] bg-[length:20px_20px] bg-[position:0_0,10px_10px]" />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-emerald-100/30 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Hero Section - Professional & Clean */}
        <motion.div 
          ref={heroRef}
          initial="hidden"
          animate={heroControls}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 font-semibold mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Award className="w-5 h-5" />
            <span>Premium Cotton Seed Cake Manufacturers</span>
            <Sparkles className="w-5 h-5 text-emerald-500" />
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            variants={scaleIn}
          >
            Enhancing Health,{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
              Maximizing Yield
            </span>
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-emerald-700 mb-8"
            variants={fadeInUp}
          >
            More Milk Production, More Profit - That's Gajanand Cotton Seed Cake
          </motion.h2>
          
          <motion.p 
            className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Trusted by farmers for over 25 years, our scientifically formulated cotton seed cake 
            increases milk production by up to 30% while ensuring optimal cattle health and nutrition. 
            Join thousands of satisfied farmers who've transformed their dairy operations with our premium products.
          </motion.p>
        </motion.div>

        {/* Statistics Section - Inspired by Reference Sites */}
        <motion.div 
          ref={statsRef}
          initial="hidden"
          animate={statsControls}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-sm font-medium text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section - Professional Grid */}
        <motion.div 
          ref={benefitsRef}
          initial="hidden"
          animate={benefitsControls}
          variants={fadeInLeft}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Cotton Seed Cake?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proven benefits that make a real difference to your dairy farm's productivity and profitability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={slideInFromBottom}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 text-center"
              >
                <div className="text-5xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Product Varieties - Clean & Professional */}
        <motion.div 
          ref={varietiesRef}
          initial="hidden"
          animate={varietiesControls}
          variants={fadeInRight}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Premium Product Range
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Scientifically formulated cotton seed cake varieties designed for different farming needs and cattle types
            </p>
          </div>
          
          <AnimatePresence>
            {isLoading ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LoadingSkeleton />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {cakeVarieties.map((variety, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${variety.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <variety.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">
                      {variety.name}
                    </h3>
                    <p className="text-slate-600 text-center mb-6 leading-relaxed">
                      {variety.description}
                    </p>
                    
                    {/* Specifications Grid */}
                    <div className="bg-slate-50 rounded-xl p-4 mb-6">
                      <h4 className="font-semibold text-slate-800 mb-3 text-center">Nutritional Profile</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        {Object.entries(variety.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-slate-600 capitalize">{key}:</span>
                            <span className="font-semibold text-emerald-600">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(variety.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} 
                          />
                        ))}
                        <span className="text-sm font-semibold text-slate-700 ml-2">{variety.rating}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white">
                      Learn More
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Premium Products Showcase */}
        <motion.div 
          ref={premiumRef}
          initial="hidden"
          animate={premiumControls}
          variants={fadeInUp}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Premium Products
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our flagship cotton seed cake products with detailed specifications and proven results for commercial dairy operations
            </p>
          </div>
          
          <ModernCarousel autoplay autoplayDelay={6000} className="max-w-7xl mx-auto">
            {Array.from({ length: Math.ceil(cakeProducts.length / 2) }, (_, slideIndex) => (
              <div key={slideIndex} className="px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {cakeProducts.slice(slideIndex * 2, slideIndex * 2 + 2).map((product, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ModernProductCard 
                        product={product}
                        type="cake"
                        className="h-full"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </ModernCarousel>
        </motion.div>

        {/* Call to Action - Professional */}
        <motion.div 
          ref={ctaRef}
          initial="hidden"
          animate={ctaControls}
          variants={scaleIn}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Dairy Farm?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of successful farmers who trust Gajanand Cotton Seed Cake for superior milk production and cattle health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-slate-50 px-8 py-4 text-lg font-semibold"
              >
                Get Product Catalog
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold"
              >
                <span className="mr-2">Contact Our Experts</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsOverview;
