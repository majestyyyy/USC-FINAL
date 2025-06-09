"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <Mail className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get in touch with the USC team. We're here to help and listen.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Office Location */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">USC Office</h3>
              </div>
              <div className="text-gray-600 space-y-2">
                <p>SFC Building</p>
                <p>University of the East Manila</p>
                <p>2219 Claro M. Recto Avenue</p>
                <p>Sampaloc, Manila 1008</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">(02) 8123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">uemanilausc.official@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-gray-600">Monday - Friday</p>
                    <p className="text-gray-600">10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Stay updated with our latest news and announcements on social media.
              </p>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Map */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Find Us</h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                <iframe
                  title="UE Manila Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.563073289889!2d120.9900193153607!3d14.60422298980347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b5f2e2e2e2e3%3A0x7e2e2e2e2e2e2e2e!2sUniversity%20of%20the%20East%20Manila!5e0!3m2!1sen!2sph!4v1680000000000!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>
                  <strong>Directions:</strong>
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Take LRT Line 2 to Recto Station</li>
                  <li>Walk approximately 5 minutes to the campus</li>
                  <li>USC Office is located in the SFC Building</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Contact</h3>
          <p className="text-red-700 mb-4">
            For urgent matters that require immediate attention, please contact us directly:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-red-800">USC President Hotline:</p>
              <p className="text-red-700">(0917) 123-4567</p>
            </div>
            <div>
              <p className="font-medium text-red-800">Emergency Email:</p>
              <p className="text-red-700">uemanilausc.official@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
