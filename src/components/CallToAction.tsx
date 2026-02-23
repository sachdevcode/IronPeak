"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Droplet } from "lucide-react";

export default function CallToAction() {
    return (
        <section className="relative w-full py-24 md:py-32 overflow-hidden">
            {/* Background Image Setup */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2160" // High-quality construction/building image
                    alt="IronPeak Construction Quality"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
                {/* Subtle gradient to blend into adjacent sections */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    {/* Subtitle */}
                    <div className="flex items-center gap-2 mb-4">
                        <Droplet size={14} className="text-primary fill-primary" />
                        <span className="text-white font-bold uppercase tracking-[0.2em] text-sm">
                            Ready to Build?
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
                        Our Quality vs <br className="hidden md:block" />Others Quantity
                    </h2>

                    {/* Description Paragraph */}
                    <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed mb-10 max-w-2xl">
                        Contact us today to start your custom construction project, or explore our wide range of services to see how we can bring your vision to life. Our team is dedicated to creating robust, specialized structures that transform blueprints into enduring realities.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link
                            href="/#contact"
                            className="w-full sm:w-auto overflow-hidden relative group inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg transition-transform hover:scale-[1.02]"
                        >
                            {/* Hover Fill Effect - Darken */}
                            <span className="absolute inset-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
                            <span className="relative z-10 transition-colors duration-300">Get In Touch</span>
                        </Link>

                        <Link
                            href="/#services"
                            className="w-full sm:w-auto overflow-hidden relative group inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-lg font-bold text-lg transition-transform hover:scale-[1.02]"
                        >
                            {/* Hover Fill Effect - Inverse */}
                            <span className="absolute inset-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">What We Offer</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
