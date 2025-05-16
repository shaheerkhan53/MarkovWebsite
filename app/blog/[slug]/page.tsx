"use client"

import React from 'react';
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronLeft, Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample blog data - this would typically come from an API or CMS
const BLOG_POSTS = [
  {
    id: "1",
    title: "The Future of Business Process Outsourcing in 2024",
    excerpt: "Discover how AI, automation, and hybrid work models are transforming BPO services and creating new opportunities for businesses worldwide.",
    content: `
      <p>Business Process Outsourcing (BPO) continues to evolve rapidly as new technologies and work models reshape the industry. In 2024, several key trends are driving this transformation:</p>
      
      <h2>Artificial Intelligence Integration</h2>
      <p>AI is no longer just a buzzword in BPO—it's becoming a core component of service delivery. From intelligent chatbots handling first-line customer inquiries to AI-powered analytics providing deeper customer insights, artificial intelligence is enhancing both efficiency and service quality.</p>
      <p>Companies that integrate AI strategically are seeing significant improvements in:</p>
      <ul>
        <li>Response times and resolution rates</li>
        <li>Accuracy of data processing</li>
        <li>Predictive customer service capabilities</li>
        <li>Cost reduction while maintaining service quality</li>
      </ul>
      
      <h2>Automation of Routine Processes</h2>
      <p>Robotic Process Automation (RPA) continues to advance, taking over repetitive, rule-based tasks across various BPO functions. This shift allows human agents to focus on more complex, high-value activities that require emotional intelligence and critical thinking.</p>
      
      <h2>Hybrid Work Models</h2>
      <p>The pandemic-accelerated move to remote work has evolved into sophisticated hybrid models. BPO providers now offer flexible arrangements that combine:</p>
      <ul>
        <li>On-site teams for specialized functions</li>
        <li>Remote workers for many operational roles</li>
        <li>Geographically distributed teams across multiple time zones</li>
      </ul>
      <p>This approach provides resilience, enables 24/7 service delivery, and allows access to global talent pools.</p>
      
      <h2>Enhanced Data Security</h2>
      <p>As data breaches become more common and costly, BPO providers are implementing robust security frameworks that include:</p>
      <ul>
        <li>End-to-end encryption</li>
        <li>Zero-trust architecture</li>
        <li>Regular security audits and penetration testing</li>
        <li>Comprehensive employee training on security protocols</li>
      </ul>
      
      <h2>Outcome-Based Partnerships</h2>
      <p>The BPO industry is moving away from traditional time-and-materials contracts toward outcome-based models. These arrangements align provider incentives with client business goals, focusing on measurable results rather than just service delivery.</p>
      
      <h2>The Path Forward</h2>
      <p>For businesses considering BPO services in 2024, the key is finding partners who combine technological sophistication with human expertise. The most successful BPO relationships will leverage automation and AI while maintaining the human touch that complex customer interactions require.</p>
      
      <p>As we move through 2024, expect to see continued innovation in how BPO services are delivered, measured, and integrated into overall business strategies.</p>
    `,
    imageUrl: "/placeholder.svg?height=720&width=1280&text=BPO+Trends",
    category: "BPO",
    author: "Sarah Johnson",
    authorRole: "CEO",
    authorImage: "/placeholder.svg?height=100&width=100&text=SJ",
    date: "May 12, 2024",
    readTime: "8 min read",
    featured: true,
    tags: ["BPO", "Automation", "AI", "Business Strategy"]
  },
  {
    id: "2",
    title: "5 Ways Cloud Migration Enhances IT Infrastructure Resilience",
    excerpt: "Learn how migrating to cloud infrastructure can improve security, scalability, and disaster recovery capabilities for modern enterprises.",
    content: `
      <p>Cloud migration has moved beyond being a trendy IT initiative to become a fundamental strategy for businesses seeking greater infrastructure resilience. Here are five key ways that moving to the cloud strengthens your organization's technical foundation:</p>
      
      <h2>1. Distributed Architecture Reduces Single Points of Failure</h2>
      <p>Traditional on-premises infrastructure often suffers from geographical concentration risk—if your data center experiences an outage, your entire business may be affected. Cloud providers like AWS, Azure, and Google Cloud operate multiple geographically distributed data centers, allowing your applications and data to be replicated across regions.</p>
      <p>This distributed approach means that regional disasters, power outages, or hardware failures are far less likely to impact your operations. With proper implementation of availability zones and region-based deployment, you can achieve uptime percentages that would be prohibitively expensive with traditional infrastructure.</p>
      
      <h2>2. Automated Scaling Handles Demand Fluctuations</h2>
      <p>One of the most significant vulnerabilities in traditional IT infrastructure is capacity planning. Underestimate your needs, and your systems crash during peak demand. Overestimate, and you're paying for idle resources.</p>
      <p>Cloud platforms excel at automated scaling, adjusting your resource allocation based on actual demand patterns. This capability means:</p>
      <ul>
        <li>Your applications remain responsive during unexpected traffic spikes</li>
        <li>You only pay for the computing resources you actually use</li>
        <li>Capacity planning becomes more about defining scaling policies than purchasing hardware</li>
      </ul>
      
      <h2>3. Enhanced Security Through Standardization and Expertise</h2>
      <p>Major cloud providers invest billions in security infrastructure and employ thousands of security experts—resources that few individual organizations can match. By migrating to the cloud, you leverage this expertise and benefit from:</p>
      <ul>
        <li>Continuously updated security patches and protocols</li>
        <li>Advanced threat detection systems</li>
        <li>Physical security measures at data centers</li>
        <li>Compliance with major security frameworks and certifications</li>
      </ul>
      
      <h2>4. Improved Disaster Recovery Capabilities</h2>
      <p>Cloud platforms make comprehensive disaster recovery plans more accessible and affordable. With cloud-based DR solutions, you can:</p>
      <ul>
        <li>Maintain up-to-date backups with minimal performance impact</li>
        <li>Test recovery procedures regularly without disrupting production systems</li>
        <li>Achieve recovery time objectives (RTOs) and recovery point objectives (RPOs) measured in minutes rather than hours or days</li>
        <li>Implement "infrastructure as code" approaches that can rebuild entire environments quickly</li>
      </ul>
      
      <h2>5. Continuous Innovation Through Managed Services</h2>
      <p>Perhaps the most overlooked resilience benefit of cloud migration is access to constantly evolving managed services. Rather than maintaining your own database servers, message queues, or machine learning infrastructure, you can use purpose-built cloud services that are:</p>
      <ul>
        <li>Continuously improved by the provider</li>
        <li>Designed for high availability from the ground up</li>
        <li>Able to be integrated with minimal development effort</li>
        <li>Scaled independently based on your specific needs</li>
      </ul>
      
      <h2>The Migration Journey</h2>
      <p>While these benefits are compelling, achieving them requires careful planning. A successful cloud migration strategy should include:</p>
      <ul>
        <li>Thorough assessment of current applications and their dependencies</li>
        <li>Clear prioritization of which systems to migrate first</li>
        <li>Adoption of cloud-native design principles where appropriate</li>
        <li>Comprehensive testing of disaster recovery procedures</li>
        <li>Ongoing optimization of cloud resources and costs</li>
      </ul>
      
      <p>By approaching cloud migration with resilience as a primary goal, organizations can build infrastructure that not only withstands challenges but enables faster recovery and adaptation when incidents do occur.</p>
    `,
    imageUrl: "/placeholder.svg?height=720&width=1280&text=Cloud+Migration",
    category: "IT Solutions",
    author: "Michael Zhang",
    authorRole: "CTO",
    authorImage: "/placeholder.svg?height=100&width=100&text=MZ",
    date: "May 5, 2024",
    readTime: "6 min read",
    featured: true,
    tags: ["Cloud Computing", "IT Infrastructure", "Digital Transformation"]
  }
  // Additional blog posts would be defined here
];

// Get related posts based on category or tags
function getRelatedPosts(currentPost: any) {
  // Filter posts that share the same category or at least one tag, but exclude the current post
  return BLOG_POSTS.filter(post => 
    post.id !== currentPost.id && 
    (post.category === currentPost.category || 
     post.tags.some(tag => currentPost.tags.includes(tag)))
  ).slice(0, 2); // Limit to 2 related posts
}

// Using 'any' for params as a diagnostic step
export default function BlogPostPage({ params }: { params: any }) {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  
  // Find the blog post with the matching ID
  const post = BLOG_POSTS.find(post => post.id === params.slug)
  
  // If no matching post is found, return 404
  if (!post) {
    notFound()
  }
  
  // Get related posts
  const relatedPosts = getRelatedPosts(post)
  
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-800 to-teal-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link href="/blog" className="inline-flex items-center text-blue-100 hover:text-white transition-colors">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back to all articles
                </Link>
              </div>
              <Badge className="bg-blue-600 hover:bg-blue-700 mb-4">{post.category}</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
              <div className="flex flex-wrap items-center text-blue-100 gap-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>By {post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                  <div className="relative h-[400px] w-full">
                    <Image 
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center mb-8">
                      <div className="relative w-12 h-12 mr-4 overflow-hidden rounded-full">
                        <Image 
                          src={post.authorImage}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{post.author}</p>
                        <p className="text-sm text-gray-500">{post.authorRole}</p>
                      </div>
                    </div>
                    
                    <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-gray-700">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-700">Share this article:</p>
                        <div className="flex space-x-2">
                          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-100 transition-colors">
                            <Facebook className="w-4 h-4 text-gray-700" />
                          </button>
                          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-100 transition-colors">
                            <Twitter className="w-4 h-4 text-gray-700" />
                          </button>
                          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-100 transition-colors">
                            <Linkedin className="w-4 h-4 text-gray-700" />
                          </button>
                          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-100 transition-colors">
                            <Share2 className="w-4 h-4 text-gray-700" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8 sticky top-24">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Related Articles</h3>
                  {relatedPosts.length > 0 ? (
                    <div className="space-y-6">
                      {relatedPosts.map(relatedPost => (
                        <div key={relatedPost.id} className="group">
                          <div className="relative h-40 mb-3 overflow-hidden rounded-lg">
                            <Image 
                              src={relatedPost.imageUrl}
                              alt={relatedPost.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute top-2 left-2">
                              <Badge className="bg-blue-600 hover:bg-blue-700 text-xs">{relatedPost.category}</Badge>
                            </div>
                          </div>
                          <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors mb-1">
                            <Link href={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                          </h4>
                          <div className="flex items-center text-gray-500 text-xs">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>{relatedPost.date}</span>
                            <span className="mx-2">•</span>
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">No related articles found.</p>
                  )}
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link href="/blog" className="block">
                      <Button variant="outline" className="w-full">
                        View All Articles
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(BLOG_POSTS.flatMap(p => p.tags))).map(tag => (
                      <Link key={tag} href={`/blog?tag=${tag}`}>
                        <Badge variant="outline" className="hover:bg-gray-100 cursor-pointer">
                          {tag}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Enjoy this article?</h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter to receive the latest insights and industry trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input 
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 flex-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 