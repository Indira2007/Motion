import { TopBar } from "@/components/TopBar";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Programmes } from "@/components/Programmes";
import { Toppers } from "@/components/Toppers";
import { WhyUs } from "@/components/WhyUs";
import { Faculty } from "@/components/Faculty";
import { StudentTools } from "@/components/StudentTools";
import { AdmissionProcess } from "@/components/AdmissionProcess";
import { Trust } from "@/components/Trust";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <TopBar />
      <NavBar />
      <Hero />
      <Stats />
      <Programmes />
      <Toppers />
      <WhyUs />
      <Faculty />
      <StudentTools />
      <AdmissionProcess />
      <Trust />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
