"use client";

import { projectsData } from '@/utils/data/projects-data';
import Image from 'next/image';
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Buttons = ({ filter, handleProjects }) => {
  // ... existing code ...
};

function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { id: "all", name: "All Projects", count: projectsData.length },
    { id: "business-promotions", name: "Business Promotions", count: projectsData.filter(p => p.category === "business-promotions").length },
    { id: "short films-pilot film promotions", name: "Short Films & Pilot Films", count: projectsData.filter(p => p.category === "short films-pilot film promotions").length },
    { id: "fanmade posters", name: "Fanmade Posters", count: projectsData.filter(p => p.category === "fanmade posters").length },
    { id: "typography & logo", name: "Typography & Logo", count: projectsData.filter(p => p.category === "typography & logo").length },
    { id: "sketches", name: "Sketches", count: projectsData.filter(p => p.category === "sketches").length }
  ];

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div id="projects" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, rgba(128, 128, 128, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse overflow-hidden">
              <Image
                src="/projects/img/2.jpg"
                alt="Decorative icon"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Creative Portfolio
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my design work, from movie posters to brand identities
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-black/90 text-white shadow-lg shadow-black/50 border-2 border-white/50"
                  : "bg-white/20 text-white hover:bg-white/30 border-2 border-white/30 hover:border-white/50 backdrop-blur-sm"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
      </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
            >
              {/* Project Image */}
              <div className="relative h-60 overflow-hidden cursor-pointer" onClick={() => handleImageClick(index)}>
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-bold border-2 border-white rounded-full px-4 py-2">Click to View</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors duration-300">
                  {project.name}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.slice(0, 3).map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-white/20 to-gray-300/20 text-white text-xs rounded-full border border-white/20"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">
                      +{project.tools.length - 3} more
                    </span>
                  )}
                </div>

                {/* Role Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-sm">
                    {project.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-white/10 to-gray-300/10 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to See More?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              This is just a glimpse of my work. I have many more projects that showcase 
              my versatility and creativity across different industries and design styles.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-gradient-to-r from-white to-gray-300 px-8 py-4 rounded-full text-black font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
            >
              View Full Portfolio
            </a>
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={filteredProjects.map(p => ({ src: p.image, title: p.name, description: p.description }))}
        index={currentIndex}
      />
    </div>
  );
}

export default Projects;