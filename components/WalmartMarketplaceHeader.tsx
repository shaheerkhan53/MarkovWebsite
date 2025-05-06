"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ExternalLink, ShoppingCart, Menu, X } from "lucide-react"

export default function WalmartMarketplaceHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Control body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "py-2 bg-background/95 backdrop-blur-md shadow-md" 
        : "py-4 bg-background"
    }`}>
      <div className="container mx-auto flex flex-col">
        {/* Walmart-specific top banner */}
        <div className="bg-[#0071CE] text-white py-2 px-4 rounded-md mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M20.9703 7C20.9703 7 18.4412 12.2782 17.3641 14.1508C16.9187 14.9091 16.7292 15.0133 16.1728 15.0133H12.1203L12.1465 14.9615C12.1465 14.9615 13.6358 12.0867 13.6358 12.0607C13.6358 12.0348 13.714 11.9825 13.9035 11.9825H15.0066C16.2482 11.9825 17.3119 10.7383 17.5535 9.44702C17.8211 8.00154 16.8832 6.79126 15.5504 6.79126H11.0694C10.5911 6.79126 10.1979 7.05761 10.0343 7.4976L8 12.6306C8 12.6306 7.58007 13.5585 8.10443 14.2645C8.57632 14.8924 9.20489 15.0133 10.0866 15.0133H11.0173L10.5129 16.9732C10.5129 16.9732 10.3495 17.5229 10.5911 17.7892C10.8327 18.0556 11.1265 18.0815 11.4724 18.0815H12.9877C13.4659 18.0815 13.8591 17.8152 14.0227 17.3751L14.8257 15.0133L14.7995 15.0392H16.198L15.9825 16.8004C15.9825 16.8004 15.869 17.3232 16.0587 17.5636C16.2482 17.8041 16.468 18.0815 17.0767 18.0815H18.2849C18.7631 18.0815 19.1563 17.8152 19.3199 17.3751L20.9703 13.4702C20.9703 13.4702 22.7 9.83517 23 9.18528C23 9.18528 23.1375 8.79713 22.8437 8.45278C22.5499 8.10843 22.0978 8.13434 21.8301 8.13434H19.5876C19.1355 8.13434 18.9983 8.34472 18.8347 8.68907C18.671 9.03342 18.1407 10.2955 18.1407 10.2955H16.7553C16.7553 10.2955 17.2596 8.52061 17.3119 8.33614C17.3641 8.15167 17.3641 7.98311 17.1747 7.91537C16.9853 7.84763 16.7693 7.87353 16.5016 7.87353H13.5575C13.5575 7.87353 13.1643 7.84763 12.9748 8.21788C12.7853 8.58814 12.2027 9.93507 12.2027 9.93507L12.1765 9.96097H10.8171L11.8942 7.10383H20.0542C20.6628 7.10383 20.9703 7.18748 20.9703 7Z" fill="white"/>
              </svg>
            </div>
            <span className="font-bold text-sm md:text-base">WALMART MARKETPLACE SELLER SERVICES</span>
          </div>
          <Link href="https://seller.walmart.com" target="_blank" rel="noopener noreferrer" 
                className="text-xs md:text-sm hover:underline flex items-center">
            Visit Walmart Seller Center
            <ExternalLink className="w-3 h-3 ml-1" />
          </Link>
        </div>

        {/* Main navigation bar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Image src="/Markov.png" alt="Markov Logo" width={80} height={80} className="drop-shadow-md group-hover:rotate-12 transition-transform duration-500" />
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-l from-[#1C2B2B] to-[#2BC4C1] text-transparent bg-clip-text">Markov</span>
                <span className="text-xs text-muted-foreground -mt-1">International LLC</span>
              </div>
            </Link>
            
            <div className="h-8 w-px bg-gray-300 mx-2 hidden md:block"></div>
            
            <div className="hidden md:flex items-center">
              <div className="p-1.5 bg-[#FFC220] rounded-full mr-2">
                <ShoppingCart className="w-4 h-4 text-[#041E42]" />
              </div>
              <span className="text-sm font-semibold text-[#0071CE]">Walmart Marketplace</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#0071CE]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0071CE]" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center space-x-6">
              <li>
                <Link href="/services/online-marketplace-marketing/Walmart-marketplace" 
                      className="font-medium text-[#0071CE] hover:text-[#004c8c] transition-colors px-1">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/services/online-marketplace-marketing/Walmart-marketplace#services" 
                      className="font-medium text-gray-700 hover:text-[#0071CE] transition-colors px-1">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/services/online-marketplace-marketing/Walmart-marketplace#why-walmart" 
                      className="font-medium text-gray-700 hover:text-[#0071CE] transition-colors px-1">
                  Why Walmart
                </Link>
              </li>
              <li>
                <Link href="/services/online-marketplace-marketing/Walmart-marketplace#faqs" 
                      className="font-medium text-gray-700 hover:text-[#0071CE] transition-colors px-1">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" 
                      className="bg-[#FFC220] hover:bg-[#ffcf4d] text-[#041E42] px-4 py-2 rounded-md font-medium transition-colors">
                  Get Free Analysis
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white pt-20">
            <div className="container mx-auto px-4">
              <nav className="py-5">
                <ul className="space-y-6">
                  <li className="border-b border-gray-100 pb-4">
                    <Link 
                      href="/services/online-marketplace-marketing/Walmart-marketplace" 
                      className="text-lg font-medium text-[#0071CE] hover:text-[#004c8c] block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Overview
                    </Link>
                  </li>
                  <li className="border-b border-gray-100 pb-4">
                    <Link 
                      href="/services/online-marketplace-marketing/Walmart-marketplace#services" 
                      className="text-lg font-medium text-gray-700 hover:text-[#0071CE] block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="border-b border-gray-100 pb-4">
                    <Link 
                      href="/services/online-marketplace-marketing/Walmart-marketplace#why-walmart" 
                      className="text-lg font-medium text-gray-700 hover:text-[#0071CE] block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Why Walmart
                    </Link>
                  </li>
                  <li className="border-b border-gray-100 pb-4">
                    <Link 
                      href="/services/online-marketplace-marketing/Walmart-marketplace#faqs" 
                      className="text-lg font-medium text-gray-700 hover:text-[#0071CE] block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      FAQs
                    </Link>
                  </li>
                  <li className="pt-2">
                    <Link 
                      href="/contact" 
                      className="bg-[#FFC220] hover:bg-[#ffcf4d] text-[#041E42] px-6 py-3 rounded-md font-medium transition-colors inline-block w-full text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Free Analysis
                    </Link>
                  </li>
                  <li className="pt-4">
                    <Link 
                      href="https://seller.walmart.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-[#0071CE] font-medium border border-[#0071CE] rounded-md p-3"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="w-5 h-5 flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                          <path d="M20.9703 7C20.9703 7 18.4412 12.2782 17.3641 14.1508C16.9187 14.9091 16.7292 15.0133 16.1728 15.0133H12.1203L12.1465 14.9615C12.1465 14.9615 13.6358 12.0867 13.6358 12.0607C13.6358 12.0348 13.714 11.9825 13.9035 11.9825H15.0066C16.2482 11.9825 17.3119 10.7383 17.5535 9.44702C17.8211 8.00154 16.8832 6.79126 15.5504 6.79126H11.0694C10.5911 6.79126 10.1979 7.05761 10.0343 7.4976L8 12.6306C8 12.6306 7.58007 13.5585 8.10443 14.2645C8.57632 14.8924 9.20489 15.0133 10.0866 15.0133H11.0173L10.5129 16.9732C10.5129 16.9732 10.3495 17.5229 10.5911 17.7892C10.8327 18.0556 11.1265 18.0815 11.4724 18.0815H12.9877C13.4659 18.0815 13.8591 17.8152 14.0227 17.3751L14.8257 15.0133L14.7995 15.0392H16.198L15.9825 16.8004C15.9825 16.8004 15.869 17.3232 16.0587 17.5636C16.2482 17.8041 16.468 18.0815 17.0767 18.0815H18.2849C18.7631 18.0815 19.1563 17.8152 19.3199 17.3751L20.9703 13.4702C20.9703 13.4702 22.7 9.83517 23 9.18528C23 9.18528 23.1375 8.79713 22.8437 8.45278C22.5499 8.10843 22.0978 8.13434 21.8301 8.13434H19.5876C19.1355 8.13434 18.9983 8.34472 18.8347 8.68907C18.671 9.03342 18.1407 10.2955 18.1407 10.2955H16.7553C16.7553 10.2955 17.2596 8.52061 17.3119 8.33614C17.3641 8.15167 17.3641 7.98311 17.1747 7.91537C16.9853 7.84763 16.7693 7.87353 16.5016 7.87353H13.5575C13.5575 7.87353 13.1643 7.84763 12.9748 8.21788C12.7853 8.58814 12.2027 9.93507 12.2027 9.93507L12.1765 9.96097H10.8171L11.8942 7.10383H20.0542C20.6628 7.10383 20.9703 7.18748 20.9703 7Z" fill="#0071CE"/>
                        </svg>
                      </div>
                      Visit Walmart Seller Center
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 