import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-4 text-sm">
      <p>&copy; {new Date().getFullYear()} Thomas Faulds. All rights reserved.</p>
    </footer>
  );
};

export default Footer;