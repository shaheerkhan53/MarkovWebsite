"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Camera, Video, Film, PlayCircle, Mic, Edit, Settings, CheckCircle, BarChart, Target } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function VideoProductionPage() {
    const router = useRouter();
    const projectInputRef = React.useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const project = projectInputRef.current?.value.trim();
        if (project) {
            router.push(`/contact?service=video-production&project=${encodeURIComponent(project)}`);
        } else {
            router.push(`/contact?service=video-production`);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative py-20 bg-gradient-to-b from-[#A91D3A] to-[#d46a7a] flex flex-col items-center justify-center"
            >
                <div className="relative z-10 flex flex-col items-center w-full">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-extrabold text-white text-center mb-4 tracking-tight drop-shadow-sm"
                    >
                        Professional Video Production
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-white/90 text-center mb-6"
                    >
                        Transform Your Vision into Captivating Visual Stories
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg text-white/80 text-center mb-8 max-w-3xl"
                    >
                        From concept to final cut, our expert team delivers high-quality video production services that engage your audience and elevate your brand.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap justify-center gap-4 mb-8"
                    >
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all">
                            <Camera className="w-5 h-5 text-white" />
                            <span className="text-white">Professional Equipment</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all">
                            <Edit className="w-5 h-5 text-white" />
                            <span className="text-white">Creative Editing</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all">
                            <PlayCircle className="w-5 h-5 text-white" />
                            <span className="text-white">High-Quality Output</span>
                        </div>
                    </motion.div>
                    <motion.form 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        onSubmit={handleSubmit} 
                        className="w-full max-w-xl mx-auto flex flex-col md:flex-row items-center gap-4 p-2"
                    >
                        <div className="relative flex-1 w-full">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
                                <Video className="w-5 h-5" />
                            </span>
                            <input
                                ref={projectInputRef}
                                type="text"
                                placeholder="Describe Your Project"
                                className="pl-10 pr-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30 text-lg w-full transition-all text-white placeholder:text-white/60"
                            />
                        </div>
                        <Button type="submit" className="w-full md:w-auto font-bold text-base px-6 py-3 rounded-lg shadow bg-white text-[#A91D3A] hover:bg-white/90 transition-all">
                            GET STARTED
                        </Button>
                    </motion.form>
                </div>
            </motion.section>

            {/* Services Section */}
            <motion.section 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-20 bg-white"
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#A91D3A] mb-4">Our Video Production Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive video production solutions for businesses of all sizes.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Service Card 1 */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#fbe9ed]"
                        >
                            <div className="w-16 h-16 bg-[#fbe9ed] rounded-full flex items-center justify-center mb-6">
                                <Camera className="w-8 h-8 text-[#A91D3A]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#A91D3A] mb-4">Commercial Production</h3>
                            <p className="text-gray-600 mb-6">Professional commercial videos that showcase your products and services effectively.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                                    <span className="text-gray-700">Product Videos</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                                    <span className="text-gray-700">Brand Videos</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                                    <span className="text-gray-700">Promotional Content</span>
                                </li>
                            </ul>
                        </motion.div>
                        {/* Service Card 2 */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#fbe9ed]"
                        >
                            <div className="w-16 h-16 bg-[#fbe9ed] rounded-full flex items-center justify-center mb-6">
                                <Film className="w-8 h-8 text-[#A91D3A]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#A91D3A] mb-4">Corporate Videos</h3>
                            <p className="text-gray-600 mb-6">Engaging corporate videos that communicate your company's message effectively.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                                    <span className="text-gray-700">Company Profiles</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                                    <span className="text-gray-700">Training Videos</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                                    <span className="text-gray-700">Event Coverage</span>
                                </li>
                            </ul>
                        </motion.div>
                        {/* Service Card 3 */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#fbe9ed]"
                        >
                            <div className="w-16 h-16 bg-[#fbe9ed] rounded-full flex items-center justify-center mb-6">
                                <Mic className="w-8 h-8 text-[#A91D3A]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#A91D3A] mb-4">Post-Production</h3>
                            <p className="text-gray-600 mb-6">Professional editing and post-production services to perfect your video content.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                                    <span className="text-gray-700">Video Editing</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                                    <span className="text-gray-700">Color Grading</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#A91D3A]" />
                                    <span className="text-gray-700">Sound Design</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Process Section */}
            <motion.section 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-20 bg-[#fdf4f7]"
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#A91D3A] mb-4">Our Production Process</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">A systematic approach to delivering exceptional video content.</p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Process Steps */}
                            <div className="space-y-8">
                                {/* Step 1 */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="flex items-start gap-6"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#fbe9ed] rounded-full flex items-center justify-center">
                                        <span className="text-xl font-bold text-[#A91D3A]">1</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#A91D3A] mb-2">Concept Development</h3>
                                        <p className="text-gray-600">We work with you to develop a compelling concept that aligns with your goals and resonates with your audience.</p>
                                    </div>
                                </motion.div>
                                {/* Step 2 */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="flex items-start gap-6"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#fbe9ed] rounded-full flex items-center justify-center">
                                        <span className="text-xl font-bold text-[#A91D3A]">2</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#A91D3A] mb-2">Pre-Production</h3>
                                        <p className="text-gray-600">Detailed planning including scriptwriting, storyboarding, location scouting, and scheduling.</p>
                                    </div>
                                </motion.div>
                                {/* Step 3 */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="flex items-start gap-6"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#fbe9ed] rounded-full flex items-center justify-center">
                                        <span className="text-xl font-bold text-[#A91D3A]">3</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#A91D3A] mb-2">Production</h3>
                                        <p className="text-gray-600">Professional filming with high-quality equipment and experienced crew members.</p>
                                    </div>
                                </motion.div>
                                {/* Step 4 */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="flex items-start gap-6"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-[#fbe9ed] rounded-full flex items-center justify-center">
                                        <span className="text-xl font-bold text-[#A91D3A]">4</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#A91D3A] mb-2">Post-Production</h3>
                                        <p className="text-gray-600">Expert editing, color grading, sound design, and final delivery in your preferred format.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-20 bg-gradient-to-r from-[#A91D3A] to-[#d46a7a]"
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Create Your Video?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Let's discuss how we can bring your vision to life with professional video production.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => router.push('/contact?service=video-production')}
                            className="bg-white text-[#A91D3A] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold shadow-lg transition-all"
                        >
                            Get Started Now
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => router.push('/contact?service=video-production')}
                            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all"
                        >
                            Schedule a Call
                        </motion.button>
                    </div>
                </div>
            </motion.section>

            {/* Why Video Production Matters Section */}
            <section className="py-20 bg-white border-t border-b border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#A91D3A] mb-6 text-center">Why Video Production Matters</h2>
                    <p className="text-lg text-gray-700 text-center mb-10">Video is the most engaging form of content online. It helps brands connect, educate, and convert their audiences more effectively than any other medium.</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#fbe9ed] rounded-xl p-6 text-center shadow">
                            <span className="text-4xl text-[#A91D3A] font-bold">88%</span>
                            <p className="mt-2 text-gray-700">of marketers say video gives them a positive ROI.</p>
                        </div>
                        <div className="bg-[#fbe9ed] rounded-xl p-6 text-center shadow">
                            <span className="text-4xl text-[#A91D3A] font-bold">1200%</span>
                            <p className="mt-2 text-gray-700">more shares are generated by social videos than text and images combined.</p>
                        </div>
                        <div className="bg-[#fbe9ed] rounded-xl p-6 text-center shadow">
                            <span className="text-4xl text-[#A91D3A] font-bold">95%</span>
                            <p className="mt-2 text-gray-700">of a message is retained when watched in a video (vs. 10% when read).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Videos We Produce Section */}
            <section className="py-20 bg-[#fdf4f7]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#A91D3A] mb-6 text-center">Types of Videos We Produce</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="bg-white rounded-xl p-6 text-center shadow border border-[#fbe9ed]">
                            <span className="inline-block mb-3 text-[#A91D3A] text-3xl">🎬</span>
                            <h3 className="font-bold text-lg mb-2">Brand Videos</h3>
                            <p className="text-gray-600">Tell your brand story and build trust with your audience.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow border border-[#fbe9ed]">
                            <span className="inline-block mb-3 text-[#A91D3A] text-3xl">📢</span>
                            <h3 className="font-bold text-lg mb-2">Promotional Videos</h3>
                            <p className="text-gray-600">Promote products, services, or events with high-impact visuals.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow border border-[#fbe9ed]">
                            <span className="inline-block mb-3 text-[#A91D3A] text-3xl">🎓</span>
                            <h3 className="font-bold text-lg mb-2">Educational Videos</h3>
                            <p className="text-gray-600">Explain concepts, train staff, or onboard customers effectively.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow border border-[#fbe9ed]">
                            <span className="inline-block mb-3 text-[#A91D3A] text-3xl">🗣️</span>
                            <h3 className="font-bold text-lg mb-2">Testimonial Videos</h3>
                            <p className="text-gray-600">Showcase real customer experiences to build credibility.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#A91D3A] mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-lg text-[#A91D3A]">How long does a typical video project take?</h3>
                            <p className="text-gray-700 mt-1">Most projects take 2-6 weeks, depending on complexity and client feedback cycles.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-[#A91D3A]">Can you help with video marketing strategy?</h3>
                            <p className="text-gray-700 mt-1">Absolutely! We offer end-to-end solutions, from strategy and scripting to production and distribution.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-[#A91D3A]">What if I need revisions?</h3>
                            <p className="text-gray-700 mt-1">We include a set number of revisions in every package to ensure you're happy with the final result.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-[#A91D3A]">Do you provide voiceover and music?</h3>
                            <p className="text-gray-700 mt-1">Yes, we offer professional voiceover and licensed music options for your videos.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Video Production Technology Section */}
            <section className="py-20 bg-[#fbe9ed] border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#A91D3A] mb-6 text-center">Our Video Production Technology</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white rounded-xl p-6 shadow border border-[#fbe9ed]">
                            <span className="inline-block mb-3 text-[#A91D3A] text-3xl">📷</span>
                            <h3 className="font-bold text-lg mb-2">4K & 8K Cameras</h3>
                            <p className="text-gray-600">Crystal-clear visuals with the latest in camera technology for every project.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow border border-[#fbe9ed]">
                            <span className="inline-block mb-3 text-[#A91D3A] text-3xl">🎤</span>
                            <h3 className="font-bold text-lg mb-2">Pro Audio</h3>
                            <p className="text-gray-600">Studio-grade microphones and sound design for immersive audio experiences.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow border border-[#fbe9ed]">
                            <span className="inline-block mb-3 text-[#A91D3A] text-3xl">💻</span>
                            <h3 className="font-bold text-lg mb-2">Cutting-Edge Editing</h3>
                            <p className="text-gray-600">Advanced editing suites and effects to make your video stand out.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Success Stories Section */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#A91D3A] mb-6 text-center">Client Success Stories</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#fdf4f7] rounded-xl p-6 shadow">
                            <h3 className="font-bold text-lg mb-2 text-[#A91D3A]">E-Commerce Brand Launch</h3>
                            <p className="text-gray-700 mb-2">"Our product launch video generated 3x more engagement and doubled our sales in the first month!"</p>
                            <span className="text-gray-500 text-sm">— Sarah, Marketing Director</span>
                        </div>
                        <div className="bg-[#fdf4f7] rounded-xl p-6 shadow">
                            <h3 className="font-bold text-lg mb-2 text-[#A91D3A]">Corporate Training Series</h3>
                            <p className="text-gray-700 mb-2">"The training videos were clear, professional, and made onboarding new staff a breeze."</p>
                            <span className="text-gray-500 text-sm">— James, HR Manager</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Creative Team Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-20 bg-white border-t border-gray-100"
            >
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-3xl md:text-4xl font-extrabold text-[#A91D3A] mb-8 text-center"
                    >
                        Meet Our Creative Team
                    </motion.h2>
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="bg-[#fbe9ed] rounded-xl p-6 shadow">
                            <span className="text-4xl">🎥</span>
                            <h3 className="font-bold text-lg mt-2 mb-1">Directors</h3>
                            <p className="text-gray-600">Visionaries who bring your story to life on screen.</p>
                        </div>
                        <div className="bg-[#fbe9ed] rounded-xl p-6 shadow">
                            <span className="text-4xl">✂️</span>
                            <h3 className="font-bold text-lg mt-2 mb-1">Editors</h3>
                            <p className="text-gray-600">Crafting seamless, engaging narratives from raw footage.</p>
                        </div>
                        <div className="bg-[#fbe9ed] rounded-xl p-6 shadow">
                            <span className="text-4xl">🎙️</span>
                            <h3 className="font-bold text-lg mt-2 mb-1">Voice Artists</h3>
                            <p className="text-gray-600">Delivering the perfect tone and emotion for your message.</p>
                        </div>
                        <div className="bg-[#fbe9ed] rounded-xl p-6 shadow">
                            <span className="text-4xl">💡</span>
                            <h3 className="font-bold text-lg mt-2 mb-1">Creative Strategists</h3>
                            <p className="text-gray-600">Ensuring every video aligns with your brand and goals.</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* How We Work Section */}
            <section className="py-20 bg-[#fdf4f7] border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#A91D3A] mb-8 text-center">How We Work</h2>
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white rounded-xl p-6 shadow border border-[#fbe9ed]">
                            <span className="text-3xl mb-2 inline-block">📝</span>
                            <h3 className="font-bold text-lg mb-1">1. Discovery</h3>
                            <p className="text-gray-600">We learn about your brand, goals, and audience.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow border border-[#fbe9ed]">
                            <span className="text-3xl mb-2 inline-block">📚</span>
                            <h3 className="font-bold text-lg mb-1">2. Planning</h3>
                            <p className="text-gray-600">Scriptwriting, storyboarding, and scheduling for success.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow border border-[#fbe9ed]">
                            <span className="text-3xl mb-2 inline-block">🎬</span>
                            <h3 className="font-bold text-lg mb-1">3. Production</h3>
                            <p className="text-gray-600">Filming with top-tier equipment and creative direction.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow border border-[#fbe9ed]">
                            <span className="text-3xl mb-2 inline-block">🚀</span>
                            <h3 className="font-bold text-lg mb-1">4. Delivery</h3>
                            <p className="text-gray-600">Final edits, feedback, and delivery in your preferred format.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get a Free Consultation Section */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-2xl text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#A91D3A] mb-6">Get a Free Video Production Consultation</h2>
                    <p className="text-lg text-gray-700 mb-8">Ready to elevate your brand with professional video? Our experts are here to help you plan the perfect project—no obligation, just insight.</p>
                    <a href="/contact?service=video-production" className="inline-block bg-[#A91D3A] text-white font-bold px-8 py-4 rounded-lg shadow hover:bg-[#8c1530] transition-all">Book My Free Consultation</a>
                </div>
            </section>
        </div>
        
    );
}