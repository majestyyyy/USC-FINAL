export default function SchoolCalendarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20 shadow-lg rounded-b-3xl">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight">
            School Calendar
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium opacity-90">
            Stay on-track to the Official UE Manila School Calendar for the Academic Year 2025-2026
          </p>
        </div>
      </section>
      
      <section className="section-padding bg-white rounded-2xl shadow-xl mt-10 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="space-y-12">
            {/* Schedule of Admission and Registration */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                I. Schedule of Admission and Registration
              </h2>

              <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-4">Admission Schedule</h3>
              <div className="overflow-x-auto">
                <table className="table-auto w-full text-left border-collapse border border-gray-300 mb-6 bg-white rounded-lg overflow-hidden">
                  <thead className="bg-red-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">Category</th>
                      <th className="border border-gray-300 px-4 py-2">1st Semester</th>
                      <th className="border border-gray-300 px-4 py-2">2nd Semester</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">College Freshmen (1st Year, 1st Semester)</td>
                      <td className="border border-gray-300 px-4 py-2">May 05 – July 07, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">November 17 (M) – 28 (F), 2025</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">New Students: GS, CLAW, & Graduate Dentistry</td>
                      <td className="border border-gray-300 px-4 py-2">May 05 – July 07, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">November 17 (M) – 28 (F), 2025</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Transferees & Degree Holders</td>
                      <td className="border border-gray-300 px-4 py-2">June 09 – July 07, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">November 17 (M) – 28 (F), 2025</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Cross-Registrants</td>
                      <td className="border border-gray-300 px-4 py-2">June 23 – July 07, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">November 24 (M) – 28 (F), 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-4">Registration Schedule</h3>
              <div className="overflow-x-auto">
                <table className="table-auto w-full text-left border-collapse border border-gray-300 mb-6 bg-white rounded-lg overflow-hidden">
                  <thead className="bg-red-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">Category</th>
                      <th className="border border-gray-300 px-4 py-2">1st Semester</th>
                      <th className="border border-gray-300 px-4 py-2">2nd Semester</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">New Students: GS, CLAW, & Graduate Dentistry</td>
                      <td className="border border-gray-300 px-4 py-2">May 05 – July 07, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">November 24 (M) – 28 (F), 2025</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">College Freshmen</td>
                      <td className="border border-gray-300 px-4 py-2">May 05 – July 07, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">November 24 (M) – 28 (F), 2025</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">All Curricular Years</td>
                      <td className="border border-gray-300 px-4 py-2">June 16 – July 07, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">November 24 (M) – 28 (F), 2025</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Transferees & Degree Holders</td>
                      <td className="border border-gray-300 px-4 py-2">June 23 – July 07, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">November 24 (M) – 28 (F), 2025</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Cross-Registrants</td>
                      <td className="border border-gray-300 px-4 py-2">June 23 – July 07, 2025</td>
                      <td className="border border-gray-300 px-4 py-2">November 26 (W) – 28 (F), 2025</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Last Day of Regular Registration</td>
                      <td className="border border-gray-300 px-4 py-2">July 07 (Monday), 2025</td>
                      <td className="border border-gray-300 px-4 py-2">November 28 (Friday), 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* School Calendar */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                II. School Calendar
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-4">Start of Classes</h3>
                  <p className="text-gray-700 mb-4">1st Semester: <span className="font-bold text-red-700">July 07 (M), 2025</span></p>
                  <p className="text-gray-700 mb-4">2nd Semester: <span className="font-bold text-red-700">November 28 (F), 2025</span></p>

                  <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-4">Holiday Breaks (Classes Only)</h3>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li><span className="font-medium">Special Non-Working Holiday:</span> October 31 (F), 2025</li>
                    <li><span className="font-medium">All Saints' Day:</span> November 01 (S), 2025</li>
                    <li><span className="font-medium">Christmas Break:</span> Starts December 19, 2025</li>
                    <li><span className="font-medium">Holy Week:</span> April 01 – 05, 2026</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-4">Final Grades Posting</h3>
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse border border-gray-300 mb-6 bg-white rounded-lg overflow-hidden">
                      <thead className="bg-red-100">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">Semester</th>
                          <th className="border border-gray-300 px-4 py-2">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">First Semester</td>
                          <td className="border border-gray-300 px-4 py-2">November 21 (F), 2025</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Second Semester</td>
                          <td className="border border-gray-300 px-4 py-2">May 06 (W), 2026</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Preliminary Examinations Table */}
                  <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-4">Preliminary Examinations</h3>
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse border border-gray-300 mb-6 bg-white rounded-lg overflow-hidden">
                      <thead className="bg-red-100">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">Class Type</th>
                          <th className="border border-gray-300 px-4 py-2">1st Semester</th>
                          <th className="border border-gray-300 px-4 py-2">2nd Semester</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">MW Classes</td>
                          <td className="border border-gray-300 px-4 py-2">August 11 (M) & 13 (W)</td>
                          <td className="border border-gray-300 px-4 py-2">January 21 (W) & 26 (M), 2026</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">TTh Classes</td>
                          <td className="border border-gray-300 px-4 py-2">August 12 (T) & 14 (Th)</td>
                          <td className="border border-gray-300 px-4 py-2">January 20 (T) & 22 (Th), 2026</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">F Classes</td>
                          <td className="border border-gray-300 px-4 py-2">August 15 (F)</td>
                          <td className="border border-gray-300 px-4 py-2">January 23 (F), 2026</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">S Classes</td>
                          <td className="border border-gray-300 px-4 py-2">August 16 (S)</td>
                          <td className="border border-gray-300 px-4 py-2">January 24 (S), 2026</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  {/* Midterm Examinations Table */}
                  <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-4">Midterm Examinations</h3>
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse border border-gray-300 mb-6 bg-white rounded-lg overflow-hidden">
                      <thead className="bg-red-100">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">Class Type</th>
                          <th className="border border-gray-300 px-4 py-2">1st Semester</th>
                          <th className="border border-gray-300 px-4 py-2">2nd Semester</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">MW Classes</td>
                          <td className="border border-gray-300 px-4 py-2">September 03 (W) & 08 (M)</td>
                          <td className="border border-gray-300 px-4 py-2">February 11 (W) & 16 (M), 2026</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">TTh Classes</td>
                          <td className="border border-gray-300 px-4 py-2">September 04 (Th) & 09 (T)</td>
                          <td className="border border-gray-300 px-4 py-2">February 10 (T) & 12 (Th), 2026</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">F Classes</td>
                          <td className="border border-gray-300 px-4 py-2">September 05 (F)</td>
                          <td className="border border-gray-300 px-4 py-2">February 13 (F), 2026</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">S Classes</td>
                          <td className="border border-gray-300 px-4 py-2">September 06 (S)</td>
                          <td className="border border-gray-300 px-4 py-2">February 14 (S), 2026</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-4">Final Examinations</h3>
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse border border-gray-300 mb-6 bg-white rounded-lg overflow-hidden">
                      <thead className="bg-red-100">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">Class Type</th>
                          <th className="border border-gray-300 px-4 py-2">1st Semester</th>
                          <th className="border border-gray-300 px-4 py-2">2nd Semester</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">MW Classes</td>
                          <td className="border border-gray-300 px-4 py-2">November 10 (M) & 12 (W)</td>
                          <td className="border border-gray-300 px-4 py-2">April 22 (W) & 27 (M), 2026</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">TTh Classes</td>
                          <td className="border border-gray-300 px-4 py-2">November 11 (T) & 13 (Th)</td>
                          <td className="border border-gray-300 px-4 py-2">April 23 (Th) & 28 (T), 2026</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">F Classes</td>
                          <td className="border border-gray-300 px-4 py-2">November 14 (F)</td>
                          <td className="border border-gray-300 px-4 py-2">April 24 (F), 2026</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">S Classes</td>
                          <td className="border border-gray-300 px-4 py-2">November 15 (S)</td>
                          <td className="border border-gray-300 px-4 py-2">April 25 (S), 2026</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-4">Last Recitation Day</h3>
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse border border-gray-300 mb-6 bg-white rounded-lg overflow-hidden">
                      <thead className="bg-red-100">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">Class Type</th>
                          <th className="border border-gray-300 px-4 py-2">1st Semester</th>
                          <th className="border border-gray-300 px-4 py-2">2nd Semester</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">MW Classes</td>
                          <td className="border border-gray-300 px-4 py-2">November 05 (W)</td>
                          <td className="border border-gray-300 px-4 py-2">April 20 (M), 2026</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">TTh Classes</td>
                          <td className="border border-gray-300 px-4 py-2">November 06 (Th)</td>
                          <td className="border border-gray-300 px-4 py-2">April 21 (T), 2026</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">F Classes</td>
                          <td className="border border-gray-300 px-4 py-2">November 07 (F)</td>
                          <td className="border border-gray-300 px-4 py-2">April 17 (F), 2026</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">S Classes</td>
                          <td className="border border-gray-300 px-4 py-2">November 08 (S)</td>
                          <td className="border border-gray-300 px-4 py-2">April 18 (S), 2026</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}