import { Header } from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import TechProf from "@/components/TechProf/TechProf";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Maksym Parunov",
  description:
    "Portfolio & CV website of Full-stack developer Maksym Parunov from Ukraine, Kyiv.",
};

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Hero />
        <TechProf />
      </main>
    </Suspense>
  );
}
