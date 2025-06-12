
const Products = () => {
  return (
    <div className="pt-32 pb-16 min-h-screen bg-gradient-to-b from-ocean-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-ocean-600">Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our complete range of premium edible oils with detailed specifications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Coming soon - Complete product catalog with detailed descriptions, specifications, and ordering information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
