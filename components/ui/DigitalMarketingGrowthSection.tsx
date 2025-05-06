'use client'

import Image from "next/image"

const mainGraphic = "/placeholder-computer-graphic.png"
const caseStudyImg1 = "/placeholder-ortho-office.jpg"
const caseStudyImg2 = "/placeholder-construction-workers.jpg"
const caseStudyImg3 = "/placeholder-camera-lenses.jpg"

const caseStudies = [
  {
    imageSrc: caseStudyImg1,
    imageAlt: "Orthodontic practice team",
    title: "Multiple-Location Orthodontic Practice Group",
    category: "Conversion Rate Optimization (CRO)",
    stats: [
      { value: "+226%", label: "Top 5 Keyword Rankings" },
      { value: "+122%", label: "Monthly Leads" },
    ],
  },
  {
    imageSrc: caseStudyImg2,
    imageAlt: "Construction business workers",
    title: "Business Factors",
    category: "SEO and Pay-Per-Click (PPC) Marketing",
    stats: [
      { value: "+546%", label: "Conversion Rate" },
      { value: "+11,400%", label: "Live Chat" },
    ],
  },
  {
    imageSrc: caseStudyImg3,
    imageAlt: "Camera lenses collage",
    title: "Image 3D",
    category: "Amazon Advertising",
    stats: [
      { value: "+350.26%", label: "Sales Volume" },
      { value: "+451%", label: "Unit Sales" },
    ],
  },
]

export default function DigitalMarketingGrowthSection() {
  return (
    <section className="bg-white py-12 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 leading-tight">
            How Digital Marketing Services Drive Business Growth
          </h2>
          <p className="text-lg text-gray-600">
            Engage Your Target Customers at the Right Time on the Right Platform
          </p>
        </div>

        {/* Graphic + Text */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-24">
          {/* Left: Graphic */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={mainGraphic}
              alt="Digital marketing results graphic showing growth"
              width={600}
              height={450}
              className="max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
            />
          </div>

          {/* Right: Description */}
          <div className="w-full md:w-1/2 text-gray-700 space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              Digital marketing services provide businesses of all sizes with an opportunity to
              market their brand 24/7 at a low cost…
            </p>
            <p>
              Hiring an internet marketing agency is one of the best ways to reach your
              prospects while maintaining a robust relationship with your existing clients…
            </p>
            <p>
              Since 2005, our digital marketing company has partnered with{" "}
              <a
                href="#"
                className="text-orange-600 hover:underline font-medium"
              >
                hundreds of businesses
              </a>{" "}
              to achieve their conversion goals. We’ve provided an array of services and generated:
            </p>
          </div>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-md flex flex-col bg-white"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={study.imageSrc}
                  alt={study.imageAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Title & Category */}
              <div className="bg-[#FACC15] p-4 text-center">
                <h3 className="font-semibold text-gray-800">{study.title}</h3>
                <p className="text-sm text-gray-700">{study.category}</p>
              </div>

              {/* Stats */}
              <div className="flex justify-around items-start p-4 mt-auto">
                {study.stats.map((stat, sidx) => (
                  <div
                    key={sidx}
                    className={`text-center px-2 ${
                      sidx < study.stats.length - 1 ? 'border-r border-gray-200' : ''
                    }`}
                  >
                    <p className="text-2xl lg:text-3xl font-bold text-emerald-600 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Concluding Text */}
        <div className="text-center max-w-4xl mx-auto text-gray-600 mb-10">
          <p>
            Our agency follows a systematic approach to ensure all our online marketing efforts
            deliver profitable results. Leverage our services today to boost customer acquisition
            and retention.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            type="button"
            className="bg-[#F97316] hover:bg-orange-600 text-white font-bold py-3 px-10 rounded-md shadow-md transition-colors duration-200 text-lg"
          >
            LET'S TALK
          </button>
        </div>
      </div>
    </section>
  )
}
