"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function WalmartMarketplacePage() {
  const router = useRouter();

  const navigateToContact = (service: string) => {
    router.push(`/contact?service=${encodeURIComponent(service)}`);
  };

  return (
    <div className="text-gray-800">
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Walmart Marketplace Services</h1>
            <p className="text-xl mb-8">Expand your e-commerce reach with our specialized Walmart Marketplace optimization and management services.</p>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold"
              onClick={() => navigateToContact("Walmart Marketplace Services")}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Sell on Walmart Marketplace</h2>
              <p className="mb-4">Selling on Walmart Marketplace gives you access to millions of customers and a robust e-commerce platform with significant growth potential.</p>
              <p className="mb-6">Our team of experts will help you navigate the complexities of Walmart's platform, optimize your product listings, and increase your sales.</p>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium"
                onClick={() => navigateToContact("Walmart Marketplace Strategy")}
              >
                Learn More About Our Approach
              </Button>
            </div>
            <div className="flex justify-center">
              <Image 
                src="/placeholder.jpg" 
                alt="Walmart Marketplace" 
                width={400} 
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Walmart Marketplace Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Account Setup & Management</h3>
              <p className="mb-4">We'll handle everything from initial account setup to ongoing management, ensuring your Walmart Marketplace presence runs smoothly.</p>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-medium"
                onClick={() => navigateToContact("Walmart Account Management")}
              >
                Get Account Support
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Product Listing Optimization</h3>
              <p className="mb-4">Optimize your product listings with strategic keywords, compelling descriptions, and high-quality images to increase visibility and conversions.</p>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-medium"
                onClick={() => navigateToContact("Walmart Listing Optimization")}
              >
                Optimize My Listings
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Advertising & Promotion</h3>
              <p className="mb-4">Leverage Walmart's advertising solutions to increase product visibility and drive more sales through strategic promotional campaigns.</p>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-medium"
                onClick={() => navigateToContact("Walmart Advertising")}
              >
                Boost My Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Walmart Marketplace Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Our team of e-commerce experts is ready to help you maximize your potential on Walmart's platform.</p>
          <Button
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold"
            onClick={() => navigateToContact("Walmart Marketplace Growth")}
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="text-blue-600 hover:underline font-medium">
            Return to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
