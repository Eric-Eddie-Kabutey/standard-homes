import React from "react";

const JoinMessage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8 rounded-lg p-4 md:p-8 m-4 md:m-16 w-full md:w-1/2 bg-[#666666]">
        <h2 className="text-xl md:text-3xl text-white">Join the Waylead Family</h2>
        <p className="text-center text-white font-semibold text-base md:text-lg">
          As we continue to forge ahead, we invite you to embark on a journey of
          extraordinary living with Waylead. Whether you seek a serene family
          abode, an investment opportunity, or a premium commercial space, we
          have the perfect solution for you.
        </p>
        <p className="text-center text-white font-semibold text-base md:text-lg">
          Thank you for considering Waylead. Together, let’s create a future of
          unparalleled possibilities in the realm of real estate.
        </p>
        <p className="font-bold text-white text-base md:text-lg">Welcome home to Waylead.</p>
      </div>
    </div>
  );
};

export default JoinMessage;