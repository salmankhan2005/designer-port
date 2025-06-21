"use client"

import { courses } from '@/utils/data/courses';
import CourseCard from './CourseCard';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimationLottie from '../../helper/animation-lottie';
import lottieFile from '../../../assets/lottie/study.json';

export default function LearningExperience() {
  return (
    <div id="learning" className="relative z-50 border-t my-20 lg:my-32 border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(0deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 mt-10">
            Learning Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey of continuous learning and skill development in design
          </p>
        </div>

        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex justify-center items-start">
              <div className="w-3/4 h-3/4 mt-18">
                <AnimationLottie animationPath={lottieFile} />
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-6">
                {courses.map((course, idx) => (
                  <CourseCard key={idx} course={course} index={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 