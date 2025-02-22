"use client";
import { motion } from "framer-motion";

export default function PropertyOptions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative -mt-16 flex flex-col items-center justify-center  bg-[#A7795D] p-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 -mt-[100px] max-w-2xl w-full"
      >
        <OptionCard
          title="Do you own a property?"
          buttonText="List Property"
          buttonColor="[#0F2A3C]"
        />
        <OptionCard
          title="Do you need an Apartment?"
          buttonText="Book a Stay"
          buttonColor="[#B58541]"
        />
      </motion.div>
    </motion.div>
  );
}

function OptionCard({ title, buttonText, buttonColor }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      variants={cardVariants}
      className="group relative"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="bg-slate-300 shadow-md rounded-lg p-8 flex flex-col items-center">
        <h2 className="text-lg font-light mb-4">{title}</h2>
        <button
          className={`bg-${buttonColor} text-white px-6 py-3 rounded-md text-lg font-serif hover:bg-[#057A55] transition`}
        >
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
}
