// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

export const runtime = 'edge'
const openai = new OpenAIApi(configuration)

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      const resp = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: req.body.message,
        temperature: 0.7,
        stream: true,
      })
      
      const data = await resp.json();

      return res.status(200).json({ data } as any) // TODO: change later
    } catch (error: any | undefined) {
      console.log(error.message)
      return res.status(500).json(error.message)
    }
  }
}
