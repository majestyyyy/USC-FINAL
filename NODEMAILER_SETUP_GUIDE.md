# 📧 Nodemailer Setup Guide for USC Website

This guide will help you set up email notifications for the USC concern submission system using Nodemailer with Gmail.

## 📋 Prerequisites

- Gmail account
- Node.js project (already set up)
- Access to your project's environment variables

## 🚀 Step 1: Install Dependencies

First, install the required packages:

\`\`\`bash
npm install nodemailer @types/nodemailer
\`\`\`

## 🔐 Step 2: Set Up Gmail App Password

### Enable 2-Factor Authentication (if not already enabled)

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click on **Security** in the left sidebar
3. Under "Signing in to Google", click **2-Step Verification**
4. Follow the setup process if not already enabled

### Generate App Password

1. In Google Account Settings → **Security**
2. Under "Signing in to Google", click **2-Step Verification**
3. Scroll down and click **App passwords**
4. Select app: **Mail**
5. Select device: **Other (Custom name)**
6. Enter name: **USC Website**
7. Click **Generate**
8. **Copy the 16-character password** (you'll need this)

## 🔧 Step 3: Configure Environment Variables

Create or update your \`.env.local\` file in your project root:

\`\`\`env
# Gmail Configuration for Email Notifications
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password

# Example:
# GMAIL_USER=john.doe@gmail.com
# GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
\`\`\`

**Important Notes:**
- Replace \`your-email@gmail.com\` with your actual Gmail address
- Replace \`your-16-character-app-password\` with the password from Step 2
- The app password has spaces - you can include them or remove them
- Never commit this file to version control

## 📝 Step 4: Update the API Route

Replace the content of \`app/api/concerns/route.ts\` with the email-enabled version:

\`\`\`typescript
import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Email configuration
const transporter = nodemailer.createTransporter({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Extract form fields
    const concernData = {
      name: formData.get("name") as string,
      studentId: formData.get("studentId") as string,
      email: formData.get("email") as string,
      category: formData.get("category") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      urgent: formData.get("urgent") === "true",
      submittedAt: new Date().toISOString(),
      trackingId: \`USC-\${Date.now()}\`,
    }

    // Extract attachments
    const attachments: any[] = []
    const entries = Array.from(formData.entries())

    for (const [key, value] of entries) {
      if (key.startsWith("attachment_") && value instanceof File) {
        const buffer = Buffer.from(await value.arrayBuffer())
        attachments.push({
          filename: value.name,
          content: buffer,
          contentType: value.type,
        })
      }
    }

    // Send email notification
    await sendEmailNotification(concernData, attachments)

    return NextResponse.json({
      success: true,
      message: "Concern submitted successfully",
      trackingId: concernData.trackingId,
    })
  } catch (error) {
    console.error("Error submitting concern:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit concern. Please try again.",
      },
      { status: 500 },
    )
  }
}

async function sendEmailNotification(concernData: any, attachments: any[]) {
  // Email to admin
  const adminEmailHtml = \`
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 30px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">New Concern Submitted</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">USC Manila - Student Concern System</p>
      </div>
      
      <div style="padding: 30px; background: #f9fafb;">
        <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #dc2626; margin-top: 0;">Concern Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Tracking ID:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #dc2626; font-weight: bold;">\${concernData.trackingId}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">\${concernData.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Student ID:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">\${concernData.studentId || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">\${concernData.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Category:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">\${concernData.category}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Priority:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="background: \${concernData.urgent ? "#dc2626" : "#10b981"}; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">
                  \${concernData.urgent ? "URGENT" : "NORMAL"}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Subject:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">\${concernData.subject}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #374151; vertical-align: top;">Message:</td>
              <td style="padding: 10px 0;">
                <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #dc2626;">
                  \${concernData.message.replace(/\\n/g, "<br>")}
                </div>
              </td>
            </tr>
          </table>
          
          \${
            attachments.length > 0
              ? \`
            <div style="margin-top: 20px;">
              <h3 style="color: #dc2626; margin-bottom: 10px;">Attachments (\${attachments.length}):</h3>
              <ul style="margin: 0; padding-left: 20px;">
                \${attachments.map((att) => \`<li style="margin: 5px 0;">\${att.filename}</li>\`).join("")}
              </ul>
            </div>
          \`
              : ""
          }
        </div>
      </div>
    </div>
  \`

  // Send to admin
  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // Send to yourself
    subject: \`\${concernData.urgent ? "[URGENT] " : ""}New USC Concern: \${concernData.subject}\`,
    html: adminEmailHtml,
    attachments: attachments,
  })

  // Send confirmation to user
  const userEmailHtml = \`
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; padding: 30px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">Concern Received</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for reaching out to USC Manila</p>
      </div>
      
      <div style="padding: 30px; background: #f9fafb;">
        <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <p style="font-size: 16px; color: #374151; margin-top: 0;">Dear \${concernData.name},</p>
          
          <p style="color: #374151; line-height: 1.6;">
            Thank you for submitting your concern to the University Student Council. We have received your submission and will review it promptly.
          </p>
          
          <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <p style="margin: 0; color: #dc2626; font-weight: bold;">Your Tracking ID: \${concernData.trackingId}</p>
            <p style="margin: 5px 0 0 0; color: #7f1d1d; font-size: 14px;">Please keep this ID for your records</p>
          </div>
          
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0; color: #166534;">What happens next?</h3>
            <ul style="margin: 0; padding-left: 20px; color: #166534;">
              <li>We will review your concern within \${concernData.urgent ? "24 hours" : "3-5 business days"}</li>
              <li>You will receive updates via email</li>
              <li>If needed, we may contact you for additional information</li>
              <li>We will work to resolve your concern promptly</li>
            </ul>
          </div>
          
          <p style="color: #374151; line-height: 1.6;">
            If you have any urgent questions, please don't hesitate to contact our office directly at (02) 8123-4567 or visit us at Room 201, Student Center.
          </p>
          
          <p style="color: #374151; margin-bottom: 0;">
            Best regards,<br>
            <strong>University Student Council</strong><br>
            University of the East Manila
          </p>
        </div>
      </div>
    </div>
  \`

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: concernData.email,
    subject: \`Concern Received - Tracking ID: \${concernData.trackingId}\`,
    html: userEmailHtml,
  })
}
\`\`\`

## 🧪 Step 5: Test the Setup

1. **Restart your development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

2. **Test the form:**
   - Go to the "Submit a Concern" page
   - Fill out the form completely
   - Add a test file attachment
   - Submit the form

3. **Check your email:**
   - You should receive the concern notification in your Gmail
   - The user should receive a confirmation email

## 🔍 Step 6: Troubleshooting

### Common Issues and Solutions:

**1. "Invalid login" error:**
- Make sure 2-Factor Authentication is enabled
- Double-check your app password (16 characters)
- Ensure you're using the correct Gmail address

**2. "Authentication failed" error:**
- Verify your environment variables are correct
- Restart your development server after adding env vars
- Check that there are no extra spaces in your credentials

**3. Emails not being received:**
- Check your spam/junk folder
- Verify the recipient email address
- Check Gmail's "Sent" folder to confirm emails were sent

**4. File attachments not working:**
- Ensure files are under 10MB
- Check that the file upload is working in the form
- Verify the attachment processing code

### Debug Mode:

Add this to your API route for debugging:

\`\`\`typescript
console.log("Email config:", {
  user: process.env.GMAIL_USER ? "✓ Set" : "✗ Missing",
  pass: process.env.GMAIL_APP_PASSWORD ? "✓ Set" : "✗ Missing",
})
\`\`\`

## 🔒 Security Best Practices

1. **Never commit credentials:**
   - Add \`.env.local\` to your \`.gitignore\`
   - Use different credentials for production

2. **Use environment-specific configs:**
   - Development: Your personal Gmail
   - Production: Dedicated business email

3. **Monitor usage:**
   - Gmail has sending limits (500 emails/day for free accounts)
   - Consider upgrading to Google Workspace for higher limits

## 🚀 Production Deployment

For production deployment (Vercel, Netlify, etc.):

1. **Add environment variables in your hosting platform:**
   - Go to your project settings
   - Add \`GMAIL_USER\` and \`GMAIL_APP_PASSWORD\`
   - Deploy your changes

2. **Consider alternatives for high volume:**
   - **Resend** (recommended for modern apps)
   - **SendGrid** (reliable and scalable)
   - **AWS SES** (cost-effective for high volume)

## ✅ Verification Checklist

- [ ] 2-Factor Authentication enabled on Gmail
- [ ] App password generated and copied
- [ ] Environment variables added to \`.env.local\`
- [ ] Nodemailer dependencies installed
- [ ] API route updated with email code
- [ ] Development server restarted
- [ ] Test email sent successfully
- [ ] Both admin and user emails received

## 📞 Support

If you encounter issues:

1. Check the console for error messages
2. Verify all steps were followed correctly
3. Test with a simple email first
4. Consider using alternative email services if Gmail doesn't work

---

**🎉 Congratulations!** Your USC website now has fully functional email notifications for concern submissions!
