"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsBook } from 'react-icons/bs';
import GlowCard from '../../helper/glow-card';

const courseImages = {
  'Adobe Creative Suite Mastery': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
  'Entertainment Industry Design': 'https://cdn-icons-png.flaticon.com/512/4144/4144717.png',
  'Freelance Design Business': 'https://cdn-icons-png.flaticon.com/512/2721/2721297.png',
};

const courseDescriptions = {
  'Adobe Creative Suite Mastery': 'Comprehensive mastery of Adobe Photoshop and Illustrator through hands-on project work and online tutorials. Developed expertise in movie poster design and entertainment industry visual communication.',
  'Entertainment Industry Design': 'Deep understanding of Tamil cinema design requirements and industry standards. Learned to work with high-profile clients including actors, directors, and music artists.',
  'Freelance Design Business': 'Built successful freelance practice serving diverse clients across multiple industries. Mastered client communication, project management, and professional business practices.',
  'Chennai Creative Community': 'Active participation in Chennai\'s creative scene and design community. Collaborated with local studios and filmmakers to understand regional industry requirements.',
  'Brand Identity & Marketing Design': 'Created comprehensive branding solutions for food franchises and local businesses. Developed expertise in promotional materials and social media content creation.',
};

export default function CourseCard({ course, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <GlowCard identifier={`learning-${index}`}>
        <div className="p-6 relative text-white bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
          <div className="flex justify-center mb-4">
            <p className="text-sm text-gray-400">
              {course.platform} &bull; {course.year}
            </p>
          </div>
          <div className="flex items-start gap-6">
            <div className="text-white transition-all duration-300 hover:scale-125 flex-shrink-0">
              <BsBook size={32} />
            </div>
            <div className="flex-1">
              <p className="text-lg font-semibold mb-3 text-white">
                {course.title}
              </p>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {courseDescriptions[course.title]}
              </p>
              <ul className="space-y-2">
                {course.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-start gap-2 text-sm text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
} 