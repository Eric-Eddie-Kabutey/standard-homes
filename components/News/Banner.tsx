import React from "react";

const NewsBanner = ({ title }: { title: string }) => {
  return (
    <div className="border-b border-slate-200 bg-gradient-to-b from-white via-[#fff] to-[#F2ECE4] h-[28vh] lg:h-[50vh] 2xl:h-[35vh] flex items-end mb-10">
      <div className="w-full max-w-[1230px] 2xl:max-w-[1390px] mx-auto px-4 pb-6">
        <p className="text-5xl font-extralight  text-[#1A3850]">
          {title}
        </p>        
      </div>
    </div>
  );
};

export default NewsBanner;
