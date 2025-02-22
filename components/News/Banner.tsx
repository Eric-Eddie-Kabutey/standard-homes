import React from "react";

const NewsBanner = ({ title }: { title: string }) => {
  return (
    <div className="w-full border-b border-slate-200 bg-gradient-to-b from-white via-[#fff] to-[#F2ECE4] h-[23vh] flex items-end">
      <p className="mb-10 text-5xl font-extralight md:pl-[7%] text-[#1A3850]">
        {title}
      </p>
    </div>
  );
};

export default NewsBanner;
