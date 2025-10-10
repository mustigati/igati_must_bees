import React from 'react';
import SectionContainer from '@/components/ui/contactSectionContainer';
import ContactCard from '@/components/ui/ContactCard';
import phone from "@/assets/images/contact/phone.png";
import whatsapp from "@/assets/images/contact/whatsapp.png";
import email from "@/assets/images/contact/email.png";

interface ContactDataItem {
  imageSrc: string;
  imageAlt: string;
  title: string;
  contact: string;
  imageClassName?: string;
}

// Main Contact Component
const Contact: React.FC = () => {
  const contactData: ContactDataItem[] = [
    {
      imageSrc: phone,
      imageAlt: "Phone icon",
      title: "Make a Call",
      contact: "0797753808",
      imageClassName: "w-[90px] h-[90px] object-contain"
    },
    {
      imageSrc: whatsapp,
      imageAlt: "WhatsApp icon",
      title: "Chat on WhatsApp",
      contact: "0797753808",
      imageClassName: "w-[100px] h-[100px] object-contain"
    },
    {
      imageSrc: email,
      imageAlt: "Email icon",
      title: "Send an Email",
      contact: "igatimust.onemillion",
      imageClassName: "w-[90px] h-[90px] object-contain"
    }
  ];

  return (
    <section className="flex flex-col min-h-screen py-12 px-4 md:px-8 lg:px-16 mt-12">
      {/* Header Section */}
      <div className="text-center mb-12 md:mb-16">
        <h1 
          className="text-[#121907] text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
          style={{ fontFamily: 'EB Garamond, serif', lineHeight: '1.4' }}
        >
          Contact Us
        </h1>
        <p 
          className="text-[background: #121907] text-2xl md:text-3xl lg:text-4xl font-extrabold underline italic mt-3"
          style={{ fontFamily: 'EB Garamond, serif', lineHeight: '1.4' }}
        >
          We would love to hear from you
        </p>
      </div>

      {/* Mission Statement */}
      <div className="max-w-6xl mx-auto mb-12 md:mb-16">
        <p 
          className="text-[background: #0D0D0D] text-xl md:text-2xl lg:text-3xl italic text-center leading-relaxed"
          style={{ 
            fontFamily: 'Open Sans, sans-serif',
            letterSpacing: '0.06em',
            lineHeight: '1.8'
          }}
        >
          Welcome to the Igati/MUST One Million Bee Initiative—where research, 
          innovation, and enterprise in apiculture empower communities through 
          faith, sustainability, and social innovation for lasting change.
        </p>
      </div>

      {/* Contact Cards Section */}
      <SectionContainer className="mb-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center flex-wrap">
          {contactData.map((item, index) => (
            <ContactCard
              key={index}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              title={item.title}
              contact={item.contact}
              bgColor="bg-[#D9D9D9]"
              imageClassName={item.imageClassName}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default Contact;