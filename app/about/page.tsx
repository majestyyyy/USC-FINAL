import { Users, Target, Eye, Heart } from "lucide-react"
import Link from "next/link"

const officers = [
	{
		name: "Andrea Nicole Osinsao",
		position: "President",
		image: "/images/officers/president.png",
		bio: "Leading the USC with vision and dedication to student welfare.",
	},
	{
		name: "Charlize Zapanta",
		position: "Vice President",
		image: "/images/officers/usc-vp.jpeg",
		bio: "Supporting student initiatives and academic excellence.",
		imagePosition: "center top"
	},
	{
		name: "Carla Mae Ablog",
		position: "Secretary",
		image: "/images/officers/usc-secretary.jpg",
		bio: "Ensuring transparency and proper documentation of USC activities.",
	},
	{
		name: "Colline Hazel Buenaventura",
		position: "Treasurer",
		image: "/images/officers/usc-treasurer.jpg",
		bio: "Managing USC finances with accountability and transparency.",
	},
	{
		name: "AJ Jamal",
		position: "Auditor",
		image: "/placeholder.svg?height=300&width=300",
		bio: "Overseeing USC operations and ensuring compliance.",
	},
	{
		name: "John Lloyd S. Parungao",
		position: "Business Manager",
		image: "/images/officers/usc-business-manager.jpg",
		bio: "Managing business operations, partnerships, and revenue-generating activities for USC.",
	},
	{
		name: "Mawen Anthony Iringan",
		position: "Public Relations Officer",
		image: "/placeholder.svg?height=300&width=300",
		bio: "Connecting USC with the student body and external partners.",
	},
]

const chiefOfStaff = {
	name: "Andrea Jene Galicia",
	position: "Chief of Staff",
	image: "/images/officers/andrea-galicia.png",
	bio: "Leads and coordinates all committee heads and ensures smooth operations across all USC committees.",
}

const committees = [
	{
		name: "Academic Affairs Committee",
		position: "Chairperson",
		person: "------",
		image: "/images/committees/academic-affairs.jpg",
		description: "Handles academic concerns, curriculum feedback, and educational initiatives.",
		members: 8,
	},
	{
		name: "Student Welfare Committee",
		position: "Chairperson",
		person: "------",
		image: "/images/committees/student-welfare.jpg",
		description: "Focuses on student health, safety, and general welfare programs.",
		members: 6,
	},
	{
		name: "Cultural and Arts Committee",
		position: "Chairperson",
		person: "------",
		image: "/images/committees/cultural-arts.jpg",
		description: "Organizes cultural events, arts programs, and creative activities.",
		members: 10,
	},
	{
		name: "Sports and Recreation Committee",
		position: "Chairperson",
		person: "------",
		image: "/images/committees/sports-recreation.jpg",
		description: "Manages sports events, recreational activities, and fitness programs.",
		members: 7,
	},
	{
		name: "Community Outreach Committee",
		position: "Chairperson",
		person: "------",
		image: "/images/committees/community-outreach.jpg",
		description: "Coordinates community service projects and outreach programs.",
		members: 9,
	},
	{
		name: "Finance Committee",
		position: "Chairperson",
		person: "------",
		image: "/images/committees/finance.jpg",
		description: "Oversees budget planning, financial management, and fundraising activities.",
		members: 5,
	},
	{
		name: "Business Development Committee",
		position: "Chairperson",
		person: "------",
		image: "/images/committees/business-development.jpg",
		description: "Manages partnerships, sponsorships, and business opportunities for USC.",
		members: 6,
	},
]

const collegeCouncils = [
	{
		name: "College of Arts and Sciences",
		slug: "cas",
		color: "green",
		logo: "/images/college-logo/cas.png",
	},
	{
		name: "College of Business Administration",
		slug: "cba",
		color: "yellow",
		logo: "/images/college-logo/cba.png",
	},
	{
		name: "College of Education",
		slug: "ceduc",
		color: "blue",
		logo: "/images/college-logo/ceduc.png",
	},
	{
		name: "College of Engineering",
		slug: "ceng",
		color: "orange",
		logo: "/images/college-logo/ceng.png",
	},
	{
		name: "College of Computer Studies and Systems",
		slug: "ccss",
		color: "darkgreen",
		logo: "/images/logo/ccss.png",
	},
	{
		name: "College of Dentistry",
		slug: "cdent",
		color: "violet",
		logo: "/images/college-logo/cdent.png",
	},
]

const colorMap: Record<string, { bg: string; text: string }> = {
	green: { bg: "bg-green-100", text: "text-green-600" },
	darkgreen: { bg: "bg-green-800", text: "text-green-100" },
	yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
	blue: { bg: "bg-blue-100", text: "text-blue-600" },
	orange: { bg: "bg-orange-100", text: "text-orange-600" },
	violet: { bg: "bg-violet-100", text: "text-violet-600" },
}

// Navigation for About Page
const aboutNav = [
	{ label: "About USC", href: "#about-usc" },
	{ label: "USC Officers", href: "#officers" },
	{ label: "USC Committees", href: "#committees" },
	{ label: "College Student Councils", href: "#college-councils" },
]

export default function AboutPage() {
	return (
		<div className="min-h-screen">
			{/* About Navigation */}
			<nav className="sticky top-0 z-10 bg-white border-b border-gray-100 mb-8">
				<div className="max-w-7xl mx-auto px-4 flex gap-4 py-3 justify-center">
					{aboutNav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="text-gray-700 hover:text-red-700 font-medium px-3 py-1 rounded transition-colors duration-200"
						>
							{item.label}
						</a>
					))}
				</div>
			</nav>

			{/* Hero Section */}
			<section className="bg-gradient-to-r from-red-600 to-red-800 text-white section-padding">
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
					<p className="text-xl md:text-2xl max-w-3xl mx-auto">
						Learn more about University Student Council and College Student Council of the University of the East
						Manila.
					</p>
				</div>
			</section>

			{/* About USC */}
			<section id="about-usc" className="section-padding bg-gray-50">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
							About the University Student Council
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							The USC serves as the official voice of the student body, working tirelessly to represent student
							interests and improve campus life.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
						<div className="text-center">
							<Target className="h-16 w-16 text-red-600 mx-auto mb-4" />
							<h3 className="text-xl font-semibold mb-4">Our Mission</h3>
							<p className="text-gray-600">
								To serve as the unified voice of UE Manila students, advocating for their rights, welfare, and
								academic interests while fostering a vibrant campus community.
							</p>
						</div>
						<div className="text-center">
							<Eye className="h-16 w-16 text-red-600 mx-auto mb-4" />
							<h3 className="text-xl font-semibold mb-4">Our Vision</h3>
							<p className="text-gray-600">
								To be a student council that exemplifies excellence in leadership, service, and advocacy,
								creating lasting positive change in the university community.
							</p>
						</div>
						<div className="text-center">
							<Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
							<h3 className="text-xl font-semibold mb-4">Our Values</h3>
							<p className="text-gray-600">
								Excellence, Integrity, Service, Transparency, and Unity guide our actions and decisions as we
								serve the student body with dedication and passion.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* USC Officers */}
			<section id="officers" className="section-padding">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">USC Officers 2025-2026</h2>
						<p className="text-xl text-gray-600">Meet your dedicated student leaders working for your welfare</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{officers.map((officer, index) => (
							<div
								key={index}
								className="card p-6 text-center hover:shadow-xl transition-all duration-300"
							>
								<div className="relative mx-auto mb-4 w-48 h-48 overflow-hidden rounded-lg border-4 border-red-100 bg-gray-100">
									<img
										src={officer.image || "/placeholder.svg"}
										alt={officer.name}
										className="w-full h-full object-cover object-center"
										loading="lazy"
										style={{
											objectPosition: officer.imagePosition || "center bottom",
										}}
									/>
								</div>
								<h3 className="text-xl font-semibold mb-2">{officer.name}</h3>
								<p className="text-red-600 font-medium mb-3">{officer.position}</p>
								<p className="text-gray-600">{officer.bio}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Committees */}
			<section id="committees" className="section-padding bg-gray-50">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">USC Committees</h2>
						<p className="text-xl text-gray-600">Specialized groups working on different aspects of student life</p>
					</div>
					<div className="mb-8 card p-6 text-center bg-white shadow-md flex flex-col items-center">
						<div className="relative mx-auto mb-4 w-48 h-48 overflow-hidden rounded-lg border-4 border-red-100 bg-gray-100">
							<img
								src={chiefOfStaff.image || "/placeholder.svg"}
								alt={chiefOfStaff.name}
								className="w-full h-full object-cover object-top scale-125"
								width={192}
								height={192}
								style={{ objectPosition: 'center top' }}
							/>
						</div>
						<h3 className="text-2xl font-bold text-black-700 mb-2">{chiefOfStaff.name}</h3>
						<p className="text-red-600 font-medium mb-1">{chiefOfStaff.position}</p>
						<p className="text-gray-600">{chiefOfStaff.bio}</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{committees.map((committee, index) => (
							<div key={index} className="card p-6 hover:shadow-xl transition-all duration-300">
								<div className="flex items-start justify-between mb-4">
									<div>
										<h3 className="text-xl font-semibold text-gray-900">{committee.name}</h3>
										<p className="text-red-600 font-medium">
											{committee.position}: {committee.person}
										</p>
									</div>
									<div className="flex items-center text-sm text-gray-500">
										<Users className="h-4 w-4 mr-1" />
										{committee.members} members
									</div>
								</div>
								<p className="text-gray-600 mb-2">{committee.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* College Councils */}
			<section id="college-councils" className="section-padding">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">College Student Councils</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Each college has its own student council representing the specific needs and interests of their
							students
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{collegeCouncils.map((council, index) => {
							const color = colorMap[council.color] || colorMap.green
							return (
								<Link
									href={`/college-councils/${council.slug}`}
									key={index}
									className="card p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
								>
									<img
										src={council.logo}
										alt={`${council.name} Logo`}
										className="w-20 h-20 mx-auto mb-4 object-contain rounded-full bg-white border border-gray-200"
									/>
									<h3 className="text-xl font-semibold mb-2">{council.name}</h3>
									<p className="text-gray-600">Student Council</p>
									<div className="mt-4 inline-flex items-center text-red-600 font-medium">
										View Officers <span className="ml-2">→</span>
									</div>
								</Link>
							)
						})}
					</div>
				</div>
			</section>
		</div>
	)
}
