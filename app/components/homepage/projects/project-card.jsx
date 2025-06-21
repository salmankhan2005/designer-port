"use client"

import * as React from 'react';
import { useState, useEffect } from 'react';
import GlowCard from '../../helper/glow-card';

function ProjectCard({ project, index }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <GlowCard identifier={`project-${index}`}>
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300/20"></div>
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
      </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <p className="text-gray-300 text-sm mb-2">Role: <span className="text-white">{project.role}</span></p>
            <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
          </div>
          
          <div>
            <p className="text-gray-300 text-sm mb-2">Tools & Technologies:</p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          </div>
      </div>
    </GlowCard>
  );
}

export default ProjectCard;