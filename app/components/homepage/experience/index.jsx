"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { experiences } from '@/utils/data/experience';

export default function DesignExperienceSection() {
  return (
    <section id="creative-journey" className="relative z-50 border-t my-20 lg:my-32 border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),linear-gradient(0deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 mt-10">Design Experience</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">A journey through my professional and creative design roles</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
              <p className="text-lg text-gray-300 mb-1">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}