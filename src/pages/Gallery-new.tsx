import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollingText } from '@/components/ui/moving-text';
import { motion } from 'framer-motion';
import { Camera, Factory, Package, Truck, Award, Users, X, Building2, Zap } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Facility', 'Products', 'Process', 'Quality', 'Team'];

  const galleryItems = [
    {
      id: 1,
      title: 'Modern Production Facility',
      description: 'Our state-of-the-art cotton seed cake manufacturing facility',
      category: 'Facility',
      image: '/lovable-uploads/bd4b6051-e1ee-4b43-b411-7bf70528fc2a.png',
      icon: Factory
    },
    {
      id: 2,
      title: 'Premium Cotton Seed Cake',
      description: 'High-quality cotton seed cake with 28-30% protein content',
      category: 'Products',
      image: '/lovable-uploads/cebabb95-3562-40a4-a4c3-c55a85187f63.png',
      icon: Package
    },
    {
      id: 3,
      title: 'Processing Equipment',
      description: 'Advanced machinery for consistent quality production',
      category: 'Process',
      image: '/lovable-uploads/57319956-8fac-4bd4-b90c-1f26ddd3e5f9.png',
      icon: Zap
    },
    {
      id: 4,
      title: 'Organic Cotton Seed Cake',
      description: '100% organic and chemical-free cattle feed',
      category: 'Products',
      image: '/lovable-uploads/ab1f78de-2f19-4b3a-940b-ef7e0bb86bea.png',
      icon: Package
    },
    {
      id: 5,
      title: 'Quality Testing Lab',
      description: 'Rigorous testing ensures every batch meets standards',
      category: 'Quality',
      image: '/lovable-uploads/356c9ecc-0c23-48f6-9d87-7d217a51cd70.png',
      icon: Award
    },
    {
      id: 6,
      title: 'Pelletized Products',
      description: 'Convenient pellet form for easy handling and storage',
      category: 'Products',
      image: '/lovable-uploads/1d0cfaae-58fc-4cb1-b8ce-544667a95a3d.png',
      icon: Package
    },
    {
      id: 7,
      title: 'Storage Facility',
      description: 'Clean and organized storage maintaining product quality',
      category: 'Facility',
      image: '/lovable-uploads/66af7340-4154-4493-a512-910acdf22d64.png',
      icon: Building2
    },
    {
      id: 8,
      title: 'Expert Team',
      description: 'Experienced professionals ensuring quality production',
      category: 'Team',
      image: '/lovable-uploads/bd4b6051-e1ee-4b43-b411-7bf70528fc2a.png',
      icon: Users
    }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const stats = [
    { number: "27+", label: "Years Experience" },
    { number: "500000+", label: "Products Daily" },
    { number: "24/7", label: "Quality Control" },
    { number: "100%", label: "Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      {/* Moving Text Banner */}
      <div className="bg-emerald-600 text-white py-3 overflow-hidden">
        <ScrollingText 
          text="★ Gajanand Gallery ★ Modern Facilities ★ Premium Products ★ Quality Assurance ★ Expert Team ★ State-of-the-Art Equipment"
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
            <Camera className="w-4 h-4" />
            <span>Our Gallery</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Inside Gajanand Cattle Food
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Take a look inside our modern facility, see our premium products, and meet the team 
            that makes Gajanand the trusted choice for cotton seed cake across India.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl shadow-sm p-6 border border-slate-100">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
              <div className="text-sm font-medium text-slate-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 ${
                selectedCategory === category 
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                  : 'border-emerald-600 text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="overflow-hidden border-slate-100 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="aspect-video bg-gradient-to-br from-emerald-50 to-green-100 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                      {item.category}
                    </Badge>
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-slate-100 transition-colors"
              >
                <X className="w-6 h-6 text-slate-600" />
              </button>
              <img 
                src={selectedImage}
                alt="Gallery item"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-emerald-600 to-green-700 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Visit Our Facility
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience our quality firsthand. Schedule a visit to our modern facility and see why farmers trust Gajanand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-emerald-600 hover:bg-slate-50 px-8 py-3">
              Schedule Visit
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
