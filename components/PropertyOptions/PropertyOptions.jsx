"use client";
import { motion } from "framer-motion";
import Link from "next/link";

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
      className="relative -mt-16 flex flex-col items-center justify-center p-10  bg-[#A7795D] md:p-20"
    >
      <div className="flex space-x-4 -mt-16">
        <Link
          href="#"
          className="px-6 py-3 text-nowrap bg-[#0F2A3C] text-white rounded-lg shadow font-semibold hover:bg-blue-700"
        >
          List Property
        </Link>
        <Link
          href="/inquire"
          className="px-8 py-3 text-nowrap bg-[#B58541] font-semibold text-white rounded-lg shadow hover:bg-green-700"
        >
          Book Stay
        </Link>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 -mt-[100px] max-w-2xl w-full"
      >
        <OptionCard
          title="Do you own a property?"
          buttonText="List Property"
          buttonColor="[#0F2A3C]"
          url=""
        />
        <OptionCard
          title="Do you need an Apartment?"
          buttonText="Book a Stay"
          buttonColor="[#B58541]"
          url="/listings"
        />
      </motion.div>
    </motion.div>
  );
}

function OptionCard({ title, buttonText, buttonColor, url }) {
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
        <Link
          href={url}
          className={`bg-${buttonColor} text-white px-6 py-3 rounded-md text-lg font-serif hover:bg-[#057A55] transition`}
        >
          {buttonText}
        </Link>
      </div>
    </motion.div>
  );
}
