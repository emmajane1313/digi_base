"use client";

import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

const AboutEntry: FunctionComponent = () => {
  const router = useRouter();
  return (
    <div className="relative w-full h-fit flex flex-col app:flex-row justify-between items-center sm:gap-0 gap-5 app:my-0 my-6">
      <div className="relative w-full h-fit flex">
        <div className="relative app:absolute app:left-2 app:-bottom-20 w-60 text-sm h-fit text-left">
          I founded DIGITALAX in mid-2020, launching the first Web3 fashion
          protocol on Ethereum. Since then, our contracts have expanded across
          Ethereum Mainnet, Polygon, and Lens ZK. I design, code, build, and
          steward the protocol full time.
          <br />
          <br />I grew up in Australia, between Highlander & Yolŋu worlds. Now
          based in Spain, I've moved through NYC, Paris, San Francisco, MENA, and Hong
          Kong.
        </div>
      </div>
      <div className="relative w-full h-fit flex flex-col items-center justify-center">
        <div
          className="font-druk w-fit h-fit relative text-center cursor-sewingHS hover:underline"
          onClick={() => window.open("https://syntheticfutures.xyz/")}
        >
          Emma-Jane MacKinnon-Lee
        </div>
        <div className="relative w-fit h-fit flex">
          <video
            draggable={false}
            autoPlay
            poster="/images/emmajanemackinnonlee.png"
            loop
            muted
            className="relative flex w-60 h-60 border border-offBlack object-cover"
          >
            <source src="/videos/emmajanemackinnonlee.mp4" />
          </video>
        </div>

        <div className="text-sm w-fit h-fit relative text-center">
          EST. 1998
        </div>
      </div>

      <div
        className="relative h-full flex flex-col gap-1 w-full font-din text-sm items-end justify-end"
        id="coined"
      >
        <div className="relative w-fit h-fit flex mb-4">
          <div
            className="w-fit h-fit px-2 py-1 border border-black rounded-full flex text-center cursor-sewingHS"
            onClick={() => router.push("/")}
          >
            <div className="w-fit h-fit px-3 py-1 border border-black rounded-full flex text-center">
              Home
            </div>
          </div>
        </div>

        <div className="text-3xl font-extrabold tracking-tight text-[#ce02cb] mb-2">
          I Coined
        </div>
        <div className="text-3xl font-extrabold tracking-tight text-[#ce02cb] mb-2">
          Web3 Fashion.
        </div>

        <div
          className="relative w-fit h-full flex cursor-sewingHS"
          onClick={() =>
            window.open("https://cypher.digitalax.xyz/autograph/emmajane1313")
          }
        >
          Follow me on Lens.
        </div>
        <div
          className="relative w-fit h-full flex cursor-sewingHS"
          onClick={() => window.open("https://github.com/emmajane1313")}
        >
          I code here.
        </div>
      </div>
    </div>
  );
};

export default AboutEntry;
