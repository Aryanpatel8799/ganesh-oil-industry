
const About = () => {
  return (
    <div className="pt-32 pb-16 min-h-screen bg-gradient-to-b from-warm-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-golden-600">Ganesh Oil Industry</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about our journey, values, and commitment to delivering the finest edible oils.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Coming soon - Detailed company history, mission, vision, and our commitment to quality and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
