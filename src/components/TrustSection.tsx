
import { Badge } from '@/components/ui/badge';
import { Shield, Award, Users, Leaf, CheckCircle, Star } from 'lucide-react';

const TrustSection = () => {
  const stats = [
    { number: "35+", label: "Years Experience", icon: Award },
    { number: "50K+", label: "Happy Customers", icon: Users },
    { number: "100%", label: "Natural Products", icon: Leaf },
    { number: "ISO", label: "Certified Quality", icon: Shield }
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "FSSAI Licensed",
    "100% Natural Processing",
    "Quality Assured Products"
  ];

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-xs lg:text-sm px-3 lg:px-4 py-1 lg:py-2">
            Trusted Excellence
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4 lg:mb-6">
            <span className="gradient-text">Why Choose Gajanand Oil Industry?</span>
          </h2>
          <p className="text-base lg:text-lg text-slate-600 max-w-3xl mx-auto">
            Over 35 years of excellence in producing pure edible oils and premium cotton seed oil cake 
            for cattle feed, ensuring the highest quality standards in every product.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-12 lg:mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-4 lg:p-6 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-emerald-500 to-blue-500 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                    <IconComponent className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-1 lg:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8 border border-slate-100">
          <div className="text-center mb-6 lg:mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-2 lg:mb-4">
              Quality Certifications & Standards
            </h3>
            <p className="text-sm lg:text-base text-slate-600">
              Our commitment to excellence is validated by industry-leading certifications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 lg:space-x-3 p-3 lg:p-4 bg-slate-50 rounded-lg lg:rounded-xl hover:bg-emerald-50 transition-colors duration-300"
              >
                <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base font-medium text-slate-700">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonial */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 max-w-4xl mx-auto">
            <div className="flex justify-center mb-3 lg:mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-base sm:text-lg lg:text-xl text-slate-700 mb-4 lg:mb-6 italic">
              "Gajanand Oil Industry has been our trusted supplier for over a decade. 
              Their cotton seed oil cake is exceptional for our cattle feed, and their edible oils are consistently pure and natural."
            </blockquote>
            <div className="text-sm lg:text-base font-medium text-slate-600">
              - Satisfied Customer, Mumbai
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
