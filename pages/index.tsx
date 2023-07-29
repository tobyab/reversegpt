import Image from 'next/image'
import { Inter } from 'next/font/google'
import { H1, P } from "../components/typography"
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [active, setActive] = useState("Thoughtful AI")
  const [prompt, setPrompt] = useState(`You are a ${active} AI chatbot that asks very deep, and extesential-causing questions inside a messaging interface. You will start the conversation, and the person you are talking to will reply with an answer.`)

  return (
    <div
      className={`flex w-max mx-auto min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex space-x-32">
        <div className="bg-gray-100 rounded-xl p-4 space-y-2">
          <Option option="Thoughtful AI" setActive={setActive}/>
          <Option option="Math AI" setActive={setActive}/>
          <Option option="Scary AI" setActive={setActive}/>
        </div>
        <div className="w-full max-w-2xl bg-red-400">
        <H1>{active}</H1>
          <div className="space-y-4 mt-8">
            <UserBubble message="Hello! I'm ChatGPT, your virtual assistant!"/>
            <AIBubble message="Super duper deep question here"/>
          </div>
        </div>
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

function UserBubble({ message }: any) {
  return (
    <div className="bg-[#007AFF] p-2 rounded-xl">
      <P className="text-white">{message}</P>
    </div>
  )
}

function AIBubble({ message }: any) {
  return (
    <div className="bg-gray-100 p-2 rounded-xl">
      <P>{message}</P>
    </div>
  )
}