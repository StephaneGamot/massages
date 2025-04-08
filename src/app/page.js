import Image from "next/image";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import MassageCardContainer from "@/components/Cards/MassageCardContainer";
import Cta from "@/components/Cta/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <MassageCardContainer />
      <Cta />
      <Contact />
       <Testimonials ids={[1, 4, 7, 23, 35]} />
    </main>
  );
}
