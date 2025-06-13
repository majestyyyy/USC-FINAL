"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [aboutDropdown, setAboutDropdown] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 text-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between h-20 relative">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/images/usc.png" alt="USC Logo" className="w-12 h-12 object-contain" />
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-red-600">USC</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link href="/about" className="text-gray-700 font-medium hover:text-red-600 transition-colors ">
              About
            </Link>

            <div className="relative group flex items-center">
              <span className="flex items-center text-gray-700 font-medium hover:text-red-600 transition-colors cursor-pointer select-none">
                Notice
                <ChevronDown className="ml-1 h-4 w-4" />
              </span>
              <div className="absolute left-0 top-full mt-0 w-44 bg-white border border-gray-100 rounded-b-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-200 z-50">
                <Link href="/announcements" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg">Announcements</Link>
                <Link href="/calendar" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-b-lg">Events</Link>
              </div>
            </div>

            <Link href="/concerns" className="text-gray-700 font-medium hover:text-red-600 transition-colors">
              Concern
            </Link>
            <Link href="/school-calendar" className="text-gray-700 font-medium hover:text-red-600 transition-colors">
              Calendar
            </Link>
            <Link href="/organizations" className="text-gray-700 font-medium hover:text-red-600 transition-colors">
              RSOs
            </Link>
            <Link href="/partners" className="text-gray-700 font-medium hover:text-red-600 transition-colors">
              Partners
            </Link>
            <Link href="/contact" className="text-gray-700 font-medium hover:text-red-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-red-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-red-600">About</Link>
              <Link href="/announcements" className="block px-3 py-2 text-gray-700 hover:text-red-600">Announcements</Link>
              <Link href="/calendar" className="block px-3 py-2 text-gray-700 hover:text-red-600">Events</Link>
              <Link href="/concerns" className="block px-3 py-2 text-gray-700 hover:text-red-600">Concern</Link>
              <Link href="/school-calendar" className="block px-3 py-2 text-gray-700 hover:text-red-600">Calendar</Link>
              <Link href="/organizations" className="block px-3 py-2 text-gray-700 hover:text-red-600">RSOs</Link>
              <Link href="/partners" className="block px-3 py-2 text-gray-700 hover:text-red-600">Partners</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-red-600">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
