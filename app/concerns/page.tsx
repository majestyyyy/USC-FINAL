"use client"

import { MessageSquare, ExternalLink, Shield, Clock } from "lucide-react"
import { useState } from "react"

export default function ConcernsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20 shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Submit a Concern</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your voice matters. Share your concerns and suggestions with us.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Google Form Iframe */}
          <div className="lg:col-span-3">
            <div className="card p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <img src="/images/usc.png" alt="USC Logo" className="w-16 h-16 object-contain mr-4" />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Share Your Concern</h2>
                    <p className="text-gray-600 mt-1">We're here to listen and help</p>
                  </div>
                </div>
              </div>
              {/* Custom Concern Form */}
              <CustomConcernForm />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Privacy Notice */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">Privacy & Security</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <p>Your privacy is our priority:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>All submissions are confidential</li>
                  <li>Data is securely stored by Google</li>
                  <li>Personal information is protected</li>
                  <li>No third-party sharing</li>
                </ul>
              </div>
            </div>

            {/* Response Time */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">Response Time</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="font-medium text-gray-700">Urgent matters:</span>
                  <span className="font-bold text-red-600">24 hours</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">General concerns:</span>
                  <span className="font-bold text-gray-600">3-5 days</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">Complex issues:</span>
                  <span className="font-bold text-gray-600">1-2 weeks</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Need Immediate Help?</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="font-semibold text-red-700 mb-2">USC Office:</p>
                  <p>SFC Building</p>
                  <p>📞 (02) 8123-4567</p>
                  <p>uemanilausc.official@gmail.com</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-700 mb-1">Office Hours:</p>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Custom Concern Form Component
function CustomConcernForm() {
  const collegePrograms: { [key: string]: string[] } = {
    "CAS": [
      "BS Psychology",
      "BS Biology",
      "BS Political Science",
      "AB Communication",
      "AB English",
      "AB History",
    ],
    "CBA": [
      "BS Accountancy",
      "BS Business Administration",
      "BS Management Accounting",
      "BS Entrepreneurship",
    ],
    "CCSS": [
      "BS Information Technology",
      "BS Computer Science",
      "BS Multimedia Arts",
      "BS Data Science",
    ],
    "CDent": [
      "Doctor of Dental Medicine",
    ],
    "CEduc": [
      "BS Education",
      "BS Nutrition",
      "BS Sports Science",
      "BS Early Childhood Education",
      "BS Special Education",
    ],
    "CEng'g": [
      "BS Civil Engineering",
      "BS Electrical Engineering",
      "BS Mechanical Engineering",
      "BS Computer Engineering",
    ],
    "Other": ["Other"],
  }

  const [form, setForm] = useState({ name: "", email: "", category: "", concern: "", contact: "", year: "", program: "", college: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value, ...(e.target.name === "college" ? { program: "" } : {}) })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess("")
    setError("")
    try {
      const res = await fetch("/api/send-concern", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSuccess("Your concern has been sent! Thank you for reaching out.")
        setForm({ name: "", email: "", category: "", concern: "", contact: "", year: "", program: "", college: "" })
      } else {
        setError("Failed to send your concern. Please try again later.")
      }
    } catch {
      setError("Failed to send your concern. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none bg-gray-50"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">UE Gmail</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none bg-gray-50"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Contact Number (optional)</label>
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none bg-gray-50"
            placeholder="09XXXXXXXXX"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Year Level</label>
          <select
            name="year"
            value={form.year}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none bg-gray-50"
            required
          >
            <option value="" disabled>Select year level</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
            <option value="5th Year">5th Year</option>
            <option value="Graduate">Graduate</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">College</label>
          <select
            name="college"
            value={form.college}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none bg-gray-50"
            required
          >
            <option value="" disabled>Select your college</option>
            <option value="CAS">College of Arts and Sciences (CAS)</option>
            <option value="CBA">College of Business Administration (CBA)</option>
            <option value="CCSS">College of Computer Studies and Systems (CCSS)</option>
            <option value="CDent">College of Dentistry (CDent)</option>
            <option value="CEduc">College of Education (CEduc)</option>
            <option value="CEng'g">College of Engineering (CEng'g)</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Program / Course</label>
          <select
            name="program"
            value={form.program || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none bg-gray-50"
            required
            disabled={!form.college}
          >
            <option value="" disabled>{form.college ? "Select your program" : "Select college first"}</option>
            {form.college && collegePrograms[form.college]?.map((prog: string) => (
              <option key={prog} value={prog}>{prog}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-1">University Related Concern</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none bg-gray-50"
            required
          >
            <option value="" disabled>Select a category</option>
            <option value="Academic">Academic</option>
            <option value="Student Welfare">Student Welfare</option>
            <option value="Facilities">Facilities</option>
            <option value="Finance">Finance</option>
            <option value="Events">Events</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-1">Concern</label>
          <textarea
            name="concern"
            value={form.concern}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none min-h-[120px] bg-gray-50"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-3 mt-4 rounded-lg bg-red-600 text-white font-bold text-lg shadow hover:bg-red-700 transition-colors disabled:opacity-60"
        disabled={loading}
      >
        {loading ? "Sending..." : "Submit Concern"}
      </button>
      {success && <p className="text-green-600 text-center mt-4 font-semibold">{success}</p>}
      {error && <p className="text-red-600 text-center mt-4 font-semibold">{error}</p>}
    </form>
  )
}
