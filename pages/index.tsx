import { Inter } from "next/font/google";
import { H1, P } from "@/components/typography";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const inputRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const divs = document.querySelectorAll(".scroll-to-bottom");
    const lastDiv = divs[divs.length - 1];

    if (!lastDiv) return;

    lastDiv.scrollIntoView({ behavior: "smooth" });
  }, [messages, input]);

  return (
    <div
      className={`flex mx-auto min-h-screen flex-col items-center justify-between p-24 w-screen ${inter.className}`}
    >
      <div className="w-1/2 mx-auto">
        <H1 className="mb-8">You&apos;re ChatGPT</H1>
        <UserBubble>Hello human. Ask me questions below!</UserBubble>
        {messages.map((m) => (
          <div key={m.id} className="place-items-between scroll-to-bottom">
            {m.role === "user" ? (
              <UserBubble>{m.content}</UserBubble>
            ) : (
              <AIBubble>{m.content}</AIBubble>
            )}
          </div>
        ))}
        <form
          className="space-x-2 fixed bottom-8 mx-auto flex"
          onSubmit={handleSubmit}
        >
          <input
              className="rounded-xl p-2 outline-none bg-gray-100 w-full"
              placeholder="Your deep reply..."
              value={input}
              onChange={handleInputChange}
              ref={inputRef}
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
    <div className="bg-gray-100 max-w-sm p-2 rounded-xl w-max my-4">
      <P>{children}</P>
    </div>
  );
}

function AIBubble({ children }: any) {
  return (
    <div className="bg-[#007AFF] max-w-sm p-2 rounded-xl w-max my-4 ml-auto">
      <P className="text-white">{children}</P>
    </div>
  );
}
