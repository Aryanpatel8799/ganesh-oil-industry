
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Droplets } from 'lucide-react';

const ProductsOverview = () => {
  const products = [
    {
      name: 'Coconut Oil',
      description: 'Pure, cold-pressed coconut oil with natural aroma and taste',
      features: ['Cold Pressed', 'Chemical Free', 'Natural Aroma'],
      image: 'coconut-oil'
    },
    {
      name: 'Groundnut Oil',
      description: 'Premium quality groundnut oil perfect for cooking and frying',
      features: ['High Smoke Point', 'Rich in Vitamin E', 'Heart Healthy'],
      image: 'groundnut-oil'
    },
    {
      name: 'Sunflower Oil',
      description: 'Light and healthy sunflower oil with high nutritional value',
      features: ['Light Texture', 'Low Cholesterol', 'Vitamin Rich'],
      image: 'sunflower-oil'
    },
    {
      name: 'Sesame Oil',
      description: 'Traditional sesame oil with authentic taste and aroma',
      features: ['Traditional Method', 'Rich Flavor', 'Natural Antioxidants'],
      image: 'sesame-oil'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-ocean-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Premium
            <span className="text-ocean-600"> Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of pure, natural edible oils processed with 
            traditional methods and modern technology to ensure the highest quality.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <Card 
              key={product.name} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="h-48 bg-gradient-to-br from-ocean-100 to-teal-200 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                  <Droplets className="w-16 h-16 text-ocean-500 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-800 mb-3 group-hover:text-ocean-600 transition-colors">
                  {product.name}
                </CardTitle>
                <p className="text-gray-600 mb-4 text-sm">
                  {product.description}
                </p>
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-ocean-500 text-ocean-600 hover:bg-ocean-50 group-hover:bg-ocean-500 group-hover:text-white transition-all"
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
            className="bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-4 text-lg"
          >
            View All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
