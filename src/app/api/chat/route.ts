import { NextResponse } from "next/server";

const resumeContext = `
Vaya Shyam resume facts:
- Name: Vaya Shyam
- Email: vayashyam550@gmail.com
- Phone: +91 7016445196
- GitHub: github.com/shyamsoni550
- LinkedIn: linkedin.com/in/vaya-shyam
- Professional summary: Full-Stack Developer (MERN Stack) with 1+ year of end-to-end software development experience in SaaS product development, REST API design, and CI/CD deployment. Sole founder and developer of CommentPulse, a live AI-powered SaaS product built with React.js, Flask, Python, and MongoDB. Proficient in WordPress and Elementor for production CMS deployments. Seeking remote-first or high-growth roles where full-stack versatility, product ownership, and fast iteration drive impact.
- Current role: Software Engineer at Vishwas Integrated Marine Group, Oct 2025 - Present.
- Vishwas work: Redesigned and deployed Certifications and About-Us pages using WordPress and Elementor, improving content clarity and reducing manual update time by 50%. Engineered Python/Tkinter GUI tools adopted across 3 departments, reducing manual data entry time by about 30%. Built interactive engineering dashboards with Matplotlib, replacing static reports and cutting review cycles by 2 days.
- Previous role: Project Trainee at Einfochips Private Limited, Jan 2025 - Jun 2025.
- Einfochips work: Delivered 4+ client web projects using PHP and WordPress in Agile sprints. Reduced front-end bug backlog by 40% with JavaScript-driven interactivity across 3 client sites. Shipped features on time across 2 consecutive sprints through daily standups and structured code reviews.
- Project: CommentPulse. AI-powered SaaS built with Flask, Python, React.js, MongoDB, and Vercel. Designed, built, and shipped from zero to live in under 6 months. Includes sentiment analysis, issue detection, Channel Health Score, content gap identification across YouTube comments, PDF report generation, AI chat on live comment data, and a subscription-ready dashboard.
- Project: UserHub. Built with Next.js 15, TypeScript, MongoDB, JWT, and Nodemailer. Production-ready auth system with 7 REST API endpoints: registration, JWT login, email verification, and password reset secured with bcryptjs. Integrated Nodemailer and Mailtrap SMTP with token expiry.
- Project: Engineering Dashboards. Built interactive engineering dashboards with Python and Matplotlib, replacing static reports and cutting review cycles by 2 days.
- Project: Department GUI Automation. Built Python/Tkinter GUI tools adopted across 3 departments, reducing repetitive manual data entry time by about 30%.
- Project: Tide Information App. Built with React.js, Vite, and REST API integration. Real-time tide prediction app using World Tides API, with Local Storage caching that cut repeat API calls by 60%.
- Frontend skills: React.js, Next.js 15, TypeScript, JavaScript ES6+, HTML5, CSS3, Tailwind CSS, Vite, Responsive Design.
- Backend skills: Node.js, Express.js, Flask, Python, REST API Design & Integration, JWT, bcryptjs, Nodemailer.
- Database skills: MongoDB, MongoDB Atlas, MySQL, Mongoose ODM.
- CMS and UI skills: WordPress, Elementor, PHP.
- DevOps and tools: Git, GitHub, CI/CD, Vercel, Render, Postman, VS Code, Agile/Scrum.
- Data and AI: Pandas, NumPy, Matplotlib, Tkinter, SaaS Product Development, Generative AI.
- Education: B.Tech in Computer Engineering, Aditya Silver Oak Institute of Technology, Ahmedabad, 2021 - 2025, CGPA 8.22/10.
- Certifications: JavaScript ES6+ from Udemy, Apr 2025. Generative AI Fundamentals from Oracle, Jul 2024.
`;

// Groq API call function
async function getGroqChatResponse(
  messages: { role: "user" | "assistant"; content: string }[],
) {
  const systemMessage = {
    role: "system",
    content: `You are Vaya Shyam's respectful portfolio assistant.

Use ONLY the resume facts below and the current conversation to answer visitor questions about Vaya Shyam. Do not invent links, dates, companies, numbers, salaries, availability, or private details. If a fact is not present, say that it is not listed in the resume.

Answer respectfully and professionally. Speak about Vaya Shyam in third person, unless the user asks for first-person wording for a bio or intro. Keep most answers concise: 2-4 sentences. For recruiter-style questions, highlight measurable impact and relevant technologies.

Allowed topics:
- Vaya Shyam's professional summary
- Skills, tech stack, tools, CMS, AI/data experience
- Work experience and achievements
- Projects: CommentPulse, UserHub, Engineering Dashboards, Department GUI Automation, Tide Information App
- Education and certifications
- Contact details from the resume
- This portfolio website

If the user asks unrelated questions, reply exactly:
"Sorry, I can only answer questions about Vaya Shyam's portfolio and resume. Please ask me about his skills, experience, projects, education, certifications, or contact details."

${resumeContext}`,
  };

  if (!process.env.GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY is not configured");
  }

  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [systemMessage, ...messages],
        temperature: 0.35,
        max_tokens: 500,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`Groq API error: ${response.status}`);
  }

  const data = await response.json();
  return (
    data.choices[0]?.message?.content ||
    "Sorry, I could not generate a response."
  );
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    const safeMessages = Array.isArray(messages)
      ? messages
          .filter(
            (message) =>
              (message?.role === "user" || message?.role === "assistant") &&
              typeof message?.content === "string",
          )
          .slice(-10)
      : [];

    const reply = await getGroqChatResponse(safeMessages);
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to get response from AI" },
      { status: 500 },
    );
  }
}
