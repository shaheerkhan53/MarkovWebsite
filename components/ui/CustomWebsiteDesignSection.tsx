'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

const mainGraphic = "/custom3.png"
const caseStudyImg1 = "/retail.jpg"
const caseStudyImg2 = "/placeholder-business-site.jpg"
const caseStudyImg3 = "/placeholder-portfolio-site.jpg"

const caseStudies = [
    {
        imageSrc: caseStudyImg1,
        imageAlt: "E-commerce website design",
        title: "Luxury Fashion Retailer",
        category: "E-commerce Website",
        stats: [
            { value: "+187%", label: "Conversion Rate" },
            { value: "+95%", label: "Time on Site" },
        ],
    },
    {
        imageSrc: caseStudyImg2,
        imageAlt: "Corporate business website",
        title: "Financial Services Firm",
        category: "Professional Services Website",
        stats: [
            { value: "+312%", label: "Lead Generation" },
            { value: "+64%", label: "Mobile Engagement" },
        ],
    },
    {
        imageSrc: caseStudyImg3,
        imageAlt: "Creative portfolio website",
        title: "Design Agency Portfolio",
        category: "Creative Showcase Website",
        stats: [
            { value: "+205%", label: "Client Inquiries" },
            { value: "+78%", label: "Page Views" },
        ],
    },
]

// Portfolio projects for the showcase
const portfolioProjects = [
    {
        title: "Modern E-commerce Platform",
        description: "Fully responsive online store with advanced product filtering and secure checkout",
        image: "/custom2.jpg",
        tags: ["E-commerce", "React", "Shopify"],
    },
    {
        title: "Corporate Finance Website",
        description: "Professional website with custom dashboards and client portal integration",
        image: "/finance.jpg",
        tags: ["Finance", "Corporate", "Dashboard"],
    },
    {
        title: "Creative Agency Portfolio",
        description: "Visually stunning portfolio with interactive elements and case study showcase",
        image: "/agency.png",
        tags: ["Portfolio", "Creative", "Animation"],
    },
    {
        title: "Healthcare Provider Platform",
        description: "Accessible website with appointment scheduling and patient resources",
        image: "/healthCare.jpg",
        tags: ["Healthcare", "Appointments", "ADA Compliant"],
    },
]

// Testimonials data
const testimonials = [
    {
        quote: "The custom website Markov designed for us completely transformed our online presence. Our conversion rates have increased dramatically and we've received countless compliments on the design.",
        author: "Sarah Johnson",
        position: "Marketing Director, TechVision Inc.",
        image: "/placeholder-headshot1.jpg",
    },
    {
        quote: "We needed a website that would reflect our premium brand and create a seamless experience for our customers. The team delivered beyond our expectations and provided ongoing support.",
        author: "Michael Chen",
        position: "CEO, Luxury Brands Collective",
        image: "/placeholder-headshot2.jpg",
    },
    {
        quote: "From start to finish, the process was professional and collaborative. They truly understood our vision and translated it into a beautiful, functional website that drives results.",
        author: "Emma Rodriguez",
        position: "Founder, Creative Studios",
        image: "/placeholder-headshot3.jpg",
    },
]

export default function CustomWebsiteDesignSection() {
    const router = useRouter();
    
    // Function to navigate to contact page with specific parameters
    const navigateToContact = (serviceType: string = 'custom') => {
        router.push(`/contact?type=website-design&service=${serviceType}`);
    };
    
    return (
        <section className="py-16 md:py-24 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">
                        How Custom Website Design Transforms Your Online Presence
                    </h2>
                    <p className="text-xl text-indigo-600 mb-6">
                        Stand Out from Competitors with a Tailored Web Experience that Converts Visitors into Customers
                    </p>
                    <div className="w-32 h-1 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                </div>

                {/* Graphic + Text */}
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20 md:mb-28">
                    {/* Left: Graphic */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur opacity-30"></div>
                            <div className="relative bg-white p-4 rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src={mainGraphic}
                                    alt="Custom website design graphic showing responsive layouts"
                                    width={600}
                                    height={450}
                                    className="max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Description */}
                    <div className="w-full md:w-1/2 text-gray-700 space-y-5 text-base md:text-lg leading-relaxed">
                        <p className="text-indigo-800 font-medium text-xl">
                            Your website is often the first impression potential customers have of your business.
                            A custom-designed website ensures that impression is memorable and impactful...
                        </p>
                        <p>
                            Unlike template-based solutions, custom website design allows for complete flexibility
                            in functionality, appearance, and user experience tailored specifically to your brand...
                        </p>
                        <p>
                            Since 2005, our web design team has created{" "}
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800 font-medium underline decoration-2 decoration-purple-300 underline-offset-2"
                            >
                                award-winning websites
                            </a>{" "}
                            for businesses across industries. Our custom designs are built to:
                        </p>
                        <ul className="space-y-3 pl-5">
                            {[
                                "Attract and engage your ideal customers",
                                "Optimize for conversions and lead generation",
                                "Provide seamless user experience across all devices",
                                "Support your business growth with scalable architecture"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full mr-3 flex-shrink-0">
                                        <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* NEW SECTION: Why Custom Design Matters */}
                <div className="mb-20 md:mb-28">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Custom Website Design Matters</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            In today's competitive digital landscape, a templated website isn't enough to stand out from the crowd. Here's why custom design makes a difference:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "💎",
                                title: "Unique Brand Identity",
                                description: "Custom design ensures your website perfectly represents your brand with unique visuals, colors, and interactions that reflect your company values."
                            },
                            {
                                icon: "🔍",
                                title: "Optimized for Conversion",
                                description: "Every element is strategically designed around your specific business goals and customer journey to maximize conversions."
                            },
                            {
                                icon: "📱",
                                title: "Responsive Across Devices",
                                description: "Custom websites are meticulously crafted to provide perfect experiences on all devices - from desktop to mobile and tablets."
                            },
                            {
                                icon: "⚡",
                                title: "Peak Performance",
                                description: "Clean, efficient code ensures faster loading times, better user experience, and improved search engine rankings."
                            },
                            {
                                icon: "🔒",
                                title: "Advanced Security",
                                description: "Custom websites include robust security features tailored to your specific needs and industry requirements."
                            },
                            {
                                icon: "📈",
                                title: "Scalable Architecture",
                                description: "Your website is built to grow with your business, easily adapting to new products, services, or market changes."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-lg shadow-md border border-indigo-50 hover:shadow-lg transition-shadow duration-300">
                                <div className="text-3xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Case Studies with enhanced design */}
                <div className="mb-20 md:mb-28">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
                        Successful Website Transformations
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {caseStudies.map((study, idx) => (
                            <div
                                key={idx}
                                className="rounded-xl overflow-hidden shadow-lg flex flex-col bg-white border border-indigo-100 hover:shadow-xl transition-shadow duration-300 group"
                            >
                                {/* Image */}
                                <div className="relative w-full h-52 overflow-hidden">
                                    <Image
                                        src="/custom2.jpg"
                                        alt={study.imageAlt}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="transition-transform duration-700 group-hover:scale-110"
                                    />
                                      <Image
                                        src="/custom.jpg"
                                        alt={study.imageAlt}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Title & Category */}
                                <div className="p-5 bg-gradient-to-r from-indigo-50 to-purple-50">
                                    <h3 className="font-bold text-gray-800 text-lg">{study.title}</h3>
                                    <p className="text-indigo-600 text-sm">{study.category}</p>
                                </div>

                                {/* Stats */}
                                <div className="flex justify-around items-center p-5 mt-auto bg-white">
                                    {study.stats.map((stat, sidx) => (
                                        <div
                                            key={sidx}
                                            className={`text-center px-4 ${sidx < study.stats.length - 1 ? 'border-r border-indigo-100' : ''
                                                }`}
                                        >
                                            <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                                                {stat.value}
                                            </p>
                                            <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* NEW SECTION: Portfolio Showcase */}
                <div className="mb-20 md:mb-28">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Website Design Portfolio</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Browse some of our recent website design projects that have helped businesses succeed online
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {portfolioProjects.map((project, idx) => (
                            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg">
                                {/* Image */}
                                <div className="relative w-full h-80 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/60 to-indigo-900/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-white/90 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, tidx) => (
                                                <span key={tidx} className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <button 
                            className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                            onClick={() => navigateToContact('portfolio')}
                        >
                            View full portfolio
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Our Process Section with enhanced design */}
                <div className="mb-20 md:mb-28 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 py-12 px-4 sm:px-8 rounded-2xl">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10 text-center">
                        Our Custom Website Design <span className="text-indigo-700">Process</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "1",
                                title: "Discovery",
                                description: "We learn about your business goals, target audience, and brand identity through collaborative workshops and research."
                            },
                            {
                                step: "2",
                                title: "Strategy & Wireframing",
                                description: "Creating the blueprint for your site's structure and user experience with detailed wireframes and user flow diagrams."
                            },
                            {
                                step: "3",
                                title: "Design & Development",
                                description: "Building your custom site with engaging visuals and robust functionality while ensuring optimal performance."
                            },
                            {
                                step: "4",
                                title: "Launch & Optimization",
                                description: "Comprehensive testing, seamless launch, and ongoing optimization to ensure continued growth and success."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-300"></div>
                                <div className="relative bg-white p-6 rounded-lg shadow-sm border border-indigo-100 h-full transition-transform duration-300 group-hover:-translate-y-1">
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold text-xl mb-4">
                                        {item.step}
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* NEW SECTION: Technologies We Use */}
                <div className="mb-20 md:mb-28">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Technologies We Utilize</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We leverage the latest technologies and frameworks to build websites that are fast, secure, and scalable
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: "React", icon: "⚛️" },
                            { name: "Next.js", icon: "▲" },
                            { name: "WordPress", icon: "📝" },
                            { name: "Shopify", icon: "🛒" },
                            { name: "TailwindCSS", icon: "🎨" },
                            { name: "Node.js", icon: "🟢" },
                            { name: "Supabase", icon: "🍃" },
                            { name: "AWS", icon: "☁️" }
                        ].map((tech, idx) => (
                            <div key={idx} className="bg-white rounded-lg border border-indigo-100 p-6 text-center hover:shadow-md transition-shadow duration-300">
                                <div className="text-4xl mb-3">{tech.icon}</div>
                                <h3 className="font-semibold text-gray-800">{tech.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* NEW SECTION: Testimonials */}
                <div className="mb-20 md:mb-28">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Don't just take our word for it — hear from businesses that have transformed their online presence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-8 shadow-md border border-indigo-50 relative">
                                {/* Quote mark */}
                                <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                    <span className="text-indigo-600 text-xl font-serif">"</span>
                                </div>

                                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>

                                <div className="flex items-center">
                                    <div className="h-12 w-12 rounded-full bg-indigo-100 overflow-hidden mr-4">
                                        {/* We'll use a placeholder color instead of image for simplicity */}
                                        <div className="h-full w-full bg-gradient-to-br from-indigo-400 to-purple-500"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* NEW SECTION: FAQ */}
                <div className="mb-20 md:mb-28">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Get answers to common questions about our custom website design services
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {[
                            {
                                question: "How long does it take to develop a custom website?",
                                answer: "The timeline for a custom website varies based on complexity, but typically ranges from 6-12 weeks. E-commerce sites or projects with complex functionality may take longer. We'll provide a detailed timeline during our initial consultation."
                            },
                            {
                                question: "What is the investment for a custom website?",
                                answer: "Custom website design pricing depends on your specific requirements, features, and complexity. Our projects typically start at $5,000 for basic business websites and increase based on e-commerce functionality, custom integrations, and other specialized features."
                            },
                            {
                                question: "Will my website be mobile-friendly?",
                                answer: "Absolutely! All our custom websites are built with responsive design principles, ensuring they look and function perfectly on all devices including desktops, tablets, and smartphones."
                            },
                            {
                                question: "Do you provide website maintenance after launch?",
                                answer: "Yes, we offer ongoing maintenance packages to keep your website secure, updated, and performing optimally. This includes regular updates, security monitoring, performance optimization, and technical support."
                            },
                            {
                                question: "Can you integrate third-party tools and services?",
                                answer: "Definitely. We can integrate virtually any third-party tool or service into your custom website, including CRM systems, payment gateways, marketing automation tools, booking systems, and more."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-lg border border-indigo-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <details className="group">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                                        <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                                        <span className="h-5 w-5 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 group-open:rotate-180 transition-transform duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="px-6 pb-6 pt-2 text-gray-600">
                                        <p>{faq.answer}</p>
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Concluding Text */}
                <div className="text-center max-w-4xl mx-auto text-gray-700 mb-12">
                    <p className="text-lg">
                        We believe that exceptional website design combines aesthetic appeal with functional excellence.
                        Our team creates websites that not only look stunning but also drive measurable business results.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button
                        type="button"
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                        onClick={() => navigateToContact('project')}
                    >
                        START YOUR PROJECT
                    </button>
                </div>
            </div>
        </section>
    )
} 