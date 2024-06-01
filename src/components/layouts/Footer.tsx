import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center bg-black">
      <div className="container lg:flex justify-between lg:py-[80px]">

        <div className="lg:w-[369px]">
          <img
            className="lg:w-[200px] lg:h-[40px]"
            src="./assets/logo-end.png"
            alt="Logo"
          />
          <p className="text-white lg:text-sm py-[30px]">
            Spine is the ultimate boost for your online presence. We're here to
            supercharge your digital agency's journey.
          </p>
          <div className="lg:w-[100px] flex justify-between">
            <FontAwesomeIcon icon={faFacebook} className="w-[20px] h-[20px] text-white pr-2" />
            <FontAwesomeIcon icon={faTwitter} className="w-[20px] h-[20px] text-white pr-2" />
            <FontAwesomeIcon icon={faInstagram} className="w-[20px] h-[20px] text-white pr-2" />
          </div>
        </div>

        <div className="lg:w-[664px] lg:flex">
          <ul className="lg:w-[147px] text-white text-start lg:mr-[60px]">
            <h4 className="w-full lg:text-xl font-bold pb-[20px]">Menu</h4>
            <li className="w-full lg:text-base pb-[10px]">
              <Link href="/home" className="block w-full">Home</Link>
            </li>
            <li className="w-full lg:text-base pb-[10px]">
              <Link href="/about" className="block w-full">About</Link>
            </li>
            <li className="w-full lg:text-base pb-[10px]">
              <Link href="/services" className="block w-full">Services</Link>
            </li>
            <li className="w-full lg:text-base pb-[10px]">
              <Link href="/faq" className="block w-full">FAQ</Link>
            </li>
            <li className="w-full lg:text-base pb-[10px]">
              <Link href="/contact" className="block w-full">Contact</Link>
            </li>
          </ul>

          <ul className="lg:w-[146px] text-white text-start lg:mr-[60px]">
            <h4 className="w-full lg:text-xl font-bold pb-[20px]">Services</h4>
            <li className="w-full lg:text-base pb-[10px]">
              <Link href="/web-design" className="block w-full">Web Design & Development</Link>
            </li>
            <li className="w-full lg:text-base pb-[10px]">
              <Link href="/branding" className="block w-full">Branding</Link>
            </li>
            <li className="w-full lg:text-base pb-[10px]">
              <Link href="/digital-marketing" className="block w-full">Digital Marketing</Link>
            </li>
            <li className="w-full lg:text-base pb-[10px]">
              <Link href="/content-creating" className="block w-full">Content Creating</Link>
            </li>
            <li className="w-full lg:text-base pb-[10px]">
              <Link href="/technical-support" className="block w-full">Technical Support</Link>
            </li>
          </ul>

          <div className="lg:w-[251px] text-white text-start">
            <h4 className="w-full lg:text-xl font-bold">
              Join our newsletter
            </h4>
            <input
              className="w-full p-2 bg-black-text border-2 border-white rounded-md text-xs my-[20px]"
              placeholder="Enter email address"
            />
            <button className="custom-button bg-green-light text-black">
              Get Start
            </button>
          </div>
        </div>

      </div>
      <p className="container lg:text-lg py-[40px] border-t-2 border-white-text text-white text-center">@2024 Spine ALL RIGHTS REVERSED</p>
    </div>
);
};


export default Footer;
