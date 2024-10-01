// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 flex justify-between items-center">
      <div className="flex-1">
        <h2 className="text-xl font-bold">J-QUBE</h2>
        <p>Empowering Future Leaders</p>
      </div>
      <div className="flex-1 flex gap-4 justify-center">
        <a href="#home" className="text-white text-base hover:text-yellow-400">Home</a>
        <a href="#about" className="text-white text-base hover:text-yellow-400">About Us</a>
        <a href="#services" className="text-white text-base hover:text-yellow-400">Services</a>
        <a href="#projects" className="text-white text-base hover:text-yellow-400">Projects</a>
      </div>
      <div className="flex-1 flex justify-end items-center">
        <input 
          type="email" 
          placeholder="Search for more" 
          className="p-2 rounded-md mr-2 border-none"
        />
        <div className="hidden md:flex">
  <p className="pl-10">Subscribe for updates</p>
</div>

        <button className="bg-yellow-400 text-black p-2 rounded-2xl font-bold cursor-pointer hover:bg-yellow-500">
  Subscribe
</button>

      </div>
    </footer>
  );
};

export default Footer;