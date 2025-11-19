"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

// Define interface for Projects
interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Relax Waterfront",
    location: "Bijilo, The Gambia",
    image: "/hero-home-1.jpg",
  },
  {
    id: "02",
    title: "Eden Estate",
    location: "Brusubi, The Gambia",
    image: "/hero-home-2.jpg",
  },
  {
    id: "03",
    title: "Vista at Council Square",
    location: "Banjul, The Gambia",
    image: "/hero-home-1 (1).jpg",
  },
  {
    id: "04",
    title: "The Horizon Towers",
    location: "Kololi, The Gambia",
    image: "/office.jpg",
  },
];

const OurProperties = () => {
  return (
    <section className="relative bg-black w-full text-white">
      <div className="hidden lg:block">
        <DesktopLayout />
      </div>

      <div className="block lg:hidden">
        <MobileLayout />
      </div>
    </section>
  );
};

export default OurProperties;

function DesktopLayout() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="flex w-full relative">
      
      <div className="w-1/2 h-screen sticky top-0 flex flex-col justify-center px-16 xl:px-24 z-20 bg-black">
        <div className="mb-12">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a3e635] text-[#a3e635] mb-8">
            <span className="text-xs font-bold uppercase tracking-widest">
              PROJECTS · SELECT
            </span>
          </div>
          <h2 className="text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white">
            Innovative designs, <br />
            lasting impressions
          </h2>
        </div>

        <div className="relative min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="text-8xl font-bold text-white/10 absolute -top-16 -left-4 z-0 pointer-events-none">
                {projects[activeProject].id}
              </div>
              
              <div className="relative z-10 mt-8 space-y-6">
                <h3 className="text-4xl font-bold text-white">
                  {projects[activeProject].title}
                </h3>

                <div className="flex items-center gap-3 text-lg font-medium text-gray-300">
                  <MapPin className="w-5 h-5 text-[#a3e635]" />
                  {projects[activeProject].location}
                </div>

                <div className="w-full h-[1px] bg-white/20 mt-8" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="w-1/2 bg-black z-10">
        {projects.map((project, index) => (
          <ProjectImage 
            key={project.id} 
            project={project} 
            index={index} 
            setActiveProject={setActiveProject} 
          />
        ))}
      </div>
    </div>
  );
}

// Typed Helper Component
function ProjectImage({ project, index, setActiveProject }: { project: Project, index: number, setActiveProject: (idx: number) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveProject(index);
    }
  }, [isInView, index, setActiveProject]);

  return (
    <div ref={ref} className="relative w-full h-screen overflow-hidden group">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-105"
        priority={index === 0}
      />
      
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute bottom-12 right-12 w-16 h-16 bg-[#a3e635] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-xl z-30">
        <ArrowUpRight className="w-8 h-8 text-black" />
      </div>
    </div>
  );
}

function MobileLayout() {
  return (
    <div className="flex flex-col w-full py-16 px-6 bg-black text-white">
      
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a3e635] text-[#a3e635] mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest">
            PROJECTS · SELECT
          </span>
        </div>
        <h2 className="text-4xl font-bold leading-tight mb-4">
          Innovative designs, lasting impressions
        </h2>
      </div>

      <div className="space-y-20">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-6">
            <div className="space-y-2">
               <span className="text-5xl font-bold text-white/20 block">
                 {project.id}
               </span>
               <h3 className="text-2xl font-bold text-white">{project.title}</h3>
               <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-[#a3e635]" />
                  {project.location}
               </div>
            </div>

            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#a3e635] rounded-full flex items-center justify-center shadow-lg">
                 <ArrowUpRight className="w-6 h-6 text-black" />
              </div>
            </div>
            
            <div className="w-full h-[1px] bg-white/10 mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}