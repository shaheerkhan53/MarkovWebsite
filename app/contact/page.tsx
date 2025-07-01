import React from 'react'; // Import React for Suspense
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
import ContactFormSection from './contact-form-section';
import type { Metadata } from 'next'

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

export const metadata: Metadata = {
  title: 'Contact Markov International',
  description: 'Get in touch with Markov International for business inquiries, support, or partnership opportunities.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://markovinternational.com/contact',
  },
}

// Main page component that wraps the actual form section in Suspense
export default function ContactPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading contact form...</p></div>}>
      <ContactFormSection />
    </React.Suspense>
  );
}