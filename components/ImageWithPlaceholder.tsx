
import React, { useState } from 'react';

interface ImageWithPlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "" 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#F1EFEC] ${containerClassName}`}>
      {/* Soft brand-colored placeholder that fades out when image loads */}
      <div 
        className={`absolute inset-0 bg-[#E5E1DD] transition-opacity duration-1000 ease-in-out ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`transition-all duration-[1500ms] ease-in-out ${className} ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
        }`}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWithPlaceholder;
