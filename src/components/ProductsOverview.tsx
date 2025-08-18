
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Droplets, Flame, Heart, Star, Package, Leaf } from 'lucide-react';

const ProductsOverview = () => {
  const oilProducts = [
    {
      name: "Coconut Oil",
      description: "Pure, cold-pressed coconut oil with natural aroma and rich nutrients",
      icon: Droplets,
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      features: ["Cold Pressed", "Virgin Quality", "Rich in MCT"],
      rating: 4.9
    },
    {
      name: "Groundnut Oil",
      description: "Premium groundnut oil perfect for cooking and deep frying",
      icon: Flame,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      features: ["High Smoke Point", "Heart Healthy", "Rich Flavor"],
      rating: 4.8
    },
    {
      name: "Sunflower Oil",
      description: "Light, healthy sunflower oil ideal for daily cooking needs",
      icon: Heart,
      color: "from-yellow-500 to-amber-600",
      bgColor: "bg-yellow-50",
      features: ["Light Texture", "Vitamin E", "Zero Trans Fat"],
      rating: 4.7
    },
    {
      name: "Sesame Oil",
      description: "Traditional sesame oil with authentic taste and aroma",
      icon: Star,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      features: ["Traditional Method", "Rich Antioxidants", "Authentic Taste"],
      rating: 4.9
    }
  ];

  const cakeProducts = [
    {
      name: "Cotton Seed Oil Cake",
      description: "Premium quality cotton seed oil cake, perfect for cattle feed and livestock nutrition. Rich in protein and essential nutrients for healthy growth.",
      image: "/lovable-uploads/cebabb95-3562-40a4-a4c3-c55a85187f63.png",
      features: ["High Protein Content", "Natural Nutrition", "Cattle Feed Grade"],
      category: "Premium Cattle Feed"
    },
    {
      name: "Processed Cotton Seed Cake",
      description: "Specially processed cotton seed oil cake with enhanced nutritional value for premium livestock feed",
      image: "/lovable-uploads/57319956-8fac-4bd4-b90c-1f26ddd3e5f9.png",
      features: ["Enhanced Nutrition", "Superior Quality", "Professional Grade"],
      category: "Premium Processing"
    },
    {
      name: "Traditional Cotton Seed Oil Cake",
      description: "Traditional cotton seed oil cake made using time-tested methods for authentic quality",
      image: "/lovable-uploads/ab1f78de-2f19-4b3a-940b-ef7e0bb86bea.png",
      features: ["Traditional Method", "Authentic Quality", "Time-Tested Process"],
      category: "Traditional Grade"
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
    <section className="py-12 lg:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-xs lg:text-sm px-3 lg:px-4 py-1 lg:py-2">
            Our Premium Range
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4 lg:mb-6">
            <span className="gradient-text">Our Premium Products</span>
          </h2>
          <p className="text-base lg:text-lg text-slate-600 max-w-3xl mx-auto">
            From pure edible oils to high-quality cotton seed oil cake for cattle feed, 
            discover our complete range of natural and nutritious products crafted with 35+ years of expertise.
          </p>
        </div>

        {/* Edible Oils Section */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-6 text-center">
            Premium Edible Oils
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {oilProducts.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white"
                >
                  <CardHeader className="text-center pb-3 lg:pb-4">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 mx-auto rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    <CardTitle className="text-lg lg:text-xl text-slate-800 mb-2">
                      {product.name}
                    </CardTitle>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs lg:text-sm font-medium text-slate-600">{product.rating}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-3 lg:space-y-4">
                    <CardDescription className="text-xs lg:text-sm text-slate-600 leading-relaxed">
                      {product.description}
                    </CardDescription>
                    <div className="space-y-1 lg:space-y-2">
                      {product.features.map((feature, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="text-xs mx-1 bg-slate-100 text-slate-700"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Oil Cake & Cattle Feed Section */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-6 text-center">
            <span className="gold-gradient-text">Cotton Seed Oil Cake & Cattle Feed Products</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cakeProducts.map((product, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white overflow-hidden"
              >
                <div className="h-48 lg:h-56 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-emerald-500 text-white text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg lg:text-xl text-slate-800">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm text-slate-600 leading-relaxed">
                    {product.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-700">
                        <Leaf className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Raw Materials Section */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-6 text-center">
            Quality Raw Materials
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {rawMaterials.map((product, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white overflow-hidden"
              >
                <div className="h-40 lg:h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-slate-800">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription className="text-sm text-slate-600 leading-relaxed">
                    {product.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs bg-slate-100 text-slate-700"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Packaging Examples */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-6 text-center">
            Premium Packaging
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white overflow-hidden">
              <div className="h-48 lg:h-56 overflow-hidden">
                <img 
                  src="/lovable-uploads/1d0cfaae-58fc-4cb1-b8ce-544667a95a3d.png" 
                  alt="Traditional Jute Packaging"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-slate-800 mb-2">Traditional Jute Packaging</h4>
                <p className="text-sm text-slate-600">Eco-friendly traditional packaging maintaining product freshness</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white overflow-hidden">
              <div className="h-48 lg:h-56 overflow-hidden">
                <img 
                  src="/lovable-uploads/356c9ecc-0c23-48f6-9d87-7d217a51cd70.png" 
                  alt="Modern Packaging"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold text-slate-800 mb-2">Modern Packaging Solutions</h4>
                <p className="text-sm text-slate-600">Contemporary packaging ensuring quality and convenience</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm lg:text-base px-6 lg:px-8 py-2.5 lg:py-3"
          >
            View All Products
            <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
