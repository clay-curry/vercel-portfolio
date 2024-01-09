import Background from "../components/background/background";
import Link from "next/link";

const Page = () => (
  <section className="h-[100%] w-[100%]">
    <div className="z-10 absolute w-[65%] top-[40%] left-[50%] translate-x-[-50%] text-slate-50 align-middle items-center content-center text-center flex flex-col gap-1 tablet:gap-2">
      <h1 className="font-bold text-xl tablet:text-2xl laptop:text-3xl">
        Clayton Curry
      </h1>
      <div className="leading-5 text-base tablet:text-lg laptop:text-xl max-w-[450px]">
        DX, performance, observability. <br />
        Creator of {" "}
        <Link
          target="_blank"
          className="text-slate-50 overflow-hidden [background:linear-gradient(to_right,_midnightblue,_royalblue)] bg-clip-text [background-size:200%_100%] [background-position:100%] transition-[background-position_975ms_ease] hover:[background-position:0_100%] font-extrabold"
          href="https://github.com/clay-curry/dep-scope"
        >
          dep-scope
        </Link>
        .
      </div>
    </div>
    <Background />
  </section>
);

export default Page;
