import React from 'react';

export interface ContactCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  contact: string;
  bgColor?: string;
  imageClassName?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ 
  imageSrc,
  imageAlt,
  title, 
  contact, 
  bgColor = "bg-gray-200",
  imageClassName = "w-[90px] h-[90px] object-contain"
}) => {
  // Determine card type based on imageAlt
  const isEmailCard = imageAlt.toLowerCase().includes('email');
  const isWhatsAppCard = imageAlt.toLowerCase().includes('whatsapp');
  const isPhoneCard = imageAlt.toLowerCase().includes('phone');
  
  // Dynamic text styling based on card type
  const contactTextClass = isEmailCard 
    ? "text-[#121907] text-lg md:text-2xl lg:text-3xl font-medium italic text-center break-words overflow-wrap-anywhere px-4 w-full"
    : "text-[#121907] text-2xl md:text-4xl lg:text-5xl font-extrabold text-center break-words px-4 w-full";
  
  const contactTextStyle = isEmailCard
    ? { fontFamily: 'Open Sans, sans-serif', wordBreak: 'break-word' as const, overflowWrap: 'anywhere' as const }
    : { fontFamily: 'EB Garamond, serif' };

  // Handle click based on card type
  const handleClick = () => {
    if (isPhoneCard) {
      // Open phone dialer
      window.location.href = `tel:${contact}`;
    } else if (isWhatsAppCard) {
      // Open WhatsApp with the phone number
      // Remove any spaces or special characters from the number
      const cleanNumber = contact.replace(/\s+/g, '');
      window.open(`https://wa.me/${cleanNumber}`, '_blank');
    } else if (isEmailCard) {
      // Open email client
      window.location.href = `mailto:${contact}`;
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`${bgColor} rounded-[79px] p-8 flex flex-col items-center justify-center min-h-[450px] w-full md:w-[371px] shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-opacity-95 cursor-pointer`}
    >
      <div className="mb-6 transition-transform duration-300 hover:scale-110">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className={imageClassName}
        />
      </div>
      <h3 
        className="text-[#121907] text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-4 px-2" 
        style={{ fontFamily: 'EB Garamond, serif' }}
      >
        {title}
      </h3>
      <p 
        className={contactTextClass}
        style={contactTextStyle}
      >
        {contact}
      </p>
    </div>
  );
};

export default ContactCard;