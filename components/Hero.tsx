import React from 'react';
import { Section } from '../types';
import { USER_NAME, DESIGNATION } from '../constants';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id={Section.HOME}
      className="min-h-screen relative flex items-center justify-center bg-white overflow-hidden py-12 px-6"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-400 -z-0 hidden lg:block"></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 text-center lg:text-left">
          <h4 className="text-amber-500 font-bold tracking-widest text-sm md:text-base font-bebas uppercase">
            Hi There!
          </h4>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bebas text-gray-900 leading-none">
            I'M{" "}
            <span className="text-gray-900 border-b-4 md:border-b-6 border-amber-400">
              {USER_NAME}
            </span>
          </h1>

          <div className="bg-gray-900 text-amber-400 px-5 py-2 inline-block font-bold tracking-[0.2em] text-xs md:text-sm">
            {DESIGNATION}
          </div>

          <p className="text-gray-600 max-w-xl text-base md:text-lg leading-relaxed">
            A passionate and creative MCA candidate specializing in Full Stack
            Development, UI/UX Design, and AI-powered applications. I build
            modern, scalable, and user-centric digital experiences using the
            MERN stack.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button
              onClick={() => onNavigate(Section.ABOUT)}
              className="bg-gray-900 text-white px-7 py-3 font-bold tracking-widest hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl uppercase text-sm"
            >
              More About Me
            </button>

            <button
              onClick={() => onNavigate(Section.PORTFOLIO)}
              className="border-4 border-gray-900 px-7 py-3 font-bold tracking-widest text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 uppercase text-sm"
            >
              My Projects
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative">
            {/* The circular image */}
            <div className="w-56 h-56 md:w-72 md:h-72 lg:w-[420px] lg:h-[420px] rounded-full border-[12px] md:border-[20px] border-white shadow-2xl overflow-hidden relative">
              <img
                src="/images/pravin.jpeg"
                alt={USER_NAME}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Dots Circle */}
            <div className="absolute -inset-6 border-2 border-dashed border-amber-400 rounded-full animate-[spin_20s_linear_infinite] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
