"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart, CheckCircle, Zap, ShoppingCart, Tag, Globe, FileText, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ShopifySEOClient() {
    const router = useRouter();
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="pt-20 pb-16 bg-gradient-to-b from-[#f3f4f6] to-[#fff]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#7AB55C]">
                            Shopify SEO Services
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">
                            Boost your Shopify store's visibility, rankings, and sales with expert SEO strategies tailored for eCommerce success.
                        </p>
                        <Button
                            className="bg-[#7AB55C] hover:bg-[#4e7c38] text-white px-8 py-4 rounded-lg font-semibold shadow-lg"
                            onClick={() => router.push("/contact?service=shopify-seo")}
                        >
                            Get a Free Shopify SEO Audit
                        </Button>
                    </div>
                </div>
            </section>
            {/* ...rest of the sections from the original page.tsx... */}
        </div>
    );
} 