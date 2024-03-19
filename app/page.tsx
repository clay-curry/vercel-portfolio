"use client"
import Link from "next/link";
import Background from "../components/3b1b/background";
import { TyperSpan } from "../components/typer";
import { useRouter } from "next/navigation";


export default function Page() {
  const router = useRouter()

  return <section className="h-[100%] w-[100%]">
    <div className="z-10 absolute w-[65%] top-[40%] left-[50%] translate-x-[-50%] text-slate-50 align-middle items-center content-center text-center flex flex-col gap-1 tablet:gap-2">
      <h1 className="font-extrabold text-2xl tablet:text-2xl laptop:text-3xl">
        Clayton Curry
      </h1>
      <div className="leading-1 font-medium text-base tablet:text-lg laptop:text-xl max-w-[450px]">
        <TyperSpan carousel={[
          "Modular programming.",
          "Language implementation.",
          "Dynamic optimality.",
          "Federated modules.",
          "Bundler observability.",
          "Reinforcement learning.",
        ]} />
      </div>
      
    </div>
    <div className="z-10 m-2 p-2 px-3 flex justify-center absolute gap-3 bg-[#808080]/35 border-2 border-transparent transition delay-75 hover:border-white/20 rounded-3xl bottom-0 right-0">
        <Link
        aria-label="GitHub profile"
          href="/github"
          prefetch={false}>
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" className="w-[28px] h-[28px] inline-block align-middle fill-slate-100 hover:fill-[#03a9f4] transition delay-75">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>

          </Link>
          <Link
                  aria-label="Twitter profile"
          href="/twitter"
          prefetch={false}>
            <svg viewBox="0 0 24 24" aria-hidden="true" height="32" width="32" className="w-[28px] h-[28px] inline-block align-middle fill-slate-100  hover:fill-[#03a9f4] transition delay-75"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
          </Link>
          
      </div>
    <Background />
  </section>
};