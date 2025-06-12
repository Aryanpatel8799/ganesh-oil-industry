
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Droplets, Star } from 'lucide-react';

const ProductsOverview = () => {
  const products = [
    {
      name: 'Coconut Oil',
      description: 'Pure, cold-pressed coconut oil with natural aroma and exceptional taste',
      features: ['Cold Pressed', 'Chemical Free', 'Natural Aroma'],
      image: 'coconut-oil',
      gradient: 'from-emerald-100 to-emerald-200',
      iconColor: 'text-emerald-600'
    },
    {
      name: 'Groundnut Oil',
      description: 'Premium quality groundnut oil perfect for cooking and deep frying',
      features: ['High Smoke Point', 'Rich in Vitamin E', 'Heart Healthy'],
      image: 'groundnut-oil',
      gradient: 'from-amber-100 to-amber-200',
      iconColor: 'text-amber-600'
    },
    {
      name: 'Sunflower Oil',
      description: 'Light and healthy sunflower oil with high nutritional value',
      features: ['Light Texture', 'Low Cholesterol', 'Vitamin Rich'],
      image: 'sunflower-oil',
      gradient: 'from-yellow-100 to-yellow-200',
      iconColor: 'text-yellow-600'
    },
    {
      name: 'Sesame Oil',
      description: 'Traditional sesame oil with authentic taste and rich aroma',
      features: ['Traditional Method', 'Rich Flavor', 'Natural Antioxidants'],
      image: 'sesame-oil',
      gradient: 'from-orange-100 to-orange-200',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Premium Product Range
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Our Premium
            </span>
            <span className="block bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our range of pure, natural edible oils processed with 
            traditional methods and modern technology to ensure the highest quality.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <Card 
              key={product.name} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fadeInUp bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className={`h-56 bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <Droplets className={`w-20 h-20 ${product.iconColor} group-hover:scale-125 transition-all duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <CardTitle className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors">
                  {product.name}
                </CardTitle>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-slate-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 font-semibold py-3"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fadeInUp">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-6 text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Products
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
