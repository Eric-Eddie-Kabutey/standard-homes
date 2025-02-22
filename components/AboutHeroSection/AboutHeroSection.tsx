"use client";
import React from 'react';

const AboutHeroSection = () => {
  return (
    <div
      className='bg-white px-14 pb-8 pt-20 border-b border-[#b3c1cc] relative'
      style={{
        boxShadow: 'inset 0 -60px 60px -20px rgba(0, 0, 0, 0.1)', // Inner shadow from bottom to top
      }}
    >
      <h1 className='text-5xl text-[#1A3850] font-thin'>About</h1>
    </div>
  );
};

export default AboutHeroSection;