import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollingText } from '@/components/ui/moving-text';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Award, Shield, Leaf, Phone, Package, TrendingUp, CheckCircle } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      name: 'High Protein Cotton Seed Cake',
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
      name: 'Expeller Cotton Seed Cake',
      description: 'Mechanically extracted cotton seed cake perfect for commercial dairy farms and large-scale operations.',
      image: '/lovable-uploads/57319956-8fac-4bd4-b90c-1f26ddd3e5f9.png',
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
      name: 'Organic Cotton Seed Cake',
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
      name: 'Pelletized Cotton Seed Cake',
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
    <div className="min-h-screen">
      {/* Moving Text Banner */}
      <div className="bg-emerald-600 text-white py-3 overflow-hidden">
        <ScrollingText 
          text="★ Premium Cotton Seed Cake Products ★ High Protein Content ★ Increases Milk Production ★ FSSAI Certified Quality ★ Bulk Supply Available ★ Best Prices Guaranteed"
          speed={25}
          className="text-sm font-medium"
        />
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
            <Package className="w-4 h-4" />
            <span>Our Products</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Premium Cotton Seed Cake Products
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {qualityFeatures.map((feature, index) => (
            <div key={index} className="text-center bg-white rounded-xl shadow-sm p-6 border border-slate-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {productCategories.map((product, index) => (
            <Card key={index} className="overflow-hidden border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-emerald-50 to-green-100 p-6">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    {product.category}
                  </Badge>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} 
                        />
                      ))}
                      <span className="text-sm font-semibold text-slate-700 ml-1">{product.rating}</span>
                    </div>
                    <div className="text-lg font-bold text-emerald-600">{product.price}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{product.description}</p>
                
                {/* Specifications */}
                <div className="bg-slate-50 rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Nutritional Profile</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-slate-600 capitalize">{key}:</span>
                        <span className="font-semibold text-emerald-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.benefits.map((benefit, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                    <Phone className="w-4 h-4" />
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
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-emerald-600 to-green-700 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Boost Your Dairy Farm?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for best prices and bulk supply of premium cotton seed cake
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-emerald-600 hover:bg-slate-50 px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              Call: +91 98985 37506
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3">
              Get Bulk Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
