
import { Card, CardContent } from '@/components/ui/card';
import { Award, Shield, CheckCircle, Globe, Users, Truck } from 'lucide-react';

const TrustSection = () => {
  const certifications = [
    {
      icon: Award,
      title: 'ISO 22000:2018',
      description: 'Food Safety Management System Certified'
    },
    {
      icon: Shield,
      title: 'HACCP Certified',
      description: 'Hazard Analysis Critical Control Points'
    },
    {
      icon: CheckCircle,
      title: 'FSSAI Licensed',
      description: 'Food Safety Standards Authority of India'
    },
    {
      icon: Globe,
      title: 'Export Quality',
      description: 'International Standards Compliance'
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: '500+',
      label: 'Satisfied Clients',
      description: 'Nationwide customer base'
    },
    {
      icon: Truck,
      number: '1000+',
      label: 'Monthly Deliveries',
      description: 'Efficient distribution network'
    },
    {
      icon: Award,
      number: '35+',
      label: 'Years Experience',
      description: 'Trusted industry leader'
    },
    {
      icon: CheckCircle,
      number: '99%',
      label: 'Quality Assurance',
      description: 'Consistent product quality'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Trust &
            <span className="text-golden-600"> Quality Assurance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is backed by international certifications 
            and decades of experience in the edible oil industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Certifications */}
          <div className="animate-fadeInUp">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Our Certifications</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={cert.title} 
                  className="hover:shadow-lg transition-shadow duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-golden-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Our Achievements</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.label} 
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-golden-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-golden-600" />
                  </div>
                  <div className="text-3xl font-bold text-golden-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">
                    {achievement.label}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Promise */}
        <div className="mt-16 bg-gradient-to-r from-golden-500 to-golden-600 rounded-2xl p-8 md:p-12 text-center text-white animate-fadeInUp">
          <h3 className="text-3xl font-bold mb-4">Our Quality Promise</h3>
          <p className="text-xl mb-6 max-w-3xl mx-auto opacity-90">
            "Every drop of oil that leaves our facility is tested for purity, 
            freshness, and nutritional value. Your health and satisfaction are our top priorities."
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm opacity-90">Pure & Natural</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Zero</div>
              <div className="text-sm opacity-90">Artificial Additives</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Fresh</div>
              <div className="text-sm opacity-90">Every Batch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
