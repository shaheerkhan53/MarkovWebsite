"use client";

import React, { isValidElement, cloneElement } from 'react';
import { Button } from "@/components/ui/button"; // Assuming this provides a base Button
import { 
    Instagram, Users, BarChart2, Target, Globe, TrendingUp, ArrowRight,
    Brain, Lightbulb, CheckCircle, BarChartHorizontalBig,
    Zap, Eye, Filter, Shuffle, FileText, HelpCircle, MessageSquare,
    PieChart, Palette, MonitorPlay, ShoppingBag, Edit3, UsersRound, Settings2,
    Award, Briefcase, Presentation, Paintbrush,
    Camera, PlayCircle, Grid, Heart, AtSign, Layers // Added Instagram specific icons
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// --- Reusable Helper Components (same as before, ensure they are defined or imported) ---

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    bgVariant?: 'default' | 'light' | 'dark' | 'gradient' | 'insta-gradient'; // Added insta-gradient
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = "", id, bgVariant = 'default' }) => {
    let bgClass = "bg-white"; // Default
    if (bgVariant === 'light') bgClass = "bg-slate-50";
    else if (bgVariant === 'dark') bgClass = "bg-slate-900 text-white";
    else if (bgVariant === 'gradient') bgClass = "bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50"; // Generic soft gradient
    else if (bgVariant === 'insta-gradient') bgClass = "bg-gradient-to-br from-[#833AB4] via-[#C13584] to-[#FCAF45]"; // Instagram's iconic gradient


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
    color?: string; // Added to customize underline color
}

const SectionTitle = ({ title, subtitle, className = "", alignment = 'center', isDark = false, color = "#C13584" }: SectionTitleProps) => (
    <div className={`mb-12 md:mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'} ${className}`}>
        <h2 className={`text-3xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-800'} mb-4 tracking-tight`}>{title}</h2>
        {subtitle && <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'} max-w-3xl ${alignment === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>}
        <div className={`w-24 h-1.5 ${alignment === 'center' ? 'mx-auto' : ''} mt-6 rounded-full`} style={{backgroundImage: `linear-gradient(to right, ${color}, ${getSecondaryGradientColor(color)})`}}></div>
    </div>
);

// Helper to get a slightly different color for gradient
const getSecondaryGradientColor = (primaryColor: string) => {
    if (primaryColor === "#C13584") return "#F56040"; // Pink to Orange
    if (primaryColor === "#833AB4") return "#C13584"; // Purple to Pink
    return "#FCAF45"; // Default
}


interface ModernFeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
    iconBgGradient?: string; // e.g., "from-pink-500/10 to-orange-500/10"
    iconColor?: string; // e.g., "text-pink-500"
}

const ModernFeatureCard: React.FC<ModernFeatureCardProps> = ({ icon, title, description, className, iconBgGradient = "from-[#C13584]/10 to-[#F56040]/10", iconColor = "text-[#C13584]" }) => (
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
    color?: string; // Main color for the number circle
}
const NumberedListItem: React.FC<NumberedListItemProps> = ({ number, title, description, color = "#C13584" }) => (
    <div className="flex items-start space-x-4 group">
        <div 
            className="flex-shrink-0 mt-1 w-12 h-12 flex items-center justify-center text-white rounded-full font-bold text-xl shadow-md group-hover:scale-105 transition-transform"
            style={{backgroundImage: `linear-gradient(to bottom right, ${color}, ${getSecondaryGradientColor(color)})`}}
        >
            {number}
        </div>
        <div>
            <h3 className={`text-xl font-semibold mb-1 group-hover:opacity-80 transition-colors`} style={{color: color}}>{title}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
    </div>
);


export default function InstagramAdvertisingPage() {
    const router = useRouter();
    
    const faqItems = [
        { q: "How much do Instagram Ads cost?", a: "Costs are dynamic, influenced by your target audience, industry competition, and ad creative quality. We tailor strategies to your budget, focusing on maximizing engagement and ROI." },
        { q: "When will I see results from Instagram Ads?", a: "Initial engagement metrics can appear quickly. For substantial brand growth and conversion results, allow a few weeks to months for data collection, campaign optimization, and audience learning." },
        { q: "What kind of reporting do you provide?", a: "You'll receive regular, transparent reports detailing key performance indicators (KPIs) like reach, engagement rate, click-throughs, conversions, and ROAS, along with strategic insights." },
        { q: "Can you target very specific Instagram users?", a: "Absolutely. Instagram, through Facebook's ad platform, offers incredibly granular targeting based on demographics, interests, behaviors, custom audiences (e.g., website visitors, past engagers), and lookalike audiences." },
        { q: "How important are visuals for Instagram Ads?", a: "Extremely important! Instagram is a visual-first platform. We specialize in creating scroll-stopping, aesthetically pleasing ad creatives that resonate with your brand and audience." },
    ];

    // Instagram Color Palette
    const instaPrimary = "#C13584"; // Pink
    const instaSecondary = "#833AB4"; // Purple
    const instaAccentOrange = "#F56040";
    const instaAccentYellow = "#FCAF45";

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden bg-slate-50">
            
            {/* 1. Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center py-20 md:py-0 bg-gradient-to-br from-[#833AB4] via-[#C13584] to-[#FCAF45]">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/path-to-insta-abstract-bg.svg')" }}></div> {/* Placeholder */}
                <div className="relative z-10 container mx-auto px-4 max-w-5xl text-center">
                    <div className="inline-block mb-8 p-5 bg-white/20 backdrop-blur-md rounded-full shadow-lg">
                        <Instagram className="w-16 h-16 md:w-20 md:h-20 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight [text-shadow:_0_3px_5px_rgba(0,0,0,0.2)]">
                        <span className="block">Captivate. Connect.</span>
                        <span className="block">Convert on Instagram.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto [text-shadow:_0_2px_3px_rgba(0,0,0,0.1)]">
                        Transform your brand presence with visually stunning Instagram ad campaigns that drive deep engagement and deliver impactful business growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            onClick={() => router.push('/contact?service=instagram-ads&ref=hero')}
                            size="lg"
                            className="bg-white text-[#C13584] hover:bg-slate-100 transition-all font-bold text-lg px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            Launch Your Campaign <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button 
                            variant="outline"
                            size="lg"
                            onClick={() => document.getElementById('why-instagram')?.scrollIntoView({ behavior: 'smooth' })}
                            className="border-white/50 text-[#C13584] hover:bg-white/10 hover:border-white transition-all font-semibold text-lg px-10 py-4 rounded-lg backdrop-blur-sm"
                        >
                            Why Instagram?
                        </Button>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-20 bg-slate-50" style={{clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
            </section>

            {/* 2. Introduction: What is Instagram Advertising? */}
            <SectionWrapper id="what-is-instagram" bgVariant="default">
                <SectionTitle 
                    title="The Art of Instagram Advertising"
                    subtitle="More than pretty pictures – it's a strategic channel for visual storytelling, brand building, and driving direct action."
                    color={instaPrimary}
                />
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="text-slate-700 space-y-5 leading-relaxed text-lg">
                        <p>
                            Instagram Advertising empowers businesses to showcase their brand through compelling visuals – images, videos, Stories, and Reels – to a highly engaged audience. It's about creating an <strong style={{color: instaPrimary}}>immersive brand experience</strong>.
                        </p>
                        <p>
                            Leveraging Facebook's powerful ad system, Instagram Ads allow for precise targeting, enabling you to connect with users based on their interests, behaviors, and demographics, turning inspiration into interaction and sales.
                        </p>
                    </div>
                    <div className="relative p-6 bg-gradient-to-br from-[#C13584]/5 via-transparent to-transparent rounded-2xl shadow-lg">
                        <img 
                            src="/insta-1.jpeg" // Visually appealing lifestyle or product shot
                            alt="Instagram Ads Example" 
                            className="rounded-xl shadow-2xl w-full object-cover" 
                        />
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#C13584] to-[#F56040] rounded-full flex items-center justify-center shadow-xl">
                            <Camera className="w-10 h-10 text-white" />
                        </div>
                    </div>
                </div>
            </SectionWrapper>
            
            {/* 3. Why Your Business Needs Instagram Ads */}
            <SectionWrapper id="why-instagram" bgVariant="light">
                <SectionTitle 
                    title="Ignite Your Brand with Instagram's Power"
                    subtitle="Tap into a visually-driven community eager to discover and engage with brands like yours."
                    color={instaPrimary}
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ModernFeatureCard 
                        icon={<Users />}
                        title="Hyper-Engaged Community"
                        description="Connect with over 1 billion active users who proactively seek out brands and trends on the platform."
                        iconBgGradient="from-[#C13584]/10 to-[#F56040]/10" iconColor="text-[#C13584]"
                    />
                    <ModernFeatureCard 
                        icon={<Eye />}
                        title="Visual Storytelling Mastery"
                        description="Showcase your brand's personality and products through captivating images, videos, Stories, and Reels."
                        iconBgGradient="from-[#833AB4]/10 to-[#C13584]/10" iconColor="text-[#833AB4]"
                    />
                    <ModernFeatureCard 
                        icon={<ShoppingBag />}
                        title="Seamless Shopping Experiences"
                        description="Turn inspiration into purchase with shoppable posts, product tags, and integrated checkout features."
                        iconBgGradient="from-[#F56040]/10 to-[#FCAF45]/10" iconColor="text-[#F56040]"
                    />
                    <ModernFeatureCard 
                        icon={<Heart />}
                        title="Boost Brand Affinity"
                        description="Build authentic connections and foster loyalty by sharing your brand's unique voice and values visually."
                         iconBgGradient="from-[#C13584]/10 to-[#F56040]/10" iconColor="text-[#C13584]"
                    />
                    <ModernFeatureCard 
                        icon={<TrendingUp />}
                        title="Drive Targeted Traffic & Leads"
                        description="Direct engaged users to your website, app, or specific landing pages to achieve your marketing objectives."
                        iconBgGradient="from-[#833AB4]/10 to-[#C13584]/10" iconColor="text-[#833AB4]"
                    />
                    <ModernFeatureCard 
                        icon={<AtSign />}
                        title="Influencer Collaboration Potential"
                        description="Leverage Instagram's strong influencer ecosystem to amplify your reach and credibility authentically."
                         iconBgGradient="from-[#F56040]/10 to-[#FCAF45]/10" iconColor="text-[#F56040]"
                    />
                </div>
            </SectionWrapper>
            
            {/* 4. Our Comprehensive Instagram Advertising Services */}
            <SectionWrapper id="our-insta-services" bgVariant="default">
                <SectionTitle 
                    title="Your Vision, Our Instagram Expertise"
                    subtitle="We craft and manage every detail of your Instagram advertising, transforming creative concepts into measurable success."
                    alignment="left"
                    color={instaPrimary}
                />
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C13584] to-[#FCAF45] rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <img 
                            src="/insta-2.jpeg" // Team collaborating on visual content
                            alt="Instagram Ads Strategy Team" 
                            className="relative rounded-xl shadow-2xl object-cover w-full aspect-video md:aspect-auto md:h-[500px]"
                        />
                    </div>
                    <div className="space-y-8">
                        {[
                            { icon: <Palette className="text-[#C13584]" />, title: "Visual Identity & Strategy", desc: "Developing a cohesive and captivating Instagram aesthetic that aligns with your brand and goals." },
                            { icon: <Camera className="text-[#833AB4]" />, title: "High-Impact Content Creation", desc: "Producing scroll-stopping photos, videos, Reels, and Stories designed for maximum engagement." },
                            { icon: <Target className="text-[#F56040]" />, title: "Precision Audience Targeting", desc: "Leveraging data to identify and reach your ideal customer segments with laser focus." },
                            { icon: <Settings2 className="text-[#C13584]" />, title: "Campaign Management & Optimization", desc: "Expert setup, daily monitoring, and continuous refinement of campaigns for peak ROI." },
                            { icon: <TrendingUp className="text-[#833AB4]" />, title: "Influencer Marketing Integration", desc: "Strategically partnering with influencers to amplify your brand message authentically." },
                            { icon: <FileText className="text-[#F56040]" />, title: "Performance Analytics & Reporting", desc: "Delivering clear, actionable insights on campaign performance and growth opportunities." }
                        ].map(item => (
                            <div key={item.title} className="flex items-start p-4 bg-slate-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow ring-1 ring-slate-200/50 hover:ring-[#C13584]/30">
                                <div className="flex-shrink-0 mr-5 text-white bg-gradient-to-br from-[#C13584]/10 to-[#F56040]/10 p-3 rounded-lg">{React.cloneElement(item.icon, {size: 28})}</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                                    <p className="text-slate-600 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* 5. Deep Dive: Instagram Targeting Capabilities */}
            <SectionWrapper bgVariant="light">
                <SectionTitle
                    title="Connect with Your Ideal Followers, Precisely"
                    subtitle="Instagram's targeting, powered by Facebook, lets us find your perfect audience."
                    color={instaSecondary} // Purple
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                    {[
                        { title: "Demographic Layers", desc: "Age, gender, location, language, education, job roles, and more.", icon: <Users className="text-pink-500" />, color: instaPrimary },
                        { title: "Interest & Passion Targeting", desc: "Reach users based on liked pages, followed accounts, app usage, and declared interests.", icon: <Heart className="text-purple-500" />, color: instaSecondary },
                        { title: "Behavioral Segmentation", desc: "Target based on purchase intent, device usage, travel habits, and online activities.", icon: <Zap className="text-orange-500" />, color: instaAccentOrange },
                        { title: "Custom Audience Retargeting", desc: "Re-engage past website visitors, app users, video viewers, or profile engagers.", icon: <UsersRound className="text-yellow-500" />, color: instaAccentYellow },
                        { title: "Lookalike Audience Expansion", desc: "Find new users who mirror your best customers or most engaged followers.", icon: <Layers className="text-pink-500" />, color: instaPrimary },
                        { title: "Placement-Specific Targeting", desc: "Optimize for Feed, Stories, Reels, or Explore to maximize impact.", icon: <Grid className="text-purple-500" />, color: instaSecondary }
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

            {/* 6. Choosing the Right Ad Objectives for Instagram */}
            <SectionWrapper bgVariant="default">
                 <SectionTitle 
                    title="Aligning Objectives with Instagram's Strengths"
                    subtitle="We select campaign goals that leverage Instagram's visual and engagement-centric nature."
                    color={instaPrimary}
                />
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[
                        { name: "Brand Awareness & Reach", desc: "Maximize visibility and introduce your brand to a wide, relevant audience.", examples: ["Reach", "Brand Awareness", "Video Views"], icon: <Eye />, color: instaPrimary },
                        { name: "Engagement & Community", desc: "Foster interaction, build a loyal following, and drive conversations.", examples: ["Post Engagement", "Story Interactions", "Profile Visits"], icon: <Heart />, color: instaSecondary },
                        { name: "Traffic & Conversions", desc: "Direct users to your website, app, or shop, and drive valuable actions.", examples: ["Website Traffic", "App Installs", "Lead Generation", "Catalog Sales"], icon: <TrendingUp />, color: instaAccentOrange }
                    ].map(obj => (
                        <div key={obj.name} className="p-8 bg-white rounded-xl shadow-xl border border-slate-100 hover:border-pink-500/50 transition-colors">
                            <div className="mb-4 inline-block p-4 rounded-full" style={{background: `linear-gradient(to bottom right, ${obj.color}1A, ${getSecondaryGradientColor(obj.color)}1A)`}}>
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
            </SectionWrapper>

            {/* 7. Mastering Instagram Ad Formats */}
            <SectionWrapper bgVariant="light">
                <SectionTitle 
                    title="A Spectrum of Engaging Ad Formats"
                    subtitle="We select and design the perfect ad formats to tell your brand's story effectively on Instagram."
                    color={instaSecondary}
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Image Ads (Feed & Stories)", desc: "Single, stunning visuals that capture attention instantly.", icon: <Camera />, img: "https://placehold.co/600x400/C13584/FFFFFF?text=Image+Ad", color: instaPrimary },
                        { title: "Video Ads (Feed, Stories, Reels)", desc: "Dynamic storytelling through short or long-form video content.", icon: <MonitorPlay />, img: "https://placehold.co/600x400/833AB4/FFFFFF?text=Video+Ad", color: instaSecondary },
                        { title: "Carousel Ads (Feed & Stories)", desc: "Showcase multiple products or a narrative with swipeable cards.", icon: <Layers />, img: "https://placehold.co/600x400/F56040/FFFFFF?text=Carousel+Ad", color: instaAccentOrange },
                        { title: "Stories Ads", desc: "Full-screen, immersive vertical ads appearing between user Stories.", icon: <Zap />, img: "https://placehold.co/600x400/FCAF45/333333?text=Stories+Ad", color: instaAccentYellow },
                        { title: "Reels Ads", desc: "Engaging, short-form video ads integrated into the Reels experience.", icon: <PlayCircle />, img: "https://placehold.co/600x400/C13584/FFFFFF?text=Reels+Ad", color: instaPrimary },
                        { title: "Shopping Ads", desc: "Tag products directly in ads, allowing users to shop seamlessly.", icon: <ShoppingBag />, img: "https://placehold.co/600x400/833AB4/FFFFFF?text=Shopping+Ad", color: instaSecondary }
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

            {/* 8. Our Proven Strategic Approach for Instagram */}
            <SectionWrapper bgVariant="default">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <SectionTitle 
                            title="Our Instagram Success Framework"
                            subtitle="A blend of creative artistry and data-driven precision for campaigns that truly resonate and perform."
                            alignment="left"
                            color={instaPrimary}
                        />
                        <div className="space-y-8 mt-10">
                            <NumberedListItem number="01" title="Visual Deep Dive & Brand Alignment" description="Understanding your brand's essence to craft a compelling Instagram narrative and visual style." color={instaPrimary}/>
                            <NumberedListItem number="02" title="Content Strategy & Creation" description="Developing a content calendar with stunning visuals and engaging copy tailored for each ad format." color={instaSecondary}/>
                            <NumberedListItem number="03" title="Audience Curation & Targeting" description="Identifying and segmenting your ideal audience for hyper-relevant ad delivery." color={instaAccentOrange}/>
                            <NumberedListItem number="04" title="Campaign Optimization & Scaling" description="Continuous A/B testing of creatives, audiences, and placements to maximize ROI and scale wins." color={instaAccentYellow}/>
                            <NumberedListItem number="05" title="Insightful Reporting & Growth Strategy" description="Transparent reporting that translates data into actionable growth strategies for your brand." color={instaPrimary}/>
                        </div>
                    </div>
                    <div className="relative mt-12 lg:mt-0">
                        <div className="p-8 rounded-2xl shadow-2xl text-white" style={{background: "linear-gradient(135deg, #833AB4, #C13584, #F56040)"}}>
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white/20 rounded-full mr-4">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold">Typical Engagement Boost</h3>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { metric: "Avg. Engagement Rate Lift", value: "50-150% Increase", benchmark: "Compared to organic efforts" },
                                    { metric: "Follower Growth Velocity", value: "2x - 5x Faster", benchmark: "With targeted campaigns" },
                                    { metric: "Avg. Cost Per Engagement", value: "15-30% Lower", benchmark: "Than unoptimized campaigns" }
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
                            <p className="mt-8 text-xs text-white/70 italic text-center">Results depend on industry, budget, and creative. These figures represent potential outcomes.</p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
            
            {/* 9. The Power of Facebook Pixel & CAPI for Instagram */}
             <SectionWrapper bgVariant="gradient">
                <SectionTitle 
                    title="Data-Driven Insights for Instagram"
                    subtitle="Leverage Facebook's robust tracking (Pixel & CAPI) to optimize your Instagram campaigns effectively."
                    color={instaSecondary}
                />
                <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                    <Filter className="w-28 h-28 md:w-36 md:h-36 text-[#833AB4] mx-auto lg:mx-0 flex-shrink-0 opacity-80" />
                    <div className="text-slate-700 space-y-4 flex-grow">
                        <p className="text-lg">The Facebook Pixel and Conversion API (CAPI) are essential tools for maximizing your Instagram Ad performance. They provide the data needed to track actions, optimize for conversions, and build powerful retargeting audiences.</p>
                        <h4 className="text-xl font-semibold text-slate-800 mt-4">How Pixel & CAPI Elevate Instagram Ads:</h4>
                        <ul className="grid md:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                            {[
                                "Track Website Conversions from Insta Ads", "Optimize for Purchases & Leads",
                                "Retarget Instagram Profile Engagers", "Build Lookalikes from Engaged Users",
                                "Measure True ROAS Across Devices", "Understand Customer Journey Better"
                            ].map(benefit => (
                                <li key={benefit} className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> {benefit}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 font-medium text-[#833AB4]">We ensure expert setup and utilization of these tools for all Instagram campaigns.</p>
                    </div>
                </div>
            </SectionWrapper>

            {/* 10. Crafting Compelling Instagram Ad Creatives */}
            <SectionWrapper bgVariant="default">
                <SectionTitle title="Visuals That Stop the Scroll & Spark Joy" subtitle="Instagram is a beauty contest. We make sure your ads win." color={instaPrimary} />
                 <div className="grid md:grid-cols-3 gap-8 mt-10">
                    <ModernFeatureCard icon={<Camera />} title="Aesthetically Pleasing Design" description="High-resolution, beautifully composed images and videos that align with Instagram's visual standards." iconBgGradient="from-[#C13584]/10 to-[#F56040]/10" iconColor="text-[#C13584]" />
                    <ModernFeatureCard icon={<Edit3 />} title="Engaging & Authentic Storytelling" description="Captions and visuals that tell a story, evoke emotion, and encourage interaction." iconBgGradient="from-[#833AB4]/10 to-[#C13584]/10" iconColor="text-[#833AB4]" />
                    <ModernFeatureCard icon={<CheckCircle />} title="Format-Specific Optimization" description="Creatives tailored for Feed, Stories, Reels, ensuring native look and feel for best performance." iconBgGradient="from-[#F56040]/10 to-[#FCAF45]/10" iconColor="text-[#F56040]" />
                </div>
            </SectionWrapper>

            {/* 11. A/B Testing & Continuous Optimization on Instagram */}
            <SectionWrapper bgVariant="light">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionTitle title="Evolve & Excel: The Instagram Optimization Loop" subtitle="We continuously test and refine to keep your campaigns fresh, engaging, and high-performing." alignment="left" color={instaSecondary}/>
                        <p className="text-slate-600 leading-relaxed mb-6">On Instagram, trends change fast. We systematically A/B test visuals, captions, CTAs, audiences (including influencer-based), and placements (Stories vs. Reels vs. Feed) to find what captivates your audience most effectively.</p>
                        <Button onClick={() => router.push('/contact?interest=insta-optimization')} style={{backgroundColor: instaSecondary}} className="hover:opacity-90 text-white">Our Insta-Testing Approach</Button>
                    </div>
                    <div className="flex justify-center">
                        <Shuffle className="w-32 h-32 md:w-48 md:h-48 opacity-70" style={{color: instaSecondary}}/>
                    </div>
                </div>
            </SectionWrapper>

            {/* 12. Transparent Reporting for Instagram */}
             <SectionWrapper bgVariant="default">
                <SectionTitle title="Instagram Performance, Demystified" subtitle="Clear reports that showcase your brand's growth, engagement, and ROI on the platform." color={instaAccentOrange}/>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="p-8 bg-slate-100 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4" style={{color: instaAccentOrange}}>Instagram Reporting Highlights:</h3>
                        <ul className="space-y-3 text-slate-700">
                            {["Engagement Metrics (Likes, Comments, Shares, Saves)", "Reach, Impressions & Frequency", "Story Views & Completion Rates", "Reels Plays & Interactions", "Follower Growth & Profile Visits", "Click-Through Rates & Conversions (if applicable)", "ROAS & Cost Per Result"].map(item => (
                                <li key={item} className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />{item}</li>
                            ))}
                        </ul>
                    </div>
                     <div className="text-center md:text-left">
                        <img src="https://placehold.co/500x300/F56040/FFFFFF?text=Insta+Report" alt="Sample Instagram Report" className="rounded-lg shadow-xl mx-auto md:mx-0"/>
                        <p className="text-slate-600 mt-6 leading-relaxed">We provide data-rich narratives, not just numbers, helping you understand your audience and refine your Instagram strategy.</p>
                    </div>
                </div>
            </SectionWrapper>
            
            {/* 13. Instagram Success Stories */}
            <SectionWrapper bgVariant="insta-gradient">
                <SectionTitle title="Brands Thriving on Instagram With Us" subtitle="Real results from brands that leveraged our Instagram advertising expertise. (More coming soon!)" color="#FFFFFF"/>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {name: "Fashion Forward Co.", result: "250% Increase in Engagement", industry: "Apparel", logoColor: instaPrimary},
                        {name: "Artisan Eats Cafe", result: "70% Growth in Local Followers", industry: "Food & Beverage", logoColor: instaAccentOrange},
                        {name: "Tech Gadgets Inc.", result: "3.5x ROAS on Product Launch", industry: "Electronics", logoColor: instaSecondary}
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

            {/* 14. Instagram Advertising FAQ */}
            <SectionWrapper bgVariant="default">
                <SectionTitle title="Instagram Ad Queries? We've Got Answers." color={instaPrimary}/>
                <div className="max-w-3xl mx-auto space-y-5">
                    {faqItems.map((item, index) => (
                        <details key={index} className="group bg-white p-5 rounded-xl shadow-lg border border-slate-100 hover:border-[#C13584]/30 transition-colors">
                            <summary className="flex justify-between items-center font-semibold text-slate-800 cursor-pointer list-none text-lg group-hover:text-[#C13584]">
                                {item.q}
                                <HelpCircle className="w-6 h-6 text-slate-400 group-open:text-[#C13584] transition-colors group-open:rotate-180 transform duration-300" />
                            </summary>
                            <p className="text-slate-600 mt-4 text-base leading-relaxed group-open:animate-fadeIn">
                                {item.a}
                            </p>
                        </details>
                    ))}
                </div>
            </SectionWrapper>

            {/* 15. Get Started with Instagram Advertising */}
            <section className="py-20 md:py-32 text-white" style={{background: "linear-gradient(135deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)"}}>
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <Camera className="w-20 h-20 text-white/80 mx-auto mb-8 animate-pulse" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">Ready to Make Your Brand Shine on Instagram?</h2>
                    <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)]">
                        Don't let your competitors steal the spotlight. Our Instagram advertising experts are ready to craft a visually compelling strategy that captivates your audience and drives growth.
                    </p>
                    <div className="flex flex-col md:flex-row gap-5 justify-center">
                        <Button 
                            onClick={() => router.push('/contact?service=instagram-ads&source=final-cta')}
                            size="lg"
                            className="bg-white text-[#C13584] hover:bg-slate-100 transition-all font-bold text-lg px-12 py-5 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            Get Your Free Insta-Strategy Call <ArrowRight className="w-6 h-6 ml-2" />
                        </Button>
                        <Button 
                            onClick={() => router.push('/services/social-media-advertising')}
                            size="lg"
                            variant="outline"
                            className="border-white/50 text-[#C13584] hover:bg-white/20 hover:border-white transition-all font-semibold text-lg px-12 py-5 rounded-lg backdrop-blur-sm"
                        >
                            All Social Media Services
                        </Button>
                    </div>
                </div>
            </section>

            {/* 16. Bonus: Related Services / Explore More */}
            <SectionWrapper bgVariant="light">
                <SectionTitle 
                    title="Complete Your Social Media Domination"
                    subtitle="Instagram is a key player. See how it fits into a wider winning strategy."
                    color={instaPrimary}
                />
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: "Facebook Ads", link: "/services/social-media-advertising/facebook", icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png", color: "#1877F2", desc: "Reach a massive audience with unparalleled targeting options." },
                        { name: "Linkedin", link: "/services/social-media-advertising/linkedin", icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png", color: "#000000", desc: "Engage Gen Z with creative short-form video content." },
                        { name: "Content Marketing", link: "/services/content-writing/copywriting-services", icon: "https://cdn-icons-png.flaticon.com/512/2965/2965454.png", color: "#4CAF50", desc: "Fuel all your social channels with valuable, shareable content." }
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