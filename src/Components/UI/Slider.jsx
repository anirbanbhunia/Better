import React from 'react';

const Slider = ({ value, onValueChange, min = 0, max = 100, step = 1, className }) => {
  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    onValueChange([newValue]); // assuming value is an array
  };

  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[0]} // get the first value from the array
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="ml-4 text-gray-700">{value[0]}</div>
    </div>
  );
};

export default Slider;