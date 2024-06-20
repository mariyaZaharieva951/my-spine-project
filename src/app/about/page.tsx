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
      <About heading1="About us" heading2="" heading3="" effectClassName="lg:w-[223px] lg:h-[37px] w-[120px] h-[47px] lg:top-[240px] lg:left-[635px] top-[135px] left-[122px]" />
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
