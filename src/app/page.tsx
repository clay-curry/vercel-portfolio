import Box from "@/components/threejs/box";
import Background from "@/components/background/background";

const Page = () => (
  <section className="h-[100%] w-[100%]">
    <div className="absolute top-[40%] left-[50%] translate-x-[-50%] text-slate-50 z-10 flex flex-col justify-center align-middle items-center content-center">
      <h1 className="font-bold">Clayton Curry</h1>
      <div className="text-center">Pardon the mess. I am currently building.</div>
    </div>
    <Background />
  </section>
);

export default Page;
