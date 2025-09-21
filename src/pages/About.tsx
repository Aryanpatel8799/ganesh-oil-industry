import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollingText } from '@/components/ui/moving-text';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import SEO from '@/components/SEO';
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
    { number: 500000, label: "Happy Customers", icon: Users, suffix: "+" },
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
    <>
      <SEO 
        title="About Gajanand Oil Industries - 27+ Years Leading Cotton Seed Cake Manufacturer"
        description="Learn about Gajanand Oil Industries's 27+ year journey as Gujarat's leading cotton seed cake manufacturer. ISO certified, serving 500000+ farmers with premium quality cattle feed products."
        keywords="about Gajanand Oil Industries, cotton seed cake manufacturer, gujarat dairy feed company, ISO certified cattle feed, dairy farming gujarat, livestock feed manufacturer"
        canonicalUrl="https://gajanandoilindustry.com/about"
        ogImage="https://gajanandoilindustry.com/lovable-uploads/bd4b6051-e1ee-4b43-b411-7bf70528fc2a.png"
      />
      <div className="min-h-screen">
      {/* Moving Text Banner */}
      <div className="bg-emerald-600 text-white py-3 overflow-hidden">
        <ScrollingText 
          text="★ About Gajanand Oil Industries ★ 27+ Years Experience ★ Leading Cotton Seed Cake Manufacturer ★ Trusted by Farmers Nationwide ★ ISO Certified Quality"
          speed={25}
          className="text-sm font-medium"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <Badge className="mb-4 sm:mb-6 bg-emerald-100 text-emerald-700">
            <Factory className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="text-xs sm:text-sm">Established 1998</span>
          </Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
            Leading Cotton Seed Cake Manufacturer
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-12 px-4 leading-relaxed">
            For over 27 years, Gajanand Oil Industries has been Gujarat's trusted partner in dairy farming, 
            providing premium cotton seed cake that increases milk production by 25-30% naturally.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-12 px-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg"
              >
                <AnimatedCounter
                  end={stat.number}
                  duration={2500}
                  delay={index * 200}
                  suffix={stat.suffix}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-600 mb-1 sm:mb-2"
                />
                <div className="text-xs sm:text-sm font-medium text-slate-600 mb-2 sm:mb-3">{stat.label}</div>
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-emerald-500 mx-auto" />
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
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="max-w-4xl mx-auto px-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">Our Story</h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6">
                Founded in 1998, we started with a simple mission: provide the highest quality 
                cotton seed cake to dairy farmers across India. Today, we're one of Gujarat's most 
                trusted names in cattle feed industry.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">
                Our commitment to quality and innovation has helped thousands of dairy farmers 
                achieve better milk production while ensuring optimal cattle health.
              </p>
              
              <Button 
                onClick={() => window.open('tel:+919898537506', '_self')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 text-sm sm:text-base w-full sm:w-auto"
              >
                <Phone className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                Contact Us Today
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Why Choose Us</h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-xl lg:max-w-2xl mx-auto">
              The principles that make us Gujarat's most trusted cotton seed cake manufacturer
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{value.description}</p>
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
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 mx-4">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="mb-3 sm:mb-4 bg-emerald-100 text-emerald-700">
                <span className="text-xs sm:text-sm">Customers Success</span>
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Trusted by Customers Across Gujarat</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg text-center">
                <h4 className="font-bold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">Ramesh Patel</h4>
                <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">Tharad, Gujarat</p>
                <p className="text-slate-600 italic mb-3 sm:mb-4 text-xs sm:text-sm">
                  "Milk production increased by 30% within a month. Outstanding quality!"
                </p>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg text-center">
                <h4 className="font-bold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">Suresh Kumar</h4>
                <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">Deesa, Gujarat</p>
                <p className="text-slate-600 italic mb-3 sm:mb-4 text-xs sm:text-sm">
                  "Best quality in the market. My cattle are healthier than ever."
                </p>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg text-center sm:col-span-2 lg:col-span-1">
                <h4 className="font-bold text-slate-900 mb-1 sm:mb-2 text-sm sm:text-base">Mahesh Shah</h4>
                <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">Dhanera, Gujarat</p>
                <p className="text-slate-600 italic mb-3 sm:mb-4 text-xs sm:text-sm">
                  "Trusted partner for 10+ years. Consistent quality and delivery."
                </p>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
      </div>
      </div>
    </>
  );
};

export default About;
