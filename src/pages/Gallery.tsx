
const Gallery = () => {
  return (
    <div className="pt-32 pb-16 min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Take a visual tour of our facilities, products, and operations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-white/20">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Coming soon - High-resolution images of our factory, products, packaging, and transportation facilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
