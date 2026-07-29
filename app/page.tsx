import { AboutArash } from "@/components/AboutArash";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Pricing } from "@/components/Pricing";
import { Reviews } from "@/components/Reviews";
import { RisRoute } from "@/components/RisRoute";
import { SignupForm } from "@/components/SignupForm";
import { StatsBar } from "@/components/StatsBar";
import { WhyGrid } from "@/components/WhyGrid";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <WhyGrid />
        <AboutArash />
        <RisRoute />
        <Pricing />
        <Reviews />
        <Faq />
        <SignupForm />
      </main>
      <Footer />
    </>
  );
}
