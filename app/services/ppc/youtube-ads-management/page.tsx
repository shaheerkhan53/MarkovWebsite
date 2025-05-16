"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    BarChart, PlayCircle, CheckCircle, Users, Zap, TrendingUp, Target, Search, MessageSquare, UsersRound, Award, Lightbulb, Settings, Briefcase, DollarSign, ChevronRight, Star, Brain, BarChart3, LayoutGrid, Eye, Sparkles, Video, Goal, Film, Tv, Youtube, CalendarDays, MicVocal, ClipboardList, Group, Palette, Rocket, FileText, ShoppingCart, Handshake, ThumbsUp, Maximize2, Shuffle, Layers, Telescope, Building // Added more icons
} from "lucide-react";
import { useRouter } from "next/navigation";
// For animations, you would import motion from framer-motion
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// Helper for section styling
const SectionWrapper = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={`py-20 md:py-28 overflow-hidden ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    </section>
);

// Helper for section headings
const SectionHeading = ({ title, subtitle, className = "" }: { title: string, subtitle?: string, className?: string }) => (
    <div className={`max-w-3xl mx-auto text-center mb-14 md:mb-20 ${className}`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3A0519] mb-4">
            {title}
        </h2>
        {subtitle && <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{subtitle}</p>}
    </div>
);

// Modern Card Component
const ModernCard = ({ icon, title, description, className = "", primaryColor = "#3A0519", delay = 0 }: { icon: React.ReactNode, title: string, description: string, className?: string, primaryColor?: string, delay?: number }) => (
    <div className={`bg-white h-full p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 ${className}`}> {/* Added h-full for consistent card height in grids */}
        <div className="mb-5 transition-transform duration-300 group-hover:scale-110" style={{ color: primaryColor }}>
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);

// Feature Item for lists
const FeatureListItem = ({ icon, text, primaryColor = "#3A0519" }: { icon: React.ReactNode, text: string, primaryColor?: string }) => (
    <li className="flex items-start text-md mb-3">
        <span className="mr-3 mt-1 shrink-0" style={{ color: primaryColor }}>{icon}</span>
        <span>{text}</span>
    </li>
);


export default function YouTubeAdsManagementPage() {
    const router = useRouter();
    const primaryColor = "#3A0519";
    const primaryHoverColor = "#2a0413";
    const lightBg = "bg-gray-50";

    const teamMembers = [
        { name: "Ayesha Khan", role: "Senior Video Ads Strategist", expertise: "YouTube Certified, eCommerce & SaaS", avatarInitial: "AK" },
        { name: "Bilal Ahmed", role: "PPC Account Manager", expertise: "B2B, Lead Gen, Local Services", avatarInitial: "BA" },
        { name: "Sara Malik", role: "Video Script & Copywriter", expertise: "Ad Scripts, CRO, Storytelling", avatarInitial: "SM" },
        { name: "Omar Siddiqui", role: "Analytics & Reporting Lead", expertise: "GA4, Data Studio, Tag Manager", avatarInitial: "OS" },
    ];
    
    const coreValues = [
        { icon: <Target size={32} />, title: "Client Success Obsessed", desc: "Your goals are our goals. We're relentlessly focused on delivering tangible results." },
        { icon: <Brain size={32} />, title: "Data-Driven Innovation", desc: "We leverage insights and analytics to make smart decisions and continuously innovate." },
        { icon: <Handshake size={32} />, title: "Transparent Partnership", desc: "Open communication and clear reporting build the foundation of trust with our clients." },
        { icon: <TrendingUp size={32} />, title: "Continuous Improvement", desc: "The digital landscape evolves, and so do we. We're committed to learning and adapting." },
    ];


    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden bg-white">

            {/* Section 1: Hero Section - Revised Style */}
            <section className="relative bg-gradient-to-br from-[#fdf6f8] via-[#f3f4f6] to-white pt-24 md:pt-32 pb-16 md:pb-20">
                {/* ... (Hero section code from previous response) ... */}
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-7 lg:col-span-6 text-center md:text-left">
                            <div className="inline-block bg-[#3A0519]/10 text-[#3A0519] text-xs font-semibold px-3 py-1 rounded-full mb-4">
                                <Youtube size={14} className="inline mr-1.5 mb-0.5" /> EXPERT YOUTUBE ADS MANAGEMENT
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-[3.2rem] lg:text-[3.5rem] leading-tight font-extrabold mb-6 text-gray-800">
                                Turn <span style={{ color: primaryColor }}>YouTube Views</span> Into <span style={{ color: primaryColor }}>Valuable Business</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
                                Maximize your reach, engagement, and conversions on the world's largest video platform. Our data-driven YouTube advertising strategies are designed to deliver measurable ROI and accelerate your brand's growth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Button
                                    style={{ backgroundColor: primaryColor, color: 'white' }}
                                    className="px-8 py-3.5 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 ring-offset-2"
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = primaryHoverColor}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = primaryColor}
                                    onClick={() => router.push("/contact?service=youtube-ads&source=hero-cta1")}
                                >
                                    Get Your Free Proposal
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-[#3A0519]/70 text-[#3A0519] hover:bg-[#3A0519]/10 hover:border-[#3A0519] px-8 py-3.5 rounded-lg text-lg font-semibold shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 ring-[#3A0519]"
                                    onClick={() => router.push("#our-process")}
                                >
                                    See Our Process
                                </Button>
                            </div>
                        </div>
                        <div className="md:col-span-5 lg:col-span-6 mt-10 md:mt-0 flex justify-center">
                            <div className="relative w-full max-w-md lg:max-w-lg">
                                <div className="aspect-video bg-black rounded-xl shadow-2xl flex items-center justify-center p-4">
                                    <PlayCircle size={80} className="text-white/80 opacity-50" />
                                    <video
                                        poster="https://images.unsplash.com/photo-1611162616805-6RAL9e459135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW91dHViZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                        className="absolute inset-0 w-full h-full object-cover rounded-xl"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        controls
                                        src="/youtube-video.mp4" //  Update this path to your video file
                                    >
                                    </video>
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-xl flex items-center text-sm animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                                    <TrendingUp size={20} className="text-green-500 mr-2" /> <span className="text-gray-700 font-semibold">Results Driven</span>
                                </div>
                                <div className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-xl flex items-center text-sm animate-fade-in-down" style={{animationDelay: '0.7s'}}>
                                    <Target size={20} className="text-[#3A0519] mr-2" /> <span className="text-gray-700 font-semibold">Targeted Reach</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-[#3A0519]/5 rounded-full animate-pulse opacity-30 blur-xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-rose-200/20 rounded-full animate-ping opacity-30 blur-2xl"></div>
            </section>

            {/* Section 2: The Unrivaled Power of YouTube Advertising */}
            <SectionWrapper className={lightBg} id="power-of-youtube">
                {/* ... (Content from previous response) ... */}
                 <SectionHeading
                    title="Why YouTube Ads Are a Game-Changer in 2025"
                    subtitle="In a visually-driven world, YouTube offers unparalleled opportunities to captivate and convert your target audience."
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <ModernCard icon={<Tv size={40} />} title="Unmatched Reach & Engagement" description="Connect with over 2.7 billion monthly active users who watch billions of hours of video daily. Video content drives significantly higher engagement than static formats." primaryColor={primaryColor} delay={0} />
                    <ModernCard icon={<Target size={40} />} title="Precision Audience Targeting" description="Leverage Google's powerful data to reach hyper-specific audiences based on demographics, interests, search behavior, past interactions, and more." primaryColor={primaryColor} delay={1} />
                    <ModernCard icon={<DollarSign size={40} />} title="Cost-Effective & Measurable ROI" description="With various ad formats and bidding strategies (like CPV - Cost Per View), YouTube Ads can be highly efficient, offering clear metrics to track performance and optimize for ROI." primaryColor={primaryColor} delay={2} />
                    <ModernCard icon={<TrendingUp size={40} />} title="Full-Funnel Impact" description="YouTube Ads effectively guide users through every stage of the marketing funnel, from building brand awareness to driving direct conversions and fostering loyalty." primaryColor={primaryColor} delay={3} />
                    <ModernCard icon={<Brain size={40} />} title="Build Brand Authority & Trust" description="High-quality video content establishes your brand as an authority, builds trust with your audience, and creates memorable brand experiences." primaryColor={primaryColor} delay={4} />
                    <ModernCard icon={<Sparkles size={40} />} title="Diverse & Creative Ad Formats" description="From short, unskippable bumpers to longer-form TrueView ads and interactive elements, YouTube offers a rich canvas for creative storytelling." primaryColor={primaryColor} delay={5} />
                </div>
            </SectionWrapper>

            {/* Section 3 (NEW): The Psychology of Video: Why It Captivates & Converts */}
            <SectionWrapper id="psychology-of-video">
                <SectionHeading
                    title="The Science of Sight & Sound: Why Video Ads Work"
                    subtitle="Understanding the psychological impact of video helps us craft more effective YouTube campaigns for your brand."
                />
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <div>
                        {/* Replace with an engaging image or abstract visual representing video/brain connection */}
                        <div className="mb-8 md:mb-0 bg-gradient-to-tl from-[#3A0519]/5 via-white to-rose-50 p-6 rounded-xl shadow-xl aspect-square flex items-center justify-center">
                           <Eye size={80} className="text-[#3A0519] opacity-60 transform group-hover:scale-110 transition-transform duration-300" />
                           <MicVocal size={60} className="text-[#3A0519] opacity-50 ml-4 transform group-hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>
                    <div>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Video is a uniquely powerful medium. It engages multiple senses simultaneously, leading to higher information retention and stronger emotional connections compared to static content.
                        </p>
                        <ul className="space-y-4 text-gray-700">
                            <FeatureListItem icon={<CheckCircle size={20}/>} text="<strong>Increased Engagement:</strong> Moving visuals and audio capture attention more effectively in a crowded digital space." />
                            <FeatureListItem icon={<CheckCircle size={20}/>} text="<strong>Enhanced Memory & Recall:</strong> Viewers retain 95% of a message when they watch it in a video, compared to 10% when reading it in text." />
                            <FeatureListItem icon={<CheckCircle size={20}/>} text="<strong>Emotional Connection:</strong> Video allows for storytelling that evokes emotions, building deeper brand affinity and trust." />
                            <FeatureListItem icon={<CheckCircle size={20}/>} text="<strong>Improved Understanding:</strong> Complex products or services can be explained more clearly and concisely through video demonstrations." />
                            <FeatureListItem icon={<CheckCircle size={20}/>} text="<strong>Higher Conversion Rates:</strong> Landing pages with video can increase conversions by up to 80%, and video ads naturally lead to higher click-through and conversion rates." />
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            {/* Section 4: Understanding YouTube Ads: Formats & Possibilities (Expanded) */}
            <SectionWrapper className={lightBg} id="youtube-ad-formats-detailed">
                <SectionHeading
                    title="Mastering YouTube Ad Formats for Every Objective"
                    subtitle="We strategically select and optimize from YouTube's diverse ad inventory to ensure your message is delivered effectively, no matter your goal."
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* ... (Expanded list of ad formats from previous response, ensure ModernCard delay prop is used) ... */}
                    {[
                        { icon: <PlayCircle size={36} />, title: "Skippable In-Stream Ads", desc: "Play before, during, or after videos. Viewers can skip after 5 seconds. Ideal for broad reach and driving consideration, paying only when viewers engage (CPV bidding)." },
                        { icon: <Zap size={36} />, title: "Non-Skippable In-Stream Ads", desc: "Up to 15-30 seconds (region-dependent), these ads must be watched. Perfect for impactful brand messages and ensuring full message delivery. (CPM bidding)." },
                        { icon: <Film size={36} />, title: "Bumper Ads", desc: "Short, 6-second non-skippable ads. Excellent for reinforcing brand messages, increasing reach, and maintaining top-of-mind awareness. (CPM bidding)." },
                        { icon: <Search size={36} />, title: "In-Feed Video Ads (fka Discovery)", desc: "Appear in YouTube search results, alongside related videos, and on the YouTube app homepage. Great for reaching users actively seeking content related to your brand." },
                        { icon: <Maximize2 size={36} />, title: "Outstream Ads", desc: "Mobile-only video ads that appear on Google video partner websites and apps outside of YouTube, extending reach cost-effectively. (vCPM bidding)." },
                        { icon: <ShoppingCart size={36} />, title: "YouTube Shopping Ads (Product Feeds)", desc: "Showcase your products directly within your video ads, making it easy for viewers to browse and buy. Links to your Google Merchant Center feed." },
                        { icon: <Award size={36} />, title: "YouTube Masthead Ads", desc: "Premium, high-impact placement on the YouTube homepage for a full day. Ideal for massive reach and major brand announcements (reservation-based, CPM)." },
                        { icon: <Goal size={36} />, title: "Video Action Campaigns (VAC)", desc: "Drive conversions with automated campaigns optimized for actions like website visits, leads, or sales, using a mix of skippable in-stream and in-feed ads." },
                        { icon: <Layers size={36} />, title: "Performance Max Campaigns", desc: "Leverage Google AI to find more converting customers across all Google channels, including YouTube, from a single, asset-driven campaign." },
                        { icon: <MessageSquare size={36} />, title: "YouTube Audio Ads", desc: "Reach audiences listening to music or podcasts on YouTube with audio-first ad experiences. Ideal for awareness when visual attention is limited." },
                        { icon: <Tv size={36} />, title: "YouTube Connected TV (CTV) Ads", desc: "Target viewers watching YouTube on their smart TVs, offering a premium, lean-back viewing experience for your brand messages." },
                        { icon: <Lightbulb size={36} />, title: "YouTube Shorts Ads", desc: "Short, vertical video ads appearing between Shorts content. A growing format for reaching younger audiences and driving engagement." },
                    ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.desc} primaryColor={primaryColor} delay={i} />)}
                </div>
            </SectionWrapper>

            {/* Section 5: Our YouTube Ads Management Services (What We Do) */}
            <SectionWrapper id="our-services"> {/* Alternating bg */}
                {/* ... (Content from previous response) ... */}
                <SectionHeading
                    title="Comprehensive YouTube Ads Management Services"
                    subtitle="From strategy to execution and optimization, we handle every aspect of your YouTube advertising to deliver outstanding results."
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        { icon: <Brain size={36} />, title: "Custom YouTube Ad Strategy", desc: "Developing a tailored strategy based on your business goals, target audience, and competitive landscape." },
                        { icon: <Palette size={36} />, title: "Video Creative Consultation", desc: "Advising on video best practices, A/B testing creatives, and helping refine your existing assets for maximum impact." },
                        { icon: <UsersRound size={36} />, title: "Advanced Audience Targeting", desc: "Identifying and targeting your ideal customers using demographics, interests, custom audiences, and remarketing lists." },
                        { icon: <Settings size={36} />, title: "Campaign Setup & Structuring", desc: "Building meticulously structured campaigns for optimal performance, budget allocation, and easy analysis." },
                        { icon: <DollarSign size={36} />, title: "Bid & Budget Optimization", desc: "Employing smart bidding strategies and continuous budget adjustments to maximize ROI and achieve your KPIs." },
                        { icon: <ClipboardList size={36} />, title: "Conversion Tracking Setup", desc: "Ensuring accurate tracking of all valuable actions, from views and clicks to leads and sales." },
                        { icon: <BarChart3 size={36} />, title: "A/B Testing & Optimization", desc: "Constantly monitoring campaign performance, A/B testing ad elements, and making data-driven optimizations." },
                        { icon: <FileText size={36} />, title: "Transparent Reporting", desc: "Providing clear, detailed reports and actionable insights to keep you informed and guide future strategy." },
                        { icon: <TrendingUp size={36} />, title: "Scaling & Growth Strategies", desc: "Identifying opportunities to scale successful campaigns and explore new avenues for growth on YouTube." },
                    ].map((service, i) => (
                        <div key={service.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                            <div className="text-[#3A0519] mb-4">{service.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Section 6: Creative is King: Your Video Ads, Perfected */}
            <SectionWrapper className={lightBg} id="creative-services"> {/* Alternating bg */}
                {/* ... (Content from previous response) ... */}
                 <SectionHeading
                    title="Creative is King: Your Video Ads, Perfected"
                    subtitle="Engaging video content is the heart of successful YouTube campaigns. We help you make yours shine."
                />
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <div className="flex justify-center items-center order-2 md:order-1">
                        <div className="bg-gradient-to-br from-[#3A0519]/10 to-gray-50 p-8 rounded-xl shadow-xl aspect-video flex items-center justify-center w-full transform hover:scale-105 transition-transform duration-300">
                           <Film size={100} className="text-[#3A0519] opacity-70" />
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                            While we specialize in managing and optimizing your YouTube ad campaigns, we understand the critical role of high-quality video creative. 
                        </p>
                        <h4 className="text-xl font-semibold text-[#3A0519] mb-3">Our Creative Support Includes:</h4>
                        <ul className="space-y-3 text-gray-700 mb-6">
                            {[
                                { icon: <MicVocal size={20} className="text-[#3A0519] mr-3 flex-shrink-0" />, text: "Video Ad Scripting & Storyboarding Guidance" },
                                { icon: <Palette size={20} className="text-[#3A0519] mr-3 flex-shrink-0" />, text: "Best Practices for Visuals, CTAs, and Branding" },
                                { icon: <BarChart3 size={20} className="text-[#3A0519] mr-3 flex-shrink-0" />, text: "A/B Testing Different Video Variations" },
                                { icon: <Settings size={20} className="text-[#3A0519] mr-3 flex-shrink-0" />, text: "Optimizing Existing Videos for Ad Performance" },
                                { icon: <UsersRound size={20} className="text-[#3A0519] mr-3 flex-shrink-0" />, text: "Connecting You with Trusted Video Production Partners (if needed)" },
                            ].map((item, i) => (
                                <li key={item.text} className="flex items-start text-md">
                                    {item.icon} <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-600 text-sm">
                            Our goal is to ensure your video ads are not only seen but also remembered and acted upon.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* Section 7 (NEW): YouTube Ads for Different Business Goals */}
            <SectionWrapper id="youtube-for-goals">
                <SectionHeading
                    title="Tailoring YouTube Ads to Your Unique Business Goals"
                    subtitle="Whether you're aiming for brand awareness, lead generation, or direct sales, we customize your campaigns for success."
                />
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <ModernCard
                        icon={<Award size={40} />}
                        title="Brand Awareness & Reach"
                        description="Maximize visibility and introduce your brand to a wide, relevant audience using formats like Bumper Ads, Non-Skippable Ads, and broad targeting strategies. Focus on impressions, view rates, and brand lift."
                        primaryColor={primaryColor}
                    />
                    <ModernCard
                        icon={<UsersRound size={40} />}
                        title="Consideration & Engagement"
                        description="Encourage viewers to learn more about your products or services. Utilize Skippable In-Stream Ads, In-Feed Ads, and target in-market or custom intent audiences. Track clicks, website visits, and engagement rates."
                        primaryColor={primaryColor}
                    />
                    <ModernCard
                        icon={<ShoppingCart size={40} />}
                        title="Leads & Conversions (Sales)"
                        description="Drive direct actions like purchases, sign-ups, or demo requests. Leverage Video Action Campaigns, YouTube Shopping Ads, and remarketing. Focus on conversions, CPA, and ROAS."
                        primaryColor={primaryColor}
                    />
                </div>
            </SectionWrapper>

            {/* Section 8: Our Proven YouTube Ads Management Process */}
            <SectionWrapper className={lightBg} id="our-process">
                {/* ... (Content from previous response, updated icons for clarity) ... */}
                <SectionHeading title="Our Blueprint for YouTube Ads Success" subtitle="A transparent, iterative process designed for continuous improvement and maximum ROI." />
                <div className="max-w-4xl mx-auto">
                    {[
                        { num: "01", title: "Discovery & Strategic Alignment", desc: "We immerse ourselves in your business, objectives, target audience, and competitive landscape to forge a bespoke YouTube Ads strategy.", icon: <Search size={32}/> },
                        { num: "02", title: "Audience & Creative Blueprint", desc: "Defining your ideal viewer personas and outlining creative concepts that resonate, ensuring your message hits the mark.", icon: <Group size={32}/> },
                        { num: "03", title: "Precision Campaign Construction", desc: "Meticulously building campaigns with advanced targeting, ad formats, and robust tracking for optimal performance.", icon: <Settings size={32}/> },
                        { num: "04", title: "Launch & Vigilant Monitoring", desc: "Carefully launching campaigns and closely monitoring initial data to make immediate, necessary adjustments for impact.", icon: <Rocket size={32}/> },
                        { num: "05", title: "Data-Driven Optimization & Scaling", desc: "Relentlessly analyzing performance, A/B testing variables, and strategically scaling successful elements to maximize growth.", icon: <TrendingUp size={32}/> },
                        { num: "06", title: "Insightful Reporting & Collaboration", desc: "Providing clear, comprehensive reports on KPIs, learnings, and strategic recommendations, fostering a collaborative growth partnership.", icon: <FileText size={32}/> }
                    ].map((step, idx, arr) => (
                        <div key={step.title} className="flex items-start group mb-10 md:mb-12 last:mb-0">
                            <div className="flex flex-col items-center mr-6 md:mr-8 shrink-0">
                                <div className="w-16 h-16 rounded-full bg-[#3A0519] text-white flex items-center justify-center font-bold text-2xl transition-transform duration-300 group-hover:scale-110 shadow-md">
                                    {step.num}
                                </div>
                                {idx < arr.length - 1 && <div className="w-1 flex-grow mt-2 bg-gray-300 group-hover:bg-[#3A0519] transition-colors duration-300" style={{minHeight: '4rem'}} />}
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 flex-1 group-hover:shadow-xl transition-shadow duration-300 transform group-hover:border-[#3A0519]/30">
                                <div className="flex items-center text-[#3A0519] mb-3">
                                    {step.icon}
                                    <h3 className="ml-3 text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-[#3A0519] transition-colors duration-300">{step.title}</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Section 9 (NEW): Industry-Specific YouTube Ad Strategies */}
            <SectionWrapper id="industry-strategies">
                <SectionHeading
                    title="Tailored YouTube Strategies for Your Industry"
                    subtitle="While every business is unique, we leverage industry-specific insights to accelerate your success on YouTube."
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <ModernCard
                        icon={<ShoppingCart size={40} />}
                        title="eCommerce & Retail"
                        description="Driving product discovery and sales with YouTube Shopping Ads, Video Action Campaigns, and dynamic remarketing. Focus on ROAS, AOV, and customer acquisition."
                        primaryColor={primaryColor}
                    />
                    <ModernCard
                        icon={<Briefcase size={40} />}
                        title="B2B & SaaS"
                        description="Generating qualified leads and demos with targeted In-Feed Ads, educational content, and remarketing to website visitors. Focus on CPL, demo requests, and thought leadership."
                        primaryColor={primaryColor}
                    />
                    <ModernCard
                        icon={<Building size={40} />}
                        title="Local Businesses & Services"
                        description="Increasing local awareness and driving in-store visits or service inquiries with geo-targeted campaigns and location extensions. Focus on local reach, calls, and direction requests."
                        primaryColor={primaryColor}
                    />
                    {/* Add more industry examples if relevant */}
                </div>
                <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
                    Don't see your industry? <a href="/contact?service=youtube-ads&source=industry-query" style={{color: primaryColor}} className="font-semibold underline hover:opacity-80">Contact us</a> to discuss how we can create a custom YouTube Ads strategy for your specific niche.
                </p>
            </SectionWrapper>


            {/* Section 10: Advanced Targeting: Reaching Your Ideal Viewer */}
             <SectionWrapper className={lightBg} id="advanced-targeting">
                 {/* ... (Content from previous response) ... */}
                <SectionHeading
                    title="Pinpoint Precision: Reaching Your Ideal Viewer on YouTube"
                    subtitle="We go beyond basic demographics to connect you with audiences most likely to convert."
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        { icon: <Users size={36} />, title: "Demographic & Location Targeting", desc: "Reach users based on age, gender, parental status, household income, and precise geographic locations." },
                        { icon: <Brain size={36} />, title: "Affinity & In-Market Audiences", desc: "Target users with strong interests relevant to your brand (Affinity) or those actively researching products/services like yours (In-Market)." },
                        { icon: <Eye size={36} />, title: "Custom Audiences (Intent & Search)", desc: "Create audiences based on keywords users searched on Google, URLs they visited, or apps they use." },
                        { icon: <UsersRound size={36} />, title: "Remarketing & Customer Match", desc: "Re-engage past website visitors, app users, or upload your existing customer lists to target them (or similar audiences) on YouTube." },
                        { icon: <Tv size={36} />, title: "Content & Placement Targeting", desc: "Show your ads on specific YouTube channels, videos, or topics relevant to your audience." },
                        { icon: <ClipboardList size={36} />, title: "Life Events & Detailed Demographics", desc: "Target users going through significant life moments (e.g., graduating, moving, getting married) or with more granular demographic details." },
                    ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.desc} primaryColor={primaryColor} delay={i}/>)}
                </div>
            </SectionWrapper>

            {/* Section 11: Measuring What Matters: Key YouTube Ads Metrics */}
            <SectionWrapper id="key-metrics">
                {/* ... (Content from previous response, ensure good visual presentation of metrics) ... */}
                <SectionHeading
                    title="Measuring What Matters: Tracking Your YouTube Ads Success"
                    subtitle="We focus on the metrics that truly indicate campaign performance and contribution to your business goals."
                />
                 <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { name: "Views & View Rate (VR)", desc: "Number of times your ad was watched / percentage of impressions that resulted in a view." },
                            { name: "Impressions", desc: "Number of times your ad was shown." },
                            { name: "Click-Through Rate (CTR)", desc: "Percentage of views that resulted in a click to your website." },
                            { name: "Cost Per View (CPV)", desc: "Average amount you pay when someone views your ad." },
                            { name: "Conversions & Conversion Rate", desc: "Number/percentage of viewers who completed a desired action (e.g., purchase, lead form)."},
                            { name: "Cost Per Acquisition (CPA)", desc: "Average cost to acquire a customer or lead." },
                            { name: "Return on Ad Spend (ROAS)", desc: "Revenue generated for every dollar spent on advertising." },
                            { name: "Audience Retention", desc: "How long viewers watch your video ads, indicating engagement." },
                            { name: "Brand Lift Metrics", desc: "Measuring impact on ad recall, brand awareness, and consideration (for larger campaigns)." },
                            { name: "Engagement Metrics", desc: "Likes, shares, comments, and channel subscriptions driven by your ads." },
                        ].map(metric => (
                            <div key={metric.name} className="p-4 border border-gray-200 rounded-lg hover:border-[#3A0519]/50 transition-colors hover:shadow-sm">
                                <h4 className="font-semibold text-[#3A0519] mb-1">{metric.name}</h4>
                                <p className="text-sm text-gray-600">{metric.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Section 12 (NEW): YouTube Analytics Deep Dive: Turning Data into Action */}
            <SectionWrapper className={lightBg} id="youtube-analytics">
                <SectionHeading
                    title="YouTube Analytics Deep Dive: Turning Data into Action"
                    subtitle="We don't just report numbers; we translate complex YouTube analytics into actionable strategies for continuous improvement."
                />
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <div>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Understanding your YouTube Ads performance goes beyond surface-level metrics. Our team delves deep into YouTube Analytics and Google Ads data to uncover nuanced insights about:
                        </p>
                        <ul className="space-y-4 text-gray-700">
                            <FeatureListItem icon={<BarChart3 size={20}/>} text="<strong>Audience Behavior:</strong> Who is watching, when they drop off, and what content resonates most." />
                            <FeatureListItem icon={<Target size={20}/>} text="<strong>Attribution & Conversion Paths:</strong> How YouTube Ads contribute to overall conversions, even if not the last click." />
                            <FeatureListItem icon={<Shuffle size={20}/>} text="<strong>A/B Test Performance:</strong> Rigorous analysis of creative, targeting, and bidding test results." />
                            <FeatureListItem icon={<Eye size={20}/>} text="<strong>View-Through Conversions:</strong> Identifying users who convert after seeing (but not clicking) your ad." />
                            <FeatureListItem icon={<TrendingUp size={20}/>} text="<strong>Long-Term Trends & Seasonality:</strong> Adapting strategies based on historical performance and market dynamics." />
                        </ul>
                         <Button
                            variant="outline"
                            style={{ borderColor: primaryColor, color: primaryColor }}
                            className="mt-8 px-6 py-3 rounded-lg text-md font-semibold shadow-sm transition-all hover:shadow-md hover:bg-[#3A0519]/10"
                            onClick={() => router.push("/contact?service=youtube-ads&source=analytics-query")}
                        >
                            Learn About Our Reporting
                        </Button>
                    </div>
                     <div className="hidden md:flex justify-center items-center">
                        {/* Placeholder for a visual representing data/analytics */}
                        <div className="bg-gradient-to-br from-[#3A0519]/10 to-gray-50 p-8 rounded-xl shadow-xl aspect-square flex items-center justify-center w-full max-w-sm">
                           <BarChart size={100} className="text-[#3A0519] opacity-70" />
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Section 13: Platform Accreditations & Partnerships */}
            <SectionWrapper id="accreditations">
                 {/* ... (Content from previous response) ... */}
                <SectionHeading title="Certified Expertise & Trusted Partnerships" subtitle="Our qualifications and collaborations ensure your YouTube campaigns are in capable hands." />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto items-center">
                    {["Google Premier Partner", "YouTube Certified", "Meta Business Partner", "VidIQ Partner (Conceptual)", "TubeBuddy Affiliate (Conceptual)"].map(partner => (
                        <div key={partner} className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                            <Award size={32} className="mx-auto mb-2 text-[#3A0519]" />
                            <p className="text-sm font-semibold text-gray-700">{partner}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Section 14 (NEW): Integrating YouTube Ads with Your Overall Marketing Mix */}
            <SectionWrapper className={lightBg} id="youtube-integration">
                <SectionHeading
                    title="Holistic Growth: Integrating YouTube Ads with Your Marketing Ecosystem"
                    subtitle="YouTube Ads perform best when part of a cohesive, multi-channel marketing strategy."
                />
                <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
                    <p>
                        We believe in a synergistic approach. Your YouTube Ads campaigns are not run in isolation. We work to integrate them seamlessly with your other marketing efforts to maximize overall impact:
                    </p>
                    <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Search Engine Marketing (SEM):</strong> Use insights from YouTube (search terms, audience interests) to inform your Google Search campaigns, and vice-versa. Remarket to search users on YouTube.</li>
                        <li><strong>Social Media Marketing:</strong> Align messaging and creative themes across YouTube and platforms like Facebook, Instagram, and LinkedIn. Retarget social engagers on YouTube.</li>
                        <li><strong>Content Marketing & SEO:</strong> Promote your valuable blog content, webinars, or guides through YouTube Ads. Use video ad engagement data to inform your organic content strategy.</li>
                        <li><strong>Email Marketing:</strong> Drive YouTube viewers to subscribe to your email list. Retarget email subscribers with specific video ad sequences.</li>
                        <li><strong>Website Conversion Rate Optimization (CRO):</strong> Ensure landing pages linked from YouTube Ads are optimized for conversion, providing a seamless user experience.</li>
                    </ul>
                    <p>
                        By creating a unified customer journey across multiple touchpoints, we amplify your brand message and drive more efficient conversions.
                    </p>
                </div>
            </SectionWrapper>


            {/* Section 15: The Markov YouTube Ads Advantage (Expanded to "Why Choose Markov?") */}
            <SectionWrapper id="why-choose-markov">
                <SectionHeading title="Why Partner with Markov for Your YouTube Ads?" subtitle="Our unique approach combines expertise, technology, and a relentless focus on your success." />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        { icon: <Video size={40} />, title: "Dedicated Video Advertising Focus", desc: "We live and breathe video. Our team possesses specialized knowledge of YouTube's platform, ad formats, and best practices for video-first engagement." },
                        { icon: <Brain size={40} />, title: "Strategic & Data-Driven", desc: "Every decision is backed by data. We move beyond vanity metrics to focus on actions that drive real business growth and demonstrable ROI." },
                        { icon: <Target size={40} />, title: "Customized, Not Cookie-Cutter", desc: "We develop bespoke YouTube Ad strategies tailored to your unique business, industry, audience, and objectives. No one-size-fits-all solutions." },
                        { icon: <TrendingUp size={40} />, title: "Proactive Optimization & Innovation", desc: "The YouTube landscape is always evolving. We stay ahead of trends, continuously testing and implementing new features to keep your campaigns cutting-edge." },
                        { icon: <Handshake size={40} />, title: "Transparent & Collaborative Partnership", desc: "You'll have a dedicated point of contact, regular communication, and clear, insightful reporting. We see ourselves as an extension of your team." },
                        { icon: <ThumbsUp size={40} />, title: "Proven Track Record of Success", desc: "We have a history of helping businesses across various industries achieve significant results with YouTube Ads. (See our case studies!)" }
                    ].map((item, i) => <ModernCard key={item.title} icon={item.icon} title={item.title} description={item.desc} primaryColor={primaryColor} delay={i}/>)}
                </div>
            </SectionWrapper>
            
            {/* Section 16: Our Guiding Principles: The Markov Ethos */}
            <SectionWrapper className={lightBg} id="our-ethos">
                <SectionHeading title="Our Guiding Principles: The Markov Ethos" subtitle="The core values that drive our work, our partnerships, and our commitment to your success."/>
                 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {coreValues.map((value, i) => (
                        <div key={value.title} className="bg-white p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="mb-4 text-[#3A0519] inline-block p-3 bg-[#3A0519]/10 rounded-full">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                            <p className="text-gray-600 text-sm">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>


            {/* Section 17: Success Stories/Case Studies (YouTube Specific) */}
            <SectionWrapper id="youtube-case-studies">
                {/* ... (Content from previous response) ... */}
                <SectionHeading title="YouTube Ads Success Stories" subtitle="See how we've transformed YouTube advertising for businesses like yours." />
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                    {[
                        { title: "SaaS Company Growth", results: ["+500% Demo Sign-ups via YouTube", "70% Reduction in Cost Per Lead", "3X Increase in Brand Search Volume"], story: "Launched targeted In-Feed and Video Action Campaigns, combined with compelling explainer videos, driving high-quality leads and significantly boosting brand visibility." },
                        { title: "eCommerce Brand Expansion", results: ["250% Increase in YouTube-Driven Sales", "4.5 ROAS on Video Action Campaigns", "Significant Growth in Channel Subscribers"], story: "Utilized YouTube Shopping Ads and remarketing to showcase products to engaged audiences, resulting in direct sales and increased customer lifetime value." }
                    ].map((study, i) => (
                        <div key={study.title} className="bg-white p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#3A0519] hover:border-red-700">
                            <h3 className="text-2xl font-semibold text-[#3A0519] mb-4">{study.title}</h3>
                            <p className="text-gray-700 mb-4 italic">"{study.story}"</p>
                            <ul className="space-y-2">
                                {study.results.map(result => (
                                    <li key={result} className="flex items-center text-gray-700">
                                        <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0" /> {result}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Section 18: Testimonials (YouTube Specific if possible) */}
            <SectionWrapper className={lightBg} id="youtube-testimonials">
                 {/* ... (Content from previous response) ... */}
                <SectionHeading title="Hear From Our Satisfied YouTube Ads Clients" subtitle="Real feedback from businesses that have achieved remarkable growth with our YouTube advertising expertise." />
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {[
                        { quote: "Markov's YouTube Ads strategy completely transformed our lead generation. The quality of leads and the ROAS have been outstanding!", author: "Fatima R., Marketing Director @ TechSolutions Inc." },
                        { quote: "We were struggling to make YouTube Ads work until we partnered with this team. Their creative insights and targeting precision are unmatched.", author: "Imran S., Founder @ StyleMaven Boutique" }
                    ].map(testimonial => (
                        <div key={testimonial.author} className="bg-white p-8 rounded-xl shadow-lg">
                             <Star size={24} className="text-yellow-400 mb-4" fill="currentColor" />
                            <p className="text-gray-700 italic text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                            <p className="font-semibold text-[#3A0519]"> — {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Section 19: Meet Your Dedicated YouTube Ads Team */}
            <SectionWrapper id="youtube-team">
                {/* ... (Content from previous response) ... */}
                <SectionHeading title="Meet Your Dedicated YouTube Ads Experts" subtitle="A passionate team of certified professionals committed to maximizing your YouTube advertising success." />
                 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {teamMembers.map(member => (
                        <div key={member.name} className="bg-white p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                            <div 
                                className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-semibold text-white"
                                style={{backgroundColor: primaryColor}}
                            >
                                {member.avatarInitial}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                            <p style={{color: primaryColor}} className="font-medium text-sm mb-1">{member.role}</p>
                            <p className="text-gray-500 text-xs">{member.expertise}</p>
                        </div>
                    ))}
                </div>
                 <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
                    Our specialists combine creative flair with analytical rigor to craft YouTube campaigns that not only look great but also deliver exceptional, measurable results.
                </p>
            </SectionWrapper>
            
            {/* Section 20 (NEW): Preparing Your Business for YouTube Ads Success */}
            <SectionWrapper className={lightBg} id="preparing-for-youtube">
                <SectionHeading
                    title="Setting the Stage for YouTube Ads Success"
                    subtitle="A little preparation goes a long way. Here's what helps us hit the ground running with your campaigns."
                />
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-xl">
                    <h3 className="text-2xl font-semibold text-[#3A0519] mb-6 text-center">Key Elements for a Strong Start:</h3>
                    <ul className="space-y-5">
                        <FeatureListItem icon={<Goal size={24}/>} text="<strong>Clear Business Objectives:</strong> What do you want to achieve with YouTube Ads (e.g., brand awareness, leads, sales, website traffic)?" />
                        <FeatureListItem icon={<UsersRound size={24}/>} text="<strong>Understanding of Your Target Audience:</strong> Who are your ideal customers? What are their interests, pain points, and online behaviors?" />
                        <FeatureListItem icon={<Video size={24}/>} text="<strong>Existing Video Assets (if any):</strong> Even if not perfect, existing videos can be a starting point. If not, be open to creative discussions." />
                        <FeatureListItem icon={<LayoutGrid size={24}/>} text="<strong>Optimized Landing Pages:</strong> Where will ad clicks lead? Ensure these pages are relevant, user-friendly, and designed to convert." />
                        <FeatureListItem icon={<DollarSign size={24}/>} text="<strong>Realistic Budget Expectations:</strong> While we aim for efficiency, a sufficient budget is needed for testing, learning, and achieving meaningful scale." />
                        <FeatureListItem icon={<BarChart3 size={24}/>} text="<strong>Access to Analytics:</strong> Google Analytics and any existing ad account access helps us understand past performance and set up tracking." />
                    </ul>
                    <p className="text-center text-gray-600 mt-8 text-sm">
                        Don't worry if you don't have everything perfectly in place! Part of our process is to help you refine these elements.
                    </p>
                </div>
            </SectionWrapper>

            {/* Section 21: Simplified Onboarding: Your Path to YouTube Ads Success */}
            <SectionWrapper id="youtube-onboarding">
                {/* ... (Content from previous response) ... */}
                 <SectionHeading title="Your Journey to YouTube Ads Success: Simplified Onboarding" subtitle="We make getting started easy, ensuring a smooth transition and rapid campaign deployment." />
                <div className="max-w-3xl mx-auto">
                     <div className="space-y-10">
                        {[
                            { icon: <Handshake size={32}/>, title: "Initial Consultation & Goal Alignment (Free)", desc: "We start with a no-obligation discussion to understand your business, objectives, and how YouTube Ads can help you achieve them." },
                            { icon: <FileText size={32}/>, title: "Strategy & Proposal", desc: "Based on our consultation, we develop a custom YouTube Ads strategy and detailed proposal outlining our approach, deliverables, and pricing." },
                            { icon: <CalendarDays size={32}/>, title: "Kick-Off Meeting & Asset Collection", desc: "Once you're on board, we schedule a formal kick-off, dive deeper into specifics, and gather necessary assets (videos, branding, account access)." },
                            { icon: <Rocket size={32}/>, title: "Campaign Build, Launch & Initial Monitoring", desc: "Our team builds your campaigns, implements tracking, and launches. We then closely monitor initial performance for immediate optimizations." }
                        ].map((step, idx) => (
                            <div key={step.title} className="flex items-start p-6 bg-white rounded-xl shadow-lg border border-transparent hover:border-[#3A0519]/30 transition-all">
                                <div className="mr-5 shrink-0 text-[#3A0519] bg-[#3A0519]/10 p-3 rounded-full">
                                    {step.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{idx + 1}. {step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Section 23: YouTube Ads Management Pricing */}
            <SectionWrapper id="youtube-pricing">
                 {/* ... (Content from previous response) ... */}
                <SectionHeading title="Transparent YouTube Ads Management Pricing" subtitle="Choose a plan that fits your needs, or let us create a custom package for your unique goals." />
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
                    {[
                        { name: "Video Spark", price: "$499", features: ["Up to $2,500 Ad Spend", "1-2 Core Campaigns", "Basic Audience Targeting", "Monthly Performance Reports"] },
                        { name: "Video Amplify", price: "$999", features: ["Up to $10,000 Ad Spend", "Multiple Campaigns & Ad Groups", "Advanced Audience & Creative Testing", "Bi-Weekly Strategy Calls", "Conversion Tracking Setup"], popular: true },
                        { name: "Video Dominate", price: "Custom", features: ["Unlimited Ad Spend Potential", "Full Funnel Strategy", "Dedicated Video Strategist", "Custom Analytics Dashboards", "Ongoing Creative Consultation"] }
                    ].map((plan, i) => (
                        <div key={plan.name} className={`bg-white p-8 rounded-xl shadow-xl flex flex-col text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl ${plan.popular ? 'border-2 border-[#3A0519] relative' : 'border border-gray-200'}`}>
                            {plan.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3A0519] text-white px-4 py-1 text-xs font-semibold rounded-full shadow-md">POPULAR CHOICE</div>}
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                            <p className="text-4xl font-extrabold text-[#3A0519] mb-1">{plan.price}</p>
                            <p className="text-gray-500 mb-6">{plan.price !== "Custom" ? "/month + Ad Spend" : "Tailored For You"}</p>
                            <ul className="text-gray-600 text-sm mb-8 space-y-3 text-left flex-grow">
                                {plan.features.map(feature => (
                                    <li key={feature} className="flex items-start">
                                        <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" /> {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                style={{ backgroundColor: plan.popular ? primaryColor : '#E5E7EB', color: plan.popular ? 'white' : '#374151' }}
                                className="w-full py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:opacity-90"
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = plan.popular ? primaryHoverColor : '#D1D5DB'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = plan.popular ? primaryColor : '#E5E7EB'}
                                onClick={() => router.push(`/contact?service=youtube-ads&plan=${plan.name.toLowerCase()}`)}
                            >
                                {plan.price === "Custom" ? "Get a Custom Quote" : "Select Plan"}
                            </Button>
                        </div>
                    ))}
                </div>
                 <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
                    Ad spend is separate and paid directly to Google. Management fees are for our expertise and campaign handling.
                    <br/>Need a bespoke solution? <a href="/contact?service=youtube-ads&source=custom-pricing" style={{color: primaryColor}} className="font-semibold underline hover:opacity-80 transition-opacity">Contact us for a personalized strategy session.</a>
                </p>
            </SectionWrapper>

            {/* Section 24 (NEW): The Future is Video: Trends in YouTube Advertising */}
            <SectionWrapper className={lightBg} id="future-of-youtube-ads">
                <SectionHeading
                    title="The Future is Video: Navigating Upcoming YouTube Ad Trends"
                    subtitle="We stay ahead of the curve, preparing your brand for the next wave of video advertising innovation."
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <ModernCard
                        icon={<Sparkles size={40} />}
                        title="AI & Automation Expansion"
                        description="Increasing reliance on Google's AI for bidding, targeting, and creative suggestions (e.g., Performance Max, auto-generated assets). We help you leverage AI while maintaining strategic control."
                        primaryColor={primaryColor}
                    />
                    <ModernCard
                        icon={<ShoppingCart size={40} />}
                        title="Shoppable Video & eCommerce Integration"
                        description="Deeper integration of product feeds and direct shopping experiences within YouTube ads, blurring the lines between entertainment and commerce."
                        primaryColor={primaryColor}
                    />
                    <ModernCard
                        icon={<Layers size={40} />}
                        title="Interactive & Immersive Ad Formats"
                        description="Growth in ads featuring polls, quizzes, AR try-ons, and other interactive elements to boost engagement and data collection."
                        primaryColor={primaryColor}
                    />
                    <ModernCard
                        icon={<Tv size={40} />}
                        title="Rise of Connected TV (CTV) Advertising"
                        description="YouTube on smart TVs is a major growth area, offering premium, non-skippable ad inventory for impactful brand messaging in a living room setting."
                        primaryColor={primaryColor}
                    />
                    <ModernCard
                        icon={<ClipboardList size={40} />}
                        title="Enhanced Measurement & Attribution"
                        description="Continued evolution of cross-device tracking and attribution models to better understand YouTube's impact on the full customer journey, especially in a privacy-first world."
                        primaryColor={primaryColor}
                    />
                    <ModernCard
                        icon={<Telescope size={40} />}
                        title="Short-Form Video Dominance (Shorts)"
                        description="YouTube Shorts will continue to grow, offering new ad placements and opportunities to reach audiences with snackable, vertical video content."
                        primaryColor={primaryColor}
                    />
                </div>
                <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
                    Partnering with Markov means your YouTube Ads strategy is not just current, but future-ready.
                </p>
            </SectionWrapper>

            {/* Section 25: YouTube Ads FAQs */}
            <SectionWrapper id="youtube-faq">
                 {/* ... (Content from previous response) ... */}
                <SectionHeading title="Your YouTube Ads Questions, Answered" subtitle="Clearing up common queries to help you make informed decisions about your video advertising strategy."/>
                <div className="max-w-3xl mx-auto space-y-6">
                    {[
                        { q: "How much should I budget for YouTube Ads spend?", a: "Your ideal ad spend depends on your industry, goals, targeting, and campaign competitiveness. We typically recommend starting with a budget that allows for sufficient data collection and optimization, often $500-$1000+/month for initial testing, scaling up from there." },
                        { q: "What kind of video creative works best on YouTube?", a: "Successful YouTube ads are engaging from the first few seconds, offer clear value, have strong calls-to-action, and are tailored to the platform's viewing habits. We provide guidance on creating effective video content." },
                        { q: "Can I use YouTube Ads if I don't have a large video production budget?", a: "Absolutely! Effective YouTube ads can be created with various budgets. We can advise on cost-effective production or help optimize existing video assets. Authenticity often outperforms high production value." },
                        { q: "How long does it take to see results from YouTube Ads?", a: "Initial traction like views and clicks can be seen quickly. Meaningful business results like leads or sales typically take 1-3 months to optimize as we gather data and refine campaigns. It's an iterative process." },
                        { q: "Do you manage YouTube channel growth as well?", a: "While our primary focus is on paid YouTube advertising, effective ad campaigns often contribute to organic channel growth (subscribers, views on organic content). We can discuss strategies to align ads with your channel goals." },
                        { q: "How do you measure the success of a YouTube Ads campaign?", a: "Success is measured against your specific business goals. Key metrics include View Rate, CTR, Conversions, CPA, ROAS, and Brand Lift (awareness, consideration, ad recall). We provide comprehensive reports on these." },
                        { q: "What's the difference between CPV and CPM bidding?", a: "CPV (Cost Per View) means you pay when someone watches your video ad (or interacts with it). CPM (Cost Per Mille/Thousand Impressions) means you pay for every thousand times your ad is shown. The best strategy depends on your campaign goals." },

                    ].map((item, index) => (
                        <details key={index} className="bg-white p-6 rounded-lg shadow-md group border border-gray-200">
                            <summary className="font-semibold text-lg text-gray-800 cursor-pointer flex justify-between items-center list-none group-open:text-[#3A0519]">
                                {item.q}
                                <ChevronRight size={20} className="transform transition-transform duration-200 group-open:rotate-90 shrink-0 ml-2" />
                            </summary>
                            <p className="text-gray-600 mt-3 pt-3 border-t border-gray-200 leading-relaxed">{item.a}</p>
                        </details>
                    ))}
                </div>
            </SectionWrapper>

            {/* Section 26: Get Your Free YouTube Ads Growth Blueprint (Lead Form) */}
            <SectionWrapper className="bg-gray-50" id="youtube-proposal">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                        Ready to Amplify Your Brand with YouTube Ads?
                    </h2>
                    <p className="text-xl md:text-2xl mb-10 text-gray-700 opacity-90 leading-relaxed">
                        Let's craft a high-impact YouTube advertising strategy that drives brand awareness, generates leads, and boosts your sales. Request your free, no-obligation proposal today.
                    </p>
                </div>
                <div className="bg-gradient-to-br from-[#3A0519] via-[#4a061d] to-[#2a0413] rounded-xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-3xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
                        Get Your <span className="underline">FREE</span> YouTube Ads Growth Blueprint
                    </h3>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                        <input type="text" placeholder="First Name*" className="col-span-1 md:col-span-1 bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3A0519] text-gray-700 placeholder:text-gray-500 transition-shadow focus:shadow-md" required />
                        <input type="text" placeholder="Last Name*" className="col-span-1 md:col-span-1 bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3A0519] text-gray-700 placeholder:text-gray-500 transition-shadow focus:shadow-md" required />
                        <input type="email" placeholder="Work Email Address*" className="md:col-span-2 bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3A0519] text-gray-700 placeholder:text-gray-500 transition-shadow focus:shadow-md" required />
                        <input type="text" placeholder="Company Name*" className="md:col-span-2 bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3A0519] text-gray-700 placeholder:text-gray-500 transition-shadow focus:shadow-md" required />
                        <input type="text" placeholder="Website URL (Optional)" className="md:col-span-2 bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3A0519] text-gray-700 placeholder:text-gray-500 transition-shadow focus:shadow-md" />
                         <select defaultValue="" className="md:col-span-2 bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3A0519] text-gray-700 transition-shadow focus:shadow-md appearance-none" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }} required>
                            <option value="" disabled className="text-gray-500">Primary Goal with YouTube Ads*</option>
                            <option className="text-gray-700" value="Increase Brand Awareness">Increase Brand Awareness</option>
                            <option className="text-gray-700" value="Generate Leads">Generate Leads</option>
                            <option className="text-gray-700" value="Drive Website Traffic">Drive Website Traffic</option>
                            <option className="text-gray-700" value="Boost Sales / Conversions">Boost Sales / Conversions</option>
                            <option className="text-gray-700" value="Grow YouTube Channel">Grow YouTube Channel</option>
                            <option className="text-gray-700" value="Not Sure Yet / Need Audit">Not Sure Yet / Need Audit</option>
                        </select>
                        <textarea placeholder="Briefly describe your business and what you hope to achieve..." className="md:col-span-2 bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3A0519] text-gray-700 placeholder:text-gray-500 min-h-[100px] transition-shadow focus:shadow-md" />
                        <Button
                            type="submit"
                            style={{ backgroundColor: primaryColor, color: 'white' }}
                            className="md:col-span-2 py-3.5 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 ring-offset-2 ring-white"
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = primaryHoverColor}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = primaryColor}
                        >
                            Request My Free Blueprint
                        </Button>
                        <div className="md:col-span-2 text-xs text-gray-300 mt-2 text-center">
                            We'll get back to you within 1 business day.
                            <br />Or call us now: <a href="tel:8669084748" className="font-semibold hover:underline text-gray-200 hover:text-white transition-opacity">866.908.4748</a>
                        </div>
                    </form>
                </div>
            </SectionWrapper>
        </div>
    );
}