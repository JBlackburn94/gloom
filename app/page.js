import Image from "next/image";
import logo from "../public/logo.webp";

export default function Home() {
  return (
    <main className="flex items-start justify-evenly h-screen">
      <div className="absolute z-10 mt-10 p-10 flex flex-col justify-center items-center">
        <Image src={logo} alt="Beauty School logo" className="h-20 w-auto" />
        <a
          href="https://orcd.co/beautyschool-gloom"
          target="_blank"
          className="mt-10 bg-white text-black rounded-lg p-4 border-black"
        >
          Pre-Save
        </a>
      </div>

      <video
        autoPlay
        playsInline
        loop
        controls
        className="h-screen w-full relative z-0"
      >
        <source src="./teaser.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
