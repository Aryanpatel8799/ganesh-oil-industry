
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollingText } from '@/components/ui/moving-text';
import { motion } from 'framer-motion';
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
  Target,
  Factory,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: "27+", label: "Years Experience", icon: Award },
    { number: "500000+", label: "Happy Customers", icon: Users },
    { number: "90+", label: "Dealer Network", icon: MapPin },
    { number: "100%", label: "Natural Products", icon: Leaf }
  ];

  const milestones = [
    { year: "1998", event: "Company Founded", description: "Started Gajanand Cattle Food Limited with vision for premium feed" },
    { year: "1995", event: "First Major Contract", description: "Secured first large-scale cattle feed supply contract" },
    { year: "2005", event: "ISO Certification", description: "Achieved ISO 9001:2015 certification for quality management" },
    { year: "2015", event: "Market Leadership", description: "Became leading cotton seed cake supplier in Gujarat" },
    { year: "2024", event: "Modern Facility", description: "Expanded with state-of-the-art processing technology" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Premium Quality",
      description: "We ensure highest quality cotton seed cake with 28-30% protein content for optimal cattle nutrition",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "FSSAI certified products with rigorous quality testing ensuring safe feed for your livestock",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Leaf,
      title: "Natural Process",
      description: "Traditional and natural processing methods without harmful chemicals or artificial additives",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Farmer Support",
      description: "Dedicated support to farmers with expert consultation and competitive pricing",
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Moving Text Banner */}
      <div className="bg-emerald-600 text-white py-3 overflow-hidden">
        <ScrollingText 
          text="★ About Gajanand Cattle Food Limited ★ 27+ Years Experience ★ Leading Cotton Seed Cake Manufacturer ★ Trusted by Farmers Nationwide ★ ISO Certified Quality"
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
            <Factory className="w-4 h-4" />
            <span>About Our Company</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Gajanand Cattle Food Limited
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Gajanand Cattle Food Limited is the leading cotton seed cake manufacturer with wide range of 
            premium products. As a leader in cattle food, we enjoy substantial market share in the overall 
            cattle food segment covering wide customer and dealer networks across India.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white rounded-xl shadow-lg p-6 border border-slate-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Company Story */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Founded in 1998, Gajanand Cattle Food Limited began with a simple mission: to provide 
              the highest quality cotton seed cake to dairy farmers across India. What started as a 
              small family business has grown into one of the most trusted names in the cattle feed industry.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Our commitment to quality, innovation, and farmer satisfaction has helped thousands of 
              dairy farmers increase their milk production by 25-30% while ensuring optimal cattle health.
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Learn More About Our Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-8">
            <img 
              src="/lovable-uploads/bd4b6051-e1ee-4b43-b411-7bf70528fc2a.png"
              alt="Our Facility"
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <h3 className="text-xl font-bold text-slate-900 mb-2">State-of-the-Art Facility</h3>
            <p className="text-slate-600">
              Our modern processing facility ensures consistent quality and purity in every batch 
              of cotton seed cake we produce.
            </p>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do and help us serve farmers better every day
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-slate-100">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-lg text-slate-600">
              Key milestones that shaped our company's growth and success
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {milestone.year}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{milestone.event}</h3>
                <p className="text-sm text-slate-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-emerald-600 to-green-700 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied farmers who trust Gajanand for premium cotton seed cake
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-emerald-600 hover:bg-slate-50 px-8 py-3">
              Contact Us Today
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3">
              View Our Products
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
    }
  ];

  const teamStats = [
    { number: "50+", label: "Team Members", icon: Users },
    { number: "27+", label: "Years Experience", icon: Calendar },
    { number: "5", label: "States Served", icon: MapPin },
    { number: "100%", label: "Customer Satisfaction", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-yellow-50 to-emerald-100">
      {/* Hero Section */}
      <section className="pt-20 pb-12 lg:pt-32 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 lg:mb-6 text-xs lg:text-sm px-3 lg:px-4 py-1 lg:py-2">
              About Us
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 mb-4 lg:mb-6">
              35 Years of <span className="bg-gradient-to-r from-emerald-600 to-yellow-600 bg-clip-text text-transparent">Pure Excellence</span>
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
                      <div className="bg-gradient-to-r from-emerald-500 to-yellow-500 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-3">
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
                    <p className="text-sm lg:text-base text-slate-600">27 Years of Trust</p>
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
