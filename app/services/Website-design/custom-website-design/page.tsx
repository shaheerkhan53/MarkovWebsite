"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import CustomWebsiteDesignSection from "../../../../components/ui/CustomWebsiteDesignSection";

export default function CustomWebsiteDesignPage() {
  const router = useRouter();
  
  // Function to navigate to contact page with specific parameters
  const navigateToContact = (serviceType: string = 'custom') => {
    router.push(`/contact?type=website-design&service=${serviceType}`);
  };
  
  return (
    <>
      <section className="relative overflow-hidden py-20">
        {/* Colorful Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50"></div>

        {/* Green Pattern Overlay */}
        <div className="absolute inset-0">
          <img
            src="/green-pattern.png"
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          {/* Title with Gradient */}
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Custom Website Design Services
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-indigo-700 mb-8 font-medium">
            Modern, Responsive & High-Converting Websites Built For Your Business
          </p>

          {/* Decorative line */}
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>

          {/* Input and Button with enhanced design */}
          <div className="flex items-center justify-center bg-white p-3 rounded-2xl shadow-xl max-w-2xl mx-auto border border-indigo-100">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Enter Website Address"
                className="pl-10 pr-4 py-3 bg-white text-indigo-900 text-sm border-0 focus:ring-2 focus:ring-indigo-300 rounded-xl"
              />
            </div>

            <Button
              className="ml-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={() => navigateToContact('proposal')}
            >
              GET MY FREE PROPOSAL
            </Button>
          </div>
          
          {/* Features highlights */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {["Stunning UI Design", "Mobile Responsive", "SEO Optimized", "Fast Loading"].map((feature) => (
              <div key={feature} className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></span>
                <span className="text-sm font-medium text-indigo-900">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CustomWebsiteDesignSection />
    </>
  );
}
