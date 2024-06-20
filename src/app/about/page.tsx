"use client";
import About from "@/components/layouts/About";
import Contact from "@/components/layouts/Contact";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import OurStory from "@/components/layouts/OurStory";
import WhyUs from "@/components/layouts/WhyUs";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <About />
      <OurStory />
      <div className="bg-web-design bg-center bg-cover">
        <WhyUs />
      </div>
      <Contact heading='Get in Touch with DigitalBoostPro'/>
      <Footer />
    </div>
  );
};

export default AboutUs;
