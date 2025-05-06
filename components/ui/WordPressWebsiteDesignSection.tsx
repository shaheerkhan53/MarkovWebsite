'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

const mainGraphic = "/wordpress-main.png"
const caseStudyImg1 = "/wordpress-retail.jpg"
const caseStudyImg2 = "/photography.jpg"
const caseStudyImg3 = "/wordpress-portfolio.jpg"

const caseStudies = [
  {
    imageSrc: caseStudyImg1,
    imageAlt: "WordPress e-commerce website",
    title: "Premium Fashion Store",
    category: "WooCommerce Website",
    stats: [
      { value: "+143%", label: "Online Sales" },
      { value: "+78%", label: "Organic Traffic" },
    ],
  },
  {
    imageSrc: caseStudyImg2,
    imageAlt: "WordPress business website",
    title: "Corporate Consultancy",
    category: "Business WordPress Website",
    stats: [
      { value: "+205%", label: "Lead Generation" },
      { value: "+89%", label: "User Engagement" },
    ],
  },
  {
    imageSrc: caseStudyImg3,
    imageAlt: "WordPress portfolio website",
    title: "Creative Photography Studio",
    category: "Portfolio WordPress Website",
    stats: [
      { value: "+156%", label: "Client Inquiries" },
      { value: "+92%", label: "Return Visitors" },
    ],
  },
]

// Portfolio projects for the showcase
const portfolioProjects = [
  {
    title: "WooCommerce Online Store",
    description: "Feature-rich e-commerce store with custom product layouts and seamless checkout",
    image: "/woocommerce.jpg",
    tags: ["WooCommerce", "E-commerce", "Elementor"],
  },
  {
    title: "Corporate Blog & Resource Hub",
    description: "Content-focused website with advanced categorization and member-only resources",
    image: "/blog.jpg",
    tags: ["Business", "Blog", "Membership"],
  },
  {
    title: "Portfolio & Gallery Website",
    description: "Visual showcase with advanced filtering and project presentations",
    image: "/gallery.jpg",
    tags: ["Portfolio", "Gallery", "Creative"],
  },
  {
    title: "WordPress Membership Platform",
    description: "Subscription-based content platform with tiered access and secure payment processing",
    image: "/membership.jpg",
    tags: ["Membership", "LMS", "Subscriptions"],
  },
]

// Testimonials data
const testimonials = [
  {
    quote: "Switching to WordPress was the best decision for our business. The team delivered a website that's both beautiful and incredibly easy for our staff to manage and update.",
    author: "David Wilson",
    position: "Operations Director, Global Solutions Inc.",
    image: "/testimonial1.jpg",
  },
  {
    quote: "Our WordPress website has transformed how we connect with customers. The integrated blog and e-commerce functionality work seamlessly together, driving significant growth.",
    author: "Rebecca Taylor",
    position: "Marketing Manager, StyleHouse Boutique",
    image: "/testimonial2.jpg",
  },
  {
    quote: "The WordPress website is exactly what we needed - professional, fast, and so easy to update. We've received countless compliments on the design and functionality.",
    author: "James Peterson",
    position: "Owner, Peterson Photography",
    image: "/testimonial3.jpg",
  },
]

export default function WordPressWebsiteDesignSection() {
  const router = useRouter();
  
  // Function to navigate to contact page with specific parameters
  const navigateToContact = (serviceType: string = 'wordpress') => {
    router.push(`/contact?type=website-design&service=${serviceType}`);
  };
  
  return (
    <section className="py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
            WordPress Website Design That Powers Your Business
          </h2>
          <p className="text-xl text-blue-600 mb-6">
            Harness the World's Most Popular CMS for a Flexible, Scalable and Easy-to-Manage Website
          </p>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
        </div>

        {/* Graphic + Text */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20 md:mb-28">
          {/* Left: Graphic */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-30"></div>
              <div className="relative bg-white p-4 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/wordpress.jpg"
                  alt="WordPress website design graphic showing responsive layouts"
                  width={600}
                  height={450}
                  className="max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="w-full md:w-1/2 text-gray-700 space-y-5 text-base md:text-lg leading-relaxed">
            <p className="text-blue-800 font-medium text-xl">
              WordPress powers over 40% of all websites on the internet, providing unmatched flexibility, security, and ease of use.
            </p>
            <p>
              Our WordPress design services combine stunning visuals with powerful functionality, creating websites that are both beautiful and incredibly easy to manage. With WordPress, you're in control of your content.
            </p>
            <p>
              Since 2005, we've built hundreds of successful WordPress websites for businesses across industries. Our WordPress sites are designed to:
            </p>
            <ul className="space-y-3 pl-5">
              {[
                "Scale effortlessly as your business grows",
                "Integrate seamlessly with your marketing tools and CRM",
                "Provide robust security and regular updates",
                "Offer easy content management for your team"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full mr-3 flex-shrink-0">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* NEW SECTION: WordPress Advantages */}
        <div className="mb-20 md:mb-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose WordPress for Your Website</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              WordPress offers unparalleled advantages for businesses of all sizes - here's why it might be the perfect solution for you:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔄",
                title: "Easy Content Updates",
                description: "Update your website content without technical knowledge. WordPress makes it simple to add pages, blog posts, and media."
              },
              {
                icon: "🔌",
                title: "Extensive Plugin Ecosystem",
                description: "Access thousands of plugins to add any functionality you need - from contact forms to e-commerce and memberships."
              },
              {
                icon: "🎨",
                title: "Flexible Design Options",
                description: "Choose from countless themes or create a fully custom design that perfectly represents your brand."
              },
              {
                icon: "📱",
                title: "Mobile-Optimized",
                description: "All our WordPress sites are fully responsive, ensuring a perfect experience across all devices and screen sizes."
              },
              {
                icon: "🔍",
                title: "SEO-Friendly Structure",
                description: "WordPress is built with clean code and includes features that help search engines index your site effectively."
              },
              {
                icon: "💰",
                title: "Cost-Effective Solution",
                description: "Get a professional website at a fraction of the cost of custom development while maintaining complete flexibility."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md border border-blue-50 hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-20 md:mb-28">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
            Successful WordPress Implementations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden shadow-lg flex flex-col bg-white border border-blue-100 hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Image */}
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src="/spot.jpg"
                    alt={study.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Title & Category */}
                <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50">
                  <h3 className="font-bold text-gray-800 text-lg">{study.title}</h3>
                  <p className="text-blue-600 text-sm">{study.category}</p>
                </div>

                {/* Stats */}
                <div className="flex justify-around items-center p-5 mt-auto bg-white">
                  {study.stats.map((stat, sidx) => (
                    <div
                      key={sidx}
                      className={`text-center px-4 ${
                        sidx < study.stats.length - 1 ? 'border-r border-blue-100' : ''
                      }`}
                    >
                      <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
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

        {/* Portfolio Showcase */}
        <div className="mb-20 md:mb-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our WordPress Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse recent WordPress websites we've designed that drive real business results
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
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/60 to-blue-900/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
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
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors"
              onClick={() => navigateToContact('portfolio')}
            >
              View full portfolio
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* WordPress Process Section */}
        <div className="mb-20 md:mb-28 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 py-12 px-4 sm:px-8 rounded-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10 text-center">
            Our WordPress Development <span className="text-blue-700">Process</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Planning & Strategy",
                description: "We analyze your business goals, target audience, and content requirements to create the perfect WordPress site plan."
              },
              {
                step: "2",
                title: "Design & Prototyping",
                description: "Creating beautiful mockups and interactive prototypes that capture your brand and provide excellent user experience."
              },
              {
                step: "3",
                title: "Development & Integration",
                description: "Building your WordPress site with clean code, essential plugins, and all necessary functionality and integrations."
              },
              {
                step: "4",
                title: "Launch & Training",
                description: "Comprehensive testing, seamless deployment, and thorough training so you can manage your WordPress site with confidence."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-sm border border-blue-100 h-full transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WordPress Features Section */}
        <div className="mb-20 md:mb-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">WordPress Features We Implement</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our WordPress websites come packed with powerful features to enhance your online presence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "WooCommerce", icon: "🛒" },
              { name: "Blog System", icon: "📝" },
              { name: "SEO Optimization", icon: "🔍" },
              { name: "Contact Forms", icon: "📋" },
              { name: "Membership Areas", icon: "🔐" },
              { name: "Media Galleries", icon: "🖼️" },
              { name: "Social Integration", icon: "📱" },
              { name: "Analytics", icon: "📊" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-blue-100 p-6 text-center hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-gray-800">{feature.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20 md:mb-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our WordPress Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from businesses who chose WordPress for their websites
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-md border border-blue-50 relative">
                {/* Quote mark */}
                <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-xl font-serif">"</span>
                </div>
                
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 overflow-hidden mr-4">
                    {/* We'll use a placeholder color instead of image for simplicity */}
                    <div className="h-full w-full bg-gradient-to-br from-blue-400 to-indigo-500"></div>
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

        {/* FAQ */}
        <div className="mb-20 md:mb-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">WordPress Website FAQ</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about WordPress website development
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Is WordPress secure for business websites?",
                answer: "Absolutely. WordPress is used by major companies worldwide and can be highly secure when properly maintained. We implement security best practices including regular updates, security plugins, and proper server configuration to ensure your WordPress site remains secure."
              },
              {
                question: "Can I update my WordPress website myself?",
                answer: "Yes! One of the biggest benefits of WordPress is how user-friendly it is. We provide training so you can easily update content, add blog posts, and make basic changes. For more complex updates, we offer ongoing support and maintenance packages."
              },
              {
                question: "How much does a WordPress website cost?",
                answer: "WordPress website costs vary based on complexity, features, and customization. Basic WordPress sites start around $3,000, while more complex e-commerce or membership sites range from $5,000 to $15,000+. We'll provide a detailed quote based on your specific requirements."
              },
              {
                question: "How long does it take to build a WordPress website?",
                answer: "The timeline for a WordPress website typically ranges from 4-8 weeks, depending on complexity. Simple informational sites can be completed faster, while e-commerce or membership sites with extensive customization may take longer."
              },
              {
                question: "Will my WordPress site work on mobile devices?",
                answer: "Yes, all our WordPress websites are fully responsive and mobile-optimized. They automatically adjust to provide an optimal viewing experience across all devices including desktops, tablets, and smartphones."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-blue-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <span className="h-5 w-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 group-open:rotate-180 transition-transform duration-300">
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
            WordPress offers the perfect balance of flexibility, power, and ease of use for your business website.
            Our team creates WordPress sites that deliver outstanding user experiences while giving you complete control over your content.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            type="button"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            onClick={() => navigateToContact('project')}
          >
            START YOUR WORDPRESS PROJECT
          </button>
        </div>
      </div>
    </section>
  )
} 