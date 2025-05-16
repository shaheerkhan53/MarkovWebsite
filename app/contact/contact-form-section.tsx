"use client"

import React, { useState, useCallback } from "react";
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

export default function ContactFormSection() {
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
      console.error("Submission error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreeToTerms: checked }));
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50 p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-lg"
        >
          <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-8">
            Your message has been sent successfully. We will get back to you shortly.
          </p>
          <Button onClick={() => router.push("/")} className="bg-teal-600 hover:bg-teal-700">
            Return to Homepage
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/contact-hero.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Contact Our <span className="text-teal-400">{currentBusiness.title}</span> Experts
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-10 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {currentBusiness.description}. We're here to help you succeed.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-10 py-7 rounded-lg shadow-lg transition-transform hover:scale-105">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content: Form and Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Contact Form */}
            <motion.div 
              className="bg-white p-8 md:p-10 rounded-xl shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className={errors.name ? "border-red-500" : ""} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john.doe@example.com" className={errors.email ? "border-red-500" : ""} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" className={errors.phone ? "border-red-500" : ""} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Corp" className={errors.company ? "border-red-500" : ""} />
                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service of Interest</label>
                  <Select name="service" value={formData.service} onValueChange={handleServiceChange}>
                    <SelectTrigger className={errors.service ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      {currentBusiness.services.map(s => (
                        <SelectItem key={s} value={s}>{s.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" rows={5} className={errors.message ? "border-red-500" : ""} />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="agreeToTerms" checked={formData.agreeToTerms} onCheckedChange={handleCheckboxChange} className={errors.agreeToTerms ? "border-red-500" : ""} />
                  <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                    I agree to the <a href="/terms" className="text-teal-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-teal-600 hover:underline">Privacy Policy</a>.
                  </label>
                </div>
                {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>}

                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-3 rounded-md" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                    </>
                  ) : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info & Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl mb-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <a href="tel:+15551234567" className="flex items-center text-gray-700 hover:text-teal-600 transition-colors group">
                    <Phone className="w-6 h-6 mr-4 text-teal-500 group-hover:animate-pulse" />
                    <span className="text-lg">+1 (555) 123-4567</span>
                  </a>
                  <a href="mailto:info@markovinternational.com" className="flex items-center text-gray-700 hover:text-teal-600 transition-colors group">
                    <Mail className="w-6 h-6 mr-4 text-teal-500 group-hover:animate-pulse" />
                    <span className="text-lg">info@markovinternational.com</span>
                  </a>
                  <div className="flex items-start text-gray-700">
                    <MapPin className="w-6 h-6 mr-4 text-teal-500 mt-1 flex-shrink-0" />
                    <span className="text-lg">123 Markov Lane, Innovation City, CA 90210</span>
                  </div>
                </div>
              </div>

              <div className="bg-teal-600 text-white p-8 md:p-10 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Why Partner With Us?</h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <Star className="w-6 h-6 mr-3 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">{currentBusiness.stats.clients} Clients Served</h4>
                      <p className="text-teal-100 text-sm">Proven track record of delivering results for businesses like yours.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 mr-3 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">{currentBusiness.stats.successRate} Success Rate</h4>
                      <p className="text-teal-100 text-sm">Our strategies are designed for maximum impact and ROI.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare className="w-6 h-6 mr-3 text-blue-300 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">{currentBusiness.stats.support} Expert Support</h4>
                      <p className="text-teal-100 text-sm">Dedicated team available to guide you every step of the way.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-6 h-6 mr-3 text-orange-300 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">{currentBusiness.stats.experience} Years of Experience</h4>
                      <p className="text-teal-100 text-sm">Industry veterans leading the charge in {currentBusiness.title.toLowerCase()} solutions.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 