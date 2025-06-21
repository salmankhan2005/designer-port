// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import GlowCard from "../../helper/glow-card";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(0deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Design Tools
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional software and creative tools I use to bring designs to life
          </p>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
              <div className="w-36 min-w-fit h-fit m-3 sm:m-5" key={id}>
                <GlowCard identifier={`skill-${id}`}>
                  <div className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 group cursor-pointer">
                    <div className="h-10 w-10 mb-3">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                    <p className="text-white text-sm text-center">
                    {skill.name}
                  </p>
                </div>
                </GlowCard>
            </div>
          ))}
        </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;