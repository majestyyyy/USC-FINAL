import Image from "next/image";

// Consolidated Organization Data
const organizationsByCollege = [
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
];

// Navigation Links
const orgNav = [
    { label: "CAS", href: "#casOrgs" },
    { label: "CBA", href: "#cbaOrgs" },
    { label: "CCSS", href: "#ccssOrgs" },
    { label: "CENG", href: "#cengOrgs" },
    { label: "CEDUC", href: "#ceducOrgs" },
    { label: "CDENT", href: "#ccdentOrgs" },
    { label: "UNIVWIDE", href: "#univOrgs" },
];

export default function OrganizationsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-800 scroll-smooth">
            {/* Navigation */}
            <nav className="sticky top-0 z-20 bg-white/90 border-b border-gray-100 mb-8 shadow backdrop-blur-lg">
                <div className="max-w-5xl mx-auto flex flex-wrap gap-2 px-4 py-3 justify-center">
                    {orgNav.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-gray-700 hover:text-blue-700 font-semibold px-4 py-2 rounded-full transition-colors duration-200 bg-gray-100 hover:bg-blue-50 shadow-sm"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Header */}
            <section className="bg-gradient-to-r from-red-600 to-red-800 text-white section-padding shadow-lg rounded-b-3xl mb-12">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight">
                        Recognized Student Organizations
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium opacity-90">
                        UE Manila is home to a vibrant community of recognized student organizations that foster leadership, talent, and service.
                    </p>
                </div>
            </section>

            {/* Organization Sections */}
            <div className="section-padding max-w-5xl mx-auto space-y-24 px-4">
                {organizationsByCollege.map((group, index) => (
                    <section
                        key={group.id}
                        id={group.id}
                        className={`py-12 px-6 rounded-3xl shadow-md ${index % 2 === 0 ? "bg-white" : "bg-red-50"}`}
                    >
                        <h2 className="text-3xl font-extrabold text-gray-700 mb-8 text-center drop-shadow-md tracking-tight">
                            {group.college}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {group.orgs.map((org) => (
                                <div
                                    key={org.name}
                                    className="bg-white rounded-2xl shadow p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300 border border-gray-100"
                                >
                                    <div className="w-28 h-28 mb-4 flex items-center justify-center">
                                        <Image
                                            src={org.logo}
                                            alt={org.name}
                                            width={112}
                                            height={112}
                                            className="object-contain rounded-full bg-gray-100"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">
                                        {org.name}
                                    </h3>
                                    <p className="text-gray-600 text-center text-sm">
                                        {org.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
