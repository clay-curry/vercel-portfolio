import Background from "../components/background/background";

const Page = () => (
  <section className="h-[100%] w-[100%]">
    <div className="z-10 absolute w-[65%] top-[40%] left-[50%] translate-x-[-50%] text-slate-50 align-middle items-center content-center text-center flex flex-col gap-1 tablet:gap-2">
      <h1 className="font-bold text-xl tablet:text-2xl laptop:text-3xl text-slate-50">Clayton Curry</h1>
      <p className="leading-5 text-base tablet:text-lg laptop:text-xl">Pardon the mess. I am currently building.</p>
      </div>
    <Background />
  </section>
);

export default Page;
