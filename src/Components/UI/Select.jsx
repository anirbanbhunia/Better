import React, { useState } from 'react';

export const Select = ({ value, onValueChange, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (optionValue) => {
    onValueChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <div
        onClick={toggleDropdown}
        className="cursor-pointer py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 flex justify-between items-center"
      >
        <span>{value || 'Select an option'}</span>
        <span className={`ml-2 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}>
          ▼
        </span>
      </div>
      {isOpen && (
        <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              onClick: () => handleOptionClick(child.props.value),
            });
          })}
        </div>
      )}
    </div>
  );
};

export const SelectTrigger = ({ children }) => {
  return <>{children}</>;
};

export const SelectContent = ({ children }) => {
  return <>{children}</>;
};

export const SelectItem = ({ value, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="py-2 px-4 hover:bg-blue-500 hover:text-white cursor-pointer"
    >
      {children}
    </div>
  );
};

export const SelectValue = ({ placeholder }) => {
  return <span>{placeholder}</span>;
};

