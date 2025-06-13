// USC shared data for all pages
// Place this file at: /Users/majesty/Downloads/ue-manila-usc-website/lib/uscData.ts

export const officers = [
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
		position: "Business Manager / Full Stack Developer",
		image: "/images/officers/usc-business-manager.jpg",
		bio: "Managing business operations, partnerships, and revenue-generating activities for USC. Lead developer and maintainer of the USC Website.",
	},
	{
		name: "Mawen Anthony Iringan",
		position: "Public Relations Officer",
		image: "/placeholder.svg?height=300&width=300",
		bio: "Connecting USC with the student body and external partners.",
	},
]

export const chiefOfStaff = {
    name: "Andrea Jene Galicia",
	position: "Chief of Staff",
	image: "/images/officers/andrea-galicia.png",
	bio: "Leads and coordinates all committee heads and ensures smooth operations across all USC committees.",
}

export const committees = [
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

export const colleges = [  
    {
		name: "College of Arts and Sciences",
		slug: "cas",
		color: "green",
		logo: "/images/logo/cas.png",
	},
	{
		name: "College of Business Administration",
		slug: "cba",
		color: "yellow",
		logo: "/images/logo/cba.png",
	},
	{
		name: "College of Education",
		slug: "ceduc",
		color: "blue",
		logo: "/images/logo/ceduc.png",
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
		logo: "/images/logo/cdent.png",
	},
]

export const collegeSC = 
    {
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
    logo: "/images/logo/cba.png",
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
    logo: "/images/logo/cdent.png",
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


export const collegeCouncils = [
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

export const announcements = [
    {
        id: 1,
        title: "Enrollment Period for A.Y. '25 - '26",
        content: "Enrollment period will start on June 16 to July 7, 2025. Please ensure all documents are prepared and submitted on time to avoid delays. For more information, visit the Enrollment section on the USC website.",
        date: "2025-06-10",
        category: "Enrollment",
        priority: "high",
        author: "USC",
    },
    {
        id: 2,
        title: "Mental Health Awareness Week - January 20-26, 2025",
        content:
            "Join us for Mental Health Awareness Week featuring seminars, workshops, and support group sessions. Professional counselors and mental health advocates will be present to provide guidance and support to our student community.",
        date: "2025-01-03",
        category: "Events",
        priority: "medium",
        author: "USC Student Welfare Committee",
    },
    {
        id: 3,
        title: "New Student Services Portal Launch",
        content:
            "We're excited to announce the launch of our new Student Services Portal. This platform will allow students to submit concerns, track requests, and access various USC services online. The portal will be available starting January 8, 2025.",
        date: "2025-01-02",
        category: "Services",
        priority: "medium",
        author: "USC Technology Committee",
    },
    {
        id: 4,
        title: "Emergency Alert: Campus Maintenance Schedule",
        content:
            "Please be advised that scheduled maintenance will be conducted in the Main Building on January 12, 2025, from 6:00 AM to 12:00 PM. Some areas may be temporarily inaccessible. Alternative routes and temporary facilities will be provided.",
        date: "2025-01-01",
        category: "Emergency Alerts",
        priority: "high",
        author: "USC Administration",
    },
    {
        id: 5,
        title: "Cultural Night 2025 - Call for Performers",
        content:
            "Calling all talented students! Registration for Cultural Night 2025 performers is now open. Showcase your talents in music, dance, theater, or any cultural performance. Registration deadline is January 18, 2025.",
        date: "2024-12-28",
        category: "Events",
        priority: "low",
        author: "USC Cultural Committee",
    },
    {
        id: 6,
        title: "Academic Excellence Awards Nomination",
        content:
            "Nominations for the Academic Excellence Awards are now being accepted. Faculty and students can nominate outstanding individuals who have demonstrated exceptional academic performance and leadership. Deadline for nominations is February 1, 2025.",
        date: "2024-12-25",
        category: "Academic",
        priority: "medium",
        author: "USC Academic Affairs Committee",
    },
]

export const events = [
    {
      id: 1,
      title: "Freshmen Orientation and Freshmen Walk",
      date: "2025-06-15",
      time: "9:00 AM - 5:00 PM",
      location: "UE Theater then SFC Quadrangle",
      category: "Event",
      description: "An orientation event for incoming freshmen to introduce them to university life and resources.",
      attendees: 500,
    },
    {
      id: 2,
      title: "Mental Health Awareness Seminar",
      date: "2025-01-20",
      time: "2:00 PM - 4:00 PM",
      location: "Conference Hall A",
      category: "Academic",
      description: "A seminar focusing on mental health awareness and support systems.",
      attendees: 150,
    },
    {
      id: 3,
      title: "Cultural Night 2025",
      date: "2025-01-25",
      time: "6:00 PM - 10:00 PM",
      location: "University Gymnasium",
      category: "Cultural",
      description: "Annual cultural celebration showcasing student talents and diversity.",
      attendees: 800,
    },
    {
      id: 4,
      title: "Career Fair",
      date: "2025-02-01",
      time: "10:00 AM - 4:00 PM",
      location: "Student Center",
      category: "Academic",
      description: "Meet with potential employers and explore career opportunities.",
      attendees: 300,
    },
    {
      id: 5,
      title: "Intramural Sports Week",
      date: "2025-02-10",
      time: "8:00 AM - 6:00 PM",
      location: "Sports Complex",
      category: "Sports",
      description: "Week-long sports competition between different colleges.",
      attendees: 1000,
    },
    {
      id: 6,
      title: "Community Outreach Program",
      date: "2025-02-15",
      time: "7:00 AM - 5:00 PM",
      location: "Local Community",
      category: "Outreach",
      description: "Volunteer work and community service activities.",
      attendees: 100,
    },
    
]

// Example orgs data with social links
export const orgs = [
  {
    id: "ccssOrgs",
    college: "College of Computer Studies and Systems",
    orgs: [
      {
        name: "Computer Students Society",
        logo: "/images/RSO_LOGO/comsso.png",
        description:
                    "Empowering students in the field of computer science through workshops, hackathons, and tech events.",
        social: "https://www.facebook.com/ComssoUe"
      },
      {
        name: "Entertainment, Multimedia Computing Students Society",
        logo: "/images/RSO_LOGO/emcss.png",
        description:
                    "Fostering innovation and creativity in multimedia computing through competitions, workshops, and community outreach.",
        social: "https://www.facebook.com/EMCStudentsSociety"
      },
      {
        name: "CCSS - Research and Development Society",
        logo: "/images/RSO_LOGO/rnd.png",
        description:
                    "Fostering creativity and innovation in multimedia arts through events, workshops, and exhibitions.",
        social: "https://www.facebook.com/UECCSSRnDUnit"
      },
    ],
  },
  {
    id: "casOrgs",
    college: "College of Arts and Sciences",
    orgs: [
      {
        name: "UE Lex Societas Orientis",
        logo: "/images/RSO_LOGO/lexso.png",
        description:
                    "Promoting critical thinking and public speaking through debate tournaments and workshops.",
        social: "https://www.facebook.com/uelexso"
      },
      {
        name: "Psychology Society",
        logo: "/images/RSO_LOGO/psychology.png",
        description:
                    "Fostering interest in psychology through seminars, research projects, and community outreach.",
        social: "https://www.facebook.com/UEPsychologySociety"
      },
      {
        name: "UE SIHM: Society of International Hospitality Management",
        logo: "/images/RSO_LOGO/SIHM.png",
        description:
                    "Encouraging political awareness and civic engagement through discussions, debates, and community service.",
        social: "https://www.facebook.com/OfficialUESIHM"
      },
      {
        name: "UE Political Science Society",
        logo: "/images/RSO_LOGO/pss.png",
        description:
                    "Promoting interest in biological sciences through research projects, seminars, and community outreach.",
        social: "https://www.facebook.com/UEPSS"
      },
      {
        name: "The Pre-Medical Civic Society",
        logo: "/images/RSO_LOGO/premed.png",
        description: "Supporting pre-medical students with academic, civic, and outreach programs.",
        social: "https://www.facebook.com/UEPMCS"
      },
      {
        name: "University of the East - Association of Broadcasting Students",
        logo: "/images/RSO_LOGO/broad.png",
        description: "Empowering broadcasting students through media projects, workshops, and industry exposure.",
        social: "https://facebook.com/uebroadcasting"
      },
      {
        name: "UE Journalism Society",
        logo: "/images/RSO_LOGO/journal.png",
        description: "Developing journalistic skills and ethics through campus publications and media activities.",
        social: "https://www.facebook.com/uejournalismsociety"
      },
      {
        name: "UE International Studies Society",
        logo: "/images/RSO_LOGO/isso.png",
        description: "Fostering global awareness and cultural exchange among International Studies students.",
        social: "https://www.facebook.com/ueisso"
      },
    ],
  },
  {
    id: "cbaOrgs",
    college: "College of Business Administration",
    orgs: [
      {
        name: "UE Beta Sigma Omicron",
        logo: "public/images/logo/cba.png",
        description:
                    "Empowering future accountants through workshops, seminars, and networking events.",
        social: "https://facebook.com/uecodewarriors"
      },
      {
        name: "Junior Philippine Institute of Accountants",
        logo: "/images/orgs/ue-business-society.png",
        description:
                    "Fostering collaboration and support among business students through mentorship and professional development.",
        social: "https://facebook.com/uecodewarriors"
      },
      {
        name: "Junior Financial Executives",
        logo: "/images/orgs/entrepreneurship-society.png",
        description:
                    "Promoting entrepreneurship education and innovation through workshops, seminars, and community outreach.",
        social: "https://facebook.com/uecodewarriors"
      },
      {
        name: "Junior Marketing Association",
        logo: "/images/orgs/entrepreneurship-society.png",
        description:
                    "Promoting entrepreneurship education and innovation through workshops, seminars, and community outreach.",
        social: "https://facebook.com/uecodewarriors"
      },
      {
        name: "Institute of Management Accountants",
        logo: "/images/orgs/entrepreneurship-society.png",
        description:
                    "Promoting entrepreneurship education and innovation through workshops, seminars, and community outreach.",
        social: "https://facebook.com/uecodewarriors"
      },
      {
        name: "Management Student Society of the Philippines ",
        logo: "/images/orgs/entrepreneurship-society.png",
        description:
                    "Promoting entrepreneurship education and innovation through workshops, seminars, and community outreach.",
        social: "https://facebook.com/uecodewarriors"
      },
      {
        name: "Tau Alpha Sigma",
        logo: "/images/orgs/entrepreneurship-society.png",
        description:
                    "Promoting entrepreneurship education and innovation through workshops, seminars, and community outreach.",
        social: "https://facebook.com/uecodewarriors"
      },
      {
        name: "Top Accounting Students",
        logo: "/images/orgs/entrepreneurship-society.png",
        description:
                    "Promoting entrepreneurship education and innovation through workshops, seminars, and community outreach.",
        social: "https://facebook.com/uecodewarriors"
      },
      {
        name: "Beta Epsilon Sigma - Hiyas ng Silangan",
        logo: "/images/orgs/entrepreneurship-society.png",
        description:
                    "Promoting entrepreneurship education and innovation through workshops, seminars, and community outreach.",
        social: "https://facebook.com/uecodewarriors"
      },
    ],
  },
  {
    id: "ceducOrgs",
    college: "College of Education",
    orgs: [
      {
        name: "Human Kinetics Organization",
        logo: "/images/orgs/human-kinetics.png",
        description: "Promoting physical education, sports, and wellness among students through activities and outreach.",
        social: "https://facebook.com/uehumankinetics"
      },
      {
        name: "Akademia Organization",
        logo: "/images/orgs/akademia-org.png",
        description: "Fostering academic excellence and leadership among education students.",
        social: "https://facebook.com/ueakademiaorg"
      },
      {
        name: "Philippine Association of Nutrition - Sigma Chi Chapter",
        logo: "/images/orgs/pan-sigma-chi.png",
        description: "Promoting nutrition education and awareness through seminars, outreach, and research.",
        social: "https://facebook.com/uepansigmachi"
      },
      {
        name: "Student Teachers Organization",
        logo: "/images/orgs/student-teachers-org.png",
        description: "Supporting student teachers with resources, training, and professional development.",
        social: "https://facebook.com/uestudentteachers"
      },
    ],
  },
  {
    id: "cengOrgs",
    college: "College of Engineering",
    orgs: [
      {
        name: "Association of Civil Engineering Students",
        logo: "/images/orgs/association-civil-engineering.png",
        description: "Uniting civil engineering students for academic and professional growth through seminars, competitions, and outreach.",
        social: "https://facebook.com/ueaces"
      },
      {
        name: "Society of Computer Engineering Students",
        logo: "/images/orgs/society-computer-engineering.png",
        description: "Fostering innovation and excellence among computer engineering students through projects, workshops, and events.",
        social: "https://facebook.com/uescpe"
      },
      {
        name: "League of Electrical Engineering Students",
        logo: "/images/orgs/league-electrical-engineering.png",
        description: "Promoting camaraderie and technical excellence among electrical engineering students.",
        social: "https://facebook.com/uelees"
      },
      {
        name: "Philippine Society of Mechanical Engineers - UE Manila Student Unit",
        logo: "/images/orgs/psme.png",
        description: "Supporting mechanical engineering students through professional development and industry exposure.",
        social: "https://facebook.com/uepsme"
      },
    ],
  },
  {
    id: "ccdentOrgs",
    college: "College of Dentistry",
    orgs: [
      {
        name: "Achievers' Council for Excellence",
        logo: "/images/orgs/ace.png",
        description: "Promoting academic excellence and leadership among Dentistry students.",
        social: "https://facebook.com/ueace"
      },
      {
        name: "Rotaract Club of the University of the East College of Dentistry",
        logo: "/images/orgs/rotaract.png",
        description: "Engaging dental students in community service and professional development.",
        social: "https://facebook.com/uerotaractdentistry"
      },
      {
        name: "University of the East Filipino-Chinese Dental Students' Association",
        logo: "/images/orgs/fil-chi-dental.png",
        description: "Fostering camaraderie and cultural exchange among Filipino-Chinese dental students.",
        social: "https://facebook.com/uefilchidssa"
      },
      {
        name: "Omega Delta Rho - Omega Delta Phi",
        logo: "/images/orgs/omega-delta.png",
        description: "Promoting brotherhood, leadership, and service among Dentistry students.",
        social: "https://facebook.com/ueomegadeltarho"
      },
      {
        name: "Philippine Dental Students Association University of the East Chapter",
        logo: "/images/orgs/pdsa.png",
        description: "Representing UE dental students in the national dental student community.",
        social: "https://facebook.com/uepdsa"
      },
      {
        name: "University of the East Dental Health Team",
        logo: "/images/orgs/dental-health-team.png",
        description: "Promoting oral health awareness and outreach in the community.",
        social: "https://facebook.com/uedentalhealthteam"
      },
    ],
  },
    {
        id: "univOrgs",
        college: "University-Wide Organizations",
        orgs: [
            {
                name: "UE Zenith Esports",
                logo: "/images/RSO_LOGO/zenith.png",
                description:
                    "Promoting critical thinking and public speaking through debate tournaments and workshops.",
                social: "https://www.facebook.com/uezenithesports"
            },
            {
                name: "UE Chorale",
                logo: "/images/RSO_LOGO/chorale.png",
                description:
                    "Showcasing student talent in music and representing UE in local and international competitions.",
                social: "https://www.facebook.com/uechoraleofficial"
            },
            {
                name: "UE Red Cross Youth",
                logo: "/images/RSO_LOGO/rcyc.png",
                description:
                    "Engaging students in humanitarian service and disaster response initiatives.",
                social: "https://www.facebook.com/UERedCrossWarriors"
            },
            {
                name: "Peer Facilitators",
                logo: "/images/RSO_LOGO/peer.png",
                description:
                    "Promoting peer support and mental health awareness among students.",
                social: "https://www.facebook.com/uemnlpeer"
            },
            {
                name: "UE Silanganan Dance Troupe",
                logo: "/images/RSO_LOGO/dance.png",
                description:
                    "Showcasing student talent in dance and representing UE in local and international competitions.",
                social: "https://www.facebook.com/UESilangananDanceTroupe"
            },
            {
                name: "Debate and Speech Society",
                logo: "/images/RSO_LOGO/debate.png",
                description:
                    "Promoting critical thinking and public speaking through debate tournaments and workshops.",
                social: "https://www.facebook.com/uedebssoc"
            },
            {
                name: "UE Jam Sessions",
                logo: "/images/orgs/jam-sessions.png",
                description: "A community for musically inclined students to collaborate, perform, and enjoy music together.",
                social: "https://facebook.com/uejamsessions"
            },
            {
                name: "UE Alpha Sigma",
                logo: "/images/orgs/alpha-sigma.png",
                description: "A fraternity/sorority fostering leadership, service, and academic excellence.",
                social: "https://facebook.com/uealphasigma"
            },
            {
                name: "UE Manila College Y Club",
                logo: "/images/orgs/college-y-club.png",
                description: "Promoting youth leadership and community service through YMCA initiatives.",
                social: "https://facebook.com/uecollegeyclub"
            },
            {
                name: "UE Alpha Phi Omega - Epsilon",
                logo: "/images/orgs/apo-epsilon.png",
                description: "A service fraternity/sorority dedicated to developing leadership, friendship, and service.",
                social: "https://facebook.com/ueapoepsilon"
            },
            {
                name: "Christian Brotherhood International",
                logo: "/images/orgs/cbi.png",
                description: "A faith-based organization promoting Christian values and fellowship among students.",
                social: "https://facebook.com/uecbi"
            },
            {
                name: "Student Catholic Action/Christian Community Program",
                logo: "/images/orgs/sca-ccp.png",
                description: "A Catholic student organization focused on spiritual growth and community service.",
                social: "https://facebook.com/uescaccp"
            },
            {
                name: "International Student Association",
                logo: "/images/orgs/international-student-association.png",
                description: "Supporting and connecting international students at UE Manila.",
                social: "https://facebook.com/ueisa"
            },
            {
                name: "UE Bright Leaders Association for Zeal and Excellence",
                logo: "/images/orgs/blaze.png",
                description: "Empowering student leaders to excel in academics, leadership, and service.",
                social: "https://facebook.com/ueblaze"
            },
        ],
    },
]

export const partners = [
    {
      name: "Smart Communications Inc.",
      logo: "/images/sponsors/smart.png",
      description: "Supporting student connectivity and digital initiatives."
    },
    
    {
      name: "Penshoppe",
      logo: "/images/sponsors/penshoppe.jpg",
      description: "Partner in student events and campus celebrations."
    },
    {
      name: "Air Baking",
      logo: "/images/sponsors/air-baking.png",
      description: "Providing resources and school supplies for students."
    },
    {
      name: "East Side Co.",
      logo: "/images/sponsors/east-side.png",
      description: "Supporting student events and campus activities."
    },
    {
      name: "Hawk Philippines",
      logo: "/images/sponsors/hawk.png",
      description: "Supporting student mobility and convenience."
    },
    {
      name: "Potload",
      logo: "/images/sponsors/potload.png",
      description: "Providing resources and school supplies for students."
    },
    
]
