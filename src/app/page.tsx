
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col">
        <Hero />
        <Trust />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
    </>
  );
}
