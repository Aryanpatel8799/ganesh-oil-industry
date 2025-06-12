
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Droplets, Flame, Heart, Star } from 'lucide-react';

const ProductsOverview = () => {
  const products = [
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

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-xs lg:text-sm px-3 lg:px-4 py-1 lg:py-2">
            Our Premium Range
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4 lg:mb-6">
            Pure & Natural Oil Products
          </h2>
          <p className="text-base lg:text-lg text-slate-600 max-w-3xl mx-auto">
            Discover our extensive range of premium edible oils, each crafted with care 
            and processed using traditional methods to preserve natural goodness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {products.map((product, index) => {
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
