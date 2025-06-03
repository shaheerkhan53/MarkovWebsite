"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Briefcase, Building, Users, Heart, Coffee, Sparkles, LucideIcon, Medal, Award, GraduationCap, Clock, DollarSign, Globe, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  category: "technical" | "business" | "customer-service" | "marketing";
}

export default function CareersPage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>("all")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const jobOpenings: JobPosition[] = [
    {
      id: "job-1",
      title: "Senior Software Engineer",
      department: "IT Solutions",
      location: "Karachi, Pakistan (Hybrid)",
      type: "Full-time",
      description: "We're looking for an experienced Software Engineer to join our IT Solutions team to develop innovative applications for our clients.",
      responsibilities: [
        "Design and develop high-quality software solutions",
        "Collaborate with cross-functional teams to define and implement new features",
        "Write clean, maintainable code with comprehensive documentation",
        "Perform code reviews and mentor junior developers",
        "Troubleshoot, debug and upgrade existing systems"
      ],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "5+ years of experience in software development",
        "Proficient in JavaScript, TypeScript, and React",
        "Experience with Node.js and Express",
        "Strong understanding of software design patterns and principles"
      ],
      category: "technical"
    },
    {
      id: "job-2",
      title: "Call Center Team Lead",
      department: "Call Center Solutions",
      location: "Karachi, Pakistan (On-site)",
      type: "Full-time",
      description: "Join our Call Center team as a Team Lead to manage a group of representatives and ensure excellent customer service delivery.",
      responsibilities: [
        "Lead and manage a team of 10-15 call center representatives",
        "Monitor and evaluate team performance metrics",
        "Provide coaching and training to team members",
        "Handle escalated customer issues and complaints",
        "Collaborate with management to implement process improvements"
      ],
      requirements: [
        "Bachelor's degree in Business Administration or related field",
        "3+ years of call center experience with at least 1 year in a supervisory role",
        "Excellent communication and leadership skills",
        "Proficient in call center software and CRM systems",
        "Ability to work in a fast-paced environment and handle pressure"
      ],
      category: "customer-service"
    },
    {
      id: "job-3",
      title: "Digital Marketing Specialist",
      department: "Digital Marketing",
      location: "Remote",
      type: "Full-time",
      description: "We're seeking a Digital Marketing Specialist to develop and implement effective digital marketing strategies for our clients.",
      responsibilities: [
        "Create and manage digital marketing campaigns across various platforms",
        "Develop content for social media, email marketing, and blogs",
        "Analyze campaign performance and provide detailed reports",
        "Conduct keyword research and implement SEO strategies",
        "Stay updated on the latest digital marketing trends and best practices"
      ],
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "2+ years of experience in digital marketing",
        "Proficient in Google Analytics, Google Ads, and social media platforms",
        "Experience with SEO/SEM and content marketing",
        "Strong analytical and creative thinking skills"
      ],
      category: "marketing"
    },
    {
      id: "job-4",
      title: "Business Development Manager",
      department: "BPO Services",
      location: "Singapore (On-site)",
      type: "Full-time",
      description: "Join our team as a Business Development Manager to identify new business opportunities and build relationships with potential clients.",
      responsibilities: [
        "Identify and develop new business opportunities in the BPO sector",
        "Build and maintain relationships with prospects and existing clients",
        "Prepare and deliver compelling presentations and proposals",
        "Negotiate contracts and close deals",
        "Collaborate with delivery teams to ensure client satisfaction"
      ],
      requirements: [
        "Bachelor's degree in Business, Marketing, or related field",
        "5+ years of experience in business development or sales in the BPO industry",
        "Strong network and relationships within the industry",
        "Excellent negotiation and presentation skills",
        "Willingness to travel as needed"
      ],
      category: "business"
    },
    {
      id: "job-5",
      title: "Network Engineer",
      department: "Telecommunication",
      location: "Karachi, Pakistan (On-site)",
      type: "Full-time",
      description: "We're looking for a Network Engineer to design, implement, and maintain our telecommunication infrastructure.",
      responsibilities: [
        "Design and implement network infrastructure solutions",
        "Configure and install various network devices and services",
        "Monitor network performance and troubleshoot issues",
        "Ensure network security and implement disaster recovery protocols",
        "Document network configurations and processes"
      ],
      requirements: [
        "Bachelor's degree in Computer Science, IT, or related field",
        "3+ years of experience in network engineering",
        "CCNA/CCNP certification preferred",
        "Experience with LAN/WAN technologies, routers, switches, and firewalls",
        "Knowledge of cloud networking and security protocols"
      ],
      category: "technical"
    },
    {
      id: "job-6",
      title: "E-commerce Operations Manager",
      department: "E-commerce Management",
      location: "Remote",
      type: "Full-time",
      description: "Join our E-commerce team to manage and optimize the operations of our clients' online stores.",
      responsibilities: [
        "Oversee day-to-day operations of multiple e-commerce platforms",
        "Manage inventory, order fulfillment, and shipping processes",
        "Analyze sales data and implement strategies to improve performance",
        "Coordinate with marketing team for promotional activities",
        "Ensure compliance with e-commerce regulations and standards"
      ],
      requirements: [
        "Bachelor's degree in Business, Supply Chain, or related field",
        "4+ years of experience in e-commerce operations",
        "Proficient in e-commerce platforms like Shopify, WooCommerce, or Magento",
        "Strong analytical and problem-solving skills",
        "Experience with inventory management and logistics"
      ],
      category: "business"
    },
  ]

  const filteredJobs = activeCategory === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === activeCategory)

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "We offer industry-leading compensation packages that recognize your skills and experience."
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive medical, dental, and vision insurance for you and your family."
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work-life balance matters. Enjoy flexible scheduling and remote work options where possible."
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous learning through training programs, certifications, and educational assistance."
    },
    {
      icon: Coffee,
      title: "Work Environment",
      description: "Modern, comfortable offices with relaxation areas, free snacks, and beverages."
    },
    {
      icon: Globe,
      title: "International Exposure",
      description: "Opportunities to work with global clients and gain international business experience."
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Regular team activities, outings, and events to foster a strong collaborative culture."
    },
    {
      icon: Award,
      title: "Recognition Programs",
      description: "We celebrate achievements through various recognition and reward programs."
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16 md:py-24 text-center">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
                <p className="text-lg text-teal-100 mb-6 max-w-3xl mx-auto">
                  Discover exciting career opportunities at Markov International and be part of a dynamic, 
                  innovative team that's shaping the future of business solutions.
                </p>
                <Briefcase className="w-12 h-12 text-teal-300 mb-6 mx-auto" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Culture Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">Our Culture</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why People Love Working Here</h2>
              <p className="text-gray-600">
                At Markov International, we believe that our success is driven by our people. We foster a culture of innovation, 
                collaboration, and continuous growth where every team member can thrive and make an impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/collab.png"
                      alt="Team Collaboration"
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden mt-8">
                    <Image
                      src="/inovation.png"
                      alt="Office Environment"
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/recognation.png"
                      alt="Work Events"
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden mt-8">
                    <Image
                      src="/award.png"
                      alt="Learning Sessions"
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">Collaborative Environment</h3>
                      <p className="text-gray-600">We believe in the power of teamwork and create spaces where ideas flow freely and diverse perspectives are valued.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">Innovation at the Core</h3>
                      <p className="text-gray-600">We encourage creativity and innovation, providing the tools and freedom to experiment with new ideas and approaches.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">Continuous Learning</h3>
                      <p className="text-gray-600">We invest in our people's growth through training programs, mentorship opportunities, and access to learning resources.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <Medal className="w-6 h-6 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">Recognition & Growth</h3>
                      <p className="text-gray-600">We celebrate achievements and provide clear paths for career advancement based on merit and potential.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">Employee Benefits</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Offer</h2>
              <p className="text-gray-600">
                We provide a comprehensive benefits package designed to support your professional growth, 
                personal well-being, and work-life balance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full bg-white hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                        {<benefit.icon className="w-6 h-6 text-teal-700" />}
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">Current Openings</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Growing Team</h2>
              <p className="text-gray-600 mb-8">
                Explore our current job openings and find the perfect opportunity to grow your career with us.
              </p>
              
              <Tabs defaultValue="all" className="mb-8">
                <TabsList className="mx-auto mb-8">
                  <TabsTrigger value="all" onClick={() => setActiveCategory('all')}>All Positions</TabsTrigger>
                  <TabsTrigger value="technical" onClick={() => setActiveCategory('technical')}>Technical</TabsTrigger>
                  <TabsTrigger value="business" onClick={() => setActiveCategory('business')}>Business</TabsTrigger>
                  <TabsTrigger value="customer-service" onClick={() => setActiveCategory('customer-service')}>Customer Service</TabsTrigger>
                  <TabsTrigger value="marketing" onClick={() => setActiveCategory('marketing')}>Marketing</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {filteredJobs.length === 0 ? (
              <div className="text-center text-gray-600 py-12">
                <p>No job openings found in this category. Please check back soon or select another category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="hover:shadow-md transition-shadow overflow-hidden">
                      <CardHeader className="bg-gray-50 border-b border-gray-100">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <CardTitle className="text-xl text-gray-800">{job.title}</CardTitle>
                            <p className="text-gray-600 font-medium">{job.department}</p>
                          </div>
                          <div className="mt-2 md:mt-0 flex flex-wrap gap-2">
                            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs">{job.location}</span>
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">{job.type}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <p className="text-gray-600 mb-4">{job.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-1">
                            {job.responsibilities.map((responsibility, i) => (
                              <li key={i}>{responsibility}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-1">
                            {job.requirements.map((requirement, i) => (
                              <li key={i}>{requirement}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-gray-50 border-t border-gray-100">
                        <Button className="bg-teal-600 hover:bg-teal-700">
                          Apply Now
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Application Process Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">How To Apply</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Hiring Process</h2>
              <p className="text-gray-600">
                We've designed a straightforward hiring process that helps us identify the best talent while 
                giving you the opportunity to learn more about us.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {[
                {
                  step: 1,
                  title: "Application Submission",
                  description: "Submit your application through our careers portal. Make sure your resume is up-to-date and includes relevant experience and skills."
                },
                {
                  step: 2,
                  title: "Initial Screening",
                  description: "Our recruitment team reviews all applications and shortlists candidates whose qualifications match the job requirements."
                },
                {
                  step: 3,
                  title: "Technical/Skills Assessment",
                  description: "Depending on the role, you may be asked to complete a technical assessment, case study, or skills test to evaluate your expertise."
                },
                {
                  step: 4,
                  title: "Interview Rounds",
                  description: "Participate in a series of interviews with the hiring manager, team members, and potentially senior leadership to assess your fit for the role and our culture."
                },
                {
                  step: 5,
                  title: "Offer & Onboarding",
                  description: "Successful candidates receive a job offer. Upon acceptance, our HR team will guide you through the onboarding process to help you settle into your new role."
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex mb-12 last:mb-0"
                >
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                    {index < 4 && (
                      <div className="w-0.5 h-12 bg-teal-600 mx-auto mt-4"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take the Next Step?</h2>
              <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
                Whether you see a role that matches your skills or want to be considered for future opportunities, 
                we'd love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white hover:bg-gray-100 text-teal-800 border-none">
                  View All Job Openings
                </Button>
                <Button className="border-white bg-white text-[#10766E] hover:bg-[#10766E] hover:text-white hover:bg-white/10 border">
                  Submit Your Resume
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
} 