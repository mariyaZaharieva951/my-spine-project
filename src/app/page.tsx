import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Posters from "@/components/layouts/Posters";


export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-b from-green-light to-white h-[883px] w-full">
        <Header/>
        <Hero/>
      </div>
      <Posters/>
      
    </main>
  );
}
