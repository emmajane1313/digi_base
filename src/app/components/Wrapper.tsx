"use client";

import { FunctionComponent, ReactNode } from "react";

const Wrapper: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen flex items-center flex-col justify-between p-4 selection:bg-offBlack selection:text-offWhite">
      <div className="relative w-full h-fit items-center justify-center sm:justify-between gap-3 flex flex-row text-xl font-york flex-wrap text-center">
        <div
          className="relative w-fit h-fit flex cursor-sewingHS"
          onClick={() => window.open("https://digitalax.xyz/")}
        >
          DIGITALAX
        </div>
        <div className="relative w-fit h-fit flex flex-col gap-1 text-sm">
          Emancipatory Lifestyle Tech.
        </div>
      </div>

      {children}

      <div className="relative w-full h-fit items-center sm:items-end justify-center sm:justify-between gap-3 flex flex-col sm:flex-row font-york">
        <div className="font-rain w-fit h-fit text-center sm:text-left text-4xl">
          X
        </div>
        <div className="relative text-center sm:text-right flex h-fit text-xs w-fit sm:w-44 flex-col items-center justify-center sm:items-end sm:justify-end font-druk">
          <div className="relative w-fit h-fit flex">
            stacking looks and skills. sewing together more useful stuff.
          </div>
          <h1
            className="relative w-fit h-fit flex underline cursor-sewingHS"
            onClick={() => window.open("https://emmajanemackinnonlee.net/")}
          >
            by Emma-Jane MacKinon-Lee
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
