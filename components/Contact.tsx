import React, { useRef, useState } from 'react';
import { Section } from '../types';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'pravinsiva',      // Service ID
        'pravinsiva',      // Template ID
        formRef.current,
        'CZaRn-lMnwWPO-7u5' // Public Key
      )
      .then(
        () => {
          formRef.current?.reset();
          setShowSuccess(true);

          setTimeout(() => {
            setShowSuccess(false);
          }, 2000);
        },
        (error) => {
          console.error(error);
        }
      );
  };

  return (
    <section id={Section.CONTACT} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Info */}
          <div className="lg:w-1/2 space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bebas text-gray-900 uppercase leading-none">
                Get In Touch
              </h2>
              <p className="text-gray-500 mt-4 text-base md:text-lg">
                Feel free to reach out for collaborations or just a friendly hello.
                I'm always open to discussing new projects and creative ideas.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center group-hover:bg-amber-400 group-hover:text-gray-900 transition-all duration-300">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    Email Me
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    pravinsiva00@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center group-hover:bg-amber-400 group-hover:text-gray-900 transition-all duration-300">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    Location
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    Coimbatore, Tamil Nadu, India
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center group-hover:bg-amber-400 group-hover:text-gray-900 transition-all duration-300">
                  <Linkedin size={22} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    Professional
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    Linkedin--pravixnsiva
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/Pravxnsiva"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/pravixnsiva/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:pravinsiva00@gmail.com"
                className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
              {showSuccess && (
                <div className="mb-4 p-4 rounded-xl bg-green-100 text-green-800 font-semibold text-center">
                  Message sent successfully!
                </div>
              )}

              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    name="user_name"
                    type="text"
                    required
                    className="w-full bg-gray-50 border-none rounded-xl px-5 py-3 focus:ring-2 focus:ring-amber-400 transition-all"
                    placeholder="Your Name"
                  />

                  <input
                    name="user_email"
                    type="email"
                    required
                    className="w-full bg-gray-50 border-none rounded-xl px-5 py-3 focus:ring-2 focus:ring-amber-400 transition-all"
                    placeholder="Your Email"
                  />
                </div>

                <input
                  name="subject"
                  type="text"
                  required
                  className="w-full bg-gray-50 border-none rounded-xl px-5 py-3 focus:ring-2 focus:ring-amber-400 transition-all"
                  placeholder="Subject"
                />

                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-gray-50 border-none rounded-xl px-5 py-3 focus:ring-2 focus:ring-amber-400 transition-all"
                  placeholder="Tell me about your project..."
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-amber-400 font-bold tracking-[0.2em] py-4 rounded-xl hover:bg-amber-400 hover:text-gray-900 transition-all flex items-center justify-center gap-3 group uppercase"
                >
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
