"use client";

import React, { isValidElement, cloneElement } from 'react';
import { Button } from "@/components/ui/button"; // Assuming this provides a base Button
import { 
    Facebook, Users, BarChart2, Target, Globe, TrendingUp, ArrowRight,
    Brain, Lightbulb, CheckCircle, BarChartHorizontalBig,
    Zap, Eye, Filter, Shuffle, FileText, HelpCircle, MessageSquare,
    PieChart, Palette, MonitorPlay, ShoppingBag, Edit3, UsersRound, Settings2,
    Award, Briefcase, Presentation, Paintbrush, TrendingDown // Removed duplicate Users
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// --- Enhanced Helper Components ---

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    bgVariant?: 'default' | 'light' | 'dark' | 'gradient';
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = "", id, bgVariant = 'default' }) => {
    let bgClass = "bg-white"; // Default
    if (bgVariant === 'light') bgClass = "bg-slate-50";
    else if (bgVariant === 'dark') bgClass = "bg-slate-900 text-white"; // Example dark variant
    else if (bgVariant === 'gradient') bgClass = "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50";


    return (
        <section id={id} className={`py-20 md:py-28 ${bgClass} ${className}`}>
            <div className="container mx-auto px-4 max-w-7xl"> {/* Wider max-width */}
                {children}
            </div>
        </section>
    );
};


interface SectionTitleProps {
    title: string;
    subtitle?: string;
    className?: string;
    alignment?: 'center' | 'left';
    isDark?: boolean;
}

const SectionTitle = ({ title, subtitle, className = "", alignment = 'center', isDark = false }: SectionTitleProps) => (
    <div className={`mb-12 md:mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'} ${className}`}>
        <h2 className={`text-3xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-800'} mb-4 tracking-tight`}>{title}</h2>
        {subtitle && <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'} max-w-3xl ${alignment === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>}
        <div className={`w-24 h-1.5 bg-gradient-to-r from-[#1877F2] to-[#0A66C2] ${alignment === 'center' ? 'mx-auto' : ''} mt-6 rounded-full`}></div>
    </div>
);

interface ModernFeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
}

const ModernFeatureCard: React.FC<ModernFeatureCardProps> = ({ icon, title, description, className }) => (
    <div className={`bg-white p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 ${className}`}>
        <div className="mb-5 p-3 inline-block bg-gradient-to-br from-[#1877F2]/10 to-[#0A66C2]/10 rounded-xl">
            {isValidElement(icon)
                ? cloneElement(icon as React.ReactElement<any>, { className: `w-10 h-10 text-[#1877F2]` })
                : icon}
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">{title}</h3>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">{description}</p>
    </div>
);

interface NumberedListItemProps {
    number: string;
    title: string;
    description: string;
}
const NumberedListItem: React.FC<NumberedListItemProps> = ({ number, title, description }) => (
    <div className="flex items-start space-x-4 group">
        <div className="flex-shrink-0 mt-1 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#1877F2] to-[#125CBD] text-white rounded-full font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
            {number}
        </div>
        <div>
            <h3 className="text-xl font-semibold text-[#125CBD] mb-1 group-hover:text-[#1877F2] transition-colors">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
    </div>
);


export default function FacebookAdvertisingPage() {
    const router = useRouter();
    
    const faqItems = [
        { q: "How much do Facebook Ads cost?", a: "Costs vary based on targeting, industry, and ad quality. We work with your budget to maximize ROI, starting with clear discussions on ad spend. Our average client sees positive returns within the first 3 months." },
        { q: "How long does it take to see results?", a: "Initial data can appear within days. Significant results and optimizations often take a few weeks to a couple of months as we gather data, refine campaigns, and let the algorithm learn." },
        { q: "Do you provide reports on ad performance?", a: "Absolutely. We provide transparent, weekly/bi-weekly (customizable) reports on key metrics, campaign progress, and actionable insights, ensuring you're always informed." },
        { q: "Can you target specific locations or demographics?", a: "Yes, Facebook's targeting is incredibly granular. We can target specific countries, regions, cities, ZIP codes, or even a radius around a business, along with detailed demographics, interests, and behaviors." },
        { q: "What makes your agency different?", a: "We combine data-driven strategies with creative excellence and a relentless focus on client ROI. Our transparent communication and partnership approach set us apart." },
    ];

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden bg-slate-50"> {/* Changed default bg */}
            
            {/* 1. Hero Section (Major Overhaul) */}
            <section className="relative min-h-screen flex items-center justify-center py-20 md:py-0 bg-gradient-to-br from-[#0A66C2] via-[#1877F2] to-[#2F9CFF]">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/path-to-abstract-bg.svg')" }}></div> {/* Placeholder for subtle pattern */}
                <div className="relative z-10 container mx-auto px-4 max-w-5xl text-center">
                    <div className="inline-block mb-8 p-5 bg-white/20 backdrop-blur-md rounded-full shadow-lg">
                        <Facebook className="w-16 h-16 md:w-20 md:h-20 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight [text-shadow:_0_3px_5px_rgba(0,0,0,0.2)]">
                        <span className="block">Unlock Facebook.</span>
                        <span className="block">Unleash Growth.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto [text-shadow:_0_2px_3px_rgba(0,0,0,0.1)]">
                        We craft high-impact Facebook advertising strategies that connect you with your ideal audience, drive meaningful engagement, and deliver exceptional results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            onClick={() => router.push('/contact?service=facebook-ads&ref=hero')}
                            size="lg"
                            className="bg-white text-[#1877F2] hover:bg-slate-100 transition-all font-bold text-lg px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            Get Your Free Audit <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button 
                            variant="outline"
                            size="lg"
                            onClick={() => document.getElementById('why-facebook')?.scrollIntoView({ behavior: 'smooth' })}
                            className="border-white/50 text-white hover:bg-white/10 hover:border-white transition-all font-semibold text-lg px-10 py-4 rounded-lg backdrop-blur-sm"
                        >
                            Discover How
                        </Button>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-20 bg-slate-50" style={{clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div> {/* Angled transition */}
            </section>

            {/* 2. Introduction: What is Facebook Advertising? */}
            <SectionWrapper id="what-is-facebook" bgVariant="default">
                <SectionTitle 
                    title="The Essence of Facebook Advertising"
                    subtitle="It's far more than boosted posts. It's your direct line to billions, powered by precision targeting and compelling storytelling."
                />
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="text-slate-700 space-y-5 leading-relaxed text-lg">
                        <p>
                            Facebook Advertising is a dynamic platform enabling businesses to display targeted ads to users on Facebook, Instagram, Messenger, and the Audience Network. It's not just about visibility; it's about <strong className="text-[#1877F2]">strategic connection</strong>.
                        </p>
                        <p>
                            By leveraging its vast user data and sophisticated algorithms, you can reach specific demographics, interests, and behaviors, turning passive scrollers into active customers. We help you navigate this ecosystem to achieve your unique marketing goals.
                        </p>
                    </div>
                    <div className="relative p-6 bg-gradient-to-br from-[#1877F2]/5 via-transparent to-transparent rounded-2xl shadow-lg">
                        <img 
                            src="https://images.unsplash.com/photo-1554256155-43cf669a2d73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" // Replace with a more relevant image
                            alt="Facebook Ads Interface Mockup" 
                            className="rounded-xl shadow-2xl w-full object-cover" 
                        />
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#1877F2] rounded-full flex items-center justify-center shadow-xl">
                            <Target className="w-10 h-10 text-white" />
                        </div>
                    </div>
                </div>
            </SectionWrapper>
            
            {/* 3. Why Your Business Needs Facebook Ads */}
            <SectionWrapper id="why-facebook" bgVariant="light">
                <SectionTitle 
                    title="Unlock Exponential Growth with Facebook Ads"
                    subtitle="Don't just exist online. Thrive by connecting with your audience where they spend their time."
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ModernFeatureCard 
                        icon={<Users />}
                        title="Colossal Audience Access"
                        description="Tap into nearly 3 billion active users. Your ideal customers are on Facebook, waiting to discover you."
                    />
                    <ModernFeatureCard 
                        icon={<Filter />}
                        title="Pinpoint Targeting Precision"
                        description="Go beyond basic demographics. Target by interests, online behaviors, purchase history, and lookalike audiences for unmatched relevance."
                    />
                    <ModernFeatureCard 
                        icon={<Presentation />}
                        title="Tangible ROI & Crystal-Clear Analytics"
                        description="Track every dollar, measure every click, and understand your campaign's impact with robust, real-time data."
                    />
                    <ModernFeatureCard 
                        icon={<Award />}
                        title="Elevate Brand Authority"
                        description="Build lasting brand recognition and establish yourself as a leader in your niche through consistent, engaging ad presence."
                    />
                    <ModernFeatureCard 
                        icon={<TrendingUp />}
                        title="Fuel Your Sales Funnel"
                        description="Drive high-quality traffic to your website, generate qualified leads, and directly boost sales and conversions."
                    />
                    <ModernFeatureCard 
                        icon={<CheckCircle />}
                        title="Achieve Diverse Objectives"
                        description="From boosting app installs to increasing event attendance or local foot traffic, Facebook Ads adapt to your specific goals."
                    />
                </div>
            </SectionWrapper>
            
            {/* 4. Our Comprehensive Facebook Advertising Services */}
            <SectionWrapper id="our-services" bgVariant="default">
                <SectionTitle 
                    title="Your End-to-End Facebook Ads Partner"
                    subtitle="We handle the complexity, so you can focus on your business. Our holistic approach covers every facet of successful Facebook advertising."
                    alignment="left"
                />
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1877F2] to-[#0A66C2] rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" // Strategy meeting / team working
                            alt="Strategic Facebook Ads Management Team" 
                            className="relative rounded-xl shadow-2xl object-cover w-full aspect-video md:aspect-auto md:h-[500px]"
                        />
                    </div>
                    <div className="space-y-8">
                        {[
                            { icon: <Brain className="text-[#1877F2]" />, title: "Bespoke Strategy & Roadmapping", desc: "In-depth analysis of your goals to create a tailored advertising blueprint for maximum impact." },
                            { icon: <UsersRound className="text-[#1877F2]" />, title: "Advanced Audience Intelligence", desc: "Deep dives into audience research, persona creation, and lookalike modeling for hyper-targeting." },
                            { icon: <Paintbrush className="text-[#1877F2]" />, title: "High-Conversion Creative Studio", desc: "Designing scroll-stopping visuals and writing persuasive ad copy that captivates and converts." },
                            { icon: <Settings2 className="text-[#1877F2]" />, title: "Precision Campaign Architecture", desc: "Expert setup, meticulous management, and ongoing optimization of your campaigns for peak performance." },
                            { icon: <BarChartHorizontalBig className="text-[#1877F2]" />, title: "Continuous Performance Optimization", desc: "Relentless A/B testing, budget management, and data analysis to ensure your ROI keeps climbing." },
                            { icon: <FileText className="text-[#1877F2]" />, title: "Transparent & Insightful Reporting", desc: "Clear, actionable reports that go beyond numbers, providing strategic recommendations." }
                        ].map(item => (
                            <div key={item.title} className="flex items-start p-4 bg-slate-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow ring-1 ring-slate-200/50 hover:ring-[#1877F2]/30">
                                <div className="flex-shrink-0 mr-5 text-[#1877F2] bg-gradient-to-br from-[#1877F2]/10 to-[#0A66C2]/10 p-3 rounded-lg">{React.cloneElement(item.icon, {size: 28})}</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                                    <p className="text-slate-600 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* 5. Deep Dive: Unparalleled Targeting Capabilities */}
            <SectionWrapper bgVariant="light">
                <SectionTitle
                    title="Reach Your Perfect Customer, Every Time"
                    subtitle="Facebook's targeting is a science. We make it an art for your business."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                    {[
                        { title: "Demographic Precision", desc: "Age, gender, education, life events, job titles, income levels, and more.", icon: <Users className="text-blue-600" />, color: "blue" },
                        { title: "Interest-Based Affinity", desc: "Connect with users based on their hobbies, liked pages, app usage, and declared interests.", icon: <Lightbulb className="text-green-500" />, color: "green" },
                        { title: "Behavioral Insights", desc: "Target based on purchase history, device usage, travel patterns, and other online activities.", icon: <Zap className="text-purple-500" />, color: "purple" },
                        { title: "Geo-Fencing & Location", desc: "Country, region, city, ZIP, or radius targeting for local and global reach.", icon: <Globe className="text-orange-500" />, color: "orange" },
                        { title: "Custom Audience Mastery", desc: "Re-engage website visitors, app users, or your existing customer lists with tailored messaging.", icon: <Target className="text-red-500" />, color: "red" },
                        { title: "Lookalike Expansion", desc: "Discover new, high-potential customers who mirror your best existing clients.", icon: <UsersRound className="text-teal-500" />, color: "teal" }
                    ].map(item => (
                        <div key={item.title} className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-${item.color}-500`}>
                            <div className="flex items-center mb-4">
                                <div className={`p-3 bg-${item.color}-500/10 rounded-full mr-4`}>{React.cloneElement(item.icon, {size: 28, className: `text-${item.color}-500`})}</div>
                                <h3 className={`text-xl font-semibold text-slate-800`}>{item.title}</h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* 6. Choosing the Right Ad Objectives */}
            <SectionWrapper bgVariant="default">
                 <SectionTitle 
                    title="Strategic Objectives for Tangible Outcomes"
                    subtitle="Every campaign is goal-driven. We align Facebook's objectives with your business ambitions."
                />
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[
                        { name: "Awareness", desc: "Broaden your reach and build top-of-mind brand recognition.", examples: ["Brand Awareness", "Reach"], icon: <Eye /> },
                        { name: "Consideration", desc: "Engage potential customers and guide them to learn more about you.", examples: ["Traffic", "Engagement", "App Installs", "Video Views", "Lead Generation", "Messages"], icon: <Brain /> },
                        { name: "Conversion", desc: "Drive valuable actions like sales, sign-ups, or store visits.", examples: ["Conversions", "Catalog Sales", "Store Traffic"], icon: <CheckCircle /> }
                    ].map(obj => (
                        <div key={obj.name} className="p-8 bg-white rounded-xl shadow-xl border border-slate-100 hover:border-[#1877F2]/50 transition-colors">
                            <div className="mb-4 inline-block p-4 bg-gradient-to-br from-[#1877F2]/10 to-[#0A66C2]/10 rounded-full">
                                {React.cloneElement(obj.icon, {className: "w-10 h-10 text-[#1877F2]"})}
                            </div>
                            <h3 className="text-2xl font-semibold text-[#1877F2] mb-3">{obj.name}</h3>
                            <p className="text-slate-700 mb-4">{obj.desc}</p>
                            <div className="text-sm text-slate-500 space-y-1">
                                {obj.examples.map(ex => <p key={ex}>{ex}</p>)}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* 7. Mastering Facebook Ad Formats */}
            <SectionWrapper bgVariant="light">
                <SectionTitle 
                    title="Compelling Ad Formats That Captivate"
                    subtitle="We utilize a diverse arsenal of ad formats, ensuring your message is delivered with maximum impact on every placement."
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Dynamic Image Ads", desc: "Crisp, stunning visuals paired with persuasive copy.", icon: <Palette />, img: "https://placehold.co/600x400/E2E8F0/718096?text=Image+Ad" },
                        { title: "Engaging Video Ads", desc: "Storytelling that moves, educates, and converts.", icon: <MonitorPlay />, img: "https://placehold.co/600x400/E2E8F0/718096?text=Video+Ad" },
                        { title: "Interactive Carousel Ads", desc: "Showcase multiple products or features in one ad.", icon: <ShoppingBag />, img: "https://placehold.co/600x400/E2E8F0/718096?text=Carousel+Ad" },
                        { title: "Immersive Collection Ads", desc: "Rich mobile experiences for product discovery.", icon: <Briefcase />, img: "https://placehold.co/600x400/E2E8F0/718096?text=Collection+Ad" },
                        { title: "Instant Experience Ads", desc: "Full-screen, fast-loading mobile landing pages.", icon: <Zap />, img: "https://placehold.co/600x400/E2E8F0/718096?text=Instant+Ad" },
                        { title: "Efficient Lead Ads", desc: "Seamlessly capture leads with native forms.", icon: <Edit3 />, img: "https://placehold.co/600x400/E2E8F0/718096?text=Lead+Ad" }
                    ].map((format) => (
                         <div key={format.title} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                            <img src={format.img} alt={format.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <div className="p-2 bg-[#1877F2]/10 rounded-full mr-3">{React.cloneElement(format.icon, {size: 24, className: "text-[#1877F2]"})}</div>
                                    <h3 className="text-lg font-semibold text-[#1877F2]">{format.title}</h3>
                                </div>
                                <p className="text-slate-600 text-sm">{format.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* 8. Our Proven Strategic Approach */}
            <SectionWrapper bgVariant="default">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <SectionTitle 
                            title="Our Blueprint for Your Success"
                            subtitle="A meticulous, data-centric methodology designed for sustained growth and optimal ad spend efficiency."
                            alignment="left"
                        />
                        <div className="space-y-8 mt-10">
                            <NumberedListItem number="01" title="Strategic Immersion & Discovery" description="We dive deep into your business, audience, and goals to build a robust foundation." />
                            <NumberedListItem number="02" title="Precision Campaign Architecture" description="Logical structuring of campaigns, ad sets, and ads for effective targeting and analysis." />
                            <NumberedListItem number="03" title="Creative Excellence & Persuasion" description="Crafting compelling visuals and copy that resonate deeply and drive desired actions." />
                            <NumberedListItem number="04" title="Relentless Optimization Engine" description="Continuous A/B testing and data analysis to refine and scale what works best." />
                            <NumberedListItem number="05" title="Transparent Reporting & Insights" description="Clear, actionable reports that empower you with knowledge and drive collaborative improvement." />
                        </div>
                    </div>
                    <div className="relative mt-12 lg:mt-0">
                        <div className="bg-gradient-to-br from-[#1877F2] to-[#0A66C2] p-8 rounded-2xl shadow-2xl text-white">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white/20 rounded-full mr-4">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold">Typical Performance Uplift</h3>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { metric: "Avg. Click-Through Rate (CTR)", value: "2.5x - 3.5x Boost", benchmark: "Compared to industry averages" },
                                    { metric: "Avg. Cost Per Acquisition (CPA)", value: "20-40% Reduction", benchmark: "Through strategic optimization" },
                                    { metric: "Return on Ad Spend (ROAS)", value: "Consistently 3x - 7x+", benchmark: "Based on client averages" }
                                ].map((stat) => (
                                    <div key={stat.metric} className="pb-3 border-b border-white/20 last:border-b-0">
                                        <div className="flex justify-between items-baseline">
                                            <span className="font-semibold text-lg">{stat.metric}</span>
                                            <span className="text-2xl font-bold">{stat.value}</span>
                                        </div>
                                        <p className="text-sm text-white/80 mt-1">{stat.benchmark}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-xs text-white/70 italic text-center">Results vary by client, industry, and budget. These figures represent typical outcomes.</p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
            
            {/* 9. The Power of the Facebook Pixel & Conversion API */}
            <SectionWrapper bgVariant="gradient"> {/* Using gradient background */}
                <SectionTitle 
                    title="Unlock Data Supremacy: Pixel & CAPI"
                    subtitle="Harness the full power of Facebook's tracking to measure, optimize, and retarget with unparalleled accuracy."
                />
                <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                    <Filter className="w-28 h-28 md:w-36 md:h-36 text-[#1877F2] mx-auto lg:mx-0 flex-shrink-0 opacity-80" />
                    <div className="text-slate-700 space-y-4 flex-grow">
                        <p className="text-lg">The Facebook Pixel and Conversion API (CAPI) are your digital detectives, providing critical data for campaign success. They work in tandem to ensure robust tracking, even amidst evolving privacy landscapes.</p>
                        <h4 className="text-xl font-semibold text-slate-800 mt-4">Key Advantages We Leverage:</h4>
                        <ul className="grid md:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                            {[
                                "Pinpoint Conversion Tracking", "Algorithmic Ad Optimization",
                                "Granular Custom Audiences", "High-Value Lookalike Creation",
                                "Accurate Cross-Device Measurement", "Enhanced Retargeting Strategies"
                            ].map(benefit => (
                                <li key={benefit} className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> {benefit}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 font-medium text-[#125CBD]">We guarantee expert Pixel & CAPI implementation for every client, future-proofing your advertising efforts.</p>
                    </div>
                </div>
            </SectionWrapper>
            
            {/* Remaining sections would follow a similar pattern of enhancement */}
            {/* Sections 10-16: I'll provide a condensed version to keep the response manageable, but the principle is the same: more visual appeal, better layouts, stronger copy. */}

            {/* 10. Crafting Compelling Ad Creatives */}
            <SectionWrapper bgVariant="default">
                <SectionTitle title="Creatives That Command Attention & Convert" subtitle="Design and copy that stops thumbs and opens wallets." />
                {/* Use cards with image placeholders for "Visual Design", "Persuasive Copy", "Platform Native" */}
                 <div className="grid md:grid-cols-3 gap-8 mt-10">
                    <ModernFeatureCard icon={<Palette />} title="Visually Arresting Design" description="Striking visuals optimized for every placement, designed to captivate instantly."/>
                    <ModernFeatureCard icon={<Edit3 />} title="Persuasive & Resonant Copy" description="Benefit-driven narratives that speak directly to your audience's aspirations and pain points."/>
                    <ModernFeatureCard icon={<CheckCircle />} title="Platform-Native Excellence" description="Ads that feel organic and engaging, adhering to best practices for maximum performance."/>
                </div>
            </SectionWrapper>

            {/* 11. A/B Testing & Continuous Optimization */}
            <SectionWrapper bgVariant="light">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionTitle title="Never Settle: The Optimization Obsession" subtitle="Good isn't good enough. We relentlessly test and refine for peak performance." alignment="left"/>
                        <p className="text-slate-600 leading-relaxed mb-6">We systematically A/B test creatives, audiences, placements, CTAs, and bidding strategies. This iterative cycle uncovers winning formulas, scales success, and ensures your budget works smarter, not just harder.</p>
                        <Button onClick={() => router.push('/contact?interest=optimization-strategy')} className="bg-[#1877F2] hover:bg-[#125CBD]">Discuss Our Testing Methods</Button>
                    </div>
                    <div className="flex justify-center">
                        <Shuffle className="w-32 h-32 md:w-48 md:h-48 text-[#1877F2] opacity-70"/>
                    </div>
                </div>
            </SectionWrapper>

            {/* 12. Transparent Reporting & Performance Analytics */}
             <SectionWrapper bgVariant="default">
                <SectionTitle title="Clarity & Accountability: Your Data Story" subtitle="Understand your ROI with comprehensive, easy-to-digest reports and actionable insights."/>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="p-8 bg-slate-100 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold text-[#1877F2] mb-4">Our Reporting Pillars:</h3>
                        <ul className="space-y-3 text-slate-700">
                            {["KPI Dashboards (Impressions, CTR, CPC, CPA, ROAS)", "Campaign & Ad Set Performance Breakdowns", "Audience & Demographic Insights", "Creative Performance Analysis", "Budget Pacing & Recommendations", "Strategic Summaries & Next Steps"].map(item => (
                                <li key={item} className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />{item}</li>
                            ))}
                        </ul>
                    </div>
                     <div className="text-center md:text-left">
                        <img src="https://placehold.co/500x300/E2E8F0/718096?text=Sample+Report+Graph" alt="Sample Report Graph" className="rounded-lg shadow-xl mx-auto md:mx-0"/>
                        <p className="text-slate-600 mt-6 leading-relaxed">We transform raw data into strategic intelligence, empowering you to make informed decisions and witness tangible growth.</p>
                    </div>
                </div>
            </SectionWrapper>
            
            {/* 13. Industry Expertise & Success Stories */}
            <SectionWrapper bgVariant="gradient">
                <SectionTitle title="Proven Results, Tangible Success" subtitle="We're proud of the impact we've made. (More detailed case studies coming soon!)"/>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Placeholder for 3 case study cards */}
                    {[1,2,3].map(i => (
                        <div key={i} className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl text-center hover:scale-105 transition-transform">
                             <img src={`https://placehold.co/100x100/1877F2/FFFFFF?text=Client+${i}`} alt={`Client ${i} Logo`} className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-white shadow-md"/>
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Client Success Story {i}</h3>
                            <p className="text-sm text-slate-600 mb-3">Increased ROAS by <span className="font-bold text-[#1877F2]">{(i*1.5)+2}x</span> in {i+2} months for [Industry {i}].</p>
                            <Button variant="link" className="text-[#1877F2]" onClick={() => router.push(`/case-studies/client-${i}`)}>Read More <ArrowRight className="w-4 h-4 ml-1"/></Button>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* 14. Frequently Asked Questions (FAQ) */}
            <SectionWrapper bgVariant="default">
                <SectionTitle title="Your Questions, Answered" />
                <div className="max-w-3xl mx-auto space-y-5">
                    {faqItems.map((item, index) => (
                        <details key={index} className="group bg-white p-5 rounded-xl shadow-lg border border-slate-100 hover:border-[#1877F2]/30 transition-colors">
                            <summary className="flex justify-between items-center font-semibold text-slate-800 cursor-pointer list-none text-lg group-hover:text-[#1877F2]">
                                {item.q}
                                <HelpCircle className="w-6 h-6 text-slate-400 group-open:text-[#1877F2] transition-colors group-open:rotate-180 transform duration-300" />
                            </summary>
                            <p className="text-slate-600 mt-4 text-base leading-relaxed group-open:animate-fadeIn">
                                {item.a}
                            </p>
                        </details>
                    ))}
                </div>
            </SectionWrapper>

            {/* 15. Get Started: Your Path to Facebook Ads Success */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-[#0A66C2] via-[#1877F2] to-[#125CBD] text-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <Lightbulb className="w-20 h-20 text-yellow-300 mx-auto mb-8 animate-pulse" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 [text-shadow:_0_2px_4px_rgba(0,0,0,0.2)]">Ready to Ignite Your Growth Engine?</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto [text-shadow:_0_1px_2px_rgba(0,0,0,0.1)]">
                        Stop leaving money on the table. Let our Facebook advertising specialists develop a custom strategy that delivers real, measurable results. Your journey to increased revenue starts now.
                    </p>
                    <div className="flex flex-col md:flex-row gap-5 justify-center">
                        <Button 
                            onClick={() => router.push('/contact?service=facebook-ads&source=final-cta')}
                            size="lg"
                            className="bg-white text-[#1877F2] hover:bg-slate-100 transition-all font-bold text-lg px-12 py-5 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            Book Your Free Strategy Session <ArrowRight className="w-6 h-6 ml-2" />
                        </Button>
                        <Button 
                            onClick={() => router.push('/services')}
                            size="lg"
                            variant="outline"
                            className="border-white/50 text-white hover:bg-white/10 hover:border-white transition-all font-semibold text-lg px-12 py-5 rounded-lg backdrop-blur-sm"
                        >
                            See All Our Expertise
                        </Button>
                    </div>
                </div>
            </section>

            {/* 16. Bonus: Related Services / Explore More */}
            <SectionWrapper bgVariant="light">
                <SectionTitle 
                    title="Amplify Your Impact: Explore More"
                    subtitle="Facebook Ads are powerful. Combined with other strategies, they're unstoppable."
                />
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: "Instagram Ads", link: "/services/instagram-advertising", icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png", color: "#C13584", desc: "Visually stunning campaigns for a highly engaged audience." },
                        { name: "Google Ads", link: "/services/google-ads", icon: "https://cdn-icons-png.flaticon.com/512/281/281764.png", color: "#4285F4", desc: "Capture high-intent users actively searching for your solutions." },
                        { name: "SEO Services", link: "/services/seo", icon: "https://cdn-icons-png.flaticon.com/512/3659/3659897.png", color: "#2E7D32", desc: "Dominate search rankings and drive sustainable organic traffic." }
                    ].map(service => (
                         <Link key={service.name} href={service.link} className="block bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4" style={{borderColor: service.color}}>
                            <img src={service.icon} alt={service.name} className="w-16 h-16 mx-auto mb-5"/>
                            <h3 className="text-2xl font-semibold text-center mb-2" style={{color: service.color}}>{service.name}</h3>
                            <p className="text-slate-600 text-sm text-center">{service.desc}</p>
                        </Link>
                    ))}
                </div>
            </SectionWrapper>
        </main>
    );
}