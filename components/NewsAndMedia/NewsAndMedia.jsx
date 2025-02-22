"use client";
import React from 'react';
import Link from 'next/link';

const NewsMedia = () => {
  const news = [
    {
      date: 'January 9, 2025',
      title: 'Waylead 2024 Workers’ Retreat: Building Team Spirit and Celebrating Success',
      link: '#',
    },
    {
      date: 'October 31, 2024',
      title: 'Waylead Properties Unveil “Willow Lane” Our Latest Housing Project.',
      link: '#',
    },
    {
      date: 'October 23, 2024',
      title: 'Alphabet City: From Phase 1 Success to Phase 2 Evolution',
      link: '#',
    },
  ];

  return (
    <section className="bg-[#FDF6EB] py-12 px-6 md:px-24"> 
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-[#1A293F] mb-6">News & Media</h1>
        <hr className="border-t border-[#D8B98C] w-full mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
          {news.map((item, index) => (
            <div key={index} className="bg-[#FAEEDC] p-6 rounded-lg shadow-md">
              <p className="text-[#B38E54] font-bold mb-2">{item.date}</p>
              <h3 className="text-[#1A293F] text-lg font-semibold mb-4">{item.title}</h3>
              <Link href={item.link}>
                <button className="border border-[#B38E54] text-[#B38E54] hover:bg-[#B38E54] hover:text-white font-semibold py-2 px-4 rounded-md transition duration-300">
                  Read More &#8250;
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsMedia;
