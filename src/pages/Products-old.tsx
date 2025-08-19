
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Droplets, Heart, Leaf, Shield, Star, Award } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'Pure Coconut Oil',
      description: 'Cold-pressed virgin coconut oil extracted from fresh coconuts using traditional methods. Rich in natural antioxidants and medium-chain fatty acids.',
      image: 'coconut-oil',
      price: '₹350/L',
      features: ['Cold Pressed', 'Virgin Quality', 'Chemical Free', 'Natural Aroma', 'Rich in MCT'],
      benefits: ['Boosts Immunity', 'Heart Healthy', 'Natural Moisturizer'],
      gradient: 'from-emerald-100 to-emerald-200',
      iconColor: 'text-emerald-600',
      category: 'Premium'
    },
    {
      name: 'Groundnut Oil',
      description: 'Premium quality groundnut oil perfect for deep frying and cooking. High smoke point and rich nutty flavor make it ideal for Indian cuisine.',
      image: 'groundnut-oil',
      price: '₹180/L',
      features: ['High Smoke Point', 'Rich in Vitamin E', 'Zero Trans Fat', 'Natural Flavor', 'Long Shelf Life'],
      benefits: ['Heart Healthy', 'Reduces Cholesterol', 'Rich in Antioxidants'],
      gradient: 'from-amber-100 to-amber-200',
      iconColor: 'text-amber-600',
      category: 'Popular'
    },
    {
      name: 'Sunflower Oil',
      description: 'Light and healthy sunflower oil with high nutritional value. Perfect for salads, cooking, and baking with its neutral taste and health benefits.',
      image: 'sunflower-oil',
      price: '₹160/L',
      features: ['Light Texture', 'High in Vitamin E', 'Low Saturated Fat', 'Neutral Taste', 'Versatile Use'],
      benefits: ['Supports Heart Health', 'Rich in Vitamins', 'Easy Digestion'],
      gradient: 'from-yellow-100 to-yellow-200',
      iconColor: 'text-yellow-600',
      category: 'Essential'
    },
    {
      name: 'Sesame Oil',
      description: 'Traditional sesame oil with authentic taste and rich aroma. Cold-pressed to retain natural nutrients and traditional flavor profile.',
      image: 'sesame-oil',
      price: '₹280/L',
      features: ['Traditional Method', 'Rich Flavor', 'Natural Antioxidants', 'Premium Quality', 'Authentic Taste'],
      benefits: ['Rich in Minerals', 'Anti-inflammatory', 'Traditional Medicine'],
      gradient: 'from-orange-100 to-orange-200',
      iconColor: 'text-orange-600',
      category: 'Traditional'
    },
    {
      name: 'Mustard Oil',
      description: 'Pure mustard oil with strong flavor and excellent cooking properties. Ideal for Indian cooking and known for its preservation qualities.',
      image: 'mustard-oil',
      price: '₹200/L',
      features: ['Strong Flavor', 'Natural Preservative', 'Rich in Omega-3', 'Traditional Use', 'Anti-bacterial'],
      benefits: ['Boosts Circulation', 'Natural Antiseptic', 'Strengthens Hair'],
      gradient: 'from-red-100 to-red-200',
      iconColor: 'text-red-600',
      category: 'Specialty'
    },
    {
      name: 'Premium Cotton Seed Cake',
      description: 'High-quality cotton seed cake with 22-24% protein content, perfect for livestock nutrition. Rich in essential amino acids and minerals for healthy cattle growth and increased milk production.',
      image: '/lovable-uploads/cebabb95-3562-40a4-a4c3-c55a85187f63.png',
      price: '₹25/Kg',
      features: ['22-24% Protein', 'Rich in Lysine', 'High Digestibility', 'Aflatoxin Free', 'FSSAI Certified'],
      benefits: ['Increases Milk Yield', 'Improves Fat Content', 'Better Reproduction', 'Enhanced Immunity'],
      gradient: 'from-emerald-100 to-yellow-100',
      iconColor: 'text-emerald-600',
      category: 'Premium',
      type: 'cake'
    }
  ];

  const getCategoryBadge = (category: string) => {
    const styles = {
      Premium: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
      Popular: 'bg-gradient-to-r from-amber-500 to-amber-600',
      Essential: 'bg-gradient-to-r from-blue-500 to-blue-600',
      Traditional: 'bg-gradient-to-r from-orange-500 to-orange-600',
      Specialty: 'bg-gradient-to-r from-red-500 to-red-600',
      Value: 'bg-gradient-to-r from-purple-500 to-purple-600'
    };
    return styles[category as keyof typeof styles] || 'bg-slate-500';
  };

  return (
    <div className="pt-32 pb-16 min-h-screen bg-gradient-to-br from-emerald-50 via-yellow-50 to-emerald-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Premium Product Range
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our complete range of pure, natural edible oils processed with traditional methods 
            and modern technology to ensure the highest quality and nutritional value.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card 
              key={product.name} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fadeInUp bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0 relative">
                <div className={`h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}>
                  {product.type === 'cake' && product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <Droplets className={`w-16 h-16 ${product.iconColor} group-hover:scale-125 transition-all duration-500`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className={`absolute top-4 left-4 ${getCategoryBadge(product.category)} text-white border-0 shadow-lg`}>
                    {product.category}
                  </Badge>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </CardTitle>
                  <span className="text-lg font-bold text-emerald-600">{product.price}</span>
                </div>
                
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2 flex items-center">
                    <Shield className="w-4 h-4 mr-1" />
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-slate-100 text-slate-600">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2 flex items-center">
                    <Heart className="w-4 h-4 mr-1 text-red-500" />
                    Health Benefits
                  </h4>
                  <div className="space-y-1">
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-slate-600">
                        <Leaf className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white transition-all duration-300 text-sm"
                  >
                    Order Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                  >
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Assurance */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl mb-16 animate-fadeInUp">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Quality Promise
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every drop of oil goes through rigorous quality checks to ensure purity, freshness, and nutritional value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">ISO Certified</h3>
              <p className="text-slate-600 text-sm">International quality standards</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">100% Pure</h3>
              <p className="text-slate-600 text-sm">No artificial additives</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Health First</h3>
              <p className="text-slate-600 text-sm">Nutritionally optimized</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fadeInUp">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-12 py-6 text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Request Product Catalog
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
