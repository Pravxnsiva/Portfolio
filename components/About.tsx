import React from 'react';
import { Section } from '../types';
import { Briefcase, Code, BrainCircuit, Users } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: "CGPA (BCA)", value: "8.87/10", icon: <Code className="text-amber-500" /> },
    { label: "PROJECTS DONE", value: "6+", icon: <Briefcase className="text-amber-500" /> },
    { label: "CERTIFICATIONS", value: "10+", icon: <Users className="text-amber-500" /> },
    { label: "HACKATHONS", value: "2", icon: <BrainCircuit className="text-amber-500" /> }
  ];

  const services = [
    {
      title: "MERN STACK",
      desc: "Specializing in MongoDB, Express, React, and Node.js for high-performance applications.",
      icon: (
        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
          <Code className="text-amber-600" />
        </div>
      )
    },
    {
      title: "UI/UX DESIGN",
      desc: "Creating visually engaging and user-centric interfaces using Figma and Inkscape.",
      icon: (
        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
          <Briefcase className="text-amber-600" />
        </div>
      )
    },
    {
      title: "GEN AI / NLP",
      desc: "Integrating emerging technologies like Generative AI and NLP for smarter user experiences.",
      icon: (
        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
          <BrainCircuit className="text-amber-600" />
        </div>
      )
    }
  ];

  return (
    <section id={Section.ABOUT} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Photo & Personal Card */}
          <div className="lg:w-1/3">
            <div className="bg-amber-400 p-2 rounded-2xl shadow-xl transform rotate-3">
              <div className="bg-white rounded-xl overflow-hidden transform -rotate-3 p-1">
                <img 
                  src="/images/about.jpg"
                  alt="About Pravin" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Text content */}
          <div className="lg:w-2/3 space-y-10">
            <div className="relative">
              <span className="text-5xl md:text-6xl font-bebas text-gray-200 absolute -top-10 -left-2 -z-0 opacity-40 uppercase">
                About Me
              </span>

              <h2 className="text-3xl font-bebas text-gray-900 relative z-10 uppercase tracking-wider">
                Professional Summary
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
                A passionate and creative Master of Computer Applications (MCA) candidate with a strong foundation and deep interest in Full Stack Development, UI/UX Design, and Artificial Intelligence integration. Adept at crafting visually engaging, intuitive user interfaces and developing scalable, high-performance web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js).
                <br /><br />
                With strong technical expertise in JavaScript, Python, and Java, I blend aesthetic design principles with solid programming logic to build seamless and user-centric digital experiences. I am enthusiastic about exploring and implementing emerging technologies such as Generative AI, NLP-based web assistants, and intelligent automation systems.
                <br /><br />
                Driven by curiosity and innovation, I am eager to contribute to impactful, real-world projects that bridge creativity with technology, delivering modern, efficient, and meaningful digital solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bebas text-gray-900 border-l-4 border-amber-400 pl-4">
                  What I Do?
                </h3>
                <div className="space-y-6">
                  {services.map((s, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      {s.icon}
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                          {s.title}
                        </h4>
                        <p className="text-gray-500 text-sm">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bebas text-gray-900 border-l-4 border-amber-400 pl-4">
                  Fun Facts
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:bg-gray-900 hover:text-white transition-all duration-300"
                    >
                      <div className="text-2xl font-bebas text-gray-900 group-hover:text-amber-400 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-gray-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
