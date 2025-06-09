import { type NextRequest, NextResponse } from "next/server"

const GEMINI_API_KEY = "AIzaSyC46zdNquzLyB3qE9gk-swZcNxMAjhUN_E"
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`

// Enhanced knowledge base with polished responses
const UE_KNOWLEDGE_BASE = {
  about_ue: {
    keywords: [
      "what is ue",
      "university of the east",
      "about ue",
      "ue manila",
      "tell me about ue",
      "ue history",
      "when was ue founded",
      "ue background",
      "ano ang ue",
      "university of the east manila",
      "ue information",
      "ue overview",
      "ue profile",
      "university profile",
      "university history",
    ],
    response: `🏛️ UNIVERSITY OF THE EAST (UE)

The University of the East is a prestigious private non-sectarian university founded in 1946, with over 75 years of academic excellence.

🏢 CAMPUSES:
• UE Manila (Main Campus) - C.M. Recto Avenue
• UE Caloocan - Samson Road
• UERMMMC Quezon City - Medicine & Health Sciences
• UE Laguna - Allied Health & Technology

🎓 ACADEMIC EXCELLENCE:
UE is renowned for its strong programs in Business, Dentistry, Engineering, Information Technology, Education, and Law. We offer comprehensive education from Basic Education (K-12) to Graduate School programs.

💡 TOTAL STUDENT CARE PROGRAM (TSCP):
Our commitment to quality education includes excellent facilities, comprehensive student services, and holistic student development programs.`,
  },

  ue_admission_info: {
    keywords: [
      "enroll",
      "admission",
      "requirements",
      "how to apply",
      "entrance",
      "enrollment",
      "how to enroll in ue",
      "ue admission requirements",
      "ue enrollment process",
      "application process",
      "freshman requirements",
      "transferee requirements",
      "cross enrollment",
      "paano mag-enroll sa ue",
      "admission steps",
      "enrollment steps",
      "ue application",
      "college entrance test",
      "cet requirements",
    ],
    response: `📝 UE ADMISSION INFORMATION

We welcome Freshmen, Transferees, Degree Holders, and Cross-Enrollees!

👨‍🎓 FRESHMEN REQUIREMENTS:
• Form 138 (Report Card)
• Certificate of Good Moral Character
• Birth Certificate (PSA-issued)
• UE College Entrance Test (CET) result
• Two (2) 2x2 ID photos

🔄 TRANSFEREE REQUIREMENTS:
• Transfer Credentials & Transcript of Records (TOR)
• Two (2) recommendation letters
• No failing grades or dropped subjects
• General Weighted Average (GWA) of at least 2.50
• For CCSS programs: minimum GWA of 2.00

📋 ENROLLMENT PROCESS:
1️⃣ Submit application online or visit campus
2️⃣ Complete and submit all requirements
3️⃣ Pay enrollment fees
4️⃣ Claim student ID and attend orientation

📅 IMPORTANT DATES:
• Enrollment Period: June 16 to July 7
• First Day of Classes: July 7

💡 Need help? Contact our Admissions Office at admission@ue.edu.ph or (632) 8735-5471 loc. 398-399`,
  },

  ue_academic_programs: {
    keywords: [
      "courses",
      "programs",
      "degrees",
      "what courses",
      "majors",
      "colleges",
      "what can i study at ue",
      "ue courses offered",
      "ue degree programs",
      "college of arts and sciences",
      "college of business administration",
      "college of computer studies",
      "college of dentistry",
      "bs accountancy",
      "bs psychology",
      "bs computer science",
      "bs information technology",
    ],
    response: `🎓 UE ACADEMIC PROGRAMS

📍 UE MANILA COLLEGES:

🔬 COLLEGE OF ARTS & SCIENCES (CAS):
• BS Psychology • BS Biology • BS Political Science
• AB Communication • AB English • AB History

💼 COLLEGE OF BUSINESS ADMINISTRATION (CBA):
• BS Accountancy • BS Business Administration
• BS Management Accounting • BS Entrepreneurship

💻 CENTER FOR COMPUTER STUDIES & SYSTEMS (CCSS):
⭐ Center of Excellence Programs:
• BS Information Technology • BS Computer Science
• BS Multimedia Arts • BS Data Science

🦷 COLLEGE OF DENTISTRY (CDent):
• Doctor of Dental Medicine (DMD)

👨‍🏫 COLLEGE OF EDUCATION (CEduc):
• BS Education • BS Nutrition • BS Sports Science
• BS Early Childhood Education • BS Special Education

⚙️ COLLEGE OF ENGINEERING (CEng'g):
• BS Civil Engineering • BS Electrical Engineering
• BS Mechanical Engineering • BS Computer Engineering

📍 UE CALOOCAN PROGRAMS:
• Architecture • Interior Design • Fine Arts
• Tourism • Hospitality Management

🎯 ALSO AVAILABLE:
• Juris Doctor (Law) • Graduate School Programs • Basic Education (K-12)`,
  },

  ue_grading_policies: {
    keywords: [
      "grading",
      "grades",
      "gwa",
      "failed",
      "passing",
      "honors",
      "grading system",
      "passing grade",
      "failing grade",
      "conditional grade",
      "incomplete grade",
      "dropped subject",
      "attendance policy",
      "maximum absences",
      "graduation requirements",
      "latin honors requirements",
    ],
    response: `📊 UE GRADING SYSTEM

📈 GRADING SCALE (11-Point System):
• 1.00 - Excellent (98-100%)
• 1.25 - Superior (95-97%)
• 1.50 - Very Good (92-94%)
• 1.75 - Good (89-91%)
• 2.00 - Satisfactory (86-88%)
• 2.25 - Fair (83-85%)
• 2.50 - Passing (80-82%)
• 2.75 - Conditional (77-79%)
• 3.00 - Lowest Passing (75-76%)
• 4.00 - Conditional (Not Final)
• 5.00 - Failed

📝 SPECIAL GRADES:
• W - Officially Dropped
• D - Unofficially Dropped
• LFR - Lacks Final Requirement

⚠️ IMPORTANT POLICIES:
• Students with >20% absences are automatically dropped
• "LFR" grades must be cleared within one semester
• "D" grades disqualify students from honors and scholarships
• Maximum course load varies by program; 9 units maximum for summer

🏆 GRADUATION HONORS:
Requires GWA ≥ 1.60 with no failed or dropped subjects throughout college`,
  },

  ue_student_council_officers: {
    keywords: [
      "usc officers",
      "usc officer",
      "officers",
      "officer",
      "student council",
      "student councils",
      "president",
      "name of the president",
      "vice president",
      "name of the vice president",
      "secretary",
      "name of the secretary",
      "treasurer",
      "name of the treasurer",
      "auditor",
      "name of the auditor",
      "business manager",
      "name of the business manager",
      "pro",
      "name of the pro",
      "student leaders",
      "andrea nicole osinsao",
      "charlize zapanta",
      "john lloyd parungao",
      "who is the baby of the business manager",
    ],
    response: `👥 USC OFFICERS A.Y. 2025-2026

🎓 EXECUTIVE BOARD:

👑 PRESIDENT
Andrea Nicole Osinsao
BS Psychology

🤝 VICE PRESIDENT
Charlize Zapanta
BS International Studies

📝 SECRETARY
Carla Mae Ablog
BS Political Science

💰 TREASURER
Colline Hazel Buenaventura
BS Hospitality Management

🔍 AUDITOR
AJ Jamal
BS International Studies

💼 BUSINESS MANAGER
John Lloyd S. Parungao
BS Computer Science

📢 PUBLIC RELATIONS OFFICER
Mawen Anthony Iringan
BS Accountancy

✨ These dedicated student leaders are committed to serving and representing the entire UE Manila student body with excellence, integrity, and passion!

📞 Contact USC: usc@ue.edu.ph | (02) 8123-4567 | Room 201, Student Center

BABY OF THE BUSINESS MANAGER
Andrea Jene Galicia
`,
  },

  usc_services: {
    keywords: [
      "usc services",
      "what can usc help",
      "student council services",
      "usc assistance",
      "student concerns",
      "academic concerns",
      "student welfare",
      "usc programs",
      "student activities",
      "usc events",
      "student representation",
    ],
    response: `🛡️ USC SERVICES & PROGRAMS

📋 CORE SERVICES:
• Student Concern Resolution
• Academic Advocacy & Support
• Student Welfare Programs
• Event Organization & Management
• University Committee Representation

🎯 SPECIALIZED COMMITTEES:
• Academic Affairs Committee
• Student Welfare Committee
• Cultural & Arts Committee
• Sports & Recreation Committee
• Community Outreach Committee
• Finance Committee
• Business Development Committee

💡 HOW WE HELP:
• Resolve academic issues
• Address campus facility concerns
• Provide financial assistance programs
• Organize educational and recreational events
• Facilitate student-administration communication
• Support student organizations
• Mental health and wellness programs

📞 NEED ASSISTANCE?
• Submit concerns online through our website
• Visit our office: Room 201, Student Center
• Email: usc@ue.edu.ph
• Call: (02) 8123-4567
• Office Hours: Monday-Friday, 8:00 AM - 5:00 PM

🤝 Your voice matters - we're here to serve you!`,
  },
}

const USC_CONTEXT = `
You are an AI assistant for the University of the East Manila University Student Council (USC). 
You help students with information about USC services, events, concerns, and general university life.

PERSONALITY: Be friendly, helpful, and professional. Use emojis appropriately to make responses engaging.
LANGUAGE: Respond in English, but you can understand and respond to Taglish (Tagalog-English mix).
TONE: Warm, supportive, and informative - like a helpful student leader.

If you cannot answer a specific question, politely direct users to:
- Contact USC office: Room 201, Student Center
- Email: usc@ue.edu.ph  
- Phone: (02) 8123-4567
- Submit a concern through the website

Keep responses helpful, concise, and well-formatted with proper spacing and emojis.
- Only respond with the name and course of the officer when asked about a specific role (e.g. "Who is the Business Manager?").
- Do NOT list all officers unless the user says: "list all student council officers" or "show the full council".
- If the question is unclear or the role doesn't match, respond with: "Please specify a valid student council position."
`

function findMatchingIntent(message: string): string | null {
  const lowerMessage = message.toLowerCase()

  // Redirect to school calendar if user asks about calendar, exams, grades, or holidays
  if (
    [
      "school calendar",
      "academic calendar",
      "calendar",
      "examination date",
      "exam date",
      "exams",
      "finals",
      "midterms",
      "prelims",
      "posting of grades",
      "grades posting",
      "when are grades posted",
      "holidays",
      "holiday schedule",
      "class suspension",
      "no classes",
      "vacation",
      "breaks",
    ].some((kw) => lowerMessage.includes(kw))
  ) {
    return "For all information regarding the school calendar, examination dates, posting of grades, and holidays, please click the School Calendar on navigation bar above."
  }

  for (const [intent, data] of Object.entries(UE_KNOWLEDGE_BASE)) {
    for (const keyword of data.keywords) {
      if (lowerMessage.includes(keyword.toLowerCase())) {
        if (intent === "ue_student_council_officers") {
          if (lowerMessage.includes("baby of the business manager")) {
            return "Andrea Jene Galicia"
          }
          const officerRoles = lowerMessage.match(/(president|vice president|secretary|treasurer|auditor|business manager|public relations officer|pro)/g)
          if (officerRoles) {
            const responses = officerRoles.map((role) => {
              const officerRole = role.replace("pro", "public relations officer")
              const officerRegex = new RegExp(`${officerRole}\n(.*?)\n`, "i")
              const officer = data.response.match(officerRegex)
              return officer ? `the ${officerRole} is ${officer[1].trim()}` : `Sorry, I couldn't find information for the ${officerRole}.`
            })
            return `Hello! ${responses.join(" and ")}. 😊`
          }
        }
        return data.response
      }
    }
  }

  return null
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        {
          response: "Please provide a valid message. How can I help you today? 😊",
        },
        { status: 400 },
      )
    }

    // Check for predefined responses first
    const predefinedResponse = findMatchingIntent(message)
    if (predefinedResponse) {
      return NextResponse.json({ response: predefinedResponse })
    }

    // Use Gemini AI for other queries
    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: `${USC_CONTEXT}\n\nUser question: ${message}\n\nPlease provide a helpful, friendly response with appropriate emojis:`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 512,
        stopSequences: [],
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
      ],
    }

    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`)
    }

    const data = await response.json()
    const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text

    if (!botResponse) {
      return NextResponse.json({
        response:
          "I'm having trouble generating a response right now. 😅\n\nFor immediate assistance, please:\n\n📧 Email: usc@ue.edu.ph\n📞 Call: (02) 8123-4567\n📍 Visit: Room 201, Student Center\n\nOur office hours are Monday-Friday, 8:00 AM - 5:00 PM.",
      })
    }

    return NextResponse.json({ response: botResponse.trim() })
  } catch (error) {
    console.error("Chatbot API error:", error)

    return NextResponse.json(
      {
        response:
          "I'm currently experiencing technical difficulties. 😔\n\nFor immediate assistance, please:\n\n📧 Email: usc@ue.edu.ph\n📞 Call: (02) 8123-4567\n📍 Visit: Room 201, Student Center\n\nOur office hours are Monday-Friday, 8:00 AM - 5:00 PM.",
      },
      { status: 200 },
    )
  }
}
