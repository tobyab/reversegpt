import { Inter } from "next/font/google";
import { P } from "@/components/typography";
import { UserBubble, AIBubble } from "@/components/bubbles";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import info from "@/public/info.svg";
import Link from "next/link";

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
    <div className={`w-screen ${inter.className}`}>
      <div className="mx-auto">
        <div className="bg-gray-100 p-2 w-1/2 mx-auto flex justify-between mt-8 rounded-full">
          <P>
            <span className="text-gray-500">To:</span> Human
          </P>
          <div />
          <Link href="/about">
            <Image src={info} height={24} width={24} alt="Information icon" />
          </Link>
        </div>
        <div className="pt-8 pb-20 w-1/2 mx-auto">
          <AIBubble>
            Welcome to ReverseGPT! Start by typing something below, and me, the
            AI will ask <b>you</b> the questions.
          </AIBubble>
          {messages.map((m) => (
            <div key={m.id} className="place-items-between scroll-to-bottom">
              {m.role === "user" ? (
                <UserBubble>{m.content}</UserBubble>
              ) : (
                <AIBubble>{m.content}</AIBubble>
              )}
            </div>
          ))}
          <form className="w-1/2 fixed bottom-8" onSubmit={handleSubmit}>
            <input
              className="rounded-full py-2 px-4 outline-none border w-full"
              placeholder="Your reply..."
              value={input}
              onChange={handleInputChange}
              ref={inputRef}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
