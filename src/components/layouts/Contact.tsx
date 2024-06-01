"use client";

import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  return (
    <div className="lg:w-[1170px] lg:pb-[160px] mx-auto flex justify-between">
    <div className="lg:w-[530px] pt-[80px]">
        <h2 className="lg:text-6xl text-4xl font-bold">Get in Touch with Spine</h2>
        <p className="lg:text-base text-sm font-bold text-gray-text py-4">Whether you have questions about our services, want to discuss a potential collaboration, or just feel like saying hello, we'd love to hear from you.</p>
        <ul>
            <li className="lg:text-xl text-lg font-bold ml-20px p-3 bg-gray-bg"><FontAwesomeIcon icon={faLocationDot} className="pr-2" />Plovdiv, K. Riacho 95, Bulgaria</li>
            <li className="lg:text-xl text-lg font-bold ml-20px p-3"><FontAwesomeIcon icon={faPhone} className="pr-2"/>+359 884 77 77 777</li>
            <li className="lg:text-xl text-lg font-bold ml-20px p-3"><FontAwesomeIcon icon={faEnvelope} className="pr-2"/>j.borisov@spine.com</li>
        </ul>
    </div>
    <ContactForm>

    </ContactForm>
</div>
  );
}

export default Contact;