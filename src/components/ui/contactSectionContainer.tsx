import React, { type ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`bg-[#111405] border border-[#141708] rounded-[90px] opacity-80 p-8 md:p-12 ${className}`}>
      {children}
    </div>
  );
};

export default SectionContainer;