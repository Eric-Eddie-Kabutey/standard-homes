"use client";
import Link from "next/link";
import React from "react";

const JoinMessage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8 rounded-lg p-4 md:p-8 m-4 md:m-16 w-full md:w-1/2 bg-[#666666]">
        <h2 className="text-xl md:text-3xl text-white">Join the Standard Homes Family</h2>
        <p className="text-center text-white font-semibold text-base md:text-lg">
        As we move forward, we invite you to join us on a journey of exceptional living. Whether you’re looking for a peaceful family home, a smart investment, or a top-quality commercial space, we’ve got the perfect solution for you.
        </p>
        <Link href="#" className="px-7 py-3 bg-white rounded-md">Inquire</Link>
      </div>
    </div>
  );
};

export default JoinMessage;