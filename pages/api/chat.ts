import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { kv } from "@vercel/kv";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export const runtime = "edge";

export default async function POST(req: Request) {
  const { messages } = await req.json();

  const prompt = `You are a thoughtful AI chatbot that asks very deep, and existential-causing questions inside a messaging interface. You will start the conversation, and the person you are talking to will reply with an answer. Keep these questions short and minimal (straight to the point). Preferably only one sentence. Here is an example: how does it feel to know that your existent is simply insignificant in this constant ever-lasting universe? Make sure that your question is different every time. Here are your past responses: . Try to continue on the conversation.`;

  const message = `${prompt}\n\n${messages}`;

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    temperature: 1.5,
    messages: [{ role: "user", content: message }],
  });

  const stream = OpenAIStream(response, {
    async onCompletion(completion: string) {
      await kv.hset("responses", {
        response: completion,
        createdAt: new Date().toISOString(),
      });
    },
  });
  return new StreamingTextResponse(stream);
}
