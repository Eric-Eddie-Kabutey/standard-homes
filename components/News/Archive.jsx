"use client";

import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { newsData } from "@/constants/arraydata";

const Archive = () => {
  const archiveTabs = Object.keys(newsData);
  const [selectedTab, setSelectedTab] = useState(archiveTabs[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNews, setFilteredNews] = useState(newsData[selectedTab]);

  useEffect(() => {
    if (searchQuery) {
      let foundTab = null;
      Object.keys(newsData).forEach((tab) => {
        const matches = newsData[tab].filter((news) =>
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
  const totalNewsCount = Object.values(newsData).reduce(
    (sum, newsArray) => sum + newsArray.length,
    0
  );

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
              <h3 className="text-[1.6rem] font-bold text-[#B78C4C]">
                {news.title}
              </h3>
              <p className="text-lg text-gray-500 italic mb-6">{news.date}</p>
              <p className="mt-2 mb-8 text-[1.1rem] text-[#334E63]">
                {" "}
                {news.description.length > 400
                  ? `${news.description.slice(0, 400)}...`
                  : news.description}
              </p>
              <Drawer>
                <DrawerTrigger className="text-[#B78C4C] border border-[#B78C4C] px-8 py-2 font-medium rounded hover:bg-[#666666] hover:border-[#666666] hover:text-slate-100 transition-all duration-500 ease-in-out">
                  Read More
                </DrawerTrigger>
                <DrawerContent>
                  <div className="flex flex-col overflow-y-auto h-[60vh] pb-2 border-b border-slate-400 mx-[6%]">
                    <h3 className="text-[1.6rem] font-bold text-[#B78C4C]">
                      {news.title}
                    </h3>
                    <p className="text-lg text-gray-500 italic mb-6">
                      {news.date}
                    </p>
                    <p className="mt-2 mb-8 text-[1.1rem] text-[#334E63]">
                      {news.description}
                    </p>
                    {news.images && news.images.length > 0 && (
                      <div className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {news.images.map((image, idx) => (
                            <img
                              key={idx}
                              src={image}
                              alt={`News Image ${idx + 1}`}
                              className="w-full h-[300px] max-h-[350px] min-h-[200px] object-cover cursor-pointer rounded-lg"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <DrawerClose>
                    <Button
                      className="text-[#B78C4C] border border-[#B78C4C] px-8 py-2 font-medium rounded hover:bg-[#666666] hover:border-[#666666] hover:text-slate-100 transition-all duration-500 ease-in-out my-1"
                      variant="outline"
                    >
                      Close
                    </Button>
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
              className={`cursor-pointer mb-2 font-bold text-[1.09rem] rounded ${
                selectedTab === tab
                  ? "text-[#334E63] font-bold"
                  : "text-[#B78C4C]"
              }`}
              onClick={() => {
                setSelectedTab(tab);
                setSearchQuery("");
              }}
            >
              {tab}
            </li>
          ))}
        </ul>
        <h3 className="text-[1.4rem]  text-[#334E63] mt-10 mb-3">Categories</h3>
        <h3 className="text-[1.3rem] font-semibold  text-[#B78C4C] mt-2">
          News{" "}
          <span className="font-normal text-[1.09rem] text-[#334E63]">
            ({totalNewsCount})
          </span>
        </h3>
      </aside>
    </div>
  );
};

export default Archive;
