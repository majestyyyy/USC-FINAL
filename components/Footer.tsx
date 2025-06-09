import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-red-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* USC Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/usc-logo.png" alt="USC Logo" className="w-12 h-12 object-contain" />
              <span className="text-xl font-bold">USC</span>
            </div>
            <p className="text-white-300 mb-4">
              The University Student Council of UE Manila is committed to serving our fellow students with excellence,
              integrity, and dedication. We are your voice in the university.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/UEUSC" className="text-white-300 hover:text-red-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white-300 hover:text-red-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white-300 hover:text-red-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white-300 hover:text-red-400 transition-colors">
                  About USC
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="text-white-300 hover:text-red-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/announcements" className="text-white-300 hover:text-red-400 transition-colors">
                  Announcements
                </Link>
              </li>
              <li>
                <Link href="/concerns" className="text-white-300 hover:text-red-400 transition-colors">
                  Submit Concern
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-white-300 hover:text-red-400 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-400" />
                <span className="text-white-300 text-sm">UE Manila Campus</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-400" />
                <span className="text-white-300 text-sm">uemanilausc.official@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-white-300 text-sm">(02) 8123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-white-300">
            © 2024 University of the East Manila - University Student Council. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
