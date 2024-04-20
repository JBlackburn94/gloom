import Image from "next/image";
import logo from "../public/logo.webp";

export default function Home() {
  return (
    <main className="flex items-start h-screen bg-black justify-evenly">
      <div className="absolute z-10 flex flex-col items-center justify-center p-10 mt-3 md:mt-10">
        <Image src={logo} alt="Beauty School logo" className="w-auto h-20" />
        <a
          href="https://orcd.co/beautyschool-gloom"
          target="_blank"
          className="p-2 mt-10 font-semibold text-black uppercase bg-white border-black rounded-lg md:p-4"
        >
          Pre-Save
        </a>
      </div>

      <video
        autoPlay
        playsInline
        loop
        controls
        className="relative z-0 w-full h-screen"
      >
        <source src="./teaser.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
