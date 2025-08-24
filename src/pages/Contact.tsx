import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollingText } from '@/components/ui/moving-text';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Building2, Globe, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 98985 37506', '+91 98249 26552'],
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      icon: Mail,
      title: 'Email Addresses', 
      details: ['gajanandoilindustry@gmail.com'],
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['Kamana Road, Saduthala , Visnagar Dist. Mehsana. (Guj.) INDIA'],
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Sunday: 9:00 AM - 6:00 PM'],
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    }
  ];

  const services = [
    "Premium Cotton Seed Cake Supply",
    "Bulk Orders & Wholesale Pricing", 
    "Free Home Delivery Service",
    "Quality Testing & Certification",
    "Expert Consultation for Cattle Feed",
    "Custom Feed Solutions"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact Us - Get in Touch with gajanand Oil Industries | Cotton Seed Cake Suppliers"
        description="Contact gajanand Oil Industries for premium cotton seed cake in Gujarat. Get expert consultation, bulk orders, and free home delivery. Call +91 9898537506 for quotes."
        keywords="contact gajanand Oil Industries, cotton seed cake supplier contact, Gujarat cattle feed, bulk orders, expert consultation, free delivery"
        ogImage="/lovable-uploads/ab1f78de-2f19-4b3a-940b-ef7e0bb86bea.png"
      />
      {/* Moving Text Banner */}
      <div className="bg-emerald-600 text-white py-3 overflow-hidden">
        <ScrollingText 
          text="★ Contact Gajanand Cattle Food ★ Free Home Delivery ★ Best Prices ★ Expert Consultation ★ Bulk Orders Welcome ★ Quality Assured Products"
          speed={25}
          className="text-sm font-medium"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Get in Touch</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
            Contact Us Today
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
            Ready to boost your dairy farm's milk production? Get in touch with our experts 
            for the best cotton seed cake prices and personalized consultation.
          </p>
        </motion.div>

        {/* Contact Information Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-slate-100">
              <CardHeader className="p-4 sm:p-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${info.bg} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                  <info.icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${info.color}`} />
                </div>
                <CardTitle className="text-base sm:text-lg text-slate-900">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 lg:p-6">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-xs sm:text-sm text-slate-600 mb-1 leading-relaxed">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Main Content Grid */}
      

        {/* Interactive Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 sm:mb-4">Visit Our Facility</h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Located in the heart of Gujarat's agricultural region, our facility is equipped with modern 
              machinery and quality control systems to ensure the highest standards.
            </p>
          </div>
          
          <Card className="border-slate-100 overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src="https://maps.google.com/maps?q=MG5H%2BR97,+Saduthala,+Gujarat+384315,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gajanand Oil Industry Location"
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="p-4 sm:p-6 bg-gradient-to-r from-emerald-50 to-green-50">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Gajanand Oil Industry</h4>
                  <p className="text-xs sm:text-sm text-slate-600">MG5H+R97, Saduthala, Gujarat 384315, India</p>
                </div>
                <Button 
                  variant="outline" 
                  className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 text-sm sm:text-base px-4 py-2"
                  onClick={() => window.open('https://maps.app.goo.gl/bKfahemJ7TzsvXD98', '_blank')}
                >
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
