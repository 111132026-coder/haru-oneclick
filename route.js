
export async function POST(req) {
  const { message } = await req.json();
  return new Response(JSON.stringify({ reply: "Haru 收到：" + message }), {
    headers: { "Content-Type": "application/json" },
  });
}
