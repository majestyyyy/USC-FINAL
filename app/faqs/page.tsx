"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Search, HelpCircle } from "lucide-react"

const faqCategories = [
  {
    name: "Student Life",
    faqs: [
      {
        question: "How can I get involved in USC activities?",
        answer:
          "There are many ways to get involved! You can join our committees, volunteer for events, attend USC meetings, or submit your ideas through our suggestion portal. Check our events calendar for upcoming opportunities to participate.",
      },
      {
        question: "What services does USC provide to students?",
        answer:
          "USC provides various services including academic advocacy, student welfare programs, event organization, concern resolution, financial assistance programs, and representation in university committees. We also facilitate communication between students and university administration.",
      },
      {
        question: "How can I access mental health support on campus?",
        answer:
          "UE Manila provides counseling services through the Guidance Office. You can also reach out to USC's Student Welfare Committee for additional support and resources. We regularly organize mental health awareness programs and can connect you with professional help when needed.",
      },
      {
        question: "What should I do if I'm having financial difficulties?",
        answer:
          "Contact USC's Student Welfare Committee or visit the Financial Aid Office. We can help you explore scholarship opportunities, emergency financial assistance, and work-study programs. Don't hesitate to reach out - we're here to help.",
      },
    ],
  },
  {
    name: "USC Services",
    faqs: [
      {
        question: "How do I submit a concern or complaint?",
        answer:
          "You can submit concerns through our online portal, visit our office during office hours, or email us at usc@ue.edu.ph. You have the option to submit anonymously if you prefer. We respond to all concerns within 3-5 business days.",
      },
      {
        question: "Can I submit concerns anonymously?",
        answer:
          "Yes, absolutely! We understand that some concerns are sensitive. You can submit anonymous concerns through our online form. While we can't follow up directly with anonymous submissions, we will address the issues raised.",
      },
      {
        question: "How long does it take to get a response to my concern?",
        answer:
          "We aim to respond within 3-5 business days for general concerns. Urgent matters are addressed within 24 hours. Complex issues that require investigation may take 1-2 weeks. You'll receive updates on the progress of your concern.",
      },
      {
        question: "What types of concerns can USC help with?",
        answer:
          "We can help with academic issues, campus facilities problems, student services concerns, safety issues, financial matters, discrimination or harassment reports, and general suggestions for improving student life.",
      },
    ],
  },
  {
    name: "Events",
    faqs: [
      {
        question: "How can I propose an event or activity?",
        answer:
          "Submit your event proposal through our online form or present it during USC meetings. Include details about the event purpose, target audience, budget requirements, and expected outcomes. We review all proposals and provide feedback within two weeks.",
      },
      {
        question: "Can student organizations collaborate with USC for events?",
        answer:
          "We encourage collaboration with student organizations. Contact our Events Committee to discuss partnership opportunities. We can provide funding support, venue assistance, and promotional help for events that benefit the student community.",
      },
      {
        question: "How do I register for USC events?",
        answer:
          "Registration details are posted on our website and social media pages. Some events require advance registration, while others are open attendance. Check the specific event details on our calendar for registration requirements.",
      },
      {
        question: "Are USC events free for students?",
        answer:
          "Most USC events are free for UE Manila students. Some special events or workshops may have minimal fees to cover materials or external speakers. Any fees are clearly stated during event announcements.",
      },
    ],
  },
  {
    name: "Elections",
    faqs: [
      {
        question: "When are USC elections held?",
        answer:
          "USC elections are typically held in January each year for the following academic year. The exact dates are announced at least one month in advance through official channels and our website.",
      },
      {
        question: "Who can run for USC positions?",
        answer:
          "Any enrolled UE Manila student in good academic standing can run for USC positions. Specific requirements include minimum GPA, no major disciplinary actions, and completion of candidacy requirements. Full eligibility criteria are published before each election.",
      },
      {
        question: "How do I register as a candidate?",
        answer:
          "Registration opens approximately 3-4 weeks before elections. Submit your candidacy form, academic records, endorsements, and platform statement to the Election Committee. Attend the mandatory candidates' briefing for complete guidelines.",
      },
      {
        question: "What positions are available in USC?",
        answer:
          "Available positions include President, Vice President, Secretary, Treasurer, Auditor, Public Relations Officer, and various committee chairs. Each position has specific responsibilities and requirements detailed in our constitution.",
      },
    ],
  },
]

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (categoryIndex: number, faqIndex: number) => {
    const itemId = `${categoryIndex}-${faqIndex}`
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const filteredFAQs = faqCategories
    .filter((category) => {
      if (selectedCategory !== "All" && category.name !== selectedCategory) {
        return false
      }

      if (searchTerm) {
        return category.faqs.some(
          (faq) =>
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      }

      return true
    })
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          !searchTerm ||
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Find answers to common questions about USC services and student life
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {["All", ...faqCategories.map((cat) => cat.name)].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {["All", ...faqCategories.map((cat) => cat.name)].map((category) => {
                  const count =
                    category === "All"
                      ? faqCategories.reduce((sum, cat) => sum + cat.faqs.length, 0)
                      : faqCategories.find((cat) => cat.name === category)?.faqs.length || 0

                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category ? "bg-red-100 text-red-800" : "hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category}</span>
                        <span className="text-sm text-gray-500">{count}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="lg:col-span-3 space-y-8">
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={category.name}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const itemId = `${categoryIndex}-${faqIndex}`
                    const isOpen = openItems.includes(itemId)

                    return (
                      <div key={faqIndex} className="bg-white rounded-lg shadow-md">
                        <button
                          onClick={() => toggleItem(categoryIndex, faqIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <div className="border-t pt-4">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No FAQs found</h3>
                <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Can't find what you're looking for? We're here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/concerns" className="btn-primary">
              Submit a Question
            </a>
            <a href="/contact" className="btn-secondary">
              Contact Us Directly
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
