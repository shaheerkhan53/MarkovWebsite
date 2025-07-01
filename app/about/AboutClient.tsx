"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Trophy, Target, Clock, Calendar, Building, Award, Shield, ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AboutClient() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16 md:py-24 mx-auto text-center">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About Markov International</h1>
                <p className="text-lg text-teal-100 mb-6 max-w-3xl mx-auto">
                  We are a global leader in Business Process Outsourcing and technology solutions, dedicated to helping businesses transform, scale, and succeed in the digital age.
                </p>
                <Building className="w-12 h-12 text-teal-300 mb-6 mx-auto" />
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* ...rest of the sections from the original page.tsx... */}
      </main>
    </div>
  );
} 