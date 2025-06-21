// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-24">
      {/* Background Design Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gray-400 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Name and Title */}
            <h1 className="text-5xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                DHANIN GEORGE
              </span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-pulse overflow-hidden">
      <Image
                  src="/projects/img/2.jpg"
                  alt="Decorative icon"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl lg:text-4xl font-medium text-gray-300">
                Graphic Designer | Visual Storyteller
              </h2>
            </div>
            
            <p className="text-lg lg:text-xl text-gray-400 mb-8 max-w-3xl mx-auto lg:mx-0">
              Freelance | Branding | Film & Entertainment
            </p>

            {/* Description */}
            <p className="text-base lg:text-lg text-gray-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Professional creative designer with 2 years of freelance experience in publicity designs, 
              advertisements, and social media content. Specializes in transforming client ideas into 
              visually compelling designs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Link 
                href="#projects" 
                className="group bg-gradient-to-r from-white to-gray-300 px-8 py-4 rounded-full text-black font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
              >
                <span className="flex items-center gap-2">
                  Explore My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              
              <Link 
                href="#contact" 
                className="group border-2 border-gray-300 px-8 py-4 rounded-full text-gray-300 font-semibold text-lg transition-all duration-300 hover:bg-gray-300 hover:text-black"
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                </span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="group p-2 rounded-full bg-white/10 hover:bg-white transition-colors duration-300">
                <FaInstagram size={24} className="text-white group-hover:text-pink-500" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Image Container */}
              <div className=" relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/projects/profile/Dhanin George.jpg"
                  alt="Dhanin George"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                  style={{ objectPosition: '15% 50%' }}
                />
        </div>

              {/* Floating Design Elements around the image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-300/20 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gray-300/30 rounded-full animate-bounce"></div>
            </div>
          </div>
              </div>
              </div>

      {/* Floating Design Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-16 h-16 bg-white/20 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-gray-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-white/15 rounded-lg -rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-14 h-14 bg-gray-400/15 rounded-full animate-bounce"></div>
              </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;