import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='w-full py-3 bg-gray-800 text-gray-200 border-t border-gray-700 flex items-center justify-center text-sm'>
      <div className='max-w-4xl px-4 text-center'>
        <div>
          Created for examination L3 in the course 1DV610 @ Linnaeus University
        </div>
        <div className='mt-1'>© {year} Andreas Eriksson</div>
      </div>
    </footer>
  );
};

export default Footer;
