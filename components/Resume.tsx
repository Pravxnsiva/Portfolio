import React from 'react';
import { Section } from '../types';
import { EDUCATION_DATA, SKILLS_DATA } from '../constants';

const Resume: React.FC = () => {
  return (
    <section id={Section.RESUME} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bebas text-gray-900 tracking-wider">
            RESUME
          </h2>
          <div className="h-2 flex-grow bg-gray-900"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div className="space-y-10">
            <h3 className="text-2xl font-bebas text-gray-900 tracking-widest flex items-center gap-3">
              <span className="w-7 h-7 bg-amber-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                1
              </span>
              Education
            </h3>

            <div className="space-y-8 border-l-2 border-gray-100 ml-4 pl-8">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-white border-4 border-amber-400 group-hover:scale-125 transition-transform"></div>

                  <div className="text-amber-500 font-bold text-[11px] tracking-widest mb-2">
                    {edu.year}
                  </div>

                  <h4 className="text-lg font-bold text-gray-900">
                    {edu.degree}
                  </h4>

                  <div className="text-gray-500 text-sm font-medium">
                    {edu.institution}
                  </div>

                  {edu.score && (
                    <div className="mt-2 inline-block px-3 py-1 bg-gray-100 rounded text-xs font-bold text-gray-600">
                      {edu.score}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-10">
            <h3 className="text-2xl font-bebas text-gray-900 tracking-widest flex items-center gap-3">
              <span className="w-7 h-7 bg-amber-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                2
              </span>
              Technical Skills
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {SKILLS_DATA.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-amber-400 transition-colors group"
                >
                  <h4 className="text-amber-600 font-bold text-[11px] tracking-widest uppercase mb-3 group-hover:translate-x-1 transition-transform">
                    {skill.category}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 bg-white text-gray-700 text-xs font-semibold rounded-full border border-gray-200 shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
