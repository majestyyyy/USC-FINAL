import Image from "next/image";
import {orgs} from "@/lib/uscData"

// Consolidated Organization Data

// Navigation Links
const orgNav = [
    { label: "CCSS", href: "#ccssOrgs" },
    { label: "CAS", href: "#casOrgs" },
    { label: "CBA", href: "#cbaOrgs" },
    { label: "CEDUC", href: "#ceducOrgs" },
    { label: "CENG", href: "#cengOrgs" },
    { label: "CDENT", href: "#ccdentOrgs" },
    { label: "UNIVWIDE", href: "#univOrgs" },
];

export default function OrganizationsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-800 scroll-smooth">
            {/* Navigation */}
            <nav className="sticky top-20 z-30 bg-white border-b border-gray-100 shadow backdrop-blur-lg">
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
                        className={`py-12 px-6 rounded-3xl border-2 border-red-100 "bg-white"`}
                    >
                        <h2 className="text-3xl font-extrabold text-gray-700 mb-8 text-center drop-shadow-md tracking-tight">
                            {group.college}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {group.orgs.map((org) => {
                                const socialUrl = (org as any).social || (org as any).socialMedia;
                                // Optionally, assign a color based on group.college or org.college if available
                                return (
                                    <a
                                        key={org.name}
                                        href={socialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative card p-8 text-center bg-white/60 hover:bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl flex flex-col items-center border-2 border-gray-100 hover:border-red-400 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-600 hover:-translate-y-2"
                                        tabIndex={0}
                                    >
                                        <div className="w-24 h-24 mb-6 flex items-center justify-center mx-auto">
                                            <Image
                                                src={org.logo}
                                                alt={org.name}
                                                width={96}
                                                height={96}
                                                className="object-contain"
                                            />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 text-gray-900 text-center group-hover:text-red-700 transition-colors">
                                            {org.name}
                                        </h3>
                                        <p className="text-gray-600 text-center text-base mb-6 min-h-[48px]">
                                            {org.description}
                                        </p>
                                        
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-black/70 text-white px-3 py-1 rounded-full pointer-events-none">Visit Page</div>
                                    </a>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
