
import { Award, Users, Target, Eye, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every aspect of our oil production process.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do, driving our commitment to excellence.',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuous improvement and adoption of latest technology for better products.',
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Committed to environmentally responsible practices and sustainable growth.',
      color: 'text-green-600',
      bg: 'bg-green-50'
    }
  ];

  const milestones = [
    { year: '1985', event: 'Ganesh Oil Industry founded with a vision for quality edible oils' },
    { year: '1992', event: 'Expanded production capacity and introduced new oil varieties' },
    { year: '2000', event: 'Achieved ISO certification for quality management systems' },
    { year: '2010', event: 'Launched nationwide distribution network across India' },
    { year: '2018', event: 'Started export operations to international markets' },
    { year: '2024', event: 'Celebrating 38+ years of excellence and customer trust' }
  ];

  return (
    <div className="pt-32 pb-16 min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Ganesh Oil Industry</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            With over 38 years of excellence, we are committed to delivering the finest quality edible oils 
            that meet both domestic and international standards.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Founded in 1985, Ganesh Oil Industry began as a small family business with a big vision: 
              to provide pure, high-quality edible oils to families across India. What started in a modest 
              facility has grown into a trusted name in the edible oil industry.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Today, we operate state-of-the-art manufacturing facilities equipped with modern technology 
              while maintaining traditional quality standards. Our commitment to purity, hygiene, and 
              customer satisfaction has earned us the trust of thousands of customers nationwide.
            </p>
            <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More About Our Process
            </Button>
          </div>
          <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl p-12 text-center">
              <Clock className="w-20 h-20 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-slate-800 mb-4">38+ Years</h3>
              <p className="text-slate-600 text-lg">of Excellence & Trust</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 animate-fadeInUp">
            <CardContent className="p-10 text-center">
              <Target className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-slate-800 mb-6">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To provide pure, natural, and hygienically processed edible oils that enhance the health 
                and well-being of our customers while maintaining the highest standards of quality and purity.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-10 text-center">
              <Eye className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-slate-800 mb-6">Our Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the most trusted and preferred brand in the edible oil industry, known for our 
                commitment to quality, innovation, and customer satisfaction across global markets.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${value.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl animate-fadeInUp">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Our Journey
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex items-center space-x-8 group">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                  {milestone.year}
                </div>
                <div className="flex-1 p-6 bg-slate-50 rounded-2xl group-hover:bg-emerald-50 transition-colors">
                  <p className="text-lg text-slate-700 leading-relaxed">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
