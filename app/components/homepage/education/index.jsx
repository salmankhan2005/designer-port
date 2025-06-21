import { educations } from '@/utils/data/educations';

export default function EducationSection() {
  return (
    <section id="education" className="relative z-50 border-t my-20 lg:my-32 border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),linear-gradient(0deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 mt-10">Education</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">My academic and self-taught learning journey</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educations.map((edu, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-lg text-gray-300 mb-1">{edu.institution}</p>
              <p className="text-sm text-gray-400 mb-4">{edu.period}</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                {edu.highlights.map((item, i) => (
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