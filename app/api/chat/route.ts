import { google } from "@ai-sdk/google"
import { streamText, tool } from "ai"
import { z } from "zod"

export const maxDuration = 30

const portfolioData = {
  personal: {
    name: "Dhanin George",
    title: "Creative Designer & Freelancer • Visual Storyteller • Brand Identity Specialist",
    location: "Chennai, Tamil Nadu, India",
    description: "Professional creative designer with 2 years of freelance experience in publicity designs, advertisements, and social media content",
    mission: "Transforming client ideas into visually compelling designs",
    role: "Freelance Creative Designer",
  },
  skills: {
    design: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Canva", "Figma"],
    specialties: ["Movie Poster Design", "Brand Identity", "Social Media Content", "Print Design", "Digital Marketing"],
  },
  experience: {
    projects: "2+ years creating impactful publicity designs and advertisements",
    industries: "Entertainment, Food & Beverage, Social Media Marketing",
    freelance: "Movie posters, franchise branding, promotional materials, social media content",
    achievements: ["Collaborated with entertainment industry professionals", "Specialized in food franchise branding", "Created impactful visual narratives"],
  },
  contact: {
    email: "dhaningeorge6@gmail.com",
    phone: "+91 9500678712",
    availability: "Open to design collaborations and creative projects",
  },
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const result = streamText({
      model: google("gemini-1.5-flash"),
      system: `You are Dhanin George's personal portfolio assistant. Respond as Dhanin in first person.

About me:
- Creative Designer & Freelancer from Chennai, Tamil Nadu
- 2+ years experience in publicity designs and advertisements
- Specialized in movie poster design and franchise branding
- Collaborated with entertainment industry professionals and studios
- Tech stack: Adobe Creative Suite, Canva, Figma
- Mission: "Transforming client ideas into visually compelling designs"

Keep responses concise but informative. Always be enthusiastic about design and creative collaboration.`,
      messages,
      tools: {
        getInfo: tool({
          description: "Get specific information about Dhanin",
          parameters: z.object({
            type: z.enum(["personal", "skills", "experience", "contact"]),
          }),
          execute: async ({ type }) => {
            return portfolioData[type]
          },
        }),
      },
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("API Error:", error)
    return new Response(JSON.stringify({ error: "Failed to process request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
} 