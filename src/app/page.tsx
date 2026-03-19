"use client";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { 
  Phone, Mail, MapPin, 
  Settings, Cpu, Layout, 
  Grid, Repeat, Layers, 
  Microscope, Lightbulb, Database, 
  ChevronRight, ArrowRight, Menu, X, Anvil,
  CheckCircle2, MessageCircle
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const services = [
  { 
    name: "Special Purpose Machine Design", 
    icon: Settings,
    description: "Custom-engineered automated solutions designed to solve specific industrial challenges. We focus on high-efficiency, specialized machinery that integrates seamlessly into your production line.",
    details: [
      "Custom Automation Solutions",
      "Process Optimization",
      "Full Mechanical & Electrical Integration",
      "Safety & Compliance Engineering"
    ],
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200"
  },
  { 
    name: "Casting Part Design", 
    icon: Anvil,
    description: "Expert design for cast components across various materials. We optimize for moldability, minimize weight, and ensure structural integrity while reducing production costs.",
    details: [
      "Sand & Die Casting Design",
      "Draft Analysis & Core Design",
      "Material Selection Support",
      "Weight Reduction Optimization"
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200"
  },
  { 
    name: "Machining Part Design", 
    icon: Cpu,
    description: "High-precision component design tailored for CNC and traditional machining processes. We focus on manufacturability, tight tolerances, and efficient production cycles.",
    details: [
      "Precision CNC Component Design",
      "Tolerance Stack-up Analysis",
      "Tooling & Fixture Design",
      "Cost-Effective Manufacturing"
    ],
    image: "https://images.unsplash.com/photo-1565439320955-46f046985a9f?auto=format&fit=crop&q=80&w=1200"
  },
  { 
    name: "Sheetmetal Design", 
    icon: Layout,
    description: "Innovative sheet metal solutions from simple brackets to complex enclosures. We ensure accurate flat patterns and efficient nesting for laser, punch, and bend operations.",
    details: [
      "Complex Enclosure Design",
      "Flat Pattern Development",
      "Nesting & Yield Optimization",
      "Hardware Integration"
    ],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200"
  },
  { 
    name: "Structural Weldment Design", 
    icon: Grid,
    description: "Robust structural engineering for industrial frames, supports, and platforms. Our designs prioritize safety, load-bearing capacity, and ease of assembly.",
    details: [
      "Heavy-Duty Industrial Frames",
      "Load & Stress Analysis Support",
      "Weldment Mapping & Specifications",
      "Modular Structural Systems"
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
  },
  { 
    name: "2D to 3D Design", 
    icon: Repeat,
    description: "Modernizing legacy 2D drawings into intelligent, parametric 3D models. We help you leverage the power of digital twins and advanced simulation.",
    details: [
      "Legacy Data Conversion",
      "Parametric Modeling",
      "Design Validation",
      "Digital Archiving"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
  },
  { 
    name: "3D to 2D Design", 
    icon: Layers,
    description: "Generating precise, production-ready manufacturing drawings from 3D models. We ensure every detail is communicated clearly to the shop floor.",
    details: [
      "GD&T Implementation",
      "Manufacturing Blueprints",
      "Assembly Instructions",
      "BOM Generation"
    ],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200"
  },
  { 
    name: "R & D Work", 
    icon: Microscope,
    description: "Innovative research and development for new product concepts. We push the boundaries of mechanical engineering to create the next generation of industrial solutions.",
    details: [
      "Prototyping & Testing",
      "Material Innovation",
      "Mechanism Development",
      "Patent Support Drawings"
    ],
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1200"
  },
  { 
    name: "Concept-Based Design", 
    icon: Lightbulb,
    description: "Taking your initial ideas from a sketch to a fully realized engineering solution. We bridge the gap between imagination and manufacturing.",
    details: [
      "Initial Concept Visualization",
      "Feasibility Studies",
      "Design Refinement",
      "Functional Architecture"
    ],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200"
  },
  { 
    name: "Migration Work", 
    icon: Database,
    description: "Seamlessly migrating your design data across different CAD platforms while maintaining intelligence and history. We minimize downtime and data loss.",
    details: [
      "CAD Platform Transition",
      "Feature History Preservation",
      "Standard Library Migration",
      "Data Integrity Audits"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
  },
];

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+91-9916267620", href: "tel:+919916267620" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91-9916267620", href: "https://wa.me/919916267620?text=Hi, I'm interested in your mechanical design services." },
  { icon: Mail, label: "Email", value: "suhelp0009@gmail.com", href: "mailto:suhelp0009@gmail.com" },
  { icon: MapPin, label: "Location", value: "2nd Phase Electronic City, Bangalore", href: "#" },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
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

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedService]);

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
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-transparent transition-all duration-300 overflow-hidden">
              <img src="/logo.png" alt="MECH DESIGN services Logo" className="w-full h-full object-contain" />
            </div>
            <div className="font-heading font-black text-2xl tracking-tighter">
              MECH<span className="text-primary">DESIGN</span><span className="text-secondary/50 text-sm ml-1 font-bold italic tracking-wider">services</span>
            </div>
          </a>
          
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
            <div className="font-heading font-black text-4xl tracking-tighter mb-8">
              MECH<span className="text-primary">DESIGN</span><br />
              <span className="text-secondary/50 text-xl font-bold italic tracking-wider">services</span>
            </div>
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
                Premium Design Consultancy
              </span>
              <h1 className="text-6xl md:text-8xl font-heading font-black text-secondary leading-[0.9] mb-8 tracking-tighter">
                MECH<br />
                <span className="text-primary">DESIGN</span><br />
                <span className="text-secondary/20 text-4xl md:text-6xl block mt-2">services</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-500 font-medium mb-12 max-w-2xl leading-relaxed">
                Precision-engineered mechanical solutions for the modern industry. Over <span className="text-primary font-bold">15 years of expertise</span> in turning complex concepts into production-ready reality.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <a href="#services" className="px-8 py-4 bg-secondary text-white font-bold rounded-2xl hover:bg-primary transition-all duration-300 flex items-center group">
                  View Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="px-8 py-4 border-2 border-zinc-200 text-secondary font-bold rounded-2xl hover:border-primary/50 hover:text-primary transition-all duration-300">
                  Contact Me
                </a>
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
              <div className="py-4 px-8 bg-white rounded-2xl border border-primary/20 shadow-sm">
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
                onClick={() => setSelectedService(service)}
                className="group p-8 bg-white rounded-[2.5rem] border border-zinc-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-500 cursor-pointer"
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
            <div className="py-6 px-8 bg-primary rounded-[2rem] text-center shadow-lg shadow-red-500/20">
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
                  We deliver <span className="text-secondary font-bold">innovative, cost-efficient, and manufacturing-ready</span> mechanical design solutions—from concept to production.
                </p>
                <p>
                  With expertise in <span className="text-secondary font-bold">SPM, casting, machining, sheet metal, and structural design</span>, we create high-performance, production-ready outputs.
                </p>
                <p className="text-secondary font-black text-3xl md:text-4xl italic tracking-tighter">
                  "Driven by precision, speed, and reliability, we provide end-to-end support to turn ideas into reality."
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary p-12 rounded-[3rem] text-white shadow-2xl shadow-secondary/20"
            >
              <h4 className="text-3xl font-heading font-bold mb-8">Why Work With Me?</h4>
              <ul className="space-y-6">
                {[
                  "15+ Years of Proven Industry Experience",
                  "Specialized Freelance Engineering Solutions",
                  "Expertise in 2D/3D Migration & Concept Design",
                  "Comprehensive R&D & Technical Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-4">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-primary">
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
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            
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
                  href="https://wa.me/919916267620?text=Hi, I'm interested in your mechanical design services." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-8 bg-[#25D366] text-white text-center font-bold text-2xl rounded-[2rem] hover:bg-secondary transition-all duration-500 shadow-xl shadow-green-500/20 active:scale-95"
                >
                  WhatsApp
                </a>
                <a 
                  href="tel:+919916267620" 
                  className="block w-full py-8 bg-primary text-white text-center font-bold text-2xl rounded-[2rem] hover:bg-secondary transition-all duration-500 shadow-xl shadow-red-500/30 active:scale-95"
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
              <div className="flex items-center space-x-4 mb-6 justify-center md:justify-start">
                <div className="w-16 h-16 bg-transparent overflow-hidden">
                  <img src="/logo.png" alt="MECH DESIGN services Footer Logo" className="w-full h-full object-contain" />
                </div>
                <div className="font-heading font-black text-3xl tracking-tighter">
                  MECH<span className="text-primary">DESIGN</span><span className="text-secondary/50 text-base ml-1 font-bold italic tracking-wider">services</span>
                </div>
              </div>
              <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs">
                © 2026 Mech Design Services. All rights reserved.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="mt-4 flex space-x-6 text-sm font-bold text-zinc-400 uppercase tracking-widest">
                <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-primary transition-colors">Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-12 md:p-20 bg-secondary/80 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white w-full max-w-5xl max-h-full overflow-hidden rounded-[3rem] shadow-2xl flex flex-col md:flex-row relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white md:text-secondary md:bg-zinc-100 md:hover:bg-zinc-200 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent md:hidden" />
                <div className="absolute bottom-8 left-8 text-white md:hidden">
                  <selectedService.icon className="w-10 h-10 mb-4" />
                  <h2 className="text-3xl font-heading font-black">{selectedService.name}</h2>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-16 overflow-y-auto">
                <div className="hidden md:block mb-12">
                  <div className="flex items-center space-x-4 mb-8 opacity-50">
                    <div className="w-12 h-12 bg-transparent overflow-hidden">
                      <img src="/logo.png" alt="Brand Logo" className="w-full h-full object-contain grayscale" />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">MECH DESIGN services</span>
                  </div>
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <selectedService.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-heading font-black text-secondary tracking-tight leading-tight">
                    {selectedService.name}
                  </h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-primary font-heading font-bold uppercase tracking-widest text-xs mb-4">Overview</h3>
                    <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                      {selectedService.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-primary font-heading font-bold uppercase tracking-widest text-xs mb-4">Core Expertise</h3>
                    <ul className="grid grid-cols-1 gap-4">
                      {selectedService.details.map((detail, i) => (
                        <li key={i} className="flex items-center space-x-3 group">
                          <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-bold text-secondary text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 border-t border-zinc-100">
                    <a 
                      href="#contact" 
                      onClick={() => setSelectedService(null)}
                      className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all duration-500 group shadow-lg shadow-red-500/20"
                    >
                      Enquire Now
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
