"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Modern Kitchen Remodel",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop",
        description: "Full-scale kitchen transformation with custom cabinetry and premium appliances."
    },
    {
        title: "Structural Foundation",
        category: "Structural",
        image: "https://images.unsplash.com/photo-1666585607888-3f6fe0b323d8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Major structural reinforcement for a commercial facility in San Jose."
    },
    {
        title: "Luxury Hillside Home",
        category: "New Build",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
        description: "Ground-up construction of a contemporary 5,000 sq ft residence."
    },
    {
        title: "Urban Office Build-Out",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
        description: "Modernized workspace design and execution for a tech startup."
    },
    {
        title: "Custom Outdoor Living",
        category: "Residential",
        image: "https://images.unsplash.com/photo-1736281498403-5f6785a5bbe6?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Premium deck and patio construction with integrated lighting and seating."
    },
    {
        title: "Industrial Warehouse",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        description: "Large-scale commercial facility construction with specialized loading docks."
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[2px] bg-primary"></span>
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Our Portfolio</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-black leading-tight uppercase tracking-tighter">
                            Featured <span className="text-primary">Projects</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-gray-600 font-medium max-w-md hidden md:block"
                    >
                        Explore our latest work across the Bay Area. From residential renovations to large-scale commercial builds.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <p className="text-white text-sm mb-2 font-medium">{project.description}</p>
                                    <button className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                                        View Project <ArrowRight size={14} />
                                    </button>
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-6 left-6 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-sm shadow-lg">
                                    {project.category}
                                </div>
                            </div>

                            {/* Info Area */}
                            <div className="p-6 border-b-4 border-transparent group-hover:border-primary transition-all duration-500">
                                <h3 className="text-xl font-black text-black uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">IronPeak Group</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <button className="bg-black hover:bg-primary text-white font-black py-5 px-12 rounded-sm transition-all uppercase tracking-widest text-sm shadow-xl">
                        View All Projects
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
