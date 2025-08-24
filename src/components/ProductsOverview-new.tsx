import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useScrollAnimation, fadeInUp, slideInFromBottom } from '@/hooks/use-scroll-animation';
import { ArrowRight, Droplets, Star, Award, TrendingUp, Users, Truck, Phone } from 'lucide-react';
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
              Call Now: +91 98985 37506
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

export default ProductsOverview;
