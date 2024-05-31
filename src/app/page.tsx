import Accordion from "@/components/layouts/Accordion";
import Contact from "@/components/layouts/Contact";
import Excellence from "@/components/layouts/Excellence";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Posters from "@/components/layouts/Posters";
import Presence from "@/components/layouts/Presence";


export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-b from-green-light to-white h-[883px] w-full">
        <Header/>
        <Hero/>
      </div>
      <Posters/>
      <Excellence/>
      <div className="bg-web-design bg-center">
        <Presence/>
      </div>
      <Accordion/>
      <Contact/>
      
    </main>
  );
}
