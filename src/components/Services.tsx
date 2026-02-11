"use client";

import { motion } from "framer-motion";
import {
    Home,
    HardHat,
    Building2,
    Layout,
    Layers,
    Briefcase,
    ArrowRight
} from "lucide-react";

const services = [
    {
        title: "Residential Construction",
        description: "Custom new home construction tailored to your vision. We handle everything from groundbreaking to the final walkthrough.",
        icon: Home,
        href: "#"
    },
    {
        title: "Home Remodeling",
        description: "Transform your existing space with our expert renovation services. Specialized in kitchens, bathrooms, and full-home refreshes.",
        icon: HardHat,
        href: "#"
    },
    {
        title: "Commercial Build Outs",
        description: "Professional construction for retail, office, and restaurant spaces. We deliver functional, high-impact commercial environments.",
        icon: Building2,
        href: "#"
    },
    {
        title: "Design-Build Services",
        description: "A streamlined approach that integrates design and construction. One point of contact, faster delivery, and better value.",
        icon: Layout,
        href: "#"
    },
    {
        title: "Structural & Concrete",
        description: "Solid foundations for lasting structures. Specialized in foundation repair, retaining walls, and seismic retrofitting.",
        icon: Layers,
        href: "#"
    },
    {
        title: "Project Management",
        description: "Expert consulting and oversight for your construction projects. We ensure everything stays on schedule and within budget.",
        icon: Briefcase,
        href: "#"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-12 h-[2px] bg-primary"></span>
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Our Expertise</span>
                        <span className="w-12 h-[2px] bg-primary"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-6 uppercase tracking-tighter">
                        Comprehensive Construction <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed font-medium">
                        From residential havens to commercial hubs, IronPeak Construction Group provides the structure and planning needed for successful builds.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white p-10 rounded-sm shadow-sm border-b-4 border-transparent hover:border-primary transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="w-16 h-16 bg-muted flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
                                <service.icon size={32} className="text-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 mb-8 leading-relaxed text-sm font-medium">
                                {service.description}
                            </p>
                            <a
                                href={service.href}
                                className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black hover:text-primary transition-colors"
                            >
                                Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-6">Need a custom solution for your project?</p>
                    <a
                        href="#contact"
                        className="inline-block bg-primary text-white font-black py-4 px-12 rounded-sm hover:bg-black transition-all uppercase tracking-widest text-sm shadow-lg shadow-primary/20"
                    >
                        Start Your Project Today
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
