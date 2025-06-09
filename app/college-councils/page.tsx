import Link from "next/link"
import { ChevronRight } from "lucide-react"

const collegeCouncils = [
  {
    name: "College of Arts and Sciences",
    shortName: "CAS",
    slug: "cas",
    color: "blue",
    description:
      "Representing students across various disciplines including Psychology, Political Science, Biology, Communication, English, and History programs.",
  },
  {
    name: "College of Business Administration",
    shortName: "CBA",
    slug: "cba",
    color: "green",
    description:
      "Representing students from Business Administration, Accountancy, Management Accounting, and Entrepreneurship programs.",
  },
  {
    name: "College of Education",
    shortName: "CEduc",
    slug: "ceduc",
    color: "yellow",
    description:
      "Representing students from Education, Nutrition, Sports Science, Early Childhood Education, and Special Education programs.",
  },
  {
    name: "College of Engineering",
    shortName: "CEng'g",
    slug: "ceng",
    color: "purple",
    description:
      "Representing students from Civil Engineering, Electrical Engineering, Mechanical Engineering, and Computer Engineering programs.",
  },
  {
    name: "College of Computer Studies and Systems",
    shortName: "CCSS",
    slug: "ccss",
    color: "indigo",
    description:
      "Representing students from Information Technology, Computer Science, Multimedia Arts, and Data Science programs.",
  },
  {
    name: "College of Dentistry",
    shortName: "CDent",
    slug: "cdent",
    color: "pink",
    description:
      "Representing students from the Doctor of Dental Medicine program, supporting their unique needs throughout their six-year curriculum.",
  },
]

export default function CollegeCouncilsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">College Student Councils</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Each college has its own student council representing the specific needs and interests of their students
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collegeCouncils.map((council, index) => (
            <Link
              href={`/college-councils/${council.slug}`}
              key={index}
              className="card p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`w-16 h-16 rounded-lg bg-${council.color}-100 flex items-center justify-center flex-shrink-0`}
                >
                  <span className={`text-xl font-bold text-${council.color}-600`}>{council.shortName}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{council.name}</h2>
                  <p className="text-gray-600 mb-4">{council.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Student Council</span>
                    <span className="inline-flex items-center text-red-600 font-medium">
                      View Officers <ChevronRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
