"use client";

import ContactForm from "./ContactForm";


const Contact = () => {
  return (
    <div className="container flex justify-between">
    <div className="lg:w-[530px] pt-[80px]">
        <h2 className="lg:text-6xl text-4xl font-bold">Get in Touch with Spine</h2>
        <p className="lg:text-base text-sm font-bold text-gray-text py-4">Whether you have questions about our services, want to discuss a potential collaboration, or just feel like saying hello, we'd love to hear from you.</p>
        <ul>
            <li className="lg:text-xl text-lg font-bold ml-20px py-3">Plovdiv, K. Riacho 95, Bulgaria</li>
            <li className="lg:text-xl text-lg font-bold ml-20px py-3">+359 884 77 77 777</li>
            <li className="lg:text-xl text-lg font-bold ml-20px py-3">j.borisov@spine.com</li>
        </ul>
    </div>
    <ContactForm>

    </ContactForm>
</div>
  );
}

export default Contact;