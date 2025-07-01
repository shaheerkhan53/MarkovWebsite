"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart, CheckCircle, Zap, ShoppingCart, Tag, Globe, FileText, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EcommerceSEOClient() {
    const router = useRouter();
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="pt-20 pb-16 bg-gradient-to-b from-[#f3f4f6] to-[#fff]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#4285F4]">
                            eCommerce SEO Services
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">
                            Drive organic traffic, increase rankings, and boost sales with expert eCommerce SEO strategies tailored for your online store.
                        </p>
                        <Button
                            className="bg-[#4285F4] hover:bg-[#2b5cd9] text-white px-8 py-4 rounded-lg font-semibold shadow-lg"
                            onClick={() => router.push("/contact?service=ecommerce-seo")}
                        >
                            Get a Free eCommerce SEO Audit
                        </Button>
                    </div>
                </div>
            </section>
            {/* ...rest of the sections from the original page.tsx... */}
        </div>
    );
} 