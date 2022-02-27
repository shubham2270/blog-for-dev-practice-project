import React from "react";

const Footer = () => {
  return (
    <footer className='px-4 sm:px-6 mt24'>
      <p className='text-center text-sm text-gray-500'>
        {new Date().getFullYear} AlterClass. Al rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
