import Image from "next/image"
import {partners } from "@/lib/uscData"

export default function PartnersPage() {
  return (
      
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20 shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight">
            Partners & Sponsors
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium opacity-90">
            We are grateful for the support of our partners and sponsors who help us serve the UE Manila student community
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-2xl shadow p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-28 h-28 mb-4 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={112}
                  height={112}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-red-700">
                {partner.name}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
