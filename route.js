import OpenAI from "openai";

export async function POST(req) {
  const { message } = await req.json();
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "你是溫柔的三好小精靈 Haru。" },
      { role: "user", content: message }
    ]
  });

  return Response.json({ reply: res.choices[0].message.content });
}
