"use client";

import { useRouter } from "next/navigation";
import Wrapper from "./components/Wrapper";
import { useEffect, useState } from "react";
import { TIMELINE } from "./lib/constantes";
import { LiaArrowAltCircleLeft, LiaArrowAltCircleRight } from "react-icons/lia";

export default function Home() {
  const router = useRouter();
  const [indice, setIndice] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && indice > 0) {
        setIndice((prev) => prev - 1);
      }
      if (event.key === "ArrowRight" && indice < TIMELINE.length - 1) {
        setIndice((prev) => prev + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [indice]);

  return (
    <Wrapper>
      <div className="relative w-full h-fit flex flex-col app:flex-row justify-between items-center sm:gap-0 gap-5 app:my-0 my-6">
        <div className="relative w-full h-fit flex">
          <div className="relative app:absolute app:left-2 app:-bottom-20 w-fit h-fit flex flex-col text-left app:text-base text-xs">
            {[
              { texto: "CC0", color: "#58b5f5" },
              { texto: "On-Chain", color: "#ce02cb" },
              { texto: "$MONA", color: "#46b171" },
              { texto: "FGO", color: "#ffd85f" },
              { texto: "GenAI", color: "#3cfdf6" },
              {
                texto: "TripleA",
                color: "#0035f2",
                enlace: "https://triplea.agentmeme.xyz/",
              },
              {
                texto: "Skyhunters",
                color: "#0035f2",
                enlace: "https://skyhunters.agentmeme.xyz/",
              },
              {
                texto: "Cypher Search",
                color: "#0035f2",
                enlace: "https://cypher.digitalax.xyz/",
              },
              {
                texto: "Chromadin",
                color: "#0035f2",
                enlace: "https://www.chromadin.xyz/",
              },
              {
                texto: "Kinora",
                color: "#0035f2",
                enlace: "https://kinora.irrevocable.dev/",
              },
              {
                texto: "Listener",
                color: "#0035f2",
                enlace: "https://listener.irrevocable.dev/",
              },
              {
                texto: "Coin Op",
                color: "#0035f2",
                enlace: "https://coinop.themanufactory.xyz/",
              },
                {
                texto: "GDN",
                color: "#0035f2",
                enlace: "https://globaldesignernetwork.com/",
              },
              {
                texto: "NPC Studio",
                color: "#0035f2",
                enlace: "https://npcstudio.xyz/",
              },
              {
                texto: "The Manufactory",
                color: "#0035f2",
                enlace: "https://themanufactory.xyz/",
              },
              {
                texto: "FGO",
                color: "#0035f2",
                enlace: "https://fgo.themanufactory.xyz/",
              },
              {
                texto: "FGO Futures",
                color: "#0035f2",
                enlace: "https://futures.themanufactory.xyz/",
              },
            ].map((el, i) => (
              <div
                key={i}
                className={`relative w-fit h-fit flex ${
                  el.enlace && "cursor-sewingHS"
                }`}
                onClick={() => el.enlace && window.open(el.enlace)}
                style={{
                  color: el.color,
                }}
              >
                {el.texto}
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full h-fit flex flex-col items-center justify-center">
          <div className="font-druk w-fit h-fit relative text-center">
            The Temporal Seams of Web3 Fashion
          </div>
          <div className="relative w-fit h-fit flex">
            <video
              draggable={false}
              autoPlay
              poster={TIMELINE[indice]?.cartel}
              loop
              key={TIMELINE[indice]?.fideo}
              muted
              className="relative flex w-60 h-60 border border-offBlack object-cover"
            >
              <source src={TIMELINE[indice]?.fideo} />
            </video>
          </div>
          <div className="relative w-fit h-60 flex flex-col gap-3 items-center text-center justify-center">
            <div className="relative w-full items-center justify-center h-fit flex text-sm font-mag uppercase">
              {TIMELINE[indice]?.ism}
            </div>
            <div className="relative w-60 h-fit flex text-sm font-druk uppercase text-center">
              {TIMELINE[indice]?.aen}
            </div>
            <div className="relative w-fit h-fit flex flex-row gap-2 mt-4">
              <LiaArrowAltCircleLeft
                size={20}
                className={` ${indice == 0 ? "opacity-70" : "cursor-sewingHS"}`}
                onClick={() => indice > 0 && setIndice((prev) => prev - 1)}
                color="#111313"
              />
              <div className="relative text-sm w-fit h-fit">
                {TIMELINE[indice]?.sana}
              </div>
              <LiaArrowAltCircleRight
                className={` ${
                  indice == TIMELINE.length - 1
                    ? "opacity-70"
                    : "cursor-sewingHS"
                }`}
                onClick={() =>
                  indice < TIMELINE.length - 1 && setIndice((prev) => prev + 1)
                }
                size={20}
                color="#111313"
              />
            </div>
          </div>
        </div>

        <div
          className="relative h-full flex flex-col gap-1 w-full font-din text-sm items-end justify-end"
          id="coined"
        >
          <div className="relative w-fit h-fit flex mb-4">
            <div
              className="w-fit h-fit px-2 py-1 border border-black rounded-full flex text-center cursor-sewingHS"
              onClick={() => router.push("/about")}
            >
              <div className="w-fit h-fit px-3 py-1 border border-black rounded-full flex text-center">
                About
              </div>
            </div>
          </div>

          <div className="text-6xl font-extrabold tracking-tight text-[#ce02cb] mb-2">
            Est.
          </div>
          <div className="text-6xl font-extrabold tracking-tight text-[#ce02cb] mb-2">
            2020
          </div>

          <div
            className="relative w-fit h-full flex cursor-sewingHS"
            onClick={() =>
              window.open("https://cypher.digitalax.xyz/autograph/digitalax")
            }
          >
            Follow on Lens.
          </div>
          <div
            className="relative w-fit h-full flex cursor-sewingHS"
            onClick={() => window.open("https://github.com/digitalax")}
          >
            Coding here.
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
