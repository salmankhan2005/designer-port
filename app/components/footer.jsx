"use client";

export const dynamic = "force-dynamic";

// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import GlowCard from "../components/helper/glow-card";
import { useEffect } from "react";
import { personalData } from "@/utils/data/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // browser-only code here
    }
  }, []);

  return (
    <footer className="relative py-12 lg:py-16 overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(0deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Dhanin George
              </span>
            </h3>
            <p className="text-gray-300 mb-4">
              Creative Designer & Visual Storyteller
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting compelling visual narratives through innovative design solutions, 
              from movie posters to brand identities that leave lasting impressions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h4 className="text-white font-semibold mb-4">Portfolio</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Creative Journey
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Design Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Creative Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Let's Collaborate
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h4 className="text-white font-semibold mb-4">Let's Connect</h4>
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">{personalData.email}</p>
              <p className="text-sm">{personalData.phone}</p>
              <p className="text-sm">{personalData.address}</p>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mt-4">
              <a
                href={personalData.github}
              target="_blank"
                rel="noopener noreferrer"
                className="group p-2 bg-white/10 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
              >
                <BsGithub size={18} className="text-white group-hover:text-black" />
              </a>
              <a
                href={personalData.linkedIn}
              target="_blank"
                rel="noopener noreferrer"
                className="group p-2 bg-white/10 rounded-full hover:bg-gray-300 transition-all duration-300 hover:scale-110"
              >
                <BsLinkedin size={18} className="text-white group-hover:text-black" />
              </a>
            </div>
          </div>
        </div>

        {/* Signature Tagline */}
        <div className="text-center py-8 border-t border-white/10">
          <div className="mb-4">
            <p className="text-xl font-semibold text-white mb-2">
              "Designing Visual Stories That Inspire"
            </p>
            <p className="text-gray-400 text-sm">
              Every design has a purpose. Let's create something extraordinary together.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Dhanin George. All rights reserved. | 
            <span className="text-white ml-1">Made with ❤️ in Chennai</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;