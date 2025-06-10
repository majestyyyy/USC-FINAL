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

export const orgs = [
    {
        id: "ccssOrgs",
        college: "College of Computer Studies and Systems",
        orgs: [
            {
                name: "Computer Students Society",
                logo: "/images/orgs/computer-students-society.png",
                description:
                    "Empowering students in the field of computer science through workshops, hackathons, and tech events.",
            },
            {
                name: "UE Robotics Club",
                logo: "/images/orgs/ue-robotics-club.png",
                description:
                    "Fostering innovation and creativity in robotics through competitions, workshops, and community outreach.",
            },
            {
                name: "UE Data Science Society",
                logo: "/images/orgs/ue-data-science-society.png",
                description:
                    "Promoting data science education and research through workshops, seminars, and community outreach.",
            },
            {
                name: "UE Multimedia Arts Society",
                logo: "/images/orgs/ue-multimedia-arts-society.png",
                description:
                    "Fostering creativity and innovation in multimedia arts through events, workshops, and exhibitions.",
            },
        ],
    },
    {
        id: "casOrgs",
        college: "College of Arts and Sciences",
        orgs: [
            {
                name: "Debate and Speech Society",
                logo: "/images/orgs/debate-society.png",
                description:
                    "Promoting critical thinking and public speaking through debate tournaments and workshops.",
            },
            {
                name: "Psychology Students Society",
                logo: "/images/orgs/psychology-students-society.png",
                description:
                    "Fostering interest in psychology through seminars, research projects, and community outreach.",
            },
            {
                name: "Political Science Society",
                logo: "/images/orgs/political-science-society.png",
                description:
                    "Encouraging political awareness and civic engagement through discussions, debates, and community service.",
            },
            {
                name: "Biology Society",
                logo: "/images/orgs/biology-society.png",
                description:
                    "Promoting interest in biological sciences through research projects, seminars, and community outreach.",
            },
        ],
    },
    {
        id: "cbaOrgs",
        college: "College of Business Administration",
        orgs: [
            {
                name: "Junior Philippine Institute of Accountants",
                logo: "/images/orgs/junior-philippine-institute-of-accountants.png",
                description:
                    "Empowering future accountants through workshops, seminars, and networking events.",
            },
            {
                name: "UE Business Society",
                logo: "/images/orgs/ue-business-society.png",
                description:
                    "Fostering collaboration and support among business students through mentorship and professional development.",
            },
            {
                name: "Entrepreneurship Society",
                logo: "/images/orgs/entrepreneurship-society.png",
                description:
                    "Promoting entrepreneurship education and innovation through workshops, seminars, and community outreach.",
            },
        ],
    },
    {
        id: "ceducOrgs",
        college: "College of Education",
        orgs: [
            {
                name: "Akademya",
                logo: "/images/orgs/akademya.png",
                description:
                    "Empowering future educators through workshops, seminars, and community outreach.",
            },
            {
                name: "Future Educators Society",
                logo: "/images/orgs/future-educators-society.png",
                description:
                    "Fostering collaboration and support among future educators through mentorship and professional development.",
            },
            {
                name: "UE Sports Science Society",
                logo: "/images/orgs/ue-sports-science-society.png",
                description:
                    "Promoting sports science education and research through workshops, seminars, and community outreach.",
            },
        ],
    },
    {
        id: "cengOrgs",
        college: "College of Engineering",
        orgs: [
            {
                name: "Civil Engineering Society",
                logo: "/images/orgs/civil-engineering-society.png",
                description:
                    "Empowering future civil engineers through workshops, seminars, and community service.",
            },
            {
                name: "Electrical Engineering Society",
                logo: "/images/orgs/electrical-engineering-society.png",
                description:
                    "Fostering innovation and excellence in electrical engineering through academic and professional development.",
            },
            {
                name: "Mechanical Engineering Society",
                logo: "/images/orgs/mechanical-engineering-society.png",
                description:
                    "Empowering future mechanical engineers through workshops, seminars, and community service.",
            },
        ],
    },
    {
        id: "ccdentOrgs",
        college: "College of Dentistry",
        orgs: [
            {
                name: "UE Dental Society",
                logo: "/images/orgs/ue-dental-society.png",
                description:
                    "Supporting dental students through academic support, community service, and professional development.",
            },
            {
                name: "Dental Students Association",
                logo: "/images/orgs/dental-students-association.png",
                description:
                    "Fostering collaboration and support among dental students through mentorship and professional development.",
            },
            {
                name: "Dental Hygiene Society",
                logo: "/images/orgs/dental-hygiene-society.png",
                description:
                    "Promoting oral health awareness and hygiene practices through community outreach and education.",
            },
        ],
    },
    {
        id: "univOrgs",
        college: "University-Wide Organizations",
        orgs: [
            {
                name: "UE Chorale",
                logo: "/images/orgs/chorale.png",
                description:
                    "Showcasing student talent in music and representing UE in local and international competitions.",
            },
            {
                name: "UE Red Cross Youth",
                logo: "/images/orgs/red-cross-youth.png",
                description:
                    "Engaging students in humanitarian service and disaster response initiatives.",
            },
            {
                name: "Peer Facilitators",
                logo: "/images/orgs/peer-facilitators.png",
                description:
                    "Promoting peer support and mental health awareness among students.",
            },
            {
                name: "UE Dance Troupe",
                logo: "/images/orgs/dance-troupe.png",
                description:
                    "Showcasing student talent in dance and representing UE in local and international competitions.",
            },
            {
                name: "Debate and Speech Society",
                logo: "/images/orgs/debate-society.png",
                description:
                    "Promoting critical thinking and public speaking through debate tournaments and workshops.",
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
