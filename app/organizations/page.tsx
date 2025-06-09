import Image from "next/image"

const organizationsByCollege = [
	{
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
				logo: "/images/orgs/red-cross-youth.png",
				description:
					"Fostering interest in psychology through seminars, research projects, and community outreach.",
			},
			// Add more CAS orgs here
		],
	},
	{
		college: "College of Computer Studies and Systems",
		orgs: [
			{
				name: "Computer Students Society",
				logo: "/images/orgs/red-cross-youth.png",
				description:
					"Empowering students in the field of computer science through workshops, hackathons, and tech events.",
			},
			// Add more CCSS orgs here
		],
	},
	{
		college: "University-wide Organizations",
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
				logo: "/images/orgs/red-cross-youth.png",
				description:
					"Promoting peer support and mental health awareness among students.",
			},
			// Add more university-wide orgs here
		],
	},
]

export default function OrganizationsPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-red-50 to-white text-gray-800">
			<section className="section-padding">
				<div className="max-w-4xl mx-auto text-center mb-12">
					<h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-red-700 drop-shadow-lg tracking-tight">
						Recognized Student Organizations
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						UE Manila is home to a vibrant community of recognized student
						organizations that foster leadership, talent, and service.
					</p>
				</div>
				<div className="max-w-5xl mx-auto space-y-16">
					{organizationsByCollege.map((group) => (
						<div key={group.college}>
							<h2 className="text-2xl font-bold text-gray-700 mb-6">
								{group.college}
							</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
								{group.orgs.map((org) => (
									<div
										key={org.name}
										className="bg-white rounded-2xl shadow p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300"
									>
										<div className="w-28 h-28 mb-4 flex items-center justify-center">
											<Image
												src={org.logo}
												alt={org.name}
												width={112}
												height={112}
												className="object-contain"
											/>
										</div>
										<h3 className="text-xl font-semibold mb-2 text-gray-700">
											{org.name}
										</h3>
										<p className="text-gray-600 text-center text-sm">
											{org.description}
										</p>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}
