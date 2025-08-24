import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollingText } from '@/components/ui/moving-text';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Award, 
  CheckCircle, 
  Microscope, 
  FileCheck, 
  Star,
  ArrowRight,
  Leaf,
  Factory,
  Users,
  TrendingUp,
  Clock
} from 'lucide-react';

const Quality = () => {
  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015 Certified",
      description: "Quality management system certified by international standards",
      year: "2005",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "FSSAI Licensed",
      description: "Food Safety and Standards Authority of India approved",
      year: "2010",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Leaf,
      title: "Organic Certification",
      description: "Certified organic processing for chemical-free products",
      year: "2018",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: FileCheck,
      title: "Quality Assurance",
      description: "Comprehensive quality control at every production stage",
      year: "1998",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const qualityProcess = [
    {
      step: "01",
      title: "Raw Material Inspection",
      description: "Thorough examination of cotton seeds for quality, moisture content, and purity before processing.",
      icon: Microscope
    },
    {
      step: "02", 
      title: "Processing Control",
      description: "Controlled temperature and pressure during extraction to maintain nutritional integrity.",
      icon: Factory
    },
    {
      step: "03",
      title: "Laboratory Testing",
      description: "Comprehensive analysis of protein content, fat levels, fiber, and moisture in our certified lab.",
      icon: FileCheck
    },
    {
      step: "04",
      title: "Final Quality Check",
      description: "Final inspection and packaging in hygienic conditions with proper labeling and certification.",
      icon: CheckCircle
    }
  ];

  const qualityParameters = [
    { parameter: "Protein Content", standard: "28-30%", ourProduct: "28-30%", status: "excellent" },
    { parameter: "Fat Content", standard: "5-8%", ourProduct: "5-7%", status: "excellent" },
    { parameter: "Fiber Content", standard: "18-25%", ourProduct: "18-22%", status: "excellent" },
    { parameter: "Moisture Content", standard: "Max 12%", ourProduct: "8-10%", status: "excellent" },
    { parameter: "Aflatoxin", standard: "< 20 ppb", ourProduct: "< 15 ppb", status: "excellent" },
    { parameter: "Crude Ash", standard: "Max 8%", ourProduct: "5-6%", status: "excellent" }
  ];

  const qualityBenefits = [
    {
      icon: TrendingUp,
      title: "Consistent Quality",
      description: "Every batch maintains the same high standards through our rigorous quality control process"
    },
    {
      icon: Shield,
      title: "Safe for Animals", 
      description: "All products are tested for harmful substances and contaminants to ensure cattle safety"
    },
    {
      icon: Award,
      title: "Certified Standards",
      description: "Meets and exceeds all national and international quality standards for cattle feed"
    },
    {
      icon: Leaf,
      title: "Natural Processing",
      description: "No harmful chemicals or artificial additives used in our processing methods"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Quality Assurance - ISO Certified Cotton Seed Cake | Ganesh Oil Industries"
        description="Discover our uncompromising quality standards for cotton seed cake. ISO certified, FSSAI approved, and laboratory tested for premium livestock nutrition in Gujarat."
        keywords="ISO certified cotton seed cake, FSSAI approved cattle feed, quality assurance, laboratory tested, premium standards, safe animal feed"
        ogImage="/lovable-uploads/66af7340-4154-4493-a512-910acdf22d64.png"
      />
      {/* Moving Text Banner */}
      <div className="bg-emerald-600 text-white py-3 overflow-hidden">
        <ScrollingText 
          text="★ Quality Assurance ★ ISO Certified ★ FSSAI Approved ★ Laboratory Tested ★ Premium Standards ★ Safe for Animals"
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            <span>Quality Assurance</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Uncompromising Quality Standards
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            At Gajanand Cattle Food Limited, quality is not just a promise - it's our commitment. 
            Every batch of cotton seed cake undergoes rigorous testing to ensure the highest standards 
            for your cattle's health and milk production.
          </p>
        </motion.div>

        {/* Certifications */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Certifications</h2>
            <p className="text-lg text-slate-600">
              Recognized by leading authorities for our commitment to quality and safety
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center border-slate-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge variant="outline" className="mx-auto mb-2">Since {cert.year}</Badge>
                  <CardTitle className="text-lg text-slate-900">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Quality Process */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Quality Process</h2>
            <p className="text-lg text-slate-600">
              A systematic approach to ensure every product meets our high standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityProcess.map((process, index) => (
              <Card key={index} className="border-slate-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                      {process.step}
                    </div>
                    <process.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{process.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Quality Parameters Table */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Quality Parameters</h2>
            <p className="text-lg text-slate-600">
              Detailed specifications of our cotton seed cake compared to industry standards
            </p>
          </div>
          
          <Card className="border-slate-100">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 font-semibold text-slate-900">Parameter</th>
                      <th className="text-center py-3 font-semibold text-slate-900">Industry Standard</th>
                      <th className="text-center py-3 font-semibold text-slate-900">Our Product</th>
                      <th className="text-center py-3 font-semibold text-slate-900">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qualityParameters.map((param, index) => (
                      <tr key={index} className="border-b border-slate-100">
                        <td className="py-4 text-slate-900 font-medium">{param.parameter}</td>
                        <td className="py-4 text-center text-slate-600">{param.standard}</td>
                        <td className="py-4 text-center text-emerald-600 font-semibold">{param.ourProduct}</td>
                        <td className="py-4 text-center">
                          <Badge className="bg-green-100 text-green-700">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Excellent
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quality Benefits */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Our Quality Matters</h2>
            <p className="text-lg text-slate-600">
              The benefits of choosing certified quality cotton seed cake for your cattle
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityBenefits.map((benefit, index) => (
              <Card key={index} className="text-center border-slate-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Testing Facilities */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-br from-slate-50 to-white border-slate-100">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    In-House Testing Laboratory
                  </h3>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    Our state-of-the-art laboratory is equipped with modern testing equipment 
                    to analyze every batch for protein content, moisture levels, fat content, 
                    and potential contaminants.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700">Advanced spectroscopy equipment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700">Certified testing protocols</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700">Daily quality monitoring</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-xl p-6">
                  <img 
                    src="/lovable-uploads/356c9ecc-0c23-48f6-9d87-7d217a51cd70.png"
                    alt="Quality Testing Lab"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
    
      </div>
    </div>
  );
};

export default Quality;
