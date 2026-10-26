import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Counter from "@/components/sections/Counter";
import Neon from "@/components/sections/Neon";
import Menu from "@/components/sections/Menu";
import Story from "@/components/sections/Story";
import Visit from "@/components/sections/Visit";
import Gallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee
        words={[
          "Ceremonial matcha",
          "Hand whisked to order",
          "Speciality coffee",
          "Fresh bakes",
          "Turkish pide",
          "Open late",
        ]}
      />
      <Counter />
      <Neon />
      <Menu />
      <Story />
      <Visit />
      <Gallery />
    </>
  );
}
