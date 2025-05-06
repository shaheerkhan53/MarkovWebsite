"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Star, Users, TrendingUp, Globe2, ThumbsUp, BarChartHorizontal, MessageCircle, ChevronRight } from 'lucide-react'

export default function FranchiseSocialMediaPage() {
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-[#f3f6ff] text-[#06202B] overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#4169E1] to-[#8A2BE2] text-transparent bg-clip-text">Franchise Social Media Marketing</h1>
            <p className="text-lg text-[#06202B] opacity-90 mb-8">Maximize Customer Engagement on Corporate and Local Levels</p>
            
            <div className="h-1 w-32 bg-[#077A7D] mx-auto mb-10"></div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto flex items-center">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </span>
                  <input 
                    type="text" 
                    placeholder="Enter Website Address" 
                    className="flex-1 pl-10 px-4 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#077A7D]" 
                  />
                </div>
                <Button className="bg-[#7a46e4] hover:bg-[#6535c5] text-white font-bold px-6 py-3">GET MY FREE PROPOSAL</Button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center text-sm text-[#06202B] mt-8">
            <Link href="/" className="hover:text-[#077A7D]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-[#077A7D]">Digital Marketing Services</Link>
            <span className="mx-2">/</span>
            <span>Franchise Social Media Marketing</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#06202B] mb-6">Results-Driven Franchise Social Media Marketing Solutions</h2>
              <p className="text-[#06202B] mb-4">
                Inconsistent branding can jeopardize the credibility of your multi-location company and hurt your reputation.
              </p>
              <p className="text-[#06202B] mb-4">
                Thrive Internet Marketing Agency's franchise social marketing management services provide a cohesive strategy that ensures brand consistency and recognition on both corporate and local levels across all locations.
              </p>
              <p className="text-[#06202B] mb-4">
                Through our results-driven franchise social media marketing solutions, we help you connect with your target audience on a more personal level, fostering meaningful interactions and driving business growth.
              </p>
              <p className="text-[#06202B] mb-4">
                Leverage social media franchise opportunities to expand your company's reach like never before.
              </p>
              <p className="text-[#06202B] mb-4">
                From franchise social media content creation and franchise social media ad campaign management to campaign monitoring and ongoing optimization, our franchise social media marketing experts are dedicated to delivering profitable results for your social campaigns.
              </p>
              <p className="text-[#06202B] mb-5">
                Partner with us and let us help you not only enhance your brand recognition but also strengthen consumer trust and loyalty.
              </p>
              <Button className="bg-[#077A7D] hover:bg-[#056568] text-white font-bold px-8 py-3 rounded-md">GET STARTED TODAY</Button>
            </div>
            <div className="flex justify-center">
              <Image 
                src="/franchise-social-media.png" 
                alt="Franchise Social Media Marketing" 
                width={500} 
                height={500} 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Is Franchise Social Media Marketing Section */}
      <section className="py-16 bg-[#F5EEDD]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#06202B] mb-2">What Is Franchise Social Media Marketing?</h2>
            <p className="text-lg text-[#077A7D]">Boost Brand Recall With a Unified Strategy</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#06202B] mb-4">
                Maintaining consistent branding across multiple social media platforms can lead to a significant <span className="font-bold">85% increase in brand recognition</span>.
              </p>
              <p className="text-[#06202B] mb-4">
                Meanwhile, inconsistent branding across channels dilutes your brand's identity, making it difficult for customers to remember who you are.
              </p>
              <p className="text-[#06202B] mb-4">
                Don't fall for the same rookie mistake – instead invest in franchise social media marketing solutions that drive brand recognition and engagement.
              </p>
              <p className="text-[#06202B] mb-4">
                Franchise social media marketing involves creating standardized brand guidelines, content sharing workflows and communication strategies to ensure your brand is successfully represented and promoted across all locations.
              </p>
              <div className="bg-white p-5 rounded-lg shadow-md mt-8">
                <h3 className="text-lg font-bold text-[#06202B] mb-2">Need help implementing social media marketing for franchise businesses?</h3>
                <p className="text-[#06202B] mb-4">
                  At Thrive, we create a cohesive franchise social media strategy that maximizes engagement across corporate and branch locations.
                </p>
                <p className="text-[#06202B] mb-6">
                  Establish a strong, recognizable brand identity that drives growth with Thrive's social media management for franchise businesses.
                </p>
                <Button className="bg-[#077A7D] hover:bg-[#056568] text-white font-bold px-8 py-3 rounded-md w-full">BOOST MY BRAND RECOGNITION</Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image 
                src="/franchise-social-strategy.png" 
                alt="Franchise Social Media Strategy" 
                width={450} 
                height={450} 
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marketing vs. Management Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#06202B] mb-6">
              Franchise Social Media Marketing vs. Franchise Social Media Management:
              <br />Which Is Best for Multi-Location Companies?
            </h2>
            <p className="text-[#06202B]">
              While both franchise social media marketing and franchise social media management are essential for multi-location companies, knowing which and how to use each strategy can significantly impact your business.
            </p>
            <p className="text-[#06202B] mt-4">
              Both strategies have unique benefits and should be implemented based on the goals of your franchise:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#F5EEDD] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#077A7D] mb-4">Franchise Social Media Marketing</h3>
              <p className="text-[#06202B] mb-4">
                Franchise social media marketing (SMM) involves creating and sharing content on various social media platforms to promote your franchise business.
              </p>
              <p className="text-[#06202B] mb-4">
                A franchise SMM strategy helps to increase brand awareness, generate leads and drive traffic to your franchises.
              </p>
              <p className="text-[#06202B] mb-3">Franchise social media marketing services include:</p>
              <ul className="list-none space-y-3 mb-4">
                <li className="flex items-start">
                  <ChevronRight className="text-[#077A7D] mt-1 min-w-[16px]" />
                  <span className="text-[#06202B]">Crafting social media posts based on the central brand message</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-[#077A7D] mt-1 min-w-[16px]" />
                  <span className="text-[#06202B]">Brand promotion and awareness building on various social media channels</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-[#077A7D] mt-1 min-w-[16px]" />
                  <span className="text-[#06202B]">Creating a positive online reputation for the brand</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-[#077A7D] mt-1 min-w-[16px]" />
                  <span className="text-[#06202B]">Interacting with potential clients and customers to build relationships</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F5EEDD] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#077A7D] mb-4">Franchise Social Media Management</h3>
              <p className="text-[#06202B] mb-4">
                The average user spends their time on <span className="font-bold">seven different social platforms</span> each month, making having a presence on each platform essential.
              </p>
              <p className="text-[#06202B] mb-4">
                You can easily manage multiple platforms by outsourcing to a third-party agency or using franchise social media management software.
              </p>
              <p className="text-[#06202B] mb-3">Franchise social media management software includes:</p>
              <ul className="list-none space-y-3 mb-4">
                <li className="flex items-start">
                  <ChevronRight className="text-[#077A7D] mt-1 min-w-[16px]" />
                  <span className="text-[#06202B]">Posting regular updates and content on social media platforms</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-[#077A7D] mt-1 min-w-[16px]" />
                  <span className="text-[#06202B]">Managing comments, messages and queries received on social media</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-[#077A7D] mt-1 min-w-[16px]" />
                  <span className="text-[#06202B]">Creating custom graphics, videos and other promotional material for social channels</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-[#077A7D] mt-1 min-w-[16px]" />
                  <span className="text-[#06202B]">Developing a content calendar for strategic posting and sharing of content</span>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#06202B] mb-4 text-center">Which Franchise Social Media Strategy Is Best for Your Multi-Location Business?</h3>
          <p className="text-center text-[#06202B] mb-4">The simple answer is <span className="font-bold">BOTH!</span></p>
          <p className="text-[#06202B] mb-4 max-w-3xl mx-auto">
            At Thrive, we found that combining social media marketing and social media management franchise services creates a well-rounded online presence that drives business growth.
          </p>
          <p className="text-[#06202B] max-w-3xl mx-auto">
            Franchise social media marketing is a great way to showcase your brand and reach potential customers, while franchise social media management ensures your content is consistent and engaging across all franchise locations.
          </p>
        </div>
      </section>

      {/* Winning Strategy Section */}
      <section className="py-16 bg-[#F5EEDD]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#06202B] mb-4">
              Create a Winning Franchise Social Media Strategy With Thrive Internet Marketing Agency
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-[#06202B] mb-4">
              Launching your social media marketing for your franchise without a central strategy can lead to miscommunications between locations and a loss of brand consistency across the board.
            </p>
            <p className="text-[#06202B] mb-4">
              Thrive Internet Marketing Agency's franchise social media solutions involve developing and implementing company-wide guidelines and location-specific content plans for each of your franchise locations.
            </p>
            <p className="text-[#06202B] mb-8">
              Our team uses sophisticated franchise social media management software to publish content, monitor engagement and track results in real-time.
            </p>
            
            <div className="flex justify-center mb-14">
              <Button className="bg-[#077A7D] hover:bg-[#056568] text-white font-bold px-8 py-3 rounded-md">CHAT WITH OUR SMM EXPERTS</Button>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#06202B] mb-2">
                Why Your Business Needs Social Media Marketing for Franchise
              </h3>
              <p className="text-[#077A7D]">Build a Loyal Customer Base and Drive Repeat Business</p>
            </div>
            
            <p className="text-[#06202B] mb-4">
              Social media is a top lead-generating franchise marketing channel for <span className="font-bold">93% of businesses</span>. It significantly impacts consumer behavior with <span className="font-bold">87% more users likely to visit</span> a brand's website and view products if they follow the brand on social media.
            </p>
            <p className="text-[#06202B] mb-4">
              Furthermore, a positive social media experience increases the likelihood of a customer purchasing by <span className="font-bold">71%</span>. Needless to say, franchise social media marketing is a strategy no brand can afford to ignore.
            </p>
            <p className="text-[#06202B] font-bold mb-8">
              The social media franchise opportunities don't end there.
            </p>
            <p className="text-[#06202B] mb-8">
              Franchise social marketing management allows you to:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#7AE2CF] flex items-center justify-center mr-3">
                  <CheckCircle className="text-[#077A7D] w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#06202B]">Offer a Clear Value Proposition</h4>
              </div>
              <p className="text-[#06202B] mb-3">
                About <span className="font-bold">85% of buyers</span> rely on brands to solve their problems. With laser-focused social media marketing franchise job businesses can highlight the unique value proposition of particular services and use compelling calls-to-action (CTA) to encourage consumers to take action.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#7AE2CF] flex items-center justify-center mr-3">
                  <CheckCircle className="text-[#077A7D] w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#06202B]">Boost Brand Equity</h4>
              </div>
              <p className="text-[#06202B] mb-3">
                Boost brand recall by maintaining an active presence on social media. Frequent content sharing keeps your brand at the forefront of consumers' minds. This allows you to stay top-of-mind when they are ready to purchase or recommend your products or services to other potential buyers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#7AE2CF] flex items-center justify-center mr-3">
                  <CheckCircle className="text-[#077A7D] w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#06202B]">Utilize Cross-Platform Sharing</h4>
              </div>
              <p className="text-[#06202B] mb-3">
                Social media allows you to share content across platforms for better reach. A social media agency develops strategies for creating and distributing targeted content on multiple platforms. They assist with establishing brand guidelines that franchisees should follow when sharing content on their social profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#06202B] mb-2">
              Achieve Real Results With a Trusted Franchise Social Media Agency
            </h2>
            <p className="text-[#077A7D]">A Proven Track Record of Success</p>
          </div>
          
          <p className="text-[#06202B] mb-10 max-w-3xl mx-auto text-center">
            Thrive's franchise social media company has worked with business-to-business (B2B) and business-to-company (B2C) brands of all sizes. Whether you're an enterprise with five or a hundred locations, we equip you with the tools to succeed.
          </p>
          
          <p className="text-[#06202B] mb-8 font-semibold text-center">
            See our franchise social media management in action below:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#F5EEDD] rounded-lg overflow-hidden shadow-md">
              <Image 
                src="/franchise-case-study-1.jpg" 
                alt="MULTI-LOCATION ABA THERAPY CENTER" 
                width={600} 
                height={300} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-center font-bold text-[#06202B] mb-4">MULTI-LOCATION<br />ABA THERAPY CENTER</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#7AE2CF] p-3 rounded text-center">
                    <p className="font-bold text-lg text-[#06202B]">+668K</p>
                    <p className="text-sm text-[#06202B]">People Reached Through Social Media</p>
                  </div>
                  <div className="bg-[#7AE2CF] p-3 rounded text-center">
                    <p className="font-bold text-lg text-[#06202B]">+1,300%</p>
                    <p className="text-sm text-[#06202B]">Contact Form Submissions</p>
                  </div>
                </div>
                <p className="text-[#06202B] mb-3">
                  A leading ABA therapy center tapped Thrive to enhance its lead acquisition strategy for its 60 locations. By employing a combination of paid social media advertising, video production and pay-per-click (PPC) marketing, we <span className="font-bold">increased their website visits by 12,591 and leads by 20-fold</span>.
                </p>
              </div>
            </div>
            
            <div className="bg-[#F5EEDD] rounded-lg overflow-hidden shadow-md">
              <Image 
                src="/franchise-case-study-2.jpg" 
                alt="MULTI-LOCATION RESTORATION AND RECONSTRUCTION FIRM" 
                width={600} 
                height={300} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-center font-bold text-[#06202B] mb-4">MULTI-LOCATION RESTORATION<br />AND RECONSTRUCTION FIRM</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#7AE2CF] p-3 rounded text-center">
                    <p className="font-bold text-lg text-[#06202B]">+20M</p>
                    <p className="text-sm text-[#06202B]">Impressions</p>
                  </div>
                  <div className="bg-[#7AE2CF] p-3 rounded text-center">
                    <p className="font-bold text-lg text-[#06202B]">+4.3M</p>
                    <p className="text-sm text-[#06202B]">People Reached Through Social Media Ads</p>
                  </div>
                </div>
                <p className="text-[#06202B] mb-3">
                  This multiple-location restoration and reconstruction firm wanted to boost brand recognition, generate leads and increase traffic across 22 locations. After adopting Thrive's marketing franchise social media solutions, the company reached <span className="font-bold">60,187 total traffic</span> in October 2020.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-[#06202B] mb-8 max-w-3xl mx-auto">
              Join us to supercharge your business's growth efforts. With our top-tier social media management franchise services, you're not just staying in the game – <span className="font-bold">you're leading the ranks</span>.
            </p>
            <Button className="bg-[#077A7D] hover:bg-[#056568] text-white font-bold px-8 py-3 rounded-md">BE OUR NEXT SOCIAL SUCCESS STORY</Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#077A7D] to-[#06202B] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Elevate Your Franchise's Social Media Presence?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Let Markov's experts help you build consistency, engagement and recognition across all your franchise locations with a cohesive social media strategy.
          </p>
          <Button className="bg-[#7a46e4] hover:bg-[#6535c5] text-white font-bold px-8 py-4 text-lg">GET YOUR FREE PROPOSAL</Button>
        </div>
      </section>
    </div>
  )
} 