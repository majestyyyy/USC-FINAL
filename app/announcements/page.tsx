"use client"

import { useState, useEffect } from "react"
import { Search, Filter, Calendar, Tag, ChevronRight, X } from "lucide-react"
import {announcements,} from "@/lib/uscData"

const categories = [
	"All",
	"Academic",
	"Events",
	"Services",
	"Elections",
	"Emergency Alerts",
	"Social Events",
]

const priorityColors = {
	high: "bg-red-100 text-red-800 border-red-200",
	medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
	low: "bg-green-100 text-green-800 border-green-200",
}

const categoryColors = {
	Academic: "bg-blue-100 text-blue-800",
	Events: "bg-purple-100 text-purple-800",
	Services: "bg-indigo-100 text-indigo-800",
	Elections: "bg-red-100 text-red-800",
	"Emergency Alerts": "bg-orange-100 text-orange-800",
	"Social Events": "bg-pink-100 text-pink-800",
}

export default function AnnouncementsPage() {
	const [searchTerm, setSearchTerm] = useState("")
	const [selectedCategory, setSelectedCategory] = useState("All")
	const [selectedAnnouncement, setSelectedAnnouncement] = useState<
		(typeof announcements)[0] | null
	>(null)
	const [showUrgent, setShowUrgent] = useState(true)

	// Find the most urgent announcement (high priority, latest date)
	const urgentAnnouncement = announcements
		.filter((a) => a.priority === "high")
		.sort(
			(a, b) =>
				new Date(b.date).getTime() - new Date(a.date).getTime()
		)[0]

	useEffect(() => {
		if (showUrgent && urgentAnnouncement) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = ""
		}
		return () => {
		document.body.style.overflow = ""
		}
	}, [showUrgent, urgentAnnouncement])

	const filteredAnnouncements = announcements.filter((announcement) => {
		const matchesSearch =
			announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			announcement.content.toLowerCase().includes(searchTerm.toLowerCase())
		const matchesCategory =
			selectedCategory === "All" ||
			announcement.category === selectedCategory
		return matchesSearch && matchesCategory
	})

	return (
		<div className="min-h-screen bg-gray-50 ">
			{/* Urgent Announcement Floating Area */}
			{urgentAnnouncement && showUrgent && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
					<div className="bg-gradient-to-br from-red-50 to-white rounded-3xl shadow-2xl max-w-xl w-full p-0 relative animate-fade-in-up border-2 border-red-200">
						<div className="flex items-center justify-between px-6 pt-6 pb-2 border-b border-red-100 rounded-t-3xl">
							<div className="flex items-center gap-2">
								<span className="text-3xl">🚨</span>
								<span className="text-lg font-bold text-red-700 tracking-wide">
									Urgent Announcement
								</span>
							</div>
							<button
								className="text-gray-400 hover:text-red-600 transition-colors"
								onClick={() => setShowUrgent(false)}
								aria-label="Close urgent announcement"
							>
								<X className="h-6 w-6" />
							</button>
						</div>
						<div className="px-6 py-6">
							<div className="mb-3 flex gap-2 items-center">
								<span
									className={`text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-sm ${categoryColors[urgentAnnouncement.category as keyof typeof categoryColors]}`}
								>
									{urgentAnnouncement.category}
								</span>
								<span
									className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${priorityColors[urgentAnnouncement.priority as keyof typeof priorityColors]}`}
								>
									{urgentAnnouncement.priority.toUpperCase()}
								</span>
							</div>
							<h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
								{urgentAnnouncement.title}
							</h2>
							<p className="text-gray-700 mb-4 text-base leading-relaxed">
								{urgentAnnouncement.content ||
									"Please check the details in the Announcements page."}
							</p>
							<div className="flex items-center text-xs text-gray-500 mb-1 gap-4">
								<div className="flex items-center">
									<Calendar className="h-4 w-4 mr-1" />
									{new Date(urgentAnnouncement.date).toLocaleDateString(
										"en-US",
										{
											year: "numeric",
											month: "long",
											day: "numeric",
										}
									)}
								</div>
								<div className="flex items-center">
									<Tag className="h-4 w-4 mr-1" />
									{urgentAnnouncement.author}
								</div>
							</div>
							<button
								className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-xl shadow transition text-lg tracking-wide"
								onClick={() => setShowUrgent(false)}
							>
								Continue to Announcements
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Hero Section */}
			<section className="bg-gradient-to-r from-red-600 to-red-800 text-white section-padding shadow-lg rounded-b-3xl">
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						Announcements
					</h1>
					<p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium opacity-90">
						Stay informed with the latest updates and important information
						from USC
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
								placeholder="Search announcements..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
							/>
						</div>

						{/* Category Filter */}
						<div className="flex items-center space-x-2">
							<Filter className="h-5 w-5 text-gray-400" />
							<select
								value={selectedCategory}
								onChange={(e) => setSelectedCategory(e.target.value)}
								className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
							>
								{categories.map((category) => (
									<option key={category} value={category}>
										{category}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				{/* Announcements Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Announcements List */}
					<div className="lg:col-span-2 space-y-6">
						{filteredAnnouncements.map((announcement) => (
							<div
								key={announcement.id}
								className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
								onClick={() => setSelectedAnnouncement(announcement)}
							>
								<div className="flex items-start justify-between mb-4">
									<div className="flex-1">
										<div className="flex items-center space-x-2 mb-2">
											<span
												className={`text-xs font-semibold px-2.5 py-0.5 rounded ${categoryColors[announcement.category as keyof typeof categoryColors]}`}
											>
												{announcement.category}
											</span>
											<span
												className={`text-xs font-semibold px-2.5 py-0.5 rounded border ${priorityColors[announcement.priority as keyof typeof priorityColors]}`}
											>
												{announcement.priority.toUpperCase()}
											</span>
										</div>
										<h3 className="text-xl font-semibold text-gray-900 mb-2">
											{announcement.title}
										</h3>
										<p className="text-gray-600 line-clamp-3">
											{announcement.content}
										</p>
									</div>
								</div>

								<div className="flex items-center justify-between text-sm text-gray-500">
									<div className="flex items-center space-x-4">
										<div className="flex items-center">
											<Calendar className="h-4 w-4 mr-1" />
											{new Date(announcement.date).toLocaleDateString(
												"en-US",
												{
													year: "numeric",
													month: "long",
													day: "numeric",
												}
											)}
										</div>
										<div className="flex items-center">
											<Tag className="h-4 w-4 mr-1" />
											{announcement.author}
										</div>
									</div>
									<ChevronRight className="h-5 w-5 text-gray-400" />
								</div>
							</div>
						))}

						{filteredAnnouncements.length === 0 && (
							<div className="text-center py-12">
								<div className="text-gray-400 mb-4">
									<Search className="h-16 w-16 mx-auto" />
								</div>
								<h3 className="text-lg font-medium text-gray-900 mb-2">
									No announcements found
								</h3>
								<p className="text-gray-600">
									Try adjusting your search terms or category filter.
								</p>
							</div>
						)}
					</div>

					{/* Sidebar */}
					<div className="space-y-6">
						{/* Quick Stats */}
						<div className="bg-white rounded-lg shadow-md p-6">
							<h3 className="text-lg font-semibold text-gray-900 mb-4">
								Quick Stats
							</h3>
							<div className="space-y-3">
								<div className="flex justify-between">
									<span className="text-gray-600">Total Announcements</span>
									<span className="font-semibold">
										{announcements.length}
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600">This Month</span>
									<span className="font-semibold">
										{
											announcements.filter(
												(a) =>
													new Date(a.date).getMonth() ===
													new Date().getMonth()
											).length
										}
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600">High Priority</span>
									<span className="font-semibold text-red-600">
										{
											announcements.filter(
												(a) => a.priority === "high"
											).length
										}
									</span>
								</div>
							</div>
						</div>

						{/* Categories */}
						<div className="bg-white rounded-lg shadow-md p-6">
							<h3 className="text-lg font-semibold text-gray-900 mb-4">
								Categories
							</h3>
							<div className="space-y-2">
								{categories
									.filter((cat) => cat !== "All")
									.map((category) => {
										const count = announcements.filter(
											(a) => a.category === category
										).length
										return (
											<button
												key={category}
												onClick={() => setSelectedCategory(category)}
												className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
													selectedCategory === category
														? "bg-red-100 text-red-800"
														: "hover:bg-gray-100"
												}`}
											>
												<div className="flex justify-between items-center">
													<span>{category}</span>
													<span className="text-sm text-gray-500">
														{count}
													</span>
												</div>
											</button>
										)
									})}
							</div>
						</div>

						{/* Recent Updates */}
						<div className="bg-white rounded-lg shadow-md p-6">
							<h3 className="text-lg font-semibold text-gray-900 mb-4">
								Recent Updates
							</h3>
							<div className="space-y-3">
								{announcements.slice(0, 3).map((announcement) => (
									<div
										key={announcement.id}
										className="cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
										onClick={() => setSelectedAnnouncement(announcement)}
									>
										<h4 className="font-medium text-sm text-gray-900 line-clamp-2 mb-1">
											{announcement.title}
										</h4>
										<p className="text-xs text-gray-500">
											{new Date(announcement.date).toLocaleDateString()}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Announcement Detail Modal */}
			{selectedAnnouncement && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
					<div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
						<div className="p-6">
							<div className="flex items-start justify-between mb-6">
								<div className="flex-1">
									<div className="flex items-center space-x-2 mb-3">
										<span
											className={`text-sm font-semibold px-3 py-1 rounded ${categoryColors[selectedAnnouncement.category as keyof typeof categoryColors]}`}
										>
											{selectedAnnouncement.category}
										</span>
										<span
											className={`text-sm font-semibold px-3 py-1 rounded border ${priorityColors[selectedAnnouncement.priority as keyof typeof priorityColors]}`}
										>
											{selectedAnnouncement.priority.toUpperCase()} PRIORITY
										</span>
									</div>
									<h2 className="text-3xl font-bold text-gray-900 mb-4">
										{selectedAnnouncement.title}
									</h2>
								</div>
								<button
									onClick={() => setSelectedAnnouncement(null)}
									className="text-gray-400 hover:text-gray-600 ml-4"
								>
									<X className="h-6 w-6" />
								</button>
							</div>

							<div className="mb-6">
								<div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
									<div className="flex items-center">
										<Calendar className="h-4 w-4 mr-2" />
										Published on{" "}
										{new Date(selectedAnnouncement.date).toLocaleDateString(
											"en-US",
											{
												weekday: "long",
												year: "numeric",
												month: "long",
												day: "numeric",
											}
										)}
									</div>
									<div className="flex items-center">
										<Tag className="h-4 w-4 mr-2" />
										By {selectedAnnouncement.author}
									</div>
								</div>

								<div className="prose max-w-none">
									<p className="text-gray-700 text-lg leading-relaxed">
										{selectedAnnouncement.content}
									</p>
								</div>
							</div>

							<div className="flex space-x-4 pt-6 border-t">
								<button className="btn-primary">Share Announcement</button>
								<button className="btn-secondary">Subscribe to Updates</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
