"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const About = () => {
    const points = [
        "Over 10 years of professional experience",
        "Expert residential & commercial builders",
        "Dependable timelines & clear communication",
        "Solid workmanship & attention to detail",
        "Fully licensed and insured",
        "Serving the entire Bay Area"
    ];

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1280"
                                alt="Modern Construction"
                                className="w-full h-[600px] object-cover"
                            />
                        </div>
                        {/* Design elements */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 -z-0"></div>
                        <div className="absolute -top-10 -left-10 w-32 h-32 border-l-8 border-t-8 border-primary -z-0"></div>

                        {/* Experience Badge */}
                        <div className="absolute bottom-10 left-10 bg-primary text-white p-8 rounded-sm shadow-xl z-20">
                            <span className="block text-4xl font-black mb-1">10+</span>
                            <span className="block text-xs uppercase font-bold tracking-widest leading-tight">Years of<br />Excellence</span>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[2px] bg-primary"></span>
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">About IronPeak</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-8 uppercase tracking-tighter">
                            Experts Modern Construction <span className="text-primary">Service & Solutions</span>
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                            IronPeak Construction Group is a full-service construction company delivering high-quality residential and small commercial projects across the Bay Area. Since 2014, we have established ourselves as a modern, no-nonsense builder that values structure, planning, and execution.
                        </p>
                        <p className="text-gray-600 mb-10 leading-relaxed font-medium">
                            We understand that construction can be complex. That's why we focus on delivering reliable timelines and clear communication, ensuring our clients—homeowners, real estate investors, and small business owners—get exactly what they need without surprises.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {points.map((point, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                                    <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">{point}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className="inline-block bg-black hover:bg-primary text-white font-black py-4 px-10 rounded-sm transition-all uppercase tracking-widest text-sm"
                        >
                            Discover More
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
