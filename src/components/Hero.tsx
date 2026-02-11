"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image - Optimized with next/image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2160"
                    alt="Construction Site"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Refined Overlay for better contrast across the whole screen */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-black/20"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-12 h-[2px] bg-primary"></span>
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm drop-shadow-sm">Delivering Quality Construction</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 uppercase tracking-tighter drop-shadow-2xl">
                        Built With <span className="text-primary">Strength</span> And Precision
                    </h1>
                    <p className="text-xl text-gray-300 mb-10 leading-relaxed font-medium">
                        IronPeak Construction Group brings dependable timelines, clear communication, and solid workmanship to every residential and commercial project in the Bay Area.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#contact"
                            className="bg-primary hover:bg-white hover:text-primary text-white font-black py-5 px-10 rounded-sm flex items-center justify-center gap-2 transition-all uppercase tracking-widest text-sm group"
                        >
                            Get a Free Quote
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#services"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-black py-5 px-10 rounded-sm flex items-center justify-center gap-2 transition-all uppercase tracking-widest text-sm border border-white/20"
                        >
                            Our Services
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative vertical line */}
            <div className="absolute right-8 md:right-12 bottom-10 hidden md:flex flex-col items-center gap-6">
                <span className="text-white/80 text-[10px] uppercase font-black tracking-[0.6em] [writing-mode:vertical-lr] whitespace-nowrap">Scroll Down</span>
                <div className="w-[1px] h-24 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;
