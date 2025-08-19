import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollingText } from '@/components/ui/moving-text';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Leaf, 
  Shield, 
  Heart, 
  Star,
  ArrowRight,
  MapPin,
  Factory,
  TrendingUp,
  Phone
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: 27, label: "Years Experience", icon: Award, suffix: "+" },
    { number: 500, label: "Happy Customers", icon: Users, suffix: "+" },
    { number: 90, label: "Dealer Network", icon: MapPin, suffix: "+" },
    { number: 30, label: "Milk Increase", icon: TrendingUp, suffix: "%" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Premium Quality",
      description: "28-30% protein content with FSSAI certification for optimal cattle nutrition"
    },
    {
      icon: Shield,
      title: "Trust & Safety", 
      description: "ISO certified products with rigorous quality testing ensuring safe feed"
    },
    {
      icon: Leaf,
      title: "Natural Process",
      description: "Traditional processing methods without harmful chemicals or additives"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Moving Text Banner */}
      <div className="bg-emerald-600 text-white py-3 overflow-hidden">
        <ScrollingText 
          text="★ About Gajanand Oil Industry ★ 27+ Years Experience ★ Leading Cotton Seed Cake Manufacturer ★ Trusted by Farmers Nationwide ★ ISO Certified Quality"
          speed={25}
          className="text-sm font-medium"
        />
      </div>

      <div className="container mx-auto px-4 py-16">

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-emerald-100 text-emerald-700">
            <Factory className="w-4 h-4 mr-2" />
            Established 1998
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Leading Cotton Seed Cake Manufacturer
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            For over 27 years, Gajanand Oil Industry has been Gujarat's trusted partner in dairy farming, 
            providing premium cotton seed cake that increases milk production by 25-30% naturally.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-xl p-6 shadow-lg"
              >
                <AnimatedCounter
                  end={stat.number}
                  duration={2500}
                  delay={index * 200}
                  suffix={stat.suffix}
                  className="text-3xl font-bold text-emerald-600 mb-2"
                />
                <div className="text-sm font-medium text-slate-600 mb-3">{stat.label}</div>
                <stat.icon className="w-8 h-8 text-emerald-500 mx-auto" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Story & Images */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Founded in 1998, we started with a simple mission: provide the highest quality 
                cotton seed cake to dairy farmers across India. Today, we're one of Gujarat's most 
                trusted names in cattle feed industry.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our commitment to quality and innovation has helped thousands of dairy farmers 
                achieve better milk production while ensuring optimal cattle health.
              </p>
              
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                <Phone className="mr-2 w-4 h-4" />
                Contact Us Today
              </Button>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/lovable-uploads/bd4b6051-e1ee-4b43-b411-7bf70528fc2a.png"
                  alt="Manufacturing Facility"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
                <img 
                  src="/lovable-uploads/57319956-8fac-4bd4-b90c-1f26ddd3e5f9.png"
                  alt="Happy Cattle"
                  className="w-full h-48 object-cover rounded-xl shadow-lg mt-8"
                />
                <img 
                  src="/lovable-uploads/356c9ecc-0c23-48f6-9d87-7d217a51cd70.png"
                  alt="Quality Products"
                  className="w-full h-32 object-cover rounded-xl shadow-lg"
                />
                <img 
                  src="/lovable-uploads/ab1f78de-2f19-4b3a-940b-ef7e0bb86bea.png"
                  alt="Cotton Seed Cake"
                  className="w-full h-32 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              {/* Quality Badges */}
              <div className="absolute -top-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ISO Certified
              </div>
              <div className="absolute -bottom-4 -left-4 bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                FSSAI Approved
              </div>
            </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that make us Gujarat's most trusted cotton seed cake manufacturer
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customer Success */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-emerald-100 text-emerald-700">Customer Success</Badge>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted by Farmers Across Gujarat</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <img 
                  src="/lovable-uploads/cebabb95-3562-40a4-a4c3-c55a85187f63.png"
                  alt="Success Story"
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
                />
                <h4 className="font-bold text-slate-900 mb-2">Ramesh Patel</h4>
                <p className="text-sm text-slate-600 mb-4">Rajkot, Gujarat</p>
                <p className="text-slate-600 italic mb-4">
                  "Milk production increased by 30% within a month. Outstanding quality!"
                </p>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <img 
                  src="/lovable-uploads/57319956-8fac-4bd4-b90c-1f26ddd3e5f9.png"
                  alt="Success Story"
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
                />
                <h4 className="font-bold text-slate-900 mb-2">Suresh Kumar</h4>
                <p className="text-sm text-slate-600 mb-4">Ahmedabad, Gujarat</p>
                <p className="text-slate-600 italic mb-4">
                  "Best quality in the market. My cattle are healthier than ever."
                </p>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <img 
                  src="/lovable-uploads/1d0cfaae-58fc-4cb1-b8ce-544667a95a3d.png"
                  alt="Success Story"
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
                />
                <h4 className="font-bold text-slate-900 mb-2">Mahesh Shah</h4>
                <p className="text-sm text-slate-600 mb-4">Surat, Gujarat</p>
                <p className="text-slate-600 italic mb-4">
                  "Trusted partner for 10+ years. Consistent quality and delivery."
                </p>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
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
            Ready to Boost Your Milk Production?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500000+ satisfied farmers who trust Gajanand Oil Industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-emerald-600 hover:bg-slate-50 px-8 py-3 text-lg font-semibold">
              <Phone className="mr-2 w-5 h-5" />
              Call Now: +91 98985 37506
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 text-lg font-semibold">
              View Our Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
