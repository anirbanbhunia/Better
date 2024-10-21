import React from 'react';

const Button = ({ children, onClick, variant = 'default', className }) => {
  const baseStyles = 'py-2 px-4 rounded-md focus:outline-none transition duration-200';
  
  const variants = {
    default: 'bg-green-600 text-white hover:bg-green-900',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
  };

  return (
    <button
      onClick={variant !== 'disabled' ? onClick : null}
      className={`${baseStyles} ${variants[variant]} ${className} `}
      disabled={variant === 'disabled'}
    >
      {children}
    </button>
  );
};

export default Button;