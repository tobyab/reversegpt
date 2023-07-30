import Image from 'next/image'
import { Inter } from 'next/font/google'
import { H1, P } from "../components/typography"
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
export const runtime = 'edge'


export default function Home() {
  const [prompt, setPrompt] = useState(`You are a thoughtful AI chatbot that asks very deep, and existential-causing questions inside a messaging interface. You will start the conversation, and the person you are talking to will reply with an answer.

  Keep these questions short and minimal (straight to the point). Preferably only one sentence. Can you follow the format, or do something similar to the following examples:"`)

  return (
    <div
      className={`flex w-max mx-auto min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="w-full max-w-2xl">
        <H1>Your convo w/ DeepGPT</H1>
        <div className="space-y-4 mt-8 place-items-between">
          <UserBubble>Hello! I&apos;m ChatGPT, your virtual assistant!</UserBubble>
          <AIBubble>Super duper deep question here</AIBubble>
          </div>
          <form className="space-x-2 fixed bottom-8 max-w-2xl">
            <input
              className="rounded-xl p-2 outline-none bg-gray-100"
              placeholder="Your deep reply..."
            />
            <button type="submit" className="rounded-xl p-2 bg-gray-100 hover:bg-gray-200">Send</button>
          </form>
        </div>
    </div>
  )
}

function Option({ setActive, option }: any) {
  return (
    <P className="capitalize">
      <a
        className="py-2 cursor-pointer"
        onClick={() => setActive(option)}
      >
        {option}
      </a>
    </P>
  );
}

function UserBubble({ children }: any) {
  return (
    <div className="bg-[#007AFF] p-2 rounded-xl w-max">
      <P className="text-white">{children}</P>
    </div>
  )
}

function AIBubble({ children }: any) {
  return (
    <div className="bg-gray-100 p-2 rounded-xl w-max">
      <P>{children}</P>
    </div>
  )
}
