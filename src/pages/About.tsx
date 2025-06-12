
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  Leaf, 
  Shield, 
  Heart, 
  Star,
  ArrowRight,
  Calendar,
  MapPin,
  Target
} from 'lucide-react';

const About = () => {
  const milestones = [
    { year: "1988", event: "Company Founded", description: "Started with a vision to provide pure, natural oils" },
    { year: "1995", event: "First Certification", description: "Achieved our first quality certification" },
    { year: "2005", event: "ISO Certification", description: "Obtained ISO 9001:2015 certification" },
    { year: "2015", event: "Expansion", description: "Expanded operations to serve nationwide" },
    { year: "2023", event: "Modern Facility", description: "Inaugurated state-of-the-art processing facility" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Purity",
      description: "We ensure 100% natural and pure products without any artificial additives",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Quality",
      description: "Maintaining highest quality standards through rigorous testing and certification",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and sustainable sourcing methods",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building lasting relationships through transparency and reliability",
      color: "from-purple-500 to-violet-600"
    }
  ];

  const teamStats = [
    { number: "50+", label: "Team Members", icon: Users },
    { number: "35+", label: "Years Experience", icon: Calendar },
    { number: "5", label: "States Served", icon: MapPin },
    { number: "100%", label: "Customer Satisfaction", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="pt-20 pb-12 lg:pt-32 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 lg:mb-6 text-xs lg:text-sm px-3 lg:px-4 py-1 lg:py-2">
              About Us
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 mb-4 lg:mb-6">
              35 Years of <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Pure Excellence</span>
            </h1>
            <p className="text-base lg:text-xl text-slate-600 mb-8 lg:mb-12 leading-relaxed">
              Since 1988, Ganesh Oil Industry has been dedicated to providing the finest quality edible oils. 
              Our journey began with a simple mission: to deliver pure, natural, and healthy oil products 
              that enhance the well-being of families across the nation.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              {teamStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-3 lg:p-6 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="bg-gradient-to-r from-emerald-500 to-blue-500 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-3">
                        <IconComponent className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-1">
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
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-xs lg:text-sm">
                Our Story
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 lg:mb-6">
                From Humble Beginnings to Industry Leadership
              </h2>
              <div className="space-y-4 lg:space-y-6 text-sm lg:text-base text-slate-600 leading-relaxed">
                <p>
                  Founded in 1988 by visionary entrepreneurs, Ganesh Oil Industry started as a small-scale 
                  operation with a big dream: to revolutionize the edible oil industry by focusing on 
                  purity, quality, and traditional processing methods.
                </p>
                <p>
                  Over the decades, we have grown from a local supplier to a trusted name across multiple 
                  states, serving thousands of families and businesses. Our commitment to excellence has 
                  earned us ISO certification and numerous quality awards.
                </p>
                <p>
                  Today, we continue to honor our founding principles while embracing modern technology 
                  to ensure consistent quality and sustainable practices in everything we do.
                </p>
              </div>
              
              <div className="mt-6 lg:mt-8">
                <Button 
                  className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Our Process
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8">
                <div className="aspect-square bg-white rounded-xl lg:rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center space-y-3 lg:space-y-4">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mx-auto flex items-center justify-center">
                      <Award className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-slate-800">Quality Excellence</h3>
                    <p className="text-sm lg:text-base text-slate-600">35 Years of Trust</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge variant="outline" className="mb-4 text-xs lg:text-sm">
              Our Values
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 lg:mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-base lg:text-lg text-slate-600 max-w-3xl mx-auto">
              Our core values shape every decision we make and every product we create
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                  <CardHeader className="text-center pb-3 lg:pb-4">
                    <div className={`w-12 h-12 lg:w-16 lg:h-16 mx-auto rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg lg:text-xl text-slate-800">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-xs lg:text-sm text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge variant="outline" className="mb-4 text-xs lg:text-sm">
              Our Journey
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 lg:mb-6">
              Milestones & Achievements
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 lg:space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-xs lg:text-sm font-bold text-white">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-4 lg:p-6">
                        <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-2">{milestone.event}</h3>
                        <p className="text-sm lg:text-base text-slate-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-emerald-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 lg:mb-6">
            Ready to Experience Pure Quality?
          </h2>
          <p className="text-base lg:text-lg text-slate-600 mb-6 lg:mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Ganesh Oil Industry for their daily cooking needs
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View Our Products
              <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
