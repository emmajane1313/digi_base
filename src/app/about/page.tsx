import type { Metadata } from "next";
import Wrapper from "../components/Wrapper";
import AboutEntry from "../components/AboutEntry";

export const metadata: Metadata = {
  title: "About",
  twitter: {
    title: "About",
  },
  openGraph: {
    title: "About",
  },
};

export default function About() {
  return (
    <Wrapper>
      <AboutEntry />
    </Wrapper>
  );
}
