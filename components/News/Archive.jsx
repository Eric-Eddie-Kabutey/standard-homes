'use client';

import { useState, useEffect } from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '../ui/button';


const newsData = {
    'January 2025': [
        {
            "title": "Waylead 2024 Workers’ Retreat: Building Team Spirit and Celebrating Success",
            "date": "January 9, 2025",
            "description": "A Day of Fun, Bonding, and Motivation. On Saturday, 4th January 2025, the staff of Waylead Properties embarked on a much-anticipated Workers’ Retreat at the Ocean Green Resort in Prampram. This annual event brought together our entire team for a day filled with exciting activities, meaningful interactions, and reflections on the journey ahead. The retreat kicked off with an inspiring speech from our CEO, emphasizing the company’s vision and the vital role each employee plays in its success. The morning sessions featured team-building exercises designed to enhance collaboration, communication, and problem-solving skills. Employees engaged in friendly competitions, outdoor games, and trust-building exercises that strengthened workplace relationships. In the afternoon, we hosted an open discussion session where employees shared their personal and professional growth experiences at Waylead. This was followed by an engaging leadership workshop, where industry experts provided valuable insights on career development and teamwork. To wrap up the day, we celebrated our achievements with a special awards ceremony, recognizing outstanding employees for their dedication and hard work. The evening concluded with a delightful dinner, live music, and a bonfire, allowing everyone to unwind, socialize, and create lasting memories.The retreat was a remarkable experience that left everyone feeling refreshed, motivated, and ready to take on new challenges in 2025!",
            "images": [
                "https://waylead.org/news/wp-content/uploads/2024/10/13-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/8-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/7-768x432.jpg"
            ] 
        },
        {
            "title": "Waylead Expands Its Housing Projects in Accra",
            "date": "January 15, 2025",
            "description": "Waylead Properties is proud to announce the expansion of its residential housing projects in Accra, marking a significant milestone in our commitment to providing high-quality housing solutions. As the demand for modern and affordable homes continues to rise, we are dedicated to bridging the gap by developing thoughtfully designed residential communities that cater to the needs of families, professionals, and individuals seeking comfort, security, and convenience. Our new developments will feature state-of-the-art amenities, including well-planned road networks, recreational facilities, green spaces, and energy-efficient designs. By incorporating eco-friendly building materials and sustainable construction practices, we aim to promote a healthier living environment while reducing our ecological footprint. At Waylead Properties, we believe that a home is more than just a place to live—it is a foundation for a better quality of life. This expansion reaffirms our commitment to fostering vibrant, inclusive communities where residents can thrive. Whether you are a first-time homebuyer or looking for an upgrade, our new housing projects in Accra offer the perfect blend of modernity, affordability, and sustainability. Stay tuned for more updates as we continue to transform the real estate landscape in Accra, creating homes that are not only beautiful but also built for the future.",
            "images": [
                "https://waylead.org/news/wp-content/uploads/2024/10/13-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/8-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/7-768x432.jpg"
            ] 
        },
    ],
    'February 2025': [
        {
            "title": "Waylead Celebrates Black History Month with Community Events",
            "date": "February 5, 2025",
            "description": "As the demand for modern and affordable homes continues to rise, we are dedicated to bridging the gap by developing thoughtfully designed residential communities that cater to the needs of families, professionals, and individuals seeking comfort, security, and convenience. Our new developments will feature state-of-the-art amenities, including well-planned road networks, recreational facilities, green spaces, and energy-efficient designs. By incorporating eco-friendly building materials and sustainable construction practices, we aim to promote a healthier living environment while reducing our ecological footprint. At Waylead Properties, we believe that a home is more than just a place to live—it is a foundation for a better quality of life. This expansion reaffirms our commitment to fostering vibrant, inclusive communities where residents can thrive. Whether you are a first-time homebuyer or looking for an upgrade, our new housing projects in Accra offer the perfect blend of modernity, affordability, and sustainability. Stay tuned for more updates as we continue to transform the real estate landscape in Accra, creating homes that are not only beautiful but also built for the future. Waylead Properties is proud to announce the expansion of its residential housing projects in Accra, marking a significant milestone in our commitment to providing high-quality housing solutions.",
            "images": [
                "https://waylead.org/news/wp-content/uploads/2024/10/7-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/13-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/8-768x432.jpg",
            ] 
        },
        {
            "title": "Waylead Launches New Website Features",
            "date": "February 10, 2025",
            "description": "Dedicated to bridging the gap by developing thoughtfully designed residential communities that cater to the needs of families, professionals, and individuals seeking comfort, security, and convenience. Our new developments will feature state-of-the-art amenities, including well-planned road networks, recreational facilities, green spaces, and energy-efficient designs. By incorporating eco-friendly building materials and sustainable construction practices, we aim to promote a healthier living environment while reducing our ecological footprint. At Waylead Properties, we believe that a home is more than just a place to live—it is a foundation for a better quality of life. This expansion reaffirms our commitment to fostering vibrant, inclusive communities where residents can thrive. Whether you are a first-time homebuyer or looking for an upgrade, our new housing projects in Accra offer the perfect blend of modernity, affordability, and sustainability. Stay tuned for more updates as we continue to transform the real estate landscape in Accra, creating homes that are not only beautiful but also built for the future. Waylead Properties is proud to As the demand for modern and affordable homes continues to rise, we are announce the expansion of its residential housing projects in Accra, marking a significant milestone in our commitment to providing high-quality housing solutions.",
            "images": [
                "https://waylead.org/news/wp-content/uploads/2024/10/13-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/8-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/7-768x432.jpg"
            ] 
        },
    ],
    'March 2025': [
        {
            "title": "Waylead Launches New Eco-Friendly Housing Project",
            "date": "March 10, 2025",
            "description": "In line with our commitment to sustainability, Waylead Properties is excited to announce the launch of a new eco-friendly housing project in Accra. Waylead Properties is proud to announce the expansion of its residential housing projects in Accra, marking a significant milestone in our commitment to providing high-quality housing solutions. As the demand for modern and affordable homes continues to rise, we are dedicated to bridging the gap by developing thoughtfully designed residential communities that cater to the needs of families, professionals, and individuals seeking comfort, security, and convenience. At Waylead Properties, we believe that a home is more than just a place to live—it is a foundation for a better quality of life. This expansion reaffirms our commitment to fostering vibrant, inclusive communities where residents can thrive. Whether you are a first-time homebuyer or looking for an upgrade, our new housing projects in Accra offer the perfect blend of modernity, affordability, and sustainability.",
            "images": [
                "https://waylead.org/news/wp-content/uploads/2024/10/7-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/8-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/7-768x432.jpg"
            ] 
        },
        {
            "title": "Waylead Hosts International Women's Day Celebration",
            "date": "March 8, 2025",
            "description": "At Waylead Properties, we believe that a home is more than just a place to live—it is a foundation for a better quality of life. This expansion reaffirms our commitment to fostering vibrant, inclusive communities where residents can thrive. Whether you are a first-time homebuyer or looking for an upgrade, our new housing projects in Accra offer the perfect blend of modernity, affordability, and sustainability. To honor International Women’s Day, Waylead Properties is hosting a celebration featuring guest speakers, workshops, and networking opportunities for women in the community. Our new developments will feature state-of-the-art amenities, including well-planned road networks, recreational facilities, green spaces, and energy-efficient designs. By incorporating eco-friendly building materials and sustainable construction practices, we aim to promote a healthier living environment while reducing our ecological footprint.",
            "images": [
                "https://waylead.org/news/wp-content/uploads/2024/10/13-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/7-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/7-768x432.jpg"
            ] 
        },
    ],
    'April 2025': [
        {
            "title": "Waylead Hosts Annual Spring Community Clean-Up",
            "date": "April 15, 2025",
            "description": "Our new developments will feature state-of-the-art amenities, including well-planned road networks, recreational facilities, green spaces, and energy-efficient designs. By incorporating eco-friendly building materials and sustainable construction practices, we aim to promote a healthier living environment while reducing our ecological footprint. Waylead Properties invites community members to join our Annual Spring Clean-Up on April 20, 2025, focusing on cleaning local parks and public spaces. At Waylead Properties, we believe that a home is more than just a place to live—it is a foundation for a better quality of life. This expansion reaffirms our commitment to fostering vibrant, inclusive communities where residents can thrive. Whether you are a first-time homebuyer or looking for an upgrade, our new housing projects in Accra offer the perfect blend of modernity, affordability, and sustainability.",
            "images": [
                "https://waylead.org/news/wp-content/uploads/2024/10/13-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/13-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/7-768x432.jpg"
            ] 
        },
        {
            "title": "Waylead Expands Employee Training Programs",
            "date": "April 10, 2025",
            "description": "At Waylead Properties, we believe that a home is more than just a place to live—it is a foundation for a better quality of life. This expansion reaffirms our commitment to fostering vibrant, inclusive communities where residents can thrive. Whether you are a first-time homebuyer or looking for an upgrade, our new housing projects in Accra offer the perfect blend of modernity, affordability, and sustainability. Waylead Properties is expanding its employee training programs to include more skill development opportunities, ensuring our team stays ahead in the industry. Stay tuned for more updates as we continue to transform the real estate landscape in Accra, creating homes that are not only beautiful but also built for the future.",
            "images": [
                "https://waylead.org/news/wp-content/uploads/2024/10/7-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/13-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/8-768x432.jpg"
            ] 
        }
    ],
    'May 2025': [
        {
            "title": "Waylead Unveils New Corporate Headquarters",
            "date": "May 22, 2025",
            "description": "Stay tuned for more updates as we continue to transform the real estate landscape in Accra, creating homes that are not only beautiful but also built for the future. Waylead Properties proudly unveils its new corporate headquarters in Accra, featuring state-of-the-art facilities and a modern design. Our new developments will feature state-of-the-art amenities, including well-planned road networks, recreational facilities, green spaces, and energy-efficient designs. By incorporating eco-friendly building materials and sustainable construction practices, we aim to promote a healthier living environment while reducing our ecological footprint.",
            "images": [
                "https://waylead.org/news/wp-content/uploads/2024/10/8-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/13-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/7-768x432.jpg"
            ] 
        },
        {
            "title": "Waylead Hosts Real Estate Investment Seminar",
            "date": "May 10, 2025",
            "description": "Our new developments will feature state-of-the-art amenities, including well-planned road networks, recreational facilities, green spaces, and energy-efficient designs. By incorporating eco-friendly building materials and sustainable construction practices, we aim to promote a healthier living environment while reducing our ecological footprint. Waylead Properties is hosting a Real Estate Investment Seminar to educate potential investors about opportunities in the real estate market. Waylead Properties is proud to announce the expansion of its residential housing projects in Accra, marking a significant milestone in our commitment to providing high-quality housing solutions. As the demand for modern and affordable homes continues to rise, we are dedicated to bridging the gap by developing thoughtfully designed residential communities that cater to the needs of families, professionals, and individuals seeking comfort, security, and convenience.",
            "images": [
                "https://waylead.org/news/wp-content/uploads/2024/10/13-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/8-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/13-768x432.jpg"
            ] 
        }
    ],
    'June 2025': [
        {
            "title": "Waylead Partners with Schools for Educational Programs",
            "date": "June 12, 2025",
            "description": "Waylead Properties is proud to announce the expansion of its residential housing projects in Accra, marking a significant milestone in our commitment to providing high-quality housing solutions. As the demand for modern and affordable homes continues to rise, we are dedicated to bridging the gap by developing thoughtfully designed residential communities that cater to the needs of families, professionals, and individuals seeking comfort, security, and convenience. Stay tuned for more updates as we continue to transform the real estate landscape in Accra, creating homes that are not only beautiful but also built for the future. Waylead Properties has partnered with several schools to provide educational programs and resources, enhancing learning experiences for students.",
            "images": [
                "https://waylead.org/news/wp-content/uploads/2024/10/7-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/13-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/8-768x432.jpg"
            ] 
        },
        {
            "title": "Waylead Hosts Summer Youth Program",
            "date": "June 20, 2025",
            "description": "Stay tuned for more updates as we continue to transform the real estate landscape in Accra, creating homes that are not only beautiful but also built for the future. Waylead Properties is launching a Summer Youth Program that offers mentorship, workshops, and activities for young people in the community. Stay tuned for more updates as we continue to transform the real estate landscape in Accra, creating homes that are not only beautiful but also built for the future.",
            "images": [
                "https://waylead.org/news/wp-content/uploads/2024/10/8-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/13-768x432.jpg",
                "https://waylead.org/news/wp-content/uploads/2024/10/7-768x432.jpg"
            ] 
        }
    ]
};

const Archive = () => {
    const archiveTabs = Object.keys(newsData);
    const [selectedTab, setSelectedTab] = useState(archiveTabs[0]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredNews, setFilteredNews] = useState(newsData[selectedTab]);

    useEffect(() => {
        if (searchQuery) {
            let foundTab = null;
            Object.keys(newsData).forEach((tab) => {
                const matches = newsData[tab].filter(news =>
                    news.title.toLowerCase().includes(searchQuery.toLowerCase())
                );
                if (matches.length > 0 && !foundTab) {
                    foundTab = tab;
                    setFilteredNews(matches);
                    setSelectedTab(tab);
                }
            });
            if (!foundTab) setFilteredNews([]);
        } else {
            setFilteredNews(newsData[selectedTab]);
        }
    }, [searchQuery, selectedTab]);
    const totalNewsCount = Object.values(newsData).reduce((sum, newsArray) => sum + newsArray.length, 0);

    return (
        <div className="mt-6 flex flex-col md:flex-row gap-[10%] p-6 md:max-w-[90%] mx-auto">
            <div className="w-full md:w-3/4">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-2">
                    <h2 className="text-[#1A3850] text-[2.2rem] font-extralight mb-4">
                        Archive for {selectedTab}
                    </h2>
                    <div className="border-b border-dashed border-slate-400 flex-1"></div>
                </div>
                {filteredNews.length > 0 ? (
                    filteredNews.map((news, index) => (
                        <div key={index} className="pb-7 border-b border-slate-400 mb-8">
                            <h3 className="text-[1.6rem] font-bold text-[#B78C4C]">{news.title}</h3>
                            <p className="text-lg text-gray-500 italic mb-6">{news.date}</p>
                            <p className="mt-2 mb-8 text-[1.1rem] text-[#334E63]"> {news.description.length > 400 ? `${news.description.slice(0, 400)}...` : news.description}</p>
                            <Drawer>
                                <DrawerTrigger className='text-[#B78C4C] border border-[#B78C4C] px-8 py-2 font-medium rounded hover:bg-[#666666] hover:border-[#666666] hover:text-slate-100 transition-all duration-500 ease-in-out'>Read More</DrawerTrigger>
                                <DrawerContent>
                                    <div className="flex flex-col overflow-y-auto h-[60vh] pb-2 border-b border-slate-400 mx-[6%]">
                                        <h3 className="text-[1.6rem] font-bold text-[#B78C4C]">{news.title}</h3>
                                        <p className="text-lg text-gray-500 italic mb-6">{news.date}</p>
                                        <p className="mt-2 mb-8 text-[1.1rem] text-[#334E63]">{news.description}</p>
                                        {news.images && news.images.length > 0 && (
                                            <div className="mt-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                    {news.images.map((image, idx) => (
                                                        <img key={idx} src={image} alt={`News Image ${idx + 1}`} className="w-full h-auto cursor-pointer rounded-lg" />
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <DrawerClose>
                                        <Button className='text-[#B78C4C] border border-[#B78C4C] px-8 py-2 font-medium rounded hover:bg-[#666666] hover:border-[#666666] hover:text-slate-100 transition-all duration-500 ease-in-out my-1' variant="outline">Close</Button>
                                    </DrawerClose>
                                </DrawerContent>
                            </Drawer>
                        </div>
                    ))
                ) : (
                    <p className="text-[#334E63] text-[1.6rem]">No results found.</p>
                )}
            </div>
            <aside className="w-full md:w-1/4 bg-[#FDFBF9] p-4 shadow-sm  rounded-lg self-start pb-[5%]">
                <input
                    type="text"
                    placeholder="Enter Keywords"
                    className="placeholder-[#334E63] placeholder:text-lg w-full p-2 mb-3 border-b border-[#B78C4C] rounded"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <h3 className="text-[1.5rem]  text-[#334E63] mt-10 mb-3">Archives</h3>
                <ul>
                    {archiveTabs.map((tab) => (
                        <li
                            key={tab}
                            className={`cursor-pointer mb-2 font-bold text-[1.09rem] rounded ${selectedTab === tab ? 'text-[#334E63] font-bold' : 'text-[#B78C4C]'}`}
                            onClick={() => {
                                setSelectedTab(tab);
                                setSearchQuery('');
                            }}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>
                <h3 className="text-[1.4rem]  text-[#334E63] mt-10 mb-3">Categories</h3>
                <h3 className="text-[1.3rem] font-semibold  text-[#B78C4C] mt-2">News <span className='font-normal text-[1.09rem] text-[#334E63]'>({totalNewsCount})</span></h3>
            </aside>
        </div>
    );
};

export default Archive;
