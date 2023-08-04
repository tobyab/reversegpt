import { Inter } from "next/font/google";
import { AIBubble, UserBubble } from "@/components/bubbles";
import Link from "next/link";
import Image from "next/image";
import love from "@/public/love.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div className={`w-screen ${inter.className}`}>
      <div className="w-1/2 py-8 mx-auto">
        <UserBubble>So, What is ReverseGPT?</UserBubble>
        <AIBubble>
          ReverseGPT is basically just ChatGPT... but it asks you the questions.
        </AIBubble>
        <UserBubble>
          Oooh, fun! So, how does it work? How do I use it?
        </UserBubble>
        <AIBubble>
          First off, bring your own OpenAI API key! Then, once you&apos;ve got
          one of those, get to asking your questions!
        </AIBubble>
        <UserBubble>When was it built?</UserBubble>
        <AIBubble>
          It was built for Hack Club&apos;s{" "}
          <Link href="https://outernet.hackclub.com/" className="underline">
            Outernet Hackathon
          </Link>
          !
        </AIBubble>
        <UserBubble>Cool! Is it open source?</UserBubble>
        <AIBubble>
          Yep! You can see the code over at:{" "}
          <Link
            href="https://github.com/developedbytoby/reversegpt"
            className="underline"
          >
            developedbytoby/reversegpt
          </Link>
        </AIBubble>
        <Image
          src={love}
          alt="An image of a board that people have written on, and added stickers to!"
          className="max-w-sm ml-auto rounded-xl"
        />
        <AIBubble>
          Thank you so much to everyone who came and checked ReverseGPT out! ❤️
        </AIBubble>
        <UserBubble>Groovy. Thank you, ReverseGPT!</UserBubble>
      </div>
    </div>
  );
}
