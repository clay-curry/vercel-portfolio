"use client"
import Background from "./background/background";
import Link from "next/link";
import { Typer } from "./typer";
import { useRouter } from "next/navigation";
import { SocialBubble } from "./social-bubble";

function Hero() {
  return <div className="z-10 absolute w-[65%] top-[40%] left-[50%] translate-x-[-50%] text-slate-50 align-middle items-center content-center text-center flex flex-col gap-1 tablet:gap-2">
      
  <h1 className="font-extrabold text-xl tablet:text-2xl laptop:text-3xl">
    Clayton Curry
  </h1>
  <div className="leading-1 font-medium text-base tablet:text-lg laptop:text-xl max-w-[450px]">
    <Typer carosel={[
      "Computer Science grad.",
      "Open Source Contributer.",
      "Software Performance Engineer.",
      "Operating System Engineer",
      "NextJS Developer."
    ]} />
  </div>

</div>

}

export default function Page() {
  const router = useRouter()

  return <section className="h-[100%] w-[100%]">
    <Hero />
    <SocialBubble />
    <Background />
  </section>
};