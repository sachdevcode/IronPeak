"use client";

import { motion } from "framer-motion";
import { Users, PenTool, HardHat, CheckSquare } from "lucide-react";

const processSteps = [
    {
        num: "01",
        title: "Initial Consultation",
        description: "We meet to discuss your goals, budget, and timeline. Our team assesses your site and provides honest, expert recommendations.",
        icon: Users,
        progress: 25,
    },
    {
        num: "02",
        title: "Pre-Construction & Design",
        description: "We collaborate on custom designs and detailed blueprints. We handle all necessary permits and ensure compliance with local codes.",
        icon: PenTool,
        progress: 50,
    },
    {
        num: "03",
        title: "Construction Phase",
        description: "Our skilled crews begin the build. We maintain strict quality control and open communication throughout the entire process.",
        icon: HardHat,
        progress: 75,
    },
    {
        num: "04",
        title: "Final Walkthrough",
        description: "A thorough inspection ensures everything meets our high standards. We hand over the keys and provide necessary maintenance guidance.",
        icon: CheckSquare,
        progress: 100,
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    }
};

const Process = () => {
    return (
        <section className="bg-black py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Subtle background texture/gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-black to-[#0a192f]/50 opacity-80 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center md:text-left mb-16">
                    <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 inline-block bg-primary/10 px-4 py-1.5 rounded-sm">
                        How It Works
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
                        Our Process
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl font-medium leading-relaxed">
                        From the first handshake to the final walkthrough, we follow a rigorous, transparent process to ensure your project is built to perfection—on time and on budget.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl relative overflow-hidden group transition-colors hover:bg-white/[0.07] hover:border-white/20"
                        >
                            {/* Header: Number & Icon */}
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-primary font-black text-4xl group-hover:scale-105 transition-transform">
                                    {step.num}
                                </span>
                                <step.icon className="text-primary opacity-80 group-hover:opacity-100 transition-opacity" size={32} strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {step.description}
                            </p>

                            {/* Animated Progress Line */}
                            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/5">
                                <motion.div
                                    className="h-full bg-primary"
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: `${step.progress}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 + (index * 0.2), ease: "easeOut" }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
