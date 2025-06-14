"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, CalendarIcon, MapPin, Clock, Users, X } from "lucide-react"
import {events,} from "@/lib/uscData"


const categories = ["All", "Academic", "Sports", "Cultural", "Elections", "Outreach"]

const categoryColors = {
  Academic: "bg-blue-100 text-blue-800",
  Sports: "bg-green-100 text-green-800",
  Cultural: "bg-purple-100 text-purple-800",
  Elections: "bg-red-100 text-red-800",
  Outreach: "bg-yellow-100 text-yellow-800",
}

export default function CalendarPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [showUpcoming, setShowUpcoming] = useState(true)

  // Find the most near event (future event with the closest date)
  const today = new Date()
  const upcomingEvent = events
    .filter((e) => new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0]

  useEffect(() => {
    if (showUpcoming && upcomingEvent) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [showUpcoming, upcomingEvent])

  const filteredEvents =
    selectedCategory === "All" ? events : events.filter((event) => event.category === selectedCategory)

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return filteredEvents.filter((event) => event.date === dateStr)
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200"></div>)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDate(day)
      days.push(
        <div key={day} className="h-24 border border-gray-200 p-1 overflow-hidden">
          <div className="font-semibold text-sm mb-1">{day}</div>
          {dayEvents.slice(0, 2).map((event) => (
            <div
              key={event.id}
              className="text-xs bg-red-100 text-red-800 rounded px-1 py-0.5 mb-1 cursor-pointer hover:bg-red-200 truncate"
              onClick={() => setSelectedEvent(event)}
            >
              {event.title}
            </div>
          ))}
          {dayEvents.length > 2 && <div className="text-xs text-gray-500">+{dayEvents.length - 2} more</div>}
        </div>,
      )
    }

    return days
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Floating Upcoming Event Modal */}
      {upcomingEvent && showUpcoming && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl shadow-2xl max-w-xl w-full p-0 relative animate-fade-in-up border-2 border-red-200">
            <div className="flex items-center justify-between px-6 pt-6 pb-2 border-b border-blue-100 rounded-t-3xl">
              <div className="flex items-center gap-2">
                <span className="text-3xl">📅</span>
                <span className="text-lg font-bold text-red-700 tracking-wide">
                  Upcoming Event
                </span>
              </div>
              <button
                className="text-gray-400 hover:text-red-600 transition-colors"
                onClick={() => setShowUpcoming(false)}
                aria-label="Close upcoming event"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="px-6 py-6">
              <div className="mb-3 flex gap-2 items-center">
                <span
                  className={`text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-sm ${categoryColors[upcomingEvent.category as keyof typeof categoryColors]}`}
                >
                  {upcomingEvent.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{upcomingEvent.title}</h2>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">{upcomingEvent.description}</p>
              <div className="flex items-center text-xs text-gray-500 mb-1 gap-4">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  {new Date(upcomingEvent.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {upcomingEvent.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {upcomingEvent.location}
                </div>
              </div>
              <button
                className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-xl shadow transition text-lg tracking-wide"
                onClick={() => setShowUpcoming(false)}
              >
                Continue to Calendar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white section-padding shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg tracking-tight">Events Calendar</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium opacity-90">
            Stay updated with all USC events and university activities
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar View */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <div className="flex space-x-2">
                  <button onClick={() => navigateMonth("prev")} className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button onClick={() => navigateMonth("next")} className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-0 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div
                    key={day}
                    className="h-12 flex items-center justify-center font-semibold text-gray-700 border border-gray-200 bg-gray-50"
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-0">{renderCalendar()}</div>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded ${categoryColors[event.category as keyof typeof categoryColors]}`}
                  >
                    {event.category}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedEvent.title}</h2>
                <button onClick={() => setSelectedEvent(null)} className="text-gray-400 hover:text-gray-600">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <span
                    className={`text-sm font-semibold px-3 py-1 rounded ${categoryColors[selectedEvent.category as keyof typeof categoryColors]}`}
                  >
                    {selectedEvent.category}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600">
                    <CalendarIcon className="h-5 w-5 mr-3" />
                    <div>
                      <div className="font-medium">Date</div>
                      <div>
                        {new Date(selectedEvent.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-3" />
                    <div>
                      <div className="font-medium">Time</div>
                      <div>{selectedEvent.time}</div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-3" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div>{selectedEvent.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-3" />
                    <div>
                      <div className="font-medium">Expected Attendees</div>
                      <div>{selectedEvent.attendees} students</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600">{selectedEvent.description}</p>
                </div>

                <div className="flex space-x-4 pt-4">
                  <button className="btn-primary">Register for Event</button>
                  <button className="btn-secondary">Add to Calendar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
