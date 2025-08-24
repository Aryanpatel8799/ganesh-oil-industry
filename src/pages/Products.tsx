import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollingText } from '@/components/ui/moving-text';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Award, Shield, Leaf, Phone, Package, TrendingUp, CheckCircle } from 'lucide-react';

const Products = () => {
  // WhatsApp function
  const handleGetQuote = (productName: string) => {
    const phoneNumber = "919898537506"; // Replace with your WhatsApp business number
    const message = `Hi! I'm interested in getting a quote for ${productName}. Could you please provide me with pricing and availability details?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const productCategories = [
    {
      name: 'Ganesh Gold Cotton Seed Cake',
      description: 'Premium quality cotton seed cake with 28-30% protein content for maximum milk yield in dairy cattle.',
      image: '/lovable-uploads/cebabb95-3562-40a4-a4c3-c55a85187f63.png',
      price: 'Best Price Available',
      features: ['28-30% Protein Content', 'Increases Milk Yield by 25%', 'FSSAI Certified', 'High Digestibility', 'Natural Processing'],
      benefits: ['Enhanced Milk Production', 'Better Fat Content', 'Improved Cattle Health', 'Cost Effective'],
      specifications: {
        protein: '28-30%',
        fat: '5-7%',
        fiber: '18-22%',
        moisture: '8-10%'
      },
      category: 'Premium Grade',
      rating: 4.9
    },
    {
      name: 'Durga Brand Cotton Seed Cake',
      description: 'Mechanically extracted cotton seed cake perfect for commercial dairy farms and large-scale operations.',
      image: '/lovable-uploads/57319956-8fac-4bd4-b90c-1f26ddd3e5f9.jpg',
      price: 'Wholesale Rates',
      features: ['24-26% Protein Content', 'High Digestibility', 'Bulk Supply Available', 'Consistent Quality', 'Commercial Grade'],
      benefits: ['Cost Effective Solution', 'Reliable Supply', 'Proven Results', 'Better Reproduction'],
      specifications: {
        protein: '24-26%',
        fat: '6-8%',
        fiber: '20-24%',
        moisture: '9-11%'
      },
      category: 'Commercial Grade',
      rating: 4.8
    },
    {
      name: 'Kisan Gold Cotton Seed Cake',
      description: '100% organic cotton seed cake from pesticide-free cotton cultivation using traditional methods.',
      image: '/lovable-uploads/ab1f78de-2f19-4b3a-940b-ef7e0bb86bea.png',
      price: 'Premium Rates',
      features: ['100% Organic Certified', 'Chemical Free', 'Pesticide Free', 'Traditional Processing', 'Pure Quality'],
      benefits: ['Safe for Animals', 'Natural Growth', 'Pure Milk Production', 'Environment Friendly'],
      specifications: {
        protein: '26-28%',
        fat: '5-6%',
        fiber: '19-23%',
        moisture: '8-9%'
      },
      category: 'Organic Grade',
      rating: 4.7
    },
    {
      name: 'Yashoda Brand Cotton Seed Cake',
      description: 'Convenient pellet form for easy feeding and storage, reducing wastage and ensuring uniform nutrition.',
      image: '/lovable-uploads/1d0cfaae-58fc-4cb1-b8ce-544667a95a3d.png',
      price: 'Standard Rates',
      features: ['Pellet Form', 'Easy Handling', 'Less Wastage', 'Better Storage', 'Uniform Mixing'],
      benefits: ['Convenient Use', 'Longer Shelf Life', 'Better Palatability', 'Easy Transportation'],
      specifications: {
        protein: '25-27%',
        fat: '6-7%',
        fiber: '21-25%',
        moisture: '7-9%'
      },
      category: 'Convenience Grade',
      rating: 4.9
    }
  ];

  const qualityFeatures = [
    { icon: Shield, title: "ISO Certified", description: "Quality management system certified" },
    { icon: Leaf, title: "Natural Process", description: "No harmful chemicals or additives" },
    { icon: Award, title: "FSSAI Approved", description: "Food safety and standards certified" },
    { icon: CheckCircle, title: "Lab Tested", description: "Every batch tested for quality" }
  ];

  return (
    <>
      <SEO 
        title="Premium Cotton Seed Cake Products - Increase Milk Production by 30% | Gajanand Oil Industry"
        description="Explore our premium cotton seed cake products: Ganesh Gold, Durga Brand, Kisan Gold, and Yashoda Brand. ISO certified, FSSAI approved. 28-30% protein content for maximum milk yield."
        keywords="cotton seed cake products, ganesh gold cotton seed cake, durga brand cattle feed, kisan gold organic feed, premium cattle feed, dairy cow nutrition, milk production feed"
        canonicalUrl="https://gajanandoilindustry.com/products"
        ogImage="https://gajanandoilindustry.com/lovable-uploads/cebabb95-3562-40a4-a4c3-c55a85187f63.png"
      />
      <div className="min-h-screen">
      {/* Moving Text Banner */}
      <div className="bg-emerald-600 text-white py-3 overflow-hidden">
        <ScrollingText 
          text="★ Premium Cotton Seed Cake Products ★ High Protein Content ★ Increases Milk Production ★ FSSAI Certified Quality ★ Bulk Supply Available ★ Best Prices Guaranteed"
          speed={25}
          className="text-sm font-medium"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <Package className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Our Products</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
            Premium Cotton Seed Cake Products
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4">
            High-quality cotton seed cake products designed to maximize milk production and ensure 
            optimal cattle health. Choose from our range of premium, commercial, organic, and convenience grades.
          </p>
        </motion.div>

        {/* Quality Features */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12 sm:mb-16"
        >
          {qualityFeatures.map((feature, index) => (
            <div key={index} className="text-center bg-white rounded-lg sm:rounded-xl shadow-sm p-3 sm:p-4 lg:p-6 border border-slate-100">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
        >
          {productCategories.map((product, index) => (
            <Card key={index} className="overflow-hidden border-slate-100 hover:shadow-xl transition-all duration-300 h-fit">
              {/* Portrait Image Container */}
              <div className="relative bg-gradient-to-br from-emerald-50 to-green-100 p-3 sm:p-4 lg:p-6">
                <div className="aspect-[3/4] w-full max-w-xs mx-auto">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-md"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6">
                  <Badge className="bg-emerald-600 text-white text-xs sm:text-sm px-2 py-1">
                    {product.category}
                  </Badge>
                </div>
                
                {/* Rating Badge */}
                <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">{product.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-3 sm:p-4 lg:p-6">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className="text-sm sm:text-base lg:text-lg font-bold text-emerald-600">{product.price}</div>
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">{product.name}</h3>
                <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{product.description}</p>
                
                {/* Specifications */}
                <div className="bg-slate-50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2 sm:mb-3 text-sm sm:text-base">Nutritional Profile</h4>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-slate-600 capitalize">{key}:</span>
                        <span className="font-semibold text-emerald-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Features */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2 sm:mb-3 text-sm sm:text-base">Key Features</h4>
                  <div className="space-y-1 sm:space-y-2">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Benefits */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2 sm:mb-3 text-sm sm:text-base">Benefits</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {product.benefits.map((benefit, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button 
                    onClick={() => handleGetQuote(product.name)}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base py-2 sm:py-3"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                  <Button 
                    onClick={() => window.open('tel:+919898537506', '_self')}
                    variant="outline" 
                    className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 sm:w-auto w-full sm:flex-shrink-0"
                  >
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Why Choose Our Products */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Our Cotton Seed Cake?</h2>
            <p className="text-lg text-slate-600">
              Proven results that make a real difference to your dairy farm's productivity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">25-30% Milk Increase</h3>
              <p className="text-slate-600">Scientifically proven to increase milk production within 30 days</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Quality Assured</h3>
              <p className="text-slate-600">ISO certified and FSSAI approved for guaranteed quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">100% Natural</h3>
              <p className="text-slate-600">No harmful chemicals or artificial additives used</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
     
      </div>
      </div>
    </>
  );
};

export default Products;
