"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Calendar, MessageSquare, Users, ChevronRight, ArrowRight } from "lucide-react"

const heroSlides = [
  {
    title: "Welcome to USC Manila",
    subtitle: "Your Voice, Your Council, Your University",
    description: "Serving UE Manila students with excellence, integrity, and dedication.",
    image: "/images/ue-red-warrior.jpeg",
    cta: "Learn More About USC",
  },
  {
    title: "Submit Your Concerns",
    subtitle: "We're Here to Listen",
    description: "Have a concern or suggestion? Let us know and we'll work to address it.",
    image: "/images/ue-red-warrior.jpeg",
    cta: "Submit a Concern",
  },
  {
    title: "Upcoming Events",
    subtitle: "Join Our Community Activities",
    description: "Stay updated with the latest events and activities organized by USC.",
    image: "/images/ue-red-warrior.jpeg",
    cta: "View Events Calendar",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-600/90 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
        ></div>

        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">{heroSlides[currentSlide].title}</h1>
          <h2 className="text-2xl md:text-3xl mb-4 font-light">{heroSlides[currentSlide].subtitle}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{heroSlides[currentSlide].description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-primary inline-flex items-center">
              {heroSlides[currentSlide].cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quick Access</h2>
            <p className="text-xl text-gray-600">Everything you need, just a click away</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/calendar" className="card p-8 text-center hover:scale-105 transition-transform">
              <Calendar className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Events Calendar</h3>
              <p className="text-gray-600 mb-4">Stay updated with upcoming events and activities</p>
              <span className="text-red-600 font-semibold inline-flex items-center">
                View Calendar <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </Link>

            <Link href="/concerns" className="card p-8 text-center hover:scale-105 transition-transform">
              <MessageSquare className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Submit a concern</h3>
              <p className="text-gray-600 mb-4">Share your concerns and suggestions with us</p>
              <span className="text-red-600 font-semibold inline-flex items-center">
                Submit Now <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </Link>

            <Link href="/about#officers" className="card p-8 text-center hover:scale-105 transition-transform">
              <Users className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">USC Officers</h3>
              <p className="text-gray-600 mb-4">Meet your student council officers and committees</p>
              <span className="text-red-600 font-semibold inline-flex items-center">
                Meet the Team <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* UE Canvas and UE Portal Section */}
      <section className="section-padding bg-red-100 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">University Platform</h2>
            <p className="text-xl text-gray-600">Access essential UE platforms for students</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="https://ue.instructure.com/login/canvas" className="card p-8 text-center hover:scale-105 transition-transform">
              <MessageSquare className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">UE Canvas</h3>
              <p className="text-gray-600 mb-4">Access your online learning platform</p>
              <span className="text-red-600 font-semibold inline-flex items-center">
                Visit Canvas <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </Link>

            <Link href="https://apps.ue.edu.ph/portals/sp/" className="card p-8 text-center hover:scale-105 transition-transform">
              <Users className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">UE Portal</h3>
              <p className="text-gray-600 mb-4">Manage your student account and services</p>
              <span className="text-red-600 font-semibold inline-flex items-center">
                Visit Portal <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </Link>

            <Link href="https://www.ue.edu.ph/mla/" className="card p-8 text-center hover:scale-105 transition-transform">
              <Users className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">UE Website</h3>
              <p className="text-gray-600 mb-4">Access the official University Website</p>
              <span className="text-red-600 font-semibold inline-flex items-center">
                Visit Website <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </Link>

            <Link href="https://apps.ue.edu.ph/iEnroll/login.html" className="card p-8 text-center hover:scale-105 transition-transform">
              <Users className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">UE iEnroll</h3>
              <p className="text-gray-600 mb-4">Enroll faster with iEnroll</p>
              <span className="text-red-600 font-semibold inline-flex items-center">
                Visit iEnroll <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Announcements Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Announcements</h2>
              <p className="text-xl text-gray-600">Stay informed with the latest updates</p>
            </div>
            <Link href="/announcements" className="btn-primary">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enrollment Period: June 16 to July 7",
                date: "June 16, 2025",
                category: "Enrollment",
                excerpt:
                  "Enrollment Period for the upcoming semester will start on June 16 and end on July 7. Please prepare your requirements and enroll on time.",
              },
              {
                title: "First Day of Regular Classes: July 7",
                date: "July 7, 2025",
                category: "Academic",
                excerpt:
                  "The first day of regular classes for the new semester will be on July 7. Welcome back, Warriors!",
              },
              {
                title: "Student Council Elections 2025",
                date: "January 15, 2025",
                category: "Elections",
                excerpt:
                  "Registration for student council elections is now open. Learn about the process and requirements.",
              },
              {
                title: "Mental Health Awareness Week",
                date: "January 10, 2025",
                category: "Events",
                excerpt: "Join us for a week-long series of activities focused on mental health and wellness.",
              },
              {
                title: "New Student Services Available",
                date: "January 5, 2025",
                category: "Services",
                excerpt: "We've launched new services to better support our student community.",
              },
            ].slice(0, 3).map((announcement, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {announcement.category}
                  </span>
                  <span className="text-sm text-gray-500">{announcement.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{announcement.title}</h3>
                <p className="text-gray-600 mb-4">{announcement.excerpt}</p>
                <Link href="/announcements" className="text-red-600 font-semibold inline-flex items-center">
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
