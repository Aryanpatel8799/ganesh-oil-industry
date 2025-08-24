
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Factory, Package, Truck, Award, Users, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Factory', 'Products', 'Packaging', 'Team', 'Certifications'];

  const galleryItems = [
    {
      id: 1,
      title: 'Modern Production Facility',
      description: 'Our state-of-the-art manufacturing unit equipped with latest technology',
      category: 'Factory',
      image: 'factory-exterior',
      icon: Factory
    },
    {
      id: 2,
      title: 'Oil Extraction Process',
      description: 'Cold-pressing machinery maintaining nutritional integrity',
      category: 'Factory',
      image: 'extraction-process',
      icon: Factory
    },
    {
      id: 3,
      title: 'Pure Coconut Oil',
      description: 'Premium quality virgin coconut oil in various packaging',
      category: 'Products',
      image: 'coconut-oil-product',
      icon: Package
    },
    {
      id: 4,
      title: 'Product Range Display',
      description: 'Complete range of edible oils showcased together',
      category: 'Products',
      image: 'product-range',
      icon: Package
    },
    {
      id: 5,
      title: 'Automated Packaging Line',
      description: 'Hygienic and efficient packaging process',
      category: 'Packaging',
      image: 'packaging-line',
      icon: Package
    },
    {
      id: 6,
      title: 'Quality Control Lab',
      description: 'Advanced laboratory for quality testing and analysis',
      category: 'Factory',
      image: 'quality-lab',
      icon: Award
    },
    {
      id: 7,
      title: 'Distribution Fleet',
      description: 'Temperature-controlled vehicles for product delivery',
      category: 'Factory',
      image: 'distribution-trucks',
      icon: Truck
    },
    {
      id: 8,
      title: 'Expert Team',
      description: 'Our skilled professionals ensuring quality at every step',
      category: 'Team',
      image: 'team-photo',
      icon: Users
    },
    {
      id: 9,
      title: 'ISO Certification',
      description: 'International quality standards certification display',
      category: 'Certifications',
      image: 'iso-certificate',
      icon: Award
    },
    {
      id: 10,
      title: 'Raw Material Storage',
      description: 'Climate-controlled storage for maintaining seed quality',
      category: 'Factory',
      image: 'storage-facility',
      icon: Factory
    },
    {
      id: 11,
      title: 'Final Product Packaging',
      description: 'Ready-to-ship products in various sizes and formats',
      category: 'Packaging',
      image: 'final-packaging',
      icon: Package
    },
    {
      id: 12,
      title: 'Export Documentation',
      description: 'International trade certifications and export licenses',
      category: 'Certifications',
      image: 'export-docs',
      icon: Award
    }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      Factory: 'bg-blue-500',
      Products: 'bg-emerald-500',
      Packaging: 'bg-amber-500',
      Team: 'bg-purple-500',
      Certifications: 'bg-red-500',
      All: 'bg-slate-500'
    };
    return colors[category as keyof typeof colors] || 'bg-slate-500';
  };

  return (
    <div className="pt-32 pb-16 min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6">
            <Camera className="w-4 h-4 mr-2" />
            Visual Journey
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Take a visual tour through our modern facilities, premium products, quality processes, 
            and the dedicated team behind gajanand Oil Industry's success.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fadeInUp">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? `${getCategoryColor(category)} text-white shadow-lg scale-105`
                  : 'bg-white text-slate-600 hover:bg-slate-50 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fadeInUp bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(item.image)}
            >
              <CardContent className="p-0">
                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                  <item.icon className="w-16 h-16 text-slate-400 group-hover:scale-125 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className={`absolute top-3 left-3 ${getCategoryColor(item.category)} text-white border-0 text-xs`}>
                    {item.category}
                  </Badge>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl animate-fadeInUp">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Our Achievements in Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                50,000+
              </div>
              <div className="text-slate-600 font-medium">Sq. Ft. Facility</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                15+
              </div>
              <div className="text-slate-600 font-medium">Product Varieties</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                100+
              </div>
              <div className="text-slate-600 font-medium">Team Members</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                10+
              </div>
              <div className="text-slate-600 font-medium">Quality Certifications</div>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-emerald-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="bg-white rounded-2xl p-2 shadow-2xl">
                <div className="h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
                  <Camera className="w-24 h-24 text-slate-400" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-slate-600 text-lg">Image: {selectedImage}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
