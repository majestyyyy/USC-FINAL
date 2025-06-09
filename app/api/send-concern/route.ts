import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  const { name, email, concern, contact, year, category, program, college } = await req.json()

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "parungao.johnlloyd@ue.edu.ph", // your Gmail
      pass: "orev oucf axro xlii", // your Gmail App Password
    },
  })

  try {
    const submittedAt = new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" })
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: "parungao.johnlloyd@ue.edu.ph",
      subject: `New Concern Submission - ${submittedAt}`,
      text: `Name: ${name}
Email: ${email}
Contact: ${contact}
Year Level: ${year}
College: ${college}
Program: ${program}
Category: ${category}
Concern: ${concern}`,
    })
    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
