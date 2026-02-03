import React from 'react';
import { Section } from '../types';
import { PROJECTS_DATA } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id={Section.PORTFOLIO} className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline gap-6 mb-10">
          <h2 className="text-4xl md:text-5xl font-bebas text-amber-400 tracking-wider">
            PORTFOLIO
          </h2>
          <div className="text-gray-400 font-medium tracking-widest text-xs md:text-sm uppercase">
            Selected Projects
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 transition-all duration-500 hover:shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
            >
              {/* Project Image Area */}
              <div className="h-44 md:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Project Info */}
              <div className="p-5 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-amber-400 text-[10px] font-bold tracking-[0.2em] mt-1">
                      {project.tech}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href="https://github.com/Pravxnsiva"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 rounded-full hover:bg-amber-400 hover:text-gray-900 transition-all"
                    >
                      <Github size={14} />
                    </a>

                    <a
                      href="https://github.com/Pravxnsiva"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 rounded-full hover:bg-amber-400 hover:text-gray-900 transition-all"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <ul className="space-y-1.5 text-gray-400 text-xs md:text-sm">
                  {project.description.map((line, lIdx) => (
                    <li key={lIdx} className="flex gap-2 items-start">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-3 right-3 bg-amber-400 text-gray-900 font-bebas px-2 py-0.5 text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                VIEW
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://github.com/Pravxnsiva"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-400 text-gray-900 px-9 py-3 font-bold tracking-widest hover:bg-white transition-colors uppercase shadow-lg text-xs"
          >
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
