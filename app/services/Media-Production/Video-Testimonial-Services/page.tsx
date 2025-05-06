"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function VideoTestimonialServicesPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f7f7fa' }}>
      {/* Hero Section */}
      <section className="py-20" style={{ background: 'linear-gradient(90deg, #32012F 0%, #8e44ad 100%)' }}>
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">Video Testimonial Services</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-white/90">Build trust and credibility for your brand with authentic, high-quality video testimonials produced by our expert media team.</motion.p>
          <Button asChild size="lg" className="bg-white text-[#32012F] font-bold rounded-full px-8 py-4 text-lg shadow-lg hover:bg-[#32012F] hover:text-white transition-colors">
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4" style={{ color: '#32012F' }}>Why Video Testimonials?</h2>
            <p className="text-gray-700 mb-6 text-lg">Video testimonials are one of the most powerful tools to showcase real customer experiences, build trust, and influence potential clients. Our team handles everything from concept to final production, ensuring your testimonials are engaging and professional.</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
              <li>Boosts credibility and trust</li>
              <li>Increases conversion rates</li>
              <li>Humanizes your brand</li>
              <li>Shareable across all platforms</li>
              <li>Professional production quality</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image src="/gallery.jpg" alt="Video Testimonial" width={500} height={350} className="rounded-2xl shadow-2xl object-cover" />
          </div>
        </div>
      </section>

      {/* Impact & Statistics Section */}
      <section className="py-16" style={{ background: '#32012F' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-8">The Impact of Video Testimonials</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">89%</div>
              <div className="text-white/90">of marketers say video testimonials are the most effective content for building trust.</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">2x</div>
              <div className="text-white/90">Websites with video testimonials see double the average time on site.</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">3.5x</div>
              <div className="text-white/90">Higher conversion rates for landing pages with video testimonials.</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-white/90">of people say video helps them make purchase decisions.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16" style={{ background: '#f7f7fa' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-10" style={{ color: '#32012F' }}>Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "/icons/idea.svg", title: "Consultation", desc: "We discuss your goals and target audience to craft the perfect testimonial strategy." },
              { icon: "/icons/video.svg", title: "Filming", desc: "Our team manages all aspects of filming, whether on-site or remotely, for a seamless experience." },
              { icon: "/icons/edit.svg", title: "Editing", desc: "We edit and enhance the footage, adding branding, graphics, and music for maximum impact." },
              { icon: "/icons/deliver.svg", title: "Delivery", desc: "Receive your polished video testimonials, ready to share on your website and social media." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 text-center flex flex-col items-center">
                <Image src={step.icon} alt={step.title} width={48} height={48} className="mb-4" />
                <h3 className="font-bold text-lg mb-2" style={{ color: '#32012F' }}>{step.title}</h3>
                <p className="text-gray-600 text-base">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Testimonial Video */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: '#32012F' }}>See a Sample Testimonial</h2>
          <div className="flex justify-center mb-6">
            <video width="600" controls poster="/gallery.jpg" className="rounded-2xl shadow-xl">
              <source src="/call-center.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-gray-700 max-w-xl mx-auto text-lg">Our client, Jane Doe, shares her experience working with us and how our services helped her business grow. Let your customers tell your story!</p>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16" style={{ background: '#f7f7fa' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-10" style={{ color: '#32012F' }}>Client Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              name: "Jane Doe",
              company: "Acme Corp",
              text: "The video testimonials produced by this team helped us double our conversion rate! The process was smooth and the final product was outstanding.",
              image: "/client1.png"
            }, {
              name: "Ali Raza",
              company: "Raza Solutions",
              text: "Our customers' stories came to life! We saw a huge boost in trust and engagement on our website.",
              image: "/client2.png"
            }, {
              name: "Emily Smith",
              company: "Smith Consulting",
              text: "Professional, creative, and reliable. Highly recommended for any business looking to build credibility.",
              image: "/client3.png"
            }].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
                <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="rounded-full mb-4 object-cover border-4 border-[#32012F]" />
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="font-semibold text-[#32012F]">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-10" style={{ color: '#32012F' }}>Web Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Hassan Ali",
                company: "Webify Solutions",
                text: "Our new website testimonial section looks amazing and has increased our credibility. The team made the process easy and fun!"
              },
              {
                name: "Sadia Noor",
                company: "Creative Minds",
                text: "We received so many positive comments from clients after adding web testimonials. Highly recommended for any business!"
              },
              {
                name: "Imran Qureshi",
                company: "Qureshi Law Associates",
                text: "Professional, fast, and creative. The web testimonials have helped us win more clients online."
              },
              {
                name: "Ayesha Siddiqui",
                company: "Siddiqui Interiors",
                text: "The testimonial section on our site looks so elegant now. Our customers trust us more than ever!"
              },
              {
                name: "Bilal Farooq",
                company: "Farooq Technologies",
                text: "Excellent service and beautiful design. The web testimonials are a real asset for our business."
              },
              {
                name: "Nadia Khan",
                company: "Khan Boutique",
                text: "We saw a clear increase in online inquiries after adding the testimonial section. Thank you for the great work!"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border-t-4 border-[#32012F]">
                <svg className="w-8 h-8 text-[#32012F] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m2 0a2 2 0 01-2 2v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2a2 2 0 012-2h6zm-6-6h.01M15 7h.01" /></svg>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-[#32012F]">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-10" style={{ color: '#32012F' }}>Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "🏥", label: "Healthcare" },
              { icon: "💼", label: "Corporate" },
              { icon: "🛒", label: "E-Commerce" },
              { icon: "🎓", label: "Education" },
              { icon: "🏦", label: "Finance" },
              { icon: "🏢", label: "Real Estate" },
              { icon: "💡", label: "Startups" },
              { icon: "⚙️", label: "Technology" }
            ].map((ind, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-5xl mb-2">{ind.icon}</span>
                <span className="text-gray-700 font-medium">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16" style={{ background: '#f7f7fa' }}>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-end">
            <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-lg">
              <h2 className="text-3xl font-extrabold mb-6 text-center md:text-left bg-gradient-to-r from-[#32012F] to-[#8e44ad] bg-clip-text text-transparent drop-shadow-lg">Why Choose Us?</h2>
              <ul className="space-y-4">
                {[
                  "Experienced media professionals",
                  "End-to-end service: concept to delivery",
                  "Fast turnaround times",
                  "Flexible packages for every budget",
                  "100% satisfaction guarantee"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-lg text-gray-700">
                    <span className="mt-1">
                      <svg className="w-5 h-5 text-[#32012F]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <div className="rounded-2xl shadow-2xl bg-white flex items-center justify-center p-8 w-[350px] h-[250px]">
              {/* SVG Trophy Icon */}
              <svg width="120" height="120" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="trophyGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#32012F" />
                    <stop offset="1" stopColor="#8e44ad" />
                  </linearGradient>
                </defs>
                <rect x="20" y="52" width="24" height="6" rx="2" fill="#eee" />
                <rect x="24" y="46" width="16" height="8" rx="2" fill="#eee" />
                <ellipse cx="32" cy="40" rx="12" ry="8" fill="#eee" />
                <path d="M16 12v8c0 8.837 7.163 16 16 16s16-7.163 16-16v-8H16z" fill="url(#trophyGradient)" />
                <rect x="16" y="8" width="32" height="8" rx="4" fill="#fff" stroke="#32012F" strokeWidth="2" />
                <circle cx="32" cy="28" r="6" fill="#fff" stroke="#32012F" strokeWidth="2" />
                <path d="M16 20c-4 0-8 4-8 8s4 8 8 8" stroke="#8e44ad" strokeWidth="2" fill="none" />
                <path d="M48 20c4 0 8 4 8 8s-4 8-8 8" stroke="#8e44ad" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: '#32012F' }}>How to Get Started</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {[
              { step: 1, title: "Book a Free Consultation", desc: "Discuss your goals and vision with our experts." },
              { step: 2, title: "Share Your Story", desc: "We help you script and plan the perfect testimonial." },
              { step: 3, title: "Production & Editing", desc: "Our team films, edits, and polishes your video." },
              { step: 4, title: "Launch & Promote", desc: "Get your testimonial live and start building trust!" }
            ].map((s, idx) => (
              <div key={idx} className="bg-[#32012F] text-white rounded-2xl p-6 flex-1 min-w-[220px] shadow-xl">
                <div className="text-3xl font-bold mb-2">Step {s.step}</div>
                <div className="font-semibold mb-1">{s.title}</div>
                <div className="text-white/90 text-sm">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16" style={{ background: '#f7f7fa' }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-extrabold text-center mb-8" style={{ color: '#32012F' }}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <div className="font-semibold mb-1 text-[#32012F]">How long does the video testimonial process take?</div>
              <div className="text-gray-700 text-base">Most projects are completed within 1-2 weeks, depending on your requirements and scheduling.</div>
            </div>
            <div>
              <div className="font-semibold mb-1 text-[#32012F]">Can you film testimonials remotely?</div>
              <div className="text-gray-700 text-base">Yes! We offer both on-site and remote video testimonial production for your convenience.</div>
            </div>
            <div>
              <div className="font-semibold mb-1 text-[#32012F]">Do you help with scripting and coaching?</div>
              <div className="text-gray-700 text-base">Absolutely. Our team will guide you and your clients through the process to ensure natural, authentic testimonials.</div>
            </div>
            <div>
              <div className="font-semibold mb-1 text-[#32012F]">What formats will I receive?</div>
              <div className="text-gray-700 text-base">You'll receive high-quality video files optimized for web, social media, and presentations.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-16" style={{ background: '#32012F' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-10 text-center text-white">What Our Clients Say</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {[{
              name: "Sana Ahmed",
              company: "EduPro",
              text: "The team made our students' stories shine. The videos are now a key part of our admissions process!",
              image: "/client4.png"
            }, {
              name: "John Lee",
              company: "FinTrust",
              text: "We saw a 40% increase in leads after adding video testimonials to our site. Highly recommended!",
              image: "/client2.png"
            }, {
              name: "Maria Gomez",
              company: "HealthFirst",
              text: "Professional, creative, and always on time. Our patients' testimonials are now our best marketing tool.",
              image: "/client3.png"
            }].map((testimonial, idx) => (
              <div key={idx} className="bg-white text-[#32012F] rounded-2xl shadow-xl p-8 flex flex-col items-center max-w-xs">
                <Image src={testimonial.image} alt={testimonial.name} width={70} height={70} className="rounded-full mb-4 object-cover border-4 border-[#32012F]" />
                <p className="mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-[#8e44ad]">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Creative Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-10" style={{ color: '#32012F' }}>Meet Our Creative Team</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { name: "Adeel Khan", role: "Director", image: "/client1.png" },
              { name: "Sara Malik", role: "Producer", image: "/client2.png" },
              { name: "Bilal Hussain", role: "Editor", image: "/client3.png" },
              { name: "Fatima Noor", role: "Cinematographer", image: "/client4.png" }
            ].map((member, idx) => (
              <div key={idx} className="flex flex-col items-center bg-[#f7f7fa] rounded-2xl p-6 shadow-lg">
                <Image src={member.image} alt={member.name} width={80} height={80} className="rounded-full mb-3 object-cover border-4 border-[#32012F]" />
                <div className="font-bold text-[#32012F]">{member.name}</div>
                <div className="text-gray-600">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Ideas for Using Video Testimonials */}
      <section className="py-16" style={{ background: '#f7f7fa' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-8 text-center" style={{ color: '#32012F' }}>Creative Ways to Use Video Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white text-[#32012F] rounded-2xl p-8 shadow-lg">
              <h3 className="font-semibold mb-2">On Your Website</h3>
              <p>Embed testimonials on your homepage, product pages, or landing pages to boost trust instantly.</p>
            </div>
            <div className="bg-white text-[#32012F] rounded-2xl p-8 shadow-lg">
              <h3 className="font-semibold mb-2">Social Media Campaigns</h3>
              <p>Share short clips on Instagram, Facebook, and LinkedIn to increase engagement and reach.</p>
            </div>
            <div className="bg-white text-[#32012F] rounded-2xl p-8 shadow-lg">
              <h3 className="font-semibold mb-2">Email Marketing</h3>
              <p>Include video testimonials in your email newsletters to improve open and click-through rates.</p>
            </div>
            <div className="bg-white text-[#32012F] rounded-2xl p-8 shadow-lg">
              <h3 className="font-semibold mb-2">Sales Presentations</h3>
              <p>Use authentic client stories in your sales decks to close more deals and win trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-10" style={{ color: '#32012F' }}>Resources & Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "5 Tips for Powerful Video Testimonials", desc: "Learn how to get the best stories from your clients.", link: "#" },
              { title: "The Psychology of Social Proof", desc: "Why testimonials work and how to use them.", link: "#" },
              { title: "Video vs. Written Testimonials", desc: "See why video is the king of trust-building.", link: "#" }
            ].map((res, idx) => (
              <div key={idx} className="bg-[#f7f7fa] rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-bold text-[#32012F] mb-2">{res.title}</h3>
                  <p className="text-gray-700 mb-4">{res.desc}</p>
                </div>
                <Link href={res.link} className="text-[#32012F] font-semibold hover:underline mt-auto">Read More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20" style={{ background: 'linear-gradient(90deg, #32012F 0%, #8e44ad 100%)' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-lg">Ready to Get Started?</h2>
          <p className="mb-8 text-xl text-white/90">Contact us today to discuss your video testimonial project and get a free quote.</p>
          <Button asChild size="lg" className="bg-white text-[#32012F] font-bold rounded-full px-8 py-4 text-lg shadow-lg hover:bg-[#32012F] hover:text-white transition-colors">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}