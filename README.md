# UE Manila USC Website

This is the official website for the University of the East Manila University Student Council (USC).

## Features
- Modern, responsive design
- USC officers and committees information
- College student council details
- Events calendar and school calendar
- Announcements and contact page
- Submit a concern form (sends to USC Gmail)

## Concern Submission
- Users can submit concerns via a custom form.
- Concerns are sent directly to the USC Gmail inbox using a secure API route and nodemailer.

## Tech Stack
- Next.js (App Router)
- React
- Tailwind CSS
- Nodemailer (for email API)

## Setup
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd ue-manila-usc-website
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables:
   - Set up your Gmail and App Password in the API route or use environment variables for security.
4. Run the development server:
   ```sh
   npm run dev
   ```

## Deployment
- Deploy on Vercel, Netlify, or your preferred platform.

## Security Note
- Do NOT commit your real Gmail password or app password to public repositories.
- Use environment variables for sensitive information.

## License
MIT
