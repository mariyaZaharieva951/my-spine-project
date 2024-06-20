import Accordion from "@/components/layouts/Accordion";
import Contact from "@/components/layouts/Contact";
import Excellence from "@/components/layouts/Excellence";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Posters from "@/components/layouts/Posters";
import Presence from "@/components/layouts/Presence";


export default function Home() {
  return (
    <main>
  <div className="bg-gradient-to-b from-green-light to-white lg:h-[883px] w-full">
    <Header />
    <Hero />
  </div>
  <Posters />
  <Excellence />
  <div className="bg-web-design bg-center">
    <Presence />
  </div>
  <Accordion />
  <div className="flex flex-col">
    <div className="order-2 lg:order-2">
      <Footer />
    </div>
    <div className="order-1 lg:order-1">
      <Contact heading="Get in Touch with Spine" />
    </div>
  </div>
</main>
  );
}
