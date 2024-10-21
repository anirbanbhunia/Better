import React from 'react';

const Input = ({ type = 'text', value, onChange, placeholder, className, id }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      className={`border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 p-2 ${className}`}
    />
  );
};

export default Input;