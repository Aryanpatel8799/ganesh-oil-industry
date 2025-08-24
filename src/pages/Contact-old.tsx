
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Building2, Globe } from 'lucide-react';

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
      details: ['+91 98765 43210', '+91 87654 32109'],
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@gajanandoil.com', 'sales@gajanandoil.com'],
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['123, Industrial Area', 'Oil Mill Road, Mumbai - 400001'],
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    }
  ];

  const departments = [
    { name: 'Sales Inquiry', email: 'sales@gajanandoil.com', phone: '+91 98765 43210' },
    { name: 'Technical Support', email: 'support@gajanandoil.com', phone: '+91 87654 32109' },
    { name: 'Export Division', email: 'export@gajanandoil.com', phone: '+91 76543 21098' },
    { name: 'Quality Assurance', email: 'quality@gajanandoil.com', phone: '+91 65432 10987' }
  ];

  return (
    <div className="pt-32 pb-16 min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to experience the finest quality edible oils? Get in touch with us for inquiries, 
            orders, or any questions about our products and services.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={info.title} className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${info.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className={`w-8 h-8 ${info.color}`} />
                </div>
                <CardTitle className="text-lg font-bold text-slate-800">{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-slate-600 mb-1">{detail}</p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 animate-fadeInUp">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                  <Send className="w-6 h-6 mr-3 text-emerald-600" />
                  Send us a Message
                </CardTitle>
                <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enter company name"
                        className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject *</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this regarding?"
                      required
                      className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                      className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Departments & Additional Info */}
          <div className="space-y-8">
            {/* Department Contacts */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-800 flex items-center">
                  <Building2 className="w-5 h-5 mr-2 text-emerald-600" />
                  Department Contacts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={dept.name} className="p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-colors">
                    <h4 className="font-semibold text-slate-800 mb-2">{dept.name}</h4>
                    <p className="text-sm text-slate-600 mb-1">{dept.email}</p>
                    <p className="text-sm text-slate-600">{dept.phone}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-800 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-emerald-600" />
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Response Time</span>
                  <Badge className="bg-emerald-100 text-emerald-700">Within 24 hours</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Languages</span>
                  <Badge className="bg-blue-100 text-blue-700">Hindi, English</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Export Inquiries</span>
                  <Badge className="bg-amber-100 text-amber-700">Welcome</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Bulk Orders</span>
                  <Badge className="bg-purple-100 text-purple-700">Available</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 animate-fadeInUp">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-800 text-center flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-3 text-emerald-600" />
              Find Us on Map
            </CardTitle>
            <p className="text-slate-600 text-center">Visit our facility to see our quality processes firsthand</p>
          </CardHeader>
          <CardContent>
            <div className="h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">Interactive Map</h3>
                <p className="text-slate-600">Google Maps integration will be displayed here</p>
                <p className="text-sm text-slate-500 mt-2">123, Industrial Area, Oil Mill Road, Mumbai - 400001</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
