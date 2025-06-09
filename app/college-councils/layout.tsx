import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "College Student Councils | UE Manila USC",
  description: "Meet the student council officers representing each college at the University of the East Manila.",
}

export default function CollegeCouncilsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
