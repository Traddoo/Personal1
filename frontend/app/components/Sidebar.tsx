import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 bottom-0 w-16 m-0 flex flex-col items-center">
      <div className="flex flex-col space-y-4 mb-4">
        <a href="https://github.com/Traddoo" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-white transition-colors">
          <FaGithub size={20} />
        </a>
        <a href="https://twitter.com/TraddooThomas" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-white transition-colors">
          <FaTwitter size={20} />
        </a>
        <a href="https://www.linkedin.com/in/thomas-faulds-50b1b5265" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-white transition-colors">
          <FaLinkedin size={20} />
        </a>
        <a href="mailto:McMahan@traddoo.com" className="text-teal hover:text-white transition-colors">
          <MdEmail size={20} />
        </a>
      </div>
      <div className="w-px h-24 bg-teal"></div>
    </div>
  );
};

export default Sidebar;