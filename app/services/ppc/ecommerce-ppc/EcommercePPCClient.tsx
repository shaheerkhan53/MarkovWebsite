"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart, Users, CheckCircle, Zap, ShoppingCart, Tag, Globe, FileText, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EcommercePPCClient() {
    const router = useRouter();
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="pt-20 pb-16 bg-gradient-to-b from-[#f3f4f6] to-[#fff]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#B5828C]">
                            eCommerce PPC Services
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">
                            Maximize your online store's sales and ROI with expertly managed eCommerce PPC campaigns.
                        </p>
                        <Button
                            className="bg-[#B5828C] hover:bg-[#3d2b00] text-white px-8 py-4 rounded-lg font-semibold shadow-lg"
                            onClick={() => router.push("/contact?service=ecommerce-ppc")}
                        >
                            Get a Free PPC Audit
                        </Button>
                    </div>
                </div>
            </section>
            {/* ...rest of the sections from the original page.tsx... */}
        </div>
    );
} 