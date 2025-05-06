"use client"

import { useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Loader2, CheckCircle2, Star, ArrowRight, MessageSquare, Clock, Award } from "lucide-react";
import { toast } from "sonner";

// Types
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  agreeToTerms?: string;
}

interface BusinessType {
  title: string;
  description: string;
  services: string[];
  stats: {
    clients: string;
    successRate: string;
    support: string;
    experience: string;
  };
}

const businessTypes: { [key: string]: BusinessType } = {
  walmart: {
    title: "Walmart",
    description: "Connect with our experts to unlock your full potential on Walmart Marketplace",
    services: [
      "walmart-boost",
      "walmart-consultation",
      "walmart-optimization",
      "walmart-advertising",
      "walmart-strategy",
    ],
    stats: {
      clients: "500+",
      successRate: "95%",
      support: "24/7",
      experience: "15+"
    }
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Transform your online presence with our expert digital marketing solutions",
    services: [
      "seo-optimization",
      "social-media",
      "content-marketing",
      "ppc-management",
      "email-marketing",
    ],
    stats: {
      clients: "1000+",
      successRate: "92%",
      support: "24/7",
      experience: "12+"
    }
  },
  amazon: {
    title: "Amazon",
    description: "Scale your Amazon business with our proven marketplace strategies",
    services: [
      "amazon-ppc",
      "amazon-seo",
      "amazon-optimization",
      "amazon-brand-registry",
      "amazon-advertising",
    ],
    stats: {
      clients: "750+",
      successRate: "94%",
      support: "24/7",
      experience: "10+"
    }
  },
  ecommerce: {
    title: "E-commerce",
    description: "Build and grow your e-commerce business with our comprehensive solutions",
    services: [
      "store-optimization",
      "conversion-optimization",
      "inventory-management",
      "multichannel-selling",
      "ecommerce-strategy",
    ],
    stats: {
      clients: "600+",
      successRate: "91%",
      support: "24/7",
      experience: "13+"
    }
  },
  default: {
    title: "Business",
    description: "Partner with us to achieve your business growth objectives",
    services: [
      "business-consulting",
      "growth-strategy",
      "market-analysis",
      "business-optimization",
      "performance-marketing",
    ],
    stats: {
      clients: "800+",
      successRate: "93%",
      support: "24/7",
      experience: "15+"
    }
  }
};

export default function ContactPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const businessType = searchParams.get("type") || "default";
  const service = searchParams.get("service") || "general";
  const source = searchParams.get("source") || "direct";

  // Get business type data
  const currentBusiness = businessTypes[businessType] || businessTypes.default;

  // State
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: service,
    message: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form validation
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
      isValid = false;
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
      isValid = false;
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [formData]);

  // Enhanced form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    setIsSubmitting(true);
    try {
      // Here you would typically make an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Log form data with business type
      console.log("Form submitted:", {
        ...formData,
        businessType,
        source,
        timestamp: new Date().toISOString(),
      });

      setIsSuccess(true);
      toast.success("Message sent successfully!");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "general",
        message: "",
        agreeToTerms: false,
      });
      
      // Redirect to thank you page with business type
      setTimeout(() => {
        router.push(`/thank-you?type=${businessType}`);
      }, 3000);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle service selection
  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreeToTerms: checked }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#205655] via-[#1a4544] to-[#143433] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-10">
          {/* Animated circles */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#205655] rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1a4544] rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#143433] rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 5 + 5}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-2"
          >
            <span className="text-[#e7eaeb] text-lg font-medium tracking-wider uppercase">
              Let's Connect
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Let's Connect
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-[#e7eaeb] max-w-2xl mx-auto leading-relaxed"
          >
            {currentBusiness.description}
          </motion.p>
          
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
          >
            {Object.entries(currentBusiness.stats).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-[#2E3739]/50 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 border border-[#e7eaeb]/10"
              >
                <div className="text-3xl font-bold text-white mb-2">{value}</div>
                <div className="text-[#e7eaeb] capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-[#205655]/10"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[#e7eaeb] rounded-full flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-[#374548]" />
                      </div>
              <div>
                <h2 className="text-xl font-bold text-[#374548]">Schedule a Consultation</h2>
                <p className="text-sm text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
                      </div>
                    </div>
                    
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-white/50 backdrop-blur-sm border-2 ${errors.name ? 'border-red-500' : 'border-blue-100'} focus:border-[#0071CE] rounded-lg`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name}</p>
                  )}
                      </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-white/50 backdrop-blur-sm border-2 ${errors.email ? 'border-red-500' : 'border-blue-100'} focus:border-[#0071CE] rounded-lg`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                      </div>
                    </div>
                    
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`bg-white/50 backdrop-blur-sm border-2 ${errors.phone ? 'border-red-500' : 'border-blue-100'} focus:border-[#0071CE] rounded-lg`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs">{errors.phone}</p>
                  )}
                </div>
                
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Company <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`bg-white/50 backdrop-blur-sm border-2 ${errors.company ? 'border-red-500' : 'border-blue-100'} focus:border-[#0071CE] rounded-lg`}
                    placeholder="Your company"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-xs">{errors.company}</p>
                  )}
                      </div>
                    </div>
                    
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Service <span className="text-red-500">*</span>
                </label>
                <Select
                  value={formData.service}
                  onValueChange={handleServiceChange}
                >
                  <SelectTrigger className={errors.service ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {currentBusiness.services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </SelectItem>
                    ))}
                    <SelectItem value="general">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-red-500 text-xs">{errors.service}</p>
                )}
                      </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-white/50 backdrop-blur-sm border-2 ${errors.message ? 'border-red-500' : 'border-blue-100'} focus:border-[#0071CE] rounded-lg`}
                  placeholder="Tell us about your business goals and how we can help"
                  rows={4}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs">{errors.message}</p>
                )}
                    </div>
                    
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={handleCheckboxChange}
                />
                <label
                  htmlFor="terms"
                  className="text-xs text-gray-600"
                >
                  I agree to the{" "}
                  <a href="/privacy-policy" className="text-[#0071CE] hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" className="text-[#0071CE] hover:underline">
                    Terms of Service
                  </a>
                </label>
                      </div>
              {errors.agreeToTerms && (
                <p className="text-red-500 text-xs">{errors.agreeToTerms}</p>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#205655] to-[#1a4544] hover:from-[#1a4544] hover:to-[#205655] text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                disabled={isSubmitting || isSuccess}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Schedule Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-6">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#205655]/50 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#205655]" />
                      </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-[#e7eaeb]">021-36930725</p>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-[#205655]/50 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#205655]" />
                  </div>
                <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-[#e7eaeb]">Info@markovinternational.com</p>
                  </div>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-[#205655]/50 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#205655]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Address</h3>
                    <p className="text-[#e7eaeb]">Regional Office: R-18, Sector-10, North Karachi</p>
              </div>
            </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Floating Social Media Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-4 border border-white/20">
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/company/markov"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#205655] rounded-full flex items-center justify-center text-white hover:bg-[#1a4544] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com/markov"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#205655] rounded-full flex items-center justify-center text-white hover:bg-[#1a4544] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com/markov"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#205655] rounded-full flex items-center justify-center text-white hover:bg-[#1a4544] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}