
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, Microscope, Factory, CheckCircle, Globe, Users, Clock } from 'lucide-react';

const Quality = () => {
  const certifications = [
    {
      name: 'ISO 22000:2018',
      description: 'Food Safety Management Systems',
      icon: Shield,
      status: 'Certified',
      year: '2020',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      name: 'HACCP',
      description: 'Hazard Analysis Critical Control Points',
      icon: Microscope,
      status: 'Certified',
      year: '2019',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      name: 'FSSAI License',
      description: 'Food Safety and Standards Authority',
      icon: CheckCircle,
      status: 'Licensed',
      year: '2018',
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      name: 'Export License',
      description: 'International Trade Certification',
      icon: Globe,
      status: 'Active',
      year: '2021',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    }
  ];

  const qualitySteps = [
    {
      step: '01',
      title: 'Raw Material Selection',
      description: 'Careful selection of premium quality seeds and nuts from trusted farmers',
      icon: Users
    },
    {
      step: '02',
      title: 'Cleaning & Processing',
      description: 'Advanced cleaning and sorting to remove impurities and ensure consistency',
      icon: Factory
    },
    {
      step: '03',
      title: 'Oil Extraction',
      description: 'Cold-pressed and traditional extraction methods to preserve natural nutrients',
      icon: Microscope
    },
    {
      step: '04',
      title: 'Quality Testing',
      description: 'Rigorous laboratory testing for purity, freshness, and safety standards',
      icon: CheckCircle
    },
    {
      step: '05',
      title: 'Packaging & Storage',
      description: 'Hygienic packaging in controlled environment with proper storage conditions',
      icon: Shield
    },
    {
      step: '06',
      title: 'Distribution',
      description: 'Temperature-controlled transportation to maintain product integrity',
      icon: Clock
    }
  ];

  const qualityMetrics = [
    { metric: 'Purity Level', value: '99.9%', description: 'Pure oil with minimal impurities' },
    { metric: 'Quality Checks', value: '15+', description: 'Multiple quality control points' },
    { metric: 'Lab Tests', value: '24/7', description: 'Continuous monitoring and testing' },
    { metric: 'Shelf Life', value: '18 Months', description: 'Extended freshness guarantee' }
  ];

  return (
    <div className="pt-32 pb-16 min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Excellence in Quality
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Quality <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Assurance</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our unwavering commitment to quality drives every aspect of our production process, 
            from sourcing to delivery, ensuring you receive only the finest edible oils.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Our Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={cert.name} className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${cert.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <cert.icon className={`w-8 h-8 ${cert.color}`} />
                  </div>
                  <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0 mx-auto">
                    {cert.status}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-lg font-bold text-slate-800 mb-2">{cert.name}</CardTitle>
                  <p className="text-slate-600 text-sm mb-2">{cert.description}</p>
                  <p className="text-emerald-600 font-medium text-sm">Since {cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Process */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Our Quality Process
          </h2>
          <div className="space-y-8">
            {qualitySteps.map((step, index) => (
              <div key={step.step} className={`flex items-center gap-8 animate-fadeInUp ${index % 2 === 1 ? 'flex-row-reverse' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-1">
                  <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {step.step}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-lg">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center shadow-lg">
                  <step.icon className="w-10 h-10 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl mb-16 animate-fadeInUp">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Quality Metrics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityMetrics.map((metric, index) => (
              <div key={metric.metric} className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {metric.value}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{metric.metric}</h3>
                <p className="text-slate-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Laboratory & Testing */}
        <div className="grid lg:grid-cols-2 gap-16 items-center animate-fadeInUp">
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Advanced Laboratory Testing
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our state-of-the-art laboratory facilities are equipped with the latest testing equipment 
              to ensure every batch meets our stringent quality standards. We conduct comprehensive 
              tests for purity, freshness, nutritional content, and safety.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                <span className="text-slate-700">Microbiological testing for safety</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                <span className="text-slate-700">Chemical analysis for purity</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                <span className="text-slate-700">Nutritional value verification</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                <span className="text-slate-700">Sensory evaluation for quality</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl p-12 text-center">
              <Microscope className="w-24 h-24 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">24/7 Quality Monitoring</h3>
              <p className="text-slate-600 text-lg">Continuous testing and quality assurance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
