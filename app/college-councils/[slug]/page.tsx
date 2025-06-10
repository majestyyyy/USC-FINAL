import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import {collegeSC} from "@/lib/uscData"


// Color mapping for Tailwind classes
const colorMap: Record<string, string> = {
  green: 'bg-green-600',
  darkgreen: 'bg-green-800',
  yellow: 'bg-yellow-500',
  blue: 'bg-blue-600',
  orange: 'bg-orange-600',
  violet: 'bg-violet-600',
}

// Type definitions
type CouncilParams = {
  params: {
    slug: string
  }
}

export default function CollegeCouncilPage({ params }: CouncilParams) {
  const { slug } = params
  const council = collegeSC[slug as keyof typeof collegeSC]

  // If the slug doesn't match any council, return 404
  if (!council) {
    notFound()
  }

  const heroBg = colorMap[council.color as keyof typeof colorMap] || 'bg-gray-600'

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`${heroBg} text-white section-padding shadow-lg rounded-b-3xl`}>
        <div className="max-w-7xl mx-auto text-center">
          <img
            src={council.logo}
            alt={`${council.name} Logo`}
            className="mx-auto mb-4 w-36 h-36 "
          />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight">{council.name}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium opacity-90">Student Council '25 - '26</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/about#college-councils" className="inline-flex items-center text-red-600 hover:text-red-800 mb-8">
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to All College Councils
        </Link>

        {/* Council Description */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{council.name} Student Council Officers</h2>
          <p className="text-lg text-gray-600 max-w-3xl">{council.description}</p>
        </div>

        {/* Officers */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {council.officers.map((officer, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="relative mx-auto mb-4 w-40 h-40 overflow-hidden rounded-lg border-4 border-gray-100 bg-gray-50">
                  <img
                    src={officer.image || "/placeholder.svg"}
                    alt={officer.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-1">{officer.name === "No Candidate" ? "Vacant" : officer.name}</h4>
                <p className={`text-${council.color}-600 font-medium mb-2`}>{officer.position}</p>
                <p className="text-gray-500 text-sm">{officer.course}</p>
                {officer.year && <p className="text-gray-500 text-sm">{officer.year} Year</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
