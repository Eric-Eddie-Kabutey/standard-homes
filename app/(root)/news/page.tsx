import React from "react";
import Archive from "@/components//News/Archive";
import NewsBanner from "@/components/News/Banner";

const page = () => {
  return (
    <div>
      <NewsBanner title="News" />
      <Archive />
    </div>
  );
};

export default page;
