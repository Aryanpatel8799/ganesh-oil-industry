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
      description: "FSSAI certified products with rigorous quality testing ensuring safe feed for your ",
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

export default About;
