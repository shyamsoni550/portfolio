import { NextResponse } from "next/server";

// Groq API call function
async function getGroqChatResponse(
  messages: { role: string; content: string }[],
) {
  const systemMessage = {
    role: "system",
    content: `You are a helpful assistant for Vaya Shyam's portfolio website. Your role is to help visitors learn about Vaya Shyam. 

You should ONLY answer questions related to Vaya Shyam's portfolio, including:
- Vaya Shyam's skills, experience, and work history
- Vaya Shyam's projects and what they do
- Vaya Shyam's education and certifications
- How to contact Vaya Shyam
- The portfolio website itself

IMPORTANT: If a user asks about anything that is NOT related to Vaya Shyam or this portfolio (such as general programming questions, math, weather, news, personal questions about you, or any other topic), you MUST respond with:
"Sorry, I can only answer questions about Vaya Shyam's portfolio. Please ask me something about Vaya Shyam's skills, experience, projects, or how to contact them."

Be friendly, professional, and concise. Keep responses short and conversational (2-3 sentences max unless detailed answer is needed).`,
  };

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
        temperature: 0.7,
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
    const reply = await getGroqChatResponse(messages);
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to get response from AI" },
      { status: 500 },
    );
  }
}
