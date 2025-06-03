"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import ContactButton from "./ui/Contactbutton"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDesktopMenu(null);
      }
    }
    if (activeDesktopMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDesktopMenu]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDesktopMenu(null);
    setActiveDropdown(null);
  };

  const servicesMegaMenu = [
    {
      title: "Content Marketing",
      icon: <span className="text-amber-600 text-xl">📝</span>,
      items: [
        { label: "SEO Content Writing", href: "/services/content-writing/seo-content-writing" },
        { label: "Copywriting Services", href: "/services/content-writing/copywriting-services" },
        { label: "Email Marketing Services", href: "/services/content-writing/email-marketing-services" },
      ]
    },
    {
      title: "CRO Services",
      icon: <span className="text-green-600 text-xl">📊</span>,
      items: [
        { label: "CRO Audits", href: "/services/cro-services/cro-audits" },
        { label: "User Experience Testing", href: "/services/cro-services/user-experience-testing" },
        { label: "User Behavior Analytics", href: "/services/cro-services/user-behavior-analytics" },
      ]
    },
    {
      title: "Digital Marketing",
      icon: <span className="text-blue-600 text-xl">▶</span>,
      items: [
        { label: "Digital Marketing Strategy Development", href: "/services/digital-marketing/Digital-Marketing-Strategy-Development" },
        { label: "Franchise Digital Marketing", href: "/services/digital-marketing/Franchise-Digital-Marketing" },
        { label: "Enterprise Digital Marketing", href: "/services/digital-marketing/Enterprise-Digital-Marketing" },
      ]
    },
    {
      title: "Link Building",
      icon: <span className="text-blue-600 text-xl">🔗</span>,
      items: [
        { label: "Digital PR Outreach", href: "/services/link-building/Digital-PR-Outreach" },
        { label: "HARO Link Building", href: "/services/link-building/HARO-link-building" },
      ]
    },
    {
      title: "Media Production",
      icon: <span className="text-amber-600 text-xl">📱</span>,
      items: [
        { label: "Video Production", href: "/services/Media-Production/Video-Production" },
        { label: "Video Testimonial Services", href: "/services/Media-Production/Video-Testimonial-Services" },
        { label: "Product Photography Services", href: "/services/Media-Production/Product-Photography-Services" },
      ]
    },
    {
      title: "Online Marketplace Marketing",
      icon: <span className="text-blue-600 text-xl">🏪</span>,
      items: [
        { label: "Amazon SEO", href: "/services/online-marketplace-marketing/amazon-seo" },
        { label: "Amazon Advertising PPC", href: "/services/online-marketplace-marketing/Amazon-Advertising-PPC" },
        { label: "Walmart Marketplace", href: "/services/online-marketplace-marketing/Walmart-marketplace" },
      ]
    },
    {
      title: "Pay Per Click (PPC) Marketing",
      icon: <span className="text-amber-600 text-xl">▶</span>,
      items: [
        { label: "Search Engine Marketing (SEM)", href: "/services/ppc/search-engine-marketing" },
        { label: "Google Ads Management", href: "/services/ppc/google-ads-management" },
        { label: "YouTube Ads Management", href: "/services/ppc/youtube-ads-management" },
        { label: "Programmatic Advertising", href: "/services/ppc/programmatic-advertising" },
        { label: "Lead Generation Services", href: "/services/ppc/lead-generation" },
      ]
    },
    {
      title: "eCommerce Marketing",
      icon: <span className="text-blue-600 text-xl">🛒</span>,
      items: [
        { label: "eCommerce SEO", href: "/services/ppc/ecommerce-seo" },
        { label: "eCommerce PPC", href: "/services/ppc/ecommerce-ppc" },
        { label: "Shopify SEO", href: "/services/ppc/shopify-seo" },
      ]
    },
    {
      title: "Social Media Advertising",
      icon: <span className="text-amber-600 text-xl">📣</span>,
      items: [
        { label: "Facebook", href: "/services/social-media-advertising/facebook" },
        { label: "LinkedIn", href: "/services/social-media-advertising/linkedin" },
        { label: "Instagram", href: "/services/social-media-advertising/instagram" },
      ]
    },
    {
      title: "Social Media Marketing",
      icon: <span className="text-green-600 text-xl">⚿</span>,
      items: [
        { label: "Social Media Management", href: "/services/social-media-marketing/social-media-management" },
        { label: "Social Media Brand Management", href: "/services/social-media-marketing/social-media-brand-management" },
        { label: "Franchise Social Media", href: "/services/social-media-marketing/franchise-social-media" },
        { label: "Enterprise Social Media", href: "/services/social-media-marketing/enterprise-social-media" },
      ]
    },
    {
      title: "Search Engine Optimization (SEO)",
      icon: <span className="text-green-600 text-xl">🔍</span>,
      items: [
        { label: "Local SEO", href: "/services/SEO/local-seo" },
        { label: "Technical SEO", href: "/services/SEO/technical-seo" },
        { label: "Enterprise SEO", href: "/services/SEO/enterprise-seo" },
      ]
    },
  ]

  const industriesMenu = [
    {
      name: "Healthcare",
      path: "/industries/healthcare",
      icon: "🏥",
      description: "Digital solutions for hospitals, clinics, and healthcare providers"
    },
    {
      name: "Finance",
      path: "/industries/finance",
      icon: "💰",
      description: "Marketing strategies for banks, insurance, and fintech companies"
    },
    {
      name: "Education",
      path: "/industries/education",
      icon: "🎓",
      description: "Digital presence for schools, universities, and e-learning platforms"
    },
    {
      name: "E-Commerce",
      path: "/industries/e-commerce",
      icon: "🛒",
      description: "Growth solutions for online stores and marketplace businesses"
    }
  ]

  const serviceLinks: Record<string, string> = {
    "Digital Marketing Strategy Development": "/services/digital-marketing/Digital-Marketing-Strategy-Development",
    "Franchise Digital Marketing": "/services/digital-marketing/Franchise-Digital-Marketing",
    "Enterprise Digital Marketing": "/services/digital-marketing/Enterprise-Digital-Marketing",
    "Search Engine Marketing (SEM)": "/services/ppc/search-engine-marketing",
    "Google Ads Management": "/services/ppc/google-ads-management",
    "YouTube Ads Management": "/services/ppc/youtube-ads-management",
    "Programmatic Advertising": "/services/ppc/programmatic-advertising",
    "Lead Generation Services": "/services/ppc/lead-generation",
    "Franchise PPC": "/services/ppc/franchise-ppc",
    "Enterprise PPC": "/services/ppc/enterprise-ppc",
    "Digital PR Outreach": "/services/link-building/Digital-PR-Outreach",
    "HARO Link Building": "/services/link-building/HARO-link-building",
    "Local SEO": "/services/SEO/local-seo",
    "Technical SEO": "/services/SEO/technical-seo",
    "Franchise SEO": "/services/SEO/franchise-seo",
    "Enterprise SEO": "/services/SEO/enterprise-seo",
    "Generative Engine Optimization": "#",
    "SEO Audits": "#",
    "Franchise SEO Audit": "#",
    "Enterprise SEO Audit": "#",
    "Branding Services": "/services/web-design-development/branding-services",
    "Custom Website Design": "/services/Website-design/custom-website-design",
    "WordPress Website Design": "/services/web-design-development/wordpress-website-design",
    "Website Hosting": "#",
    "ADA Compliance Services": "/services/Website-design/ADA-Compliance-services",
    "Ecommerce SEO": "/services/ppc/ecommerce-seo",
    "eCommerce PPC": "/services/ecommerce-marketing/ecommerce-ppc",
    "Ecommerce Optimization": "/services/ecommerce-marketing/ecommerce-optimization",
    "Shopify SEO": "/services/ppc/shopify-seo",
    "Shopify Web Design": "#",
    "eCommerce Web Design": "#",
    "Social Media Management": "/services/social-media-marketing/social-media-management",
    "Social Media Brand Management": "/services/social-media-marketing/social-media-brand-management",
    "Franchise Social Media": "/services/social-media-marketing/franchise-social-media",
    "Enterprise Social Media": "/services/social-media-marketing/enterprise-social-media",
    "Video Production": "/services/Media-Production/Video-Production",
    "Video Testimonial Services": "/services/Media-Production/Video-Testimonial-Services",
    "Product Photography Services": "/services/Media-Production/Product-Photography-Services",
    "Drone Video and Photography Services": "#",
    "Amazon SEO": "/services/online-marketplace-marketing/amazon-seo",
    "Amazon Advertising PPC": "/services/online-marketplace-marketing/Amazon-Advertising-PPC",
    "Amazon Storefront & Branding": "/services/online-marketplace-marketing/amazon-storefront-branding",
    "Amazon Seller Consulting": "#",
    "Amazon Posts Management": "#",
    "Amazon DSP Advertising Management": "#",
    "Walmart Marketplace": "/services/online-marketplace-marketing/Walmart-marketplace",
    "Target Plus Marketplace": "#",
    "eBay Marketplace": "#",
    "Facebook": "/services/social-media-advertising/facebook",
    "LinkedIn": "/services/social-media-advertising/linkedin",
    "Twitter": "/services/social-media-advertising/twitter",
    "Instagram": "/services/social-media-advertising/instagram",
    "SEO Content Writing": "/services/content-writing/seo-content-writing",
    "Copywriting Services": "/services/content-writing/copywriting-services",
    "Translation Services": "#",
    "Email Marketing Services": "/services/content-writing/email-marketing-services",
    "Outbound Marketing": "#"
  };

  const companyMenu = [
    {
      name: "About Us",
      path: "/about",
      icon: "🏢",
      description: "Learn about our company, mission, and values"
    },
    {
      name: "Team",
      path: "/team",
      icon: "👥",
      description: "Meet our experienced and dedicated team members"
    },
    {
      name: "Blog",
      path: "/blog",
      icon: "📝",
      description: "Latest insights, tips, and industry updates"
    },
    {
      name: "Contact",
      path: "/contact",
      icon: "📧",
      description: "Get in touch with us for your business needs"
    }
  ]

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
      scrolled ? "py-1 bg-white/95 backdrop-blur-md shadow-md" : "py-3 bg-white"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/Markov.png" alt="Markov Logo" width={100} height={100} className="drop-shadow-md group-hover:rotate-12 transition-transform duration-500" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-l from-[#1C2B2B] to-[#2BC4C1] text-transparent bg-clip-text">Markov</span>
            <span className="text-xs text-muted-foreground -mt-1">International LLC</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center space-x-8">
            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setActiveDesktopMenu('services')}
              onMouseLeave={() => setActiveDesktopMenu(null)}
            >
              <button className="flex items-center font-medium text-gray-800 hover:text-[#205A59] transition-colors py-3 px-4 rounded-md hover:bg-[#f0f9f9] text-lg focus:outline-none">
                Services <ChevronDown className="w-5 h-5 ml-1" />
              </button>
              {activeDesktopMenu === 'services' && (
                <div
                  className="fixed left-1/2 top-[80px] mt-2 -translate-x-1/2 max-w-6xl w-[95vw] bg-white shadow-xl border border-gray-200 rounded-xl p-8 z-50"
                  style={{ minWidth: 900 }}
                >
                  <div className="grid grid-cols-4 gap-8">
                    {servicesMegaMenu.map((cat, idx) => (
                      <div key={idx}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">{cat.icon}</span>
                          <span className="font-bold text-gray-900">{cat.title}</span>
                        </div>
                        <ul className="space-y-1 pl-4">
                          {Array.isArray(cat.items) && cat.items.map((item, j) => (
                            <li key={j} className="list-disc text-gray-700 text-sm">
                              <Link href={item.href} className="hover:text-primary transition-colors">
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* Industries Dropdown */}
            <li className="relative" onMouseEnter={() => setActiveDesktopMenu('industries')} onMouseLeave={() => setActiveDesktopMenu(null)}>
              <button className="flex items-center font-medium text-gray-800 hover:text-[#205A59] transition-colors py-3 px-4 rounded-md hover:bg-[#f0f9f9] text-lg focus:outline-none">
                Industries <ChevronDown className="w-5 h-5 ml-1" />
              </button>
              {activeDesktopMenu === 'industries' && (
                <div ref={dropdownRef} className="absolute left-0 top-full min-w-[260px] bg-white shadow-xl p-4 z-30 animate-fade-in rounded-xl border border-gray-200">
                  <div className="text-[#205A59] font-semibold mb-2">Specialized Industry Solutions</div>
                  <div className="flex flex-col gap-2">
                    {industriesMenu.map((industry, index) => (
                      <Link 
                        key={index}
                        href={industry.path}
                        onClick={handleLinkClick}
                        className="flex items-start gap-3 p-2 hover:bg-[#f0f9f9] rounded-md"
                      >
                        <div className="w-8 h-8 bg-[#EAF6F6] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">{industry.icon}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800 block">{industry.name}</span>
                          <span className="text-xs text-gray-500">{industry.description}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* Other Nav Links */}
            <li><Link href="/case-studies" onClick={handleLinkClick} className="font-medium text-gray-800">Case Studies</Link></li>
            <li><Link href="/careers" onClick={handleLinkClick} className="font-medium text-gray-800">Careers</Link></li>

            {/* Company Dropdown */}
            <li className="relative" onMouseEnter={() => setActiveDesktopMenu('company')} onMouseLeave={() => setActiveDesktopMenu(null)}>
              <button className="flex items-center font-medium text-gray-800 hover:text-[#205A59] transition-colors py-3 px-4 rounded-md hover:bg-[#f0f9f9] text-lg focus:outline-none">
                Company <ChevronDown className="w-5 h-5 ml-1" />
              </button>
              {activeDesktopMenu === 'company' && (
                <div ref={dropdownRef} className="absolute left-0 top-full min-w-[220px] bg-white shadow-xl p-4 z-30 animate-fade-in rounded-xl border border-gray-200">
                  <div className="text-[#205A59] font-semibold mb-2">Company Information</div>
                  <div className="flex flex-col gap-2">
                    {companyMenu.map((item, index) => (
                      <Link 
                        key={index}
                        href={item.path}
                        onClick={handleLinkClick}
                        className="flex items-start gap-3 p-2 hover:bg-[#f0f9f9] rounded-md"
                      >
                        <div className="w-8 h-8 bg-[#EAF6F6] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">{item.icon}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800 block">{item.name}</span>
                          <span className="text-xs text-gray-500">{item.description}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* Mobile & Contact */}
        <div className="flex items-center gap-4 w-62">
          <div className="hidden lg:block"><ContactButton /></div>
          <button className="lg:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white p-4 overflow-y-auto z-40">
          <nav className="space-y-4">
            {/* Mobile Services */}
            <div>
              <button
                className="w-full flex justify-between items-center font-medium text-gray-800"
                onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "services" && (
                <div className="mt-2 pl-4 space-y-4">
                  <h3 className="text-sm font-semibold text-[#205A59] uppercase tracking-wider">
                    Our Comprehensive Services
                  </h3>
                  {servicesMegaMenu.map((col, i) => (
                    <div key={i} className="mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-[#EAF6F6] rounded-full flex items-center justify-center">
                          {col.icon}
                        </div>
                        <p className="font-semibold text-gray-800">{col.title}</p>
                      </div>
                      <ul className="pl-11 space-y-1 text-gray-700">
                        {Array.isArray(col.items) && col.items.map((item, j) => (
                          <li key={j} className="relative">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#EAF6F6]"></div>
                            <Link href={item.href} onClick={handleLinkClick} className="text-sm py-1 block pl-4">{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile Industries */}
            <div>
              <button
                className="w-full flex justify-between items-center font-medium text-gray-800"
                onClick={() => setActiveDropdown(activeDropdown === "industries" ? null : "industries")}
              >
                Industries <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "industries" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "industries" && (
                <div className="mt-2 pl-4 space-y-3 py-2">
                  <h3 className="text-sm font-semibold text-[#205A59] uppercase tracking-wider">
                    Specialized Industry Solutions
                  </h3>
                  {industriesMenu.map((industry, index) => (
                    <div key={index} className="py-2">
                      <Link 
                        href={industry.path}
                        onClick={handleLinkClick}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <div className="w-8 h-8 bg-[#EAF6F6] rounded-full flex items-center justify-center flex-shrink-0">
                          <span>{industry.icon}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800 block">{industry.name}</span>
                          <span className="text-xs text-gray-500">{industry.description}</span>
                        </div>
                      </Link>
                      {index < industriesMenu.length - 1 && (
                        <div className="mt-3 border-t border-gray-100"></div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Other mobile links */}
            <Link href="/case-studies" onClick={handleLinkClick} className="block font-medium text-gray-800">Case Studies</Link>
            <Link href="/careers" onClick={handleLinkClick} className="block font-medium text-gray-800">Careers</Link>
            <Link href="/about" onClick={handleLinkClick} className="block font-medium text-gray-800">About Us</Link>
            <Link href="/contact" onClick={handleLinkClick} className="block font-medium text-gray-800">Contact</Link>

            <div className="mt-6">
              <ContactButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
