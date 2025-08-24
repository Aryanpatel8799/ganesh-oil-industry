import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollingText } from '@/components/ui/moving-text';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { Camera, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Factory View 1',
      image: '/lovable-uploads/factory-1.jpeg'
    },
    {
      id: 2,
      title: 'Factory View 2',
      image: '/lovable-uploads/factory-2.jpeg'
    },
    {
      id: 3,
      title: 'Factory View 3',
      image: '/lovable-uploads/factory-3.jpeg'
    },
    {
      id: 4,
      title: 'Factory View 4',
      image: '/lovable-uploads/factory-4.jpeg'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Factory Gallery - Modern Manufacturing Facilities | gajanand Oil Industries"
        description="Explore our state-of-the-art manufacturing facilities and modern equipment for producing premium cotton seed cake. View our factory images and quality infrastructure."
        keywords="factory gallery, manufacturing facilities, cotton seed cake production, modern equipment, quality infrastructure, Gujarat factory"
        ogImage="/lovable-uploads/57319956-8fac-4bd4-b90c-1f26ddd3e5f9.png"
      />
      {/* Moving Text Banner */}
      <div className="bg-emerald-600 text-white py-3 overflow-hidden">
        <ScrollingText 
          text="★ Gajanand Gallery ★ Modern Facilities ★ Premium Products ★ Quality Assurance ★ Expert Team ★ State-of-the-Art Equipment"
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
            <Camera className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Our Gallery</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
            Factory Gallery
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4">
            Take a look at our modern manufacturing facility and production setup.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-slate-100 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-0">
                  <div 
                    className="relative aspect-[4/3] overflow-hidden"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
