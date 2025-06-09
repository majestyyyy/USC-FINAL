import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

// College council data
const collegeCouncils = {
  cas: {
    name: "College of Arts and Sciences",
    shortName: "CAS",
    color: "green",
    description:
      "The College of Arts and Sciences Student Council represents students across various disciplines including Psychology, Political Science, Biology, Communication, English, and History programs.",
    logo: "/images/logo/cas.png",
    officers: [
      {
        position: "President",
        name: "Miko Angelo Romeo",
        course: "BS Psychology",
        year: "4th",
        image: "/images/CAS/President_ROMEO.jpg",
      },
      {
        position: "Vice President",
        name: "Millcen Umali",
        course: "AB Communication",
        year: "4th",
        image: "/images/CAS/VicePresident_UMALI.jpg",
      },
      {
        position: "Secretary",
        name: "Janica Jehn Christien Bugaing",
        course: "BS Biology",
        year: "3rd",
        image: "/images/CAS/Secretary_BUGAING.jpg",
      },
      {
        position: "Treasurer",
        name: "Aczer Sta. Ana Jr.",
        course: "AB Political Science",
        year: "3rd",
        image: "/images/CAS/Treasurer_STA. ANA.jpg",
      },
      {
        position: "Auditor",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Business Manager",
        name: "Brandon Keanu Maramba",
        course: "AB History",
        year: "3rd",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Public Relations Officer",
        name: "Jamaeca Fresh Damulog",
        course: "AB Communication",
        year: "3rd",
        image: "/images/CAS/PRO_DAMULOG.png",
      },
      {
        position: "4th Year Representative",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "3rd Year Representative",
        name: "Allen Russell Ramos",
        course: "BS Biology",
        year: "3rd",
        image: "/images/CAS/3rdYearRep_RAMOS.jpg",
      },
      {
        position: "2nd Year Representative",
        name: "Carmela Sophia Itoriaga",
        course: "AB Political Science",
        year: "2nd",
        image: "/images/CAS/2ndYearRep_ITORIAGA.jpg",
      },
      {
        position: "1st Year Representative",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
  cba: {
    name: "College of Business Administration",
    shortName: "CBA",
    color: "yellow",
    description:
      "The College of Business Administration Student Council represents students from Business Administration, Accountancy, Management Accounting, and Entrepreneurship programs.",
    logo: "/logos/cba-logo.png",
    officers: [
      {
        position: "President",
        name: "Carl Bennedict Cudiamat",
        course: "BS Accountancy",
        year: "4th",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Vice President",
        name: "J-Ann Isabel Del Castillo",
        course: "BS Business Administration",
        year: "4th",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Secretary",
        name: "Shannon Rose Guira",
        course: "BS Management Accounting",
        year: "3rd",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Treasurer",
        name: "Christian Rivera",
        course: "BS Accountancy",
        year: "3rd",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Auditor",
        name: "Steven Carl Peñaflor",
        course: "BS Business Administration",
        year: "4th",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Business Manager",
        name: "Axel Buisel",
        course: "BS Entrepreneurship",
        year: "3rd",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Public Relations Officer",
        name: "Jeanna Christine Corpus",
        course: "BS Business Administration",
        year: "3rd",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "4th Year Representative",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "3rd Year Representative",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "2nd Year Representative",
        name: "Gabriel Fraginal",
        course: "BS Business Administration",
        year: "2nd",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "1st Year Representative",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
  ceduc: {
    name: "College of Education",
    shortName: "CEduc",
    color: "blue",
    description:
      "The College of Education Student Council represents students from Education, Nutrition, Sports Science, Early Childhood Education, and Special Education programs.",
    logo: "/images/logo/ceduc.png",
    officers: [
      {
        position: "President",
        name: "Elijah Mikkhael Diaz",
        course: "BS Education",
        year: "4th",
        image: "/images/CEDUC/DIAZ.jpg",
      },
      {
        position: "Vice President",
        name: "Jasmine Macalalad",
        course: "BS Education",
        year: "4th",
        image: "/images/CEDUC/MACALALAD.jpg",
      },
      {
        position: "Secretary",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Treasurer",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Auditor",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Business Manager",
        name: "Aaron Jon Bautista",
        course: "BS Education",
        year: "3rd",
        image: "/images/CEDUC/BAUTISTA.jpg",
      },
      {
        position: "Public Relations Officer",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "4th Year Representative",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "3rd Year Representative",
        name: "Naw Trisha Anne Win",
        course: "BS Education",
        year: "3rd",
        image: "/images/CEDUC/WIN.jpg",
      },
      {
        position: "2nd Year Representative",
        name: "Shelley Mae Manlunas",
        course: "BS Education",
        year: "2nd",
        image: "/images/CEDUC/MANLUNAS.jpg",
      },
      {
        position: "1st Year Representative",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
  ceng: {
    name: "College of Engineering",
    shortName: "CEng'g",
    color: "orange",
    description:
      "The College of Engineering Student Council represents students from Civil Engineering, Electrical Engineering, Mechanical Engineering, and Computer Engineering programs.",
    logo: "/logos/ceng-logo.png",
    officers: [
      {
        position: "President",
        name: "Khein Terania",
        course: "BS Mechanical Engineering",
        year: "4th",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Vice President",
        name: "Jhames Marck Ablan",
        course: "BS Civil Engineering",
        year: "4th",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Secretary",
        name: "Rhain Jhanna Macasias",
        course: "BS Electrical Engineering",
        year: "3rd",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Treasurer",
        name: "Marc Anthony Dela Cruz",
        course: "BS Computer Engineering",
        year: "3rd",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Auditor",
        name: "Clarizza Reyes",
        course: "BS Civil Engineering",
        year: "4th",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Business Manager",
        name: "Marielle Ysabela Regaspe",
        course: "BS Mechanical Engineering",
        year: "3rd",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Public Relations Officer",
        name: "Marcus Jermaine Carabeo",
        course: "BS Electrical Engineering",
        year: "3rd",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "4th Year Representative",
        name: "Skhart Aye Mercado",
        course: "BS Mechanical Engineering",
        year: "4th",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "3rd Year Representative",
        name: "Neil Benedict Credo",
        course: "BS Electrical Engineering",
        year: "3rd",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "2nd Year Representative",
        name: "Jawad Hadji Cassan Macawadib",
        course: "BS Computer Engineering",
        year: "2nd",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "1st Year Representative",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
  ccss: {
    name: "College of Computer Studies and Systems",
    shortName: "CCSS",
    color: "darkgreen",
    description:
      "The College of Computer Studies and Systems Student Council represents students from Information Technology, Computer Science, Multimedia Arts, and Data Science programs.",
    logo: "/images/logo/ccss.png",
    officers: [
      {
        position: "President",
        name: "Aldrin Sombrano",
        course: "BS Computer Science",
        year: "4th",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Vice President",
        name: "Julius Samar",
        course: "BS Information Technology",
        year: "4th",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Secretary",
        name: "Janna Ayala",
        course: "BS Multimedia Arts",
        year: "3rd",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Treasurer",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Auditor",
        name: "Cyrus Songodanan",
        course: "BS Computer Science",
        year: "4th",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Business Manager",
        name: "Kimberly Ejon",
        course: "BS Information Technology",
        year: "3rd",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Public Relations Officer",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "4th Year Representative",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "3rd Year Representative",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "2nd Year Representative",
        name: "Eira Ayessa Rivera",
        course: "BS Information Technology",
        year: "2nd",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "1st Year Representative",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
  cdent: {
    name: "College of Dentistry",
    shortName: "CDent",
    color: "violet",
    description:
      "The College of Dentistry Student Council represents students from the Doctor of Dental Medicine program, supporting their unique needs throughout their six-year curriculum.",
    logo: "/logos/cdent-logo.png",
    officers: [
      {
        position: "President",
        name: "Claredine Christine Ong",
        course: "Doctor of Dental Medicine",
        year: "6th",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Vice President",
        name: "Jasmine Daphne Custodio",
        course: "Doctor of Dental Medicine",
        year: "5th",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Secretary",
        name: "Juliana Ira Serrano",
        course: "Doctor of Dental Medicine",
        year: "4th",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Treasurer",
        name: "Chrizadale Salamanca",
        course: "Doctor of Dental Medicine",
        year: "4th",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Auditor",
        name: "Angela Rana Ventura",
        course: "Doctor of Dental Medicine",
        year: "5th",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Business Manager",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "Public Relations Officer",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "6th Year Representative",
        name: "Cziarel Andrea Codotco",
        course: "Doctor of Dental Medicine",
        year: "6th",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "5th Year Representative",
        name: "Louie Adrian Gonzales",
        course: "Doctor of Dental Medicine",
        year: "5th",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "4th Year Representative",
        name: "Princess Colene Opena",
        course: "Doctor of Dental Medicine",
        year: "4th",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "3rd Year Representative",
        name: "Princess Gwyneth Pacog",
        course: "Doctor of Dental Medicine",
        year: "3rd",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "2nd Year Representative",
        name: "Johann James Laz",
        course: "Doctor of Dental Medicine",
        year: "2nd",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        position: "1st Year Representative",
        name: "No Candidate",
        course: "",
        year: "",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
}

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
  const council = collegeCouncils[slug as keyof typeof collegeCouncils]

  // If the slug doesn't match any council, return 404
  if (!council) {
    notFound()
  }

  const heroBg = colorMap[council.color as keyof typeof colorMap] || 'bg-gray-600'

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`${heroBg} text-white section-padding shadow-lg`}>
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
