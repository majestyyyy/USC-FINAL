import Image from "next/image";
import {orgs} from "@/lib/uscData"

// Consolidated Organization Data

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
                {orgs.map((group, index) => (
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
