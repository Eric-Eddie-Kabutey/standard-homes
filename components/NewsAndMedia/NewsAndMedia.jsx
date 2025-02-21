import React from 'react';

const NewsAndMedia = () => {
  const newsItems = [
    {
      date: 'January 9, 2025',
      title: "Waylead 2024 Workers' Retreat: Building Team Spirit and Celebrating Success",
      link: '/news/retreat', // Replace with your link
    },
    {
      date: 'October 31, 2024',
      title: 'Waylead Properties Unveil "Willow Lane" Our Latest Housing Project.',
      link: '/news/willow-lane', // Replace with your link
    },
    {
      date: 'October 23, 2024',
      title: 'Alphabet City: From Phase 1 Success to Phase 2 Evolution',
      link: '/news/alphabet-city', // Replace with your link
    },
  ];

  return (
    <section className="bg-[#F5F5F5] py-12 px-6 md:px-24"> {/* Light gray background */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">News & Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Grid layout */}
          {newsItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 ${
                index === 1 ? 'md:bg-[#242F3F] md:text-white' : '' // Blue background for the second card
              }`}
            >
              <p className="text-lg mb-2">{item.date}</p>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <a
                href={item.link}
                className="text-[#A7795D] hover:underline" // Brown link color
              >
                Read More 
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndMedia;