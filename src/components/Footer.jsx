// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white p-8 flex flex-col md:flex-row justify-between items-center">
      <div className="flex-1 mb-4 md:mb-0">
        <h2 className="text-3xl font-bold">J-QUBE</h2>
        <p className="text-base">Empowering Future Leaders</p>
      </div>
      <div className="flex-1 flex gap-20 justify-center mb-4 md:mb-0">
        <div>
          <h3 className="font-bold text-lg">More</h3>
          <a href="#projects" className="block text-base hover:text-yellow-400">Projects</a>
          <a href="#events" className="block text-base hover:text-yellow-400">Events</a>
          <a href="#donate" className="block text-base hover:text-yellow-400">Donate</a>
          <a href="#blog" className="block text-base hover:text-yellow-400">Blog</a>
        </div>
        <div className="ml-16"> {/* Increased margin to separate More and Connect sections */}
          <h3 className="font-bold text-lg">Connect</h3>
          <div className="flex items-center mb-2">
            <FaFacebook className="mr-2" /> {/* Facebook icon */}
            <a href="#facebook" className="text-base hover:text-yellow-400">Facebook</a>
          </div>
          <div className="flex items-center mb-2">
            <FaInstagram className="mr-2" /> {/* Instagram icon */}
            <a href="#instagram" className="text-base hover:text-yellow-400">Instagram</a>
          </div>
          <div className="flex items-center mb-2">
            <FaTwitter className="mr-2" /> {/* Twitter icon */}
            <a href="#twitter" className="text-base hover:text-yellow-400">Twitter</a>
          </div>
          <div className="flex items-center mb-2">
            <FaLinkedin className="mr-2" /> {/* LinkedIn icon */}
            <a href="#linkedin" className="text-base hover:text-yellow-400">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center md:items-end">
        <p className="mb-2">Subscribe to get latest updates</p>
        <div className="flex items-center">
          <input 
            type="email" 
            placeholder="Your email" 
            className="p-2 rounded-md mr-2 border-none" 
          />
          <button className="bg-yellow-400 text-black p-2 rounded-2xl font-bold cursor-pointer hover:bg-yellow-500">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
