import Image from "next/image"

const partners = [
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

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white text-gray-800">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-red-700 drop-shadow-lg tracking-tight">USC Partners & Sponsors</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are grateful for the support of our partners and sponsors who help us serve the UE Manila student community.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300">
              <div className="w-28 h-28 mb-4 flex items-center justify-center">
                <Image src={partner.logo} alt={partner.name} width={112} height={112} className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-red-700">{partner.name}</h3>
              <p className="text-gray-600 text-center text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
