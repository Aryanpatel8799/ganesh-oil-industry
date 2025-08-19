
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { Shield, Award, Users, Leaf, CheckCircle, Star, ArrowRight, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustSection = () => {
  const stats = [
    { number: 27, label: "Years Experience", icon: Award, suffix: "+", type: "number" },
    { number: 500000, label: "Happy Customers", icon: Users, suffix: "+", type: "number" },
    { number: 100, label: "Natural Products", icon: Leaf, suffix: "%", type: "number" },
    { number: 0, label: "Certified Quality", icon: Shield, suffix: "", type: "text", text: "ISO" }
  ];

  const features = [
    "ISO 9001:2015 Certified Manufacturing",
    "FSSAI Licensed & Approved",
    "100% Natural Processing Methods",
    "Laboratory Tested Quality",
    "Huge Experience in Cattle Feed",
    "Wide Dealer Network Coverage"
  ];

  return (
   <></>
  );
};

export default TrustSection;
