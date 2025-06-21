import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  const skillIcons = [
    { icon: "🎨", label: "Creativity", color: "from-white to-gray-300" },
    { icon: "🏆", label: "Leadership", color: "from-gray-300 to-white" },
    { icon: "🤝", label: "Teamwork", color: "from-white to-gray-300" },
    { icon: "📊", label: "Project Management", color: "from-gray-300 to-white" },
    { icon: "💡", label: "Problem Solving", color: "from-white to-gray-300" },
    { icon: "⚡", label: "Fast Delivery", color: "from-gray-300 to-white" }
  ];

  return (
    <div id="about" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Design Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(128, 128, 128, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Creative <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
        <div className="order-2 lg:order-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Creative designer passionate about visual storytelling
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I specialize in creating compelling visual narratives through movie posters, brand identities, 
                and promotional materials. With expertise in Adobe Creative Suite and a keen eye for design, 
                I transform concepts into impactful visual experiences that connect with audiences.
              </p>

              {/* Highlights */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white mb-4">Design Expertise:</h4>
                <ul className="space-y-3">
              {personalData.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{highlight}</span>
                    </li>
              ))}
            </ul>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-6">
              {skillIcons.map((skill, index) => (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h4 className="text-white font-semibold text-lg">{skill.label}</h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-white font-semibold text-lg mb-3">Design Services:</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                <div>• Movie Poster Design</div>
                <div>• Brand Identity</div>
                <div>• Album Artwork</div>
                <div>• Social Media Content</div>
                <div>• Studio Branding</div>
                <div>• Typography Design</div>
                <div>• Print Design</div>
                <div>• Digital Illustrations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-400">Designs Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-2">
              2
            </div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;