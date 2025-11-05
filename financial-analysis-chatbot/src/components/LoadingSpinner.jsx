import React from 'react';

const LoadingSpinner = ({ size = 'md', color = 'primary' }) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };
  
  const colors = {
    primary: 'border-blue-600',
    white: 'border-white',
    gray: 'border-gray-600',
  };
  
  return (
    <div className="flex justify-center items-center">
      <div 
        className={`
          ${sizes[size]} 
          border-4 ${colors[color]} border-t-transparent
          rounded-full animate-spin
        `}
      />
    </div>
  );
};

export default LoadingSpinner;
