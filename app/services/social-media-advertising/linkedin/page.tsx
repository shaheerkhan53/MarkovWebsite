"use client";

import React, { isValidElement, cloneElement } from 'react';
import { Button } from "@/components/ui/button"; // Assuming this provides a base Button
import { 
    Linkedin, Users, BarChart2, Target, Globe, TrendingUp, ArrowRight,
    Brain, Lightbulb, CheckCircle, BarChartHorizontalBig,
    Zap, Eye, Filter, Shuffle, FileText, HelpCircle, MessageSquare,
    PieChart, Palette, MonitorPlay, ShoppingBag, Edit3, UsersRound, Settings2,
    Award, Briefcase, Presentation, Paintbrush,
    Building, BookOpen, Network, UserCheck, FileSpreadsheet, Handshake // Added LinkedIn specific icons
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// --- Reusable Helper Components (ensure they are defined or imported as previously) ---

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    bgVariant?: 'default' | 'light' | 'dark' | 'gradient' | 'linkedin-gradient'; // Added linkedin-gradient
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = "", id, bgVariant = 'default' }) => {
    let bgClass = "bg-white"; // Default
    if (bgVariant === 'light') bgClass = "bg-slate-50";
    else if (bgVariant === 'dark') bgClass = "bg-slate-900 text-white";
    else if (bgVariant === 'gradient') bgClass = "bg-gradient-to-br from-blue-50 via-sky-50 to-slate-50"; // Generic soft gradient
    else if (bgVariant === 'linkedin-gradient') bgClass = "bg-gradient-to-br from-[#0077B5] to-[#00A0DC]"; // LinkedIn's gradient

    return (
        <section id={id} className={`py-20 md:py-28 ${bgClass} ${className}`}>
            <div className="container mx-auto px-4 max-w-7xl">
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
    color?: string; 
}

const getSecondaryLinkedInGradientColor = (primaryColor: string) => {
    if (primaryColor === "#0077B5") return "#00A0DC"; // LinkedIn Blue to Light Blue
    return "#0E76A8"; // Darker LinkedIn Blue
}

const SectionTitle = ({ title, subtitle, className = "", alignment = 'center', isDark = false, color = "#0077B5" }: SectionTitleProps) => (
    <div className={`mb-12 md:mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'} ${className}`}>
        <h2 className={`text-3xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-800'} mb-4 tracking-tight`}>{title}</h2>
        {subtitle && <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'} max-w-3xl ${alignment === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>}
        <div 
            className={`w-24 h-1.5 ${alignment === 'center' ? 'mx-auto' : ''} mt-6 rounded-full`} 
            style={{backgroundImage: `linear-gradient(to right, ${color}, ${getSecondaryLinkedInGradientColor(color)})`}}
        ></div>
    </div>
);


interface ModernFeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
    iconBgGradient?: string; 
    iconColor?: string; 
}

const ModernFeatureCard: React.FC<ModernFeatureCardProps> = ({ icon, title, description, className, iconBgGradient = "from-[#0077B5]/10 to-[#00A0DC]/10", iconColor = "text-[#0077B5]" }) => (
    <div className={`bg-white p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 ${className}`}>
        <div className={`mb-5 p-3 inline-block bg-gradient-to-br ${iconBgGradient} rounded-xl`}>
            {isValidElement(icon)
                ? cloneElement(icon as React.ReactElement<any>, { className: `w-10 h-10 ${iconColor}` })
                : icon}
        </div>
        <h3 className={`text-xl md:text-2xl font-semibold text-slate-800 mb-3`}>{title}</h3>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">{description}</p>
    </div>
);

interface NumberedListItemProps {
    number: string;
    title: string;
    description: string;
    color?: string; 
}
const NumberedListItem: React.FC<NumberedListItemProps> = ({ number, title, description, color = "#0077B5" }) => (
    <div className="flex items-start space-x-4 group">
        <div 
            className="flex-shrink-0 mt-1 w-12 h-12 flex items-center justify-center text-white rounded-full font-bold text-xl shadow-md group-hover:scale-105 transition-transform"
            style={{backgroundImage: `linear-gradient(to bottom right, ${color}, ${getSecondaryLinkedInGradientColor(color)})`}}
        >
            {number}
        </div>
        <div>
            <h3 className={`text-xl font-semibold mb-1 group-hover:opacity-80 transition-colors`} style={{color: color}}>{title}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
    </div>
);


export default function LinkedinAdvertisingPage() {
    const router = useRouter();
    
    const faqItems = [
        { q: "How much do LinkedIn Ads typically cost?", a: "LinkedIn ad costs can be higher than other platforms due to the high-value B2B audience. Costs vary by targeting, bid strategy, and ad relevance. We work to optimize your budget for maximum CPL and ROI." },
        { q: "How long until we see B2B leads from LinkedIn?", a: "Initial impressions and clicks can be seen quickly. Quality B2B lead generation often involves a longer sales cycle, so allow a few weeks to months for campaigns to mature and deliver consistent, qualified leads." },
        { q: "What kind of B2B reporting is provided?", a: "You'll receive detailed reports on key B2B metrics: cost per lead (CPL), lead conversion rates, click-through rates (CTR) on professional content, engagement by job title/industry, and overall campaign ROI." },
        { q: "How precise is targeting on LinkedIn?", a: "Extremely precise for B2B. We can target by job title, industry, company size, specific company names, skills, seniority, education, and more, ensuring your ads reach the right decision-makers." },
        { q: "What types of content work best on LinkedIn Ads?", a: "Value-driven content excels: industry reports, whitepapers, case studies, webinar invitations, product demos, and thought leadership articles that address professional pain points and offer solutions." },
    ];

    const linkedInPrimary = "#0077B5";
    const linkedInSecondary = "#00A0DC"; // Lighter blue for accents
    const linkedInDarker = "#0E76A8"; // Darker blue

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden bg-slate-50">
            
            {/* 1. Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center py-20 md:py-0" style={{background: `linear-gradient(135deg, ${linkedInDarker}, ${linkedInPrimary}, ${linkedInSecondary})`}}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/path-to-linkedin-abstract-bg.svg')" }}></div> {/* Placeholder */}
                <div className="relative z-10 container mx-auto px-4 max-w-5xl text-center">
                    <div className="inline-block mb-8 p-5 bg-white/20 backdrop-blur-md rounded-full shadow-lg">
                        <Linkedin className="w-16 h-16 md:w-20 md:h-20 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight [text-shadow:_0_3px_5px_rgba(0,0,0,0.2)]">
                        <span className="block">Connect with Professionals.</span>
                        <span className="block">Drive B2B Growth.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto [text-shadow:_0_2px_3px_rgba(0,0,0,0.1)]">
                        Harness the power of LinkedIn Advertising to target key decision-makers, generate high-quality B2B leads, and elevate your brand in the professional world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            onClick={() => router.push('/contact?service=linkedin-ads&ref=hero')}
                            size="lg"
                            className="bg-white text-[#0077B5] hover:bg-slate-100 transition-all font-bold text-lg px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            Get Your B2B Strategy <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button 
                            variant="outline"
                            size="lg"
                            onClick={() => document.getElementById('why-linkedin')?.scrollIntoView({ behavior: 'smooth' })}
                            className="border-white/50 text-[#0077B5] hover:bg-white/10 hover:border-white transition-all font-semibold text-lg px-10 py-4 rounded-lg backdrop-blur-sm"
                        >
                            Why LinkedIn?
                        </Button>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-20 bg-slate-50" style={{clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
            </section>

            {/* 2. Introduction: What is LinkedIn Advertising? */}
            <SectionWrapper id="what-is-linkedin" bgVariant="default">
                <SectionTitle 
                    title="The Engine for B2B Success: LinkedIn Ads"
                    subtitle="It's the premier platform for businesses to connect with professionals, share valuable insights, and cultivate high-value relationships."
                    color={linkedInPrimary}
                />
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="text-slate-700 space-y-5 leading-relaxed text-lg">
                        <p>
                            LinkedIn Advertising allows businesses to strategically place ads before a global network of professionals and companies. It's designed to help you achieve critical B2B objectives, from <strong style={{color: linkedInPrimary}}>generating qualified leads</strong> to building brand authority.
                        </p>
                        <p>
                            With its unparalleled professional demographic data, you can precisely target decision-makers by industry, job function, seniority, company size, and more, ensuring your message reaches those who matter most.
                        </p>
                    </div>
                    <div className="relative p-6 bg-gradient-to-br from-[#0077B5]/5 via-transparent to-transparent rounded-2xl shadow-lg">
                        <img 
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Professional, B2B context image
                            alt="LinkedIn Ads Interface" 
                            className="rounded-xl shadow-2xl w-full object-cover" 
                        />
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] rounded-full flex items-center justify-center shadow-xl">
                            <Briefcase className="w-10 h-10 text-white" />
                        </div>
                    </div>
                </div>
            </SectionWrapper>
            
            {/* 3. Why Your Business Needs LinkedIn Ads */}
            <SectionWrapper id="why-linkedin" bgVariant="light">
                <SectionTitle 
                    title="Unlock Unrivaled B2B Opportunities"
                    subtitle="Leverage LinkedIn's unique ecosystem to connect, influence, and convert in a professional setting."
                    color={linkedInPrimary}
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ModernFeatureCard 
                        icon={<Target />}
                        title="Precision B2B Targeting"
                        description="Reach decision-makers by job title, industry, company size, skills, seniority, and more. Unmatched professional focus."
                        iconBgGradient="from-[#0077B5]/10 to-[#00A0DC]/10" iconColor="text-[#0077B5]"
                    />
                    <ModernFeatureCard 
                        icon={<UserCheck />}
                        title="High-Quality Lead Generation"
                        description="Connect with professionals actively seeking solutions and information, resulting in more qualified B2B leads."
                        iconBgGradient="from-[#0E76A8]/10 to-[#0077B5]/10" iconColor="text-[#0E76A8]"
                    />
                    <ModernFeatureCard 
                        icon={<Award />}
                        title="Build Brand Authority & Trust"
                        description="Establish your company as a thought leader and credible expert within your industry."
                        iconBgGradient="from-[#00A0DC]/10 to-[#63BBE2]/10" iconColor="text-[#00A0DC]"
                    />
                    <ModernFeatureCard 
                        icon={<Building />}
                        title="Effective Account-Based Marketing"
                        description="Target specific companies and key accounts with tailored messaging for high-value engagement."
                        iconBgGradient="from-[#0077B5]/10 to-[#00A0DC]/10" iconColor="text-[#0077B5]"
                    />
                    <ModernFeatureCard 
                        icon={<TrendingUp />}
                        title="Drive Meaningful Engagement"
                        description="Share valuable content that resonates with a professional audience, fostering discussions and relationships."
                        iconBgGradient="from-[#0E76A8]/10 to-[#0077B5]/10" iconColor="text-[#0E76A8]"
                    />
                    <ModernFeatureCard 
                        icon={<Network />}
                        title="Expand Professional Network"
                        description="Grow your company's connections and visibility among industry peers, partners, and potential clients."
                        iconBgGradient="from-[#00A0DC]/10 to-[#63BBE2]/10" iconColor="text-[#00A0DC]"
                    />
                </div>
            </SectionWrapper>
            
            {/* 4. Our Comprehensive LinkedIn Advertising Services */}
            <SectionWrapper id="our-linkedin-services" bgVariant="default">
                <SectionTitle 
                    title="Your Strategic LinkedIn Ads Partner"
                    subtitle="From meticulous planning to expert execution, we manage every aspect of your LinkedIn advertising for optimal B2B results."
                    alignment="left"
                    color={linkedInPrimary}
                />
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0077B5] to-[#00A0DC] rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" // Professionals in a meeting, strategy session
                            alt="LinkedIn Ads Strategy Team" 
                            className="relative rounded-xl shadow-2xl object-cover w-full aspect-video md:aspect-auto md:h-[500px]"
                        />
                    </div>
                    <div className="space-y-8">
                        {[
                            { icon: <Brain className="text-[#0077B5]" />, title: "B2B Strategy Development", desc: "Crafting tailored LinkedIn ad strategies aligned with your specific business objectives and target professional personas." },
                            { icon: <UsersRound className="text-[#0E76A8]" />, title: "Advanced Audience Segmentation", desc: "Identifying and segmenting key decision-makers using LinkedIn's rich professional data for precise targeting." },
                            { icon: <BookOpen className="text-[#00A0DC]" />, title: "Value-Driven Content Creation", desc: "Developing professional, insightful content (articles, whitepapers, case studies) that resonates with B2B audiences." },
                            { icon: <Settings2 className="text-[#0077B5]" />, title: "Campaign Management & Optimization", desc: "Expert setup, ongoing monitoring, and data-driven adjustments to maximize lead quality and ROI." },
                            { icon: <Handshake className="text-[#0E76A8]" />, title: "Lead Nurturing & Integration", desc: "Strategies for capturing leads via Lead Gen Forms and integrating with your CRM for effective follow-up." },
                            { icon: <FileSpreadsheet className="text-[#00A0DC]" />, title: "B2B Performance Reporting", desc: "Clear, actionable reports focusing on CPL, lead quality, engagement from target accounts, and overall business impact." }
                        ].map(item => (
                            <div key={item.title} className="flex items-start p-4 bg-slate-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow ring-1 ring-slate-200/50 hover:ring-[#0077B5]/30">
                                <div className="flex-shrink-0 mr-5 text-white bg-gradient-to-br from-[#0077B5]/10 to-[#00A0DC]/10 p-3 rounded-lg">{React.cloneElement(item.icon, {size: 28})}</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                                    <p className="text-slate-600 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* 5. Deep Dive: LinkedIn Targeting Capabilities */}
            <SectionWrapper bgVariant="light">
                <SectionTitle
                    title="Pinpoint Your Ideal B2B Prospects"
                    subtitle="LinkedIn's targeting is unmatched for reaching specific professionals and companies."
                    color={linkedInDarker} 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                    {[
                        { title: "Job Experience Targeting", desc: "Job titles, functions, seniority levels, years of experience, and skills.", icon: <Briefcase className="text-blue-700" />, color: linkedInPrimary },
                        { title: "Company Targeting", desc: "Company names, industries, sizes, follower counts, and growth rates.", icon: <Building className="text-sky-700" />, color: linkedInSecondary },
                        { title: "Education Targeting", desc: "Schools, degrees, fields of study.", icon: <BookOpen className="text-blue-800" />, color: linkedInDarker },
                        { title: "Demographic Targeting", desc: "Location, age, gender (where available and appropriate).", icon: <Globe className="text-blue-700" />, color: linkedInPrimary },
                        { title: "Interest & Trait Targeting", desc: "Member groups, interests, skills, traits (e.g., 'frequent traveler').", icon: <Lightbulb className="text-sky-700" />, color: linkedInSecondary },
                        { title: "Matched Audiences", desc: "Website retargeting, contact list targeting, and account-based targeting.", icon: <Target className="text-blue-800" />, color: linkedInDarker }
                    ].map(item => (
                        <div key={item.title} className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4`} style={{borderColor: item.color}}>
                            <div className="flex items-center mb-4">
                                <div className={`p-3 rounded-full mr-4`} style={{backgroundColor: `${item.color}1A`}}>{React.cloneElement(item.icon, {size: 28, style:{color: item.color}})}</div>
                                <h3 className={`text-xl font-semibold text-slate-800`}>{item.title}</h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* 6. Choosing the Right Ad Objectives for LinkedIn */}
            <SectionWrapper bgVariant="default">
                 <SectionTitle 
                    title="Strategic Objectives for B2B Success"
                    subtitle="We align LinkedIn campaign objectives with your core business goals for measurable impact."
                    color={linkedInPrimary}
                />
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[
                        { name: "Brand Awareness", desc: "Increase visibility and recognition among your target professional audience.", examples: ["Reach", "Impressions", "Follower Growth"], icon: <Eye />, color: linkedInPrimary },
                        { name: "Website Traffic", desc: "Drive relevant professionals to your website, landing pages, or content.", examples: ["Clicks", "Website Visits"], icon: <Globe />, color: linkedInSecondary },
                        { name: "Lead Generation", desc: "Capture high-quality leads directly on LinkedIn using pre-filled Lead Gen Forms.", examples: ["Leads", "CPL Optimization"], icon: <Users />, color: linkedInDarker }
                    ].map(obj => (
                        <div key={obj.name} className="p-8 bg-white rounded-xl shadow-xl border border-slate-100 hover:border-blue-500/50 transition-colors">
                            <div className="mb-4 inline-block p-4 rounded-full" style={{background: `linear-gradient(to bottom right, ${obj.color}1A, ${getSecondaryLinkedInGradientColor(obj.color)}1A)`}}>
                                {React.cloneElement(obj.icon, {className: "w-10 h-10", style:{color: obj.color}})}
                            </div>
                            <h3 className="text-2xl font-semibold mb-3" style={{color: obj.color}}>{obj.name}</h3>
                            <p className="text-slate-700 mb-4">{obj.desc}</p>
                            <div className="text-sm text-slate-500 space-y-1">
                                {obj.examples.map(ex => <p key={ex}>{ex}</p>)}
                            </div>
                        </div>
                    ))}
                </div>
                 <p className="text-center text-slate-600 mt-10 text-lg">Other objectives include <strong style={{color: linkedInPrimary}}>Engagement</strong>, <strong style={{color: linkedInSecondary}}>Video Views</strong>, and <strong style={{color: linkedInDarker}}>Website Conversions</strong>, all tailored for B2B outcomes.</p>
            </SectionWrapper>

            {/* 7. Mastering LinkedIn Ad Formats */}
            <SectionWrapper bgVariant="light">
                <SectionTitle 
                    title="Professional Ad Formats for Every B2B Goal"
                    subtitle="We utilize LinkedIn's diverse ad formats to engage professionals effectively."
                    color={linkedInSecondary}
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Sponsored Content", desc: "Native ads (single image, video, carousel) in the LinkedIn feed.", icon: <FileSpreadsheet />, img: "https://placehold.co/600x400/0077B5/FFFFFF?text=Sponsored+Content", color: linkedInPrimary },
                        { title: "Message Ads (InMail)", desc: "Personalized messages sent directly to prospects' LinkedIn inboxes.", icon: <MessageSquare />, img: "https://placehold.co/600x400/0E76A8/FFFFFF?text=Message+Ad", color: linkedInDarker },
                        { title: "Text Ads", desc: "Simple, concise ads appearing on desktop in the right rail or top banner.", icon: <Edit3 />, img: "https://placehold.co/600x400/00A0DC/333333?text=Text+Ad", color: linkedInSecondary },
                        { title: "Dynamic Ads", desc: "Personalized ads using members' profile data (e.g., Follower Ads, Spotlight Ads).", icon: <Users />, img: "https://placehold.co/600x400/0077B5/FFFFFF?text=Dynamic+Ad", color: linkedInPrimary },
                        { title: "Lead Gen Forms", desc: "Capture leads seamlessly with forms pre-filled with LinkedIn profile data.", icon: <FileText />, img: "https://placehold.co/600x400/0E76A8/FFFFFF?text=Lead+Gen+Form", color: linkedInDarker },
                        { title: "Conversation Ads", desc: "Interactive, choose-your-own-path messaging ads for deeper engagement.", icon: <Handshake />, img: "https://placehold.co/600x400/00A0DC/333333?text=Conversation+Ad", color: linkedInSecondary }
                    ].map((format) => (
                         <div key={format.title} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                            <img src={format.img} alt={format.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <div className="p-2 rounded-full mr-3" style={{backgroundColor: `${format.color}1A`}}>{React.cloneElement(format.icon, {size: 24, style:{color: format.color}})}</div>
                                    <h3 className="text-lg font-semibold" style={{color: format.color}}>{format.title}</h3>
                                </div>
                                <p className="text-slate-600 text-sm">{format.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* 8. Our Proven Strategic Approach for LinkedIn */}
            <SectionWrapper bgVariant="default">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <SectionTitle 
                            title="Our LinkedIn Blueprint for B2B Dominance"
                            subtitle="A systematic approach combining strategic targeting, compelling content, and continuous optimization for superior B2B outcomes."
                            alignment="left"
                            color={linkedInPrimary}
                        />
                        <div className="space-y-8 mt-10">
                            <NumberedListItem number="01" title="In-Depth Audience & Market Analysis" description="Deep dive into your target professional segments, competitors, and industry landscape." color={linkedInPrimary}/>
                            <NumberedListItem number="02" title="Strategic Content Pillars & Assets" description="Developing high-value content (reports, guides, webinars) that addresses B2B challenges." color={linkedInDarker}/>
                            <NumberedListItem number="03" title="Precision Campaign Configuration" description="Meticulous setup of targeting parameters, bidding strategies, and ad formats for B2B goals." color={linkedInSecondary}/>
                            <NumberedListItem number="04" title="Rigorous A/B Testing & Optimization" description="Constantly testing ad copy, creatives, targeting, and landing pages to improve CPL and lead quality." color={linkedInPrimary}/>
                            <NumberedListItem number="05" title="Actionable Reporting & B2B Insights" description="Translating data into clear performance metrics and strategic recommendations for sustained growth." color={linkedInDarker}/>
                        </div>
                    </div>
                    <div className="relative mt-12 lg:mt-0">
                        <div className="p-8 rounded-2xl shadow-2xl text-white" style={{background: `linear-gradient(135deg, ${linkedInDarker}, ${linkedInPrimary}, ${linkedInSecondary})`}}>
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white/20 rounded-full mr-4">
                                    <BarChart2 className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold">Typical B2B Results</h3>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { metric: "Lead Quality Improvement", value: "Up to 60% Higher", benchmark: "Via precise targeting" },
                                    { metric: "Cost Per Qualified Lead (CPQL)", value: "15-35% Reduction", benchmark: "Through optimization" },
                                    { metric: "Conversion Rate (Lead to MQL/SQL)", value: "2x-4x Increase", benchmark: "With relevant content" }
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
                            <p className="mt-8 text-xs text-white/70 italic text-center">Results vary by industry and offering. These figures represent potential B2B outcomes.</p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
            
            {/* 9. The LinkedIn Insight Tag & Matched Audiences */}
             <SectionWrapper bgVariant="linkedin-gradient">
                <SectionTitle 
                    title="Unlock B2B Data with LinkedIn Insight Tag"
                    subtitle="Gain deep understanding of your website visitors and optimize campaigns with powerful retargeting and conversion tracking."
                    color={linkedInSecondary}
                />
                <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                    <Filter className="w-28 h-28 md:w-36 md:h-36 text-[#0077B5] mx-auto lg:mx-0 flex-shrink-0 opacity-80" />
                    <div className="text-slate-700 space-y-4 flex-grow">
                        <p className="text-lg">The LinkedIn Insight Tag is a piece of JavaScript code for your website. It enables conversion tracking, website audience retargeting, and demographic insights about your website visitors – crucial for B2B marketing.</p>
                        <h4 className="text-xl font-semibold text-slate-800 mt-4">Key Benefits for B2B Marketers:</h4>
                        <ul className="grid md:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                            {[
                                "Track Website Conversions (e.g., demo requests, downloads)",
                                "Understand Professional Demographics of Visitors",
                                "Retarget Website Visitors with Tailored Ads",
                                "Build Matched Audiences from Contact Lists & Companies",
                                "Optimize Campaigns for High-Value B2B Actions",
                                "Measure True Impact of LinkedIn Ads on Sales Pipeline"
                            ].map(benefit => (
                                <li key={benefit} className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> {benefit}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 font-medium text-[#0077B5]">We ensure robust Insight Tag implementation for data-driven B2B advertising success.</p>
                    </div>
                </div>
            </SectionWrapper>

            {/* 10. Crafting Compelling LinkedIn Ad Creatives */}
            <SectionWrapper bgVariant="default">
                <SectionTitle title="Content That Converts Professionals" subtitle="LinkedIn ads require a blend of professionalism, value, and clarity." color={linkedInPrimary} />
                 <div className="grid md:grid-cols-3 gap-8 mt-10">
                    <ModernFeatureCard icon={<BookOpen />} title="Value-Driven & Insightful" description="Content that educates, informs, and solves problems for your target professional audience (e.g., reports, guides)." iconBgGradient="from-[#0077B5]/10 to-[#00A0DC]/10" iconColor="text-[#0077B5]" />
                    <ModernFeatureCard icon={<Briefcase />} title="Professional & Credible Design" description="Clean, polished visuals and branding that reflect your company's expertise and trustworthiness." iconBgGradient="from-[#0E76A8]/10 to-[#0077B5]/10" iconColor="text-[#0E76A8]" />
                    <ModernFeatureCard icon={<CheckCircle />} title="Clear Calls-to-Action" description="Direct and compelling CTAs that guide professionals towards the desired next step (e.g., 'Download Report', 'Request Demo')." iconBgGradient="from-[#00A0DC]/10 to-[#63BBE2]/10" iconColor="text-[#00A0DC]" />
                </div>
            </SectionWrapper>

            {/* 11. A/B Testing & Continuous Optimization on LinkedIn */}
            <SectionWrapper bgVariant="light">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionTitle title="Refining for B2B Excellence" subtitle="Continuous testing of audiences, content, and offers to maximize lead quality and ROI on LinkedIn." alignment="left" color={linkedInSecondary}/>
                        <p className="text-slate-600 leading-relaxed mb-6">For B2B, precision matters. We A/B test ad copy (value propositions), creative formats (image vs. video vs. document), targeting parameters (job titles vs. skills), and Lead Gen Form fields to steadily improve campaign effectiveness.</p>
                        <Button onClick={() => router.push('/contact?interest=linkedin-optimization')} style={{backgroundColor: linkedInSecondary}} className="hover:opacity-90 text-white">Our LinkedIn Testing Process</Button>
                    </div>
                    <div className="flex justify-center">
                        <Shuffle className="w-32 h-32 md:w-48 md:h-48 opacity-70" style={{color: linkedInSecondary}}/>
                    </div>
                </div>
            </SectionWrapper>

            {/* 12. Transparent Reporting for LinkedIn */}
             <SectionWrapper bgVariant="default">
                <SectionTitle title="LinkedIn B2B Performance, Unveiled" subtitle="Actionable reports focusing on metrics that matter for B2B growth and pipeline development." color={linkedInDarker}/>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="p-8 bg-slate-100 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4" style={{color: linkedInDarker}}>LinkedIn Reporting Pillars:</h3>
                        <ul className="space-y-3 text-slate-700">
                            {["Cost Per Lead (CPL) & Lead Volume", "Lead Quality & Conversion Rates (MQL, SQL)", "Engagement by Professional Demographics (Job Title, Industry)", "Click-Through Rates (CTR) on Content", "Performance of Specific Ad Formats (e.g., Message Ads Open Rate)", "Company Engagement (for ABM campaigns)", "Overall Campaign ROI & Pipeline Contribution"].map(item => (
                                <li key={item} className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />{item}</li>
                            ))}
                        </ul>
                    </div>
                     <div className="text-center md:text-left">
                        <img src="https://placehold.co/500x300/0E76A8/FFFFFF?text=B2B+Report" alt="Sample LinkedIn Report" className="rounded-lg shadow-xl mx-auto md:mx-0"/>
                        <p className="text-slate-600 mt-6 leading-relaxed">We provide insights into not just ad performance, but how LinkedIn is contributing to your overall B2B marketing and sales objectives.</p>
                    </div>
                </div>
            </SectionWrapper>
            
            {/* 13. LinkedIn Success Stories (B2B Focus) */}
            <SectionWrapper bgVariant="linkedin-gradient">
                <SectionTitle title="B2B Brands Winning with LinkedIn Ads" subtitle="Real-world examples of how we've helped businesses connect with decision-makers and drive growth. (More details soon!)" isDark color="#FFFFFF"/>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {name: "SaaS Innovators Ltd.", result: "40% Increase in Qualified Demo Requests", industry: "Software", logoColor: linkedInPrimary},
                        {name: "Global Consulting Group", result: "Reduced CPL by 25% for C-Suite Leads", industry: "Consulting", logoColor: linkedInSecondary},
                        {name: "Manufacturing Solutions Co.", result: "Secured 5 Key Enterprise Accounts", industry: "Manufacturing", logoColor: linkedInDarker}
                    ].map((story, i) => (
                        <div key={i} className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-xl text-center hover:scale-105 transition-transform">
                             <div className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-white shadow-md flex items-center justify-center text-3xl font-bold" style={{backgroundColor: story.logoColor}}>
                                {story.name.substring(0,1)}
                             </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{story.name}</h3>
                            <p className="text-sm text-white/80 mb-1">Industry: {story.industry}</p>
                            <p className="text-md font-medium text-white mb-3">{story.result}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* 14. LinkedIn Advertising FAQ */}
            <SectionWrapper bgVariant="default">
                <SectionTitle title="Your LinkedIn Ad Questions, Answered" color={linkedInPrimary}/>
                <div className="max-w-3xl mx-auto space-y-5">
                    {faqItems.map((item, index) => (
                        <details key={index} className="group bg-white p-5 rounded-xl shadow-lg border border-slate-100 hover:border-[#0077B5]/30 transition-colors">
                            <summary className="flex justify-between items-center font-semibold text-slate-800 cursor-pointer list-none text-lg group-hover:text-[#0077B5]">
                                {item.q}
                                <HelpCircle className="w-6 h-6 text-slate-400 group-open:text-[#0077B5] transition-colors group-open:rotate-180 transform duration-300" />
                            </summary>
                            <p className="text-slate-600 mt-4 text-base leading-relaxed group-open:animate-fadeIn">
                                {item.a}
                            </p>
                        </details>
                    ))}
                </div>
            </SectionWrapper>

            {/* 15. Get Started with LinkedIn Advertising */}
            <section className="py-20 md:py-32 text-white" style={{background: `linear-gradient(135deg, ${linkedInDarker}, ${linkedInPrimary} 50%, ${linkedInSecondary})`}}>
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <Briefcase className="w-20 h-20 text-white/80 mx-auto mb-8" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">Ready to Supercharge Your B2B Lead Pipeline?</h2>
                    <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)]">
                        Stop chasing unqualified leads. Our LinkedIn advertising specialists are experts at connecting you with the right decision-makers to fuel sustainable B2B growth.
                    </p>
                    <div className="flex flex-col md:flex-row gap-5 justify-center">
                        <Button 
                            onClick={() => router.push('/contact?service=linkedin-ads&source=final-cta')}
                            size="lg"
                            className="bg-white text-[#0077B5] hover:bg-slate-100 transition-all font-bold text-lg px-12 py-5 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            Request B2B Consultation <ArrowRight className="w-6 h-6 ml-2" />
                        </Button>
                        <Button 
                            onClick={() => router.push('/services/b2b-marketing')}
                            size="lg"
                            variant="outline"
                            className="border-white/50 text-[#0077B5] hover:bg-white/20 hover:border-white transition-all font-semibold text-lg px-12 py-5 rounded-lg backdrop-blur-sm"
                        >
                            All B2B Marketing Services
                        </Button>
                    </div>
                </div>
            </section>

            {/* 16. Bonus: Related Services / Explore More */}
            <SectionWrapper bgVariant="light">
                <SectionTitle 
                    title="Holistic B2B Marketing Solutions"
                    subtitle="LinkedIn Ads are a powerful component of a comprehensive B2B strategy."
                    color={linkedInPrimary}
                />
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: "Account-Based Marketing (ABM)", link: "/services/social-media-marketing/social-media-management", icon: "https://cdn-icons-png.flaticon.com/512/3081/3081703.png", color: "#D92E1B", desc: "Hyper-targeted campaigns for your most valuable accounts." },
                        { name: "B2B Content Marketing", link: "/services/content-writing/email-marketing-services", icon: "https://cdn-icons-png.flaticon.com/512/1055/1055644.png", color: "#4CAF50", desc: "High-value content that educates and converts professionals." },
                        { name: "Sales Enablement", link: "/services/digital-marketing/Digital-Marketing-Strategy-Development", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png", color: "#FF9800", desc: "Equipping your sales team with tools and content from marketing efforts." }
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