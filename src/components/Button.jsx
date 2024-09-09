import React from 'react';

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {  // Added fullWidth to destructured props
  return (
    <button 
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red rounded-full text-white border-coral-red'} 
      ${fullWidth ? 'w-full' : ''} rounded-full`}>
      {label} {/* Render the label text */}
      {iconURL && (
        <img 
          src={iconURL} 
          alt="arrow right icon" 
          className="ml-2 rounded-full w-5 h-5" 
        />
      )} {/* Conditionally render the icon if the iconURL is passed */}
    </button>
  );
};

export default Button;
