"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Phone, Mail, MapPin, 
  Settings, Cpu, Layout, 
  Grid, Repeat, Layers, 
  Microscope, Lightbulb, Database, 
  ChevronRight, ArrowRight, Menu, X, Anvil
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const services = [
  { name: "Special Purpose Machine Design", icon: Settings },
  { name: "Casting Part Design", icon: Anvil },
  { name: "Machining Part Design", icon: Cpu },
  { name: "Sheetmetal Design", icon: Layout },
  { name: "Structural Weldment Design", icon: Grid },
  { name: "2D to 3D Design", icon: Repeat },
  { name: "3D to 2D Design", icon: Layers },
  { name: "R & D Work", icon: Microscope },
  { name: "Concept-Based Design", icon: Lightbulb },
  { name: "Migration Work", icon: Database },
];

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+91-9916267620", href: "tel:+919916267620" },
  { icon: Mail, label: "Email", value: "suhelp0009@gmail.com", href: "mailto:suhelp0009@gmail.com" },
  { icon: MapPin, label: "Location", value: "2nd Phase Electronic City, Bangalore", href: "#" },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass-nav py-4 border-b border-zinc-100 shadow-sm" : "bg-transparent py-6"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="font-heading font-black text-2xl tracking-tighter">
            MECH<span className="text-primary">DESIGN</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {["Services", "About", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold uppercase tracking-widest hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-secondary text-white text-sm font-bold rounded-full hover:bg-primary transition-all duration-300 shadow-lg shadow-zinc-200"
            >
              HIRE ME
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col space-y-8 text-center">
            {["Services", "About", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-heading font-bold"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 bg-red-50 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                Mech Design Service
              </span>
              <h1 className="text-6xl md:text-8xl font-heading font-black text-secondary leading-[0.9] mb-8 tracking-tighter">
                Suhel <br />
                <span className="text-primary">Pasha P.</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-500 font-medium mb-12 max-w-2xl leading-relaxed">
                Senior Design Engineer specializing in industrial innovation and precision mechanical solutions.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <a href="#services" className="px-8 py-4 bg-secondary text-white font-bold rounded-2xl hover:bg-primary transition-all duration-300 flex items-center group">
                  View Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="px-8 py-4 border-2 border-zinc-200 text-secondary font-bold rounded-2xl hover:border-primary hover:text-primary transition-all duration-300">
                  Contact Me
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-zinc-100">
                {contactDetails.map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{item.label}</p>
                      <p className="text-sm font-bold text-secondary">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-primary font-heading font-bold uppercase tracking-[0.3em] mb-4">What I Do</h2>
              <h3 className="text-4xl md:text-6xl font-heading font-black text-secondary tracking-tight">
                Technical Expertise & Engineering Services
              </h3>
            </div>
            <div className="hidden md:block">
              <div className="py-4 px-8 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                <p className="text-primary font-bold">WE ALSO SUPPORT PRODUCTION</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-8 bg-white rounded-[2.5rem] border border-zinc-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:bg-red-50 group-hover:text-primary transition-colors duration-500 mb-8">
                  <service.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-heading font-bold text-secondary mb-4 leading-tight group-hover:text-primary transition-colors">
                  {service.name}
                </h4>
                <div className="flex items-center text-xs font-bold text-zinc-400 group-hover:text-primary transition-colors">
                  EXPLORE <ChevronRight className="ml-1 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <div className="py-6 px-8 bg-secondary rounded-[2rem] text-center">
              <p className="text-white font-bold tracking-tight">WE ALSO SUPPORT PRODUCTION</p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Summary Section */}
      <section id="about" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <h2 className="text-primary font-heading font-bold uppercase tracking-[0.3em] mb-8">Professional Story</h2>
              <div className="space-y-8 text-zinc-500 text-xl leading-relaxed font-medium">
                <p>
                  As a <span className="text-secondary font-bold">Senior Design Engineer</span> based in Bangalore's tech hub, I bridge the gap between complex engineering concepts and practical, production-ready designs.
                </p>
                <p>
                  With <span className="text-secondary font-bold">Mech Design Service</span>, I lead research and development initiatives, focusing on Special Purpose Machines and advanced manufacturing designs.
                </p>
                <p className="text-secondary font-black text-3xl md:text-4xl italic tracking-tighter">
                  "Precision is not just a requirement, it's a signature of quality."
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary p-12 rounded-[3rem] text-white"
            >
              <h4 className="text-3xl font-heading font-bold mb-8">Why Work With Me?</h4>
              <ul className="space-y-6">
                {[
                  "Expertise in 2D/3D Migration & Design",
                  "Focus on Concept-Based Engineering",
                  "End-to-end R&D Support",
                  "Production-Ready Technical Documentation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="font-semibold text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl shadow-zinc-200 border border-zinc-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-primary font-heading font-bold uppercase tracking-[0.3em] mb-4">Get In Touch</h2>
                <h3 className="text-4xl md:text-6xl font-heading font-black text-secondary mb-8 tracking-tight">
                  Let's engineer <br /> something great.
                </h3>
                
                <div className="space-y-8 mb-12">
                  {contactDetails.map((item, i) => (
                    <a 
                      key={i} 
                      href={item.href}
                      className="flex items-center space-x-6 group"
                    >
                      <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <a 
                  href="tel:+919916267620" 
                  className="block w-full py-8 bg-primary text-white text-center font-bold text-2xl rounded-[2rem] hover:bg-secondary transition-all duration-500 shadow-xl shadow-red-500/20 active:scale-95"
                >
                  Call Now
                </a>
                <a 
                  href="mailto:suhelp0009@gmail.com" 
                  className="block w-full py-8 border-2 border-secondary text-secondary text-center font-bold text-2xl rounded-[2rem] hover:bg-secondary hover:text-white transition-all duration-500 active:scale-95"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <div className="font-heading font-black text-3xl tracking-tighter mb-4">
                MECH<span className="text-primary">DESIGN</span>
              </div>
              <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs">
                © 2026 Mech Design Service. All rights reserved.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-lg font-heading font-black text-secondary">Suhel Pasha P.</p>
              <p className="text-zinc-500 font-bold text-sm">Senior Design Engineer</p>
              <div className="mt-4 flex space-x-6 text-sm font-bold text-zinc-400 uppercase tracking-widest">
                <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-primary transition-colors">Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
