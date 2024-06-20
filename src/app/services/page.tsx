"use client";

import About from "@/components/layouts/About";
import Accordion from "@/components/layouts/Accordion";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Solutions from "@/components/layouts/Solutions";

const ServicesPage = () => {
  return (
    <div>
      <Header />
      <About
        heading1="Our services make"
        heading2="your Business"
        heading3="easier"
        effectClassName="lg:w-[223px] lg:h-[37px] w-[120px] h-[47px] lg:top-[330px] lg:left-[600px] top-[230px] left-[120px]"
      />
      <div className="bg-web-design bg-center">
        <Solutions />
      </div>
      <Accordion/>
      <Footer />
    </div>
  );
};

export default ServicesPage;
