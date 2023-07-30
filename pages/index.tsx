import { Inter } from "next/font/google";
import { H1, P } from "@/components/typography";
import { useChat } from "ai/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div
      className={`flex mx-auto min-h-screen flex-col items-center justify-between p-24 w-screen ${inter.className}`}
    >
      <div className="w-full bg-red-400">
        <H1 className="mb-8">You&apos;re ChatGPT</H1>
        <UserBubble>Hey! I&apos;m ChatGPT, your virtual assistant!</UserBubble>
        {messages.map((m) => (
          <div key={m.id}>
            {m.role === "user" ? (
              <UserBubble>{m.content}</UserBubble>
            ) : (
              <AIBubble>{m.content}</AIBubble>
            )}
          </div>
        ))}
        <form
          className="space-x-2 fixed bottom-8 w-full bg-green-400"
          onSubmit={handleSubmit}
        >
          <input
            className="rounded-xl p-2 outline-none bg-gray-100"
            placeholder="Your deep reply..."
            value={input}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="rounded-xl p-2 bg-gray-100 hover:bg-gray-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

function UserBubble({ children }: any) {
  return (
    <div className="bg-[#007AFF] p-2 rounded-xl w-max my-4">
      <P className="text-white">{children}</P>
    </div>
  );
}

function AIBubble({ children }: any) {
  return (
    <div className="bg-gray-100 p-2 rounded-xl w-max">
      <P>{children}</P>
    </div>
  );
}
