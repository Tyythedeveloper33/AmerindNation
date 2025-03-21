import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2F6368] text-white py-4 text-center">
      <div className="container mx-auto">
        <p className="mb-2">&copy; Amerind Nation. All rights Reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link to="/privacy" className="hover:underline">Privacy</Link>
          <Link to="/terms" className="hover:underline">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
