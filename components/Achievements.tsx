import React from 'react';
import { Section } from '../types';
import { ACHIEVEMENTS_DATA } from '../constants';
import { Award, CheckCircle } from 'lucide-react';

const Achievements: React.FC = () => {
  // Remove only these two achievements from cards
  const filteredAchievements = ACHIEVEMENTS_DATA.filter(
    (ach) =>
      ach.title !== 'Witty Mindz – LOGIN 2025' &&
      ach.title !== 'Google Cloud Innovator Badge'
  );

  return (
    <section id={Section.ACHIEVEMENTS} className="py-20 bg-amber-400">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-4xl md:text-5xl font-bebas text-gray-900 uppercase tracking-widest">
            Achievements
          </h2>
          <div className="h-1 w-20 bg-gray-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredAchievements.map((ach, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award size={64} className="text-gray-900" />
              </div>

              <div className="relative z-10 space-y-3">
                <div className="w-11 h-11 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="text-amber-600" size={20} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {ach.title}
                </h3>

                {ach.date && (
                  <div className="text-amber-600 font-bold text-[11px] uppercase tracking-widest">
                    {ach.date}
                  </div>
                )}

                <p className="text-gray-600 text-sm leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Badges Area */}
        <div className="mt-14 bg-gray-900 rounded-3xl p-8 flex flex-wrap justify-center gap-10 items-center">
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-18 h-18 bg-gray-800 rounded-full flex items-center justify-center border-2 border-amber-400 group-hover:scale-110 transition-transform">
              <img
                src="/images/mcet.jpg"
                className="w-11 h-11 rounded-full"
                alt="Badge"
              />
            </div>
            <span className="text-white text-[10px] font-bold tracking-widest uppercase opacity-60">
              MCET
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
            <div className="w-18 h-18 bg-gray-800 rounded-full flex items-center justify-center border-2 border-amber-400 group-hover:scale-110 transition-transform">
              <img
               src="/images/udemy.jpg"
                className="w-11 h-11 rounded-full"
                alt="Badge"
              />
            </div>
            <span className="text-white text-[10px] font-bold tracking-widest uppercase opacity-60">
              Udemy
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 group">
            <div className="w-18 h-18 bg-gray-800 rounded-full flex items-center justify-center border-2 border-amber-400 group-hover:scale-110 transition-transform">
              <img
                src="/images/epic.jpg"
                className="w-11 h-11 rounded-full"
                alt="Badge"
              />
            </div>
            <span className="text-white text-[10px] font-bold tracking-widest uppercase opacity-60">
              Epic X
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
