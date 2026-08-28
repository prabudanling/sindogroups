import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Values } from "@/components/sections/values";
import { Structure } from "@/components/sections/structure";
import { LeadershipLegal } from "@/components/sections/leadership-legal";
import { BusinessSectors } from "@/components/sections/business-sectors";
import { SmartPort } from "@/components/sections/smart-port";
import { Services } from "@/components/sections/services";
import { Partners } from "@/components/sections/partners";
import { Roadmap } from "@/components/sections/roadmap";
import { Governance } from "@/components/sections/governance";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Chatbot } from "@/components/chatbot/chatbot";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Values />
        <Structure />
        <LeadershipLegal />
        <BusinessSectors />
        <SmartPort />
        <Services />
        <Partners />
        <Roadmap />
        <Governance />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
