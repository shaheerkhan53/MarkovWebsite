import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import WordPressWebsiteDesignSection from "../../../../components/ui/WordPressWebsiteDesignSection";

export default function WordPressWebsiteDesignPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20">
        {/* Colorful Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50"></div>

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
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
            WordPress Website Design Services
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-blue-700 mb-8 font-medium">
            Powerful, Flexible & User-Friendly Websites Built on the World's #1 CMS
          </p>

          {/* Decorative line */}
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-8"></div>

          {/* Input and Button with enhanced design */}
          <div className="flex items-center justify-center bg-white p-3 rounded-2xl shadow-xl max-w-2xl mx-auto border border-blue-100">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Enter Website Address"
                className="pl-10 pr-4 py-3 bg-white text-blue-900 text-sm border-0 focus:ring-2 focus:ring-blue-300 rounded-xl"
              />
            </div>

            <Button
              className="ml-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              GET MY FREE PROPOSAL
            </Button>
          </div>
          
          {/* Features highlights */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {["Easy to Update", "SEO Friendly", "Plugin Extendable", "WooCommerce Ready"].map((feature) => (
              <div key={feature} className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm border border-blue-100">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                <span className="text-sm font-medium text-blue-900">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <WordPressWebsiteDesignSection />
    </>
  );
} 