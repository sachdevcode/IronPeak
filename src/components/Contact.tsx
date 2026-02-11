"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-black text-white rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                    {/* Info Side */}
                    <div className="lg:w-2/5 p-8 sm:p-12 lg:p-16 bg-primary relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">Ready To Build?</h2>
                            <p className="text-white/80 mb-10 leading-relaxed font-medium">
                                Contact IronPeak Construction Group today for a comprehensive consultation and a clear, no-nonsense estimate for your next project.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/20 flex items-center justify-center rounded-sm">
                                        <Phone size={24} />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="block text-xs uppercase font-bold tracking-widest text-white/60 mb-1">Call Us</span>
                                        <span className="text-xl font-bold">(408) 555-0198</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/20 flex items-center justify-center rounded-sm">
                                        <Mail size={24} />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="block text-xs uppercase font-bold tracking-widest text-white/60 mb-1">Email Us</span>
                                        <span className="text-lg sm:text-xl font-bold break-all">info@ironpeakgroup.com</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/20 flex items-center justify-center rounded-sm">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="block text-xs uppercase font-bold tracking-widest text-white/60 mb-1">Location</span>
                                        <span className="text-xl font-bold">San Jose, California</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:w-3/5 p-12 lg:p-16">
                        <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">Request A Consultation</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:border-primary outline-none transition-all text-white font-medium"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:border-primary outline-none transition-all text-white font-medium"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">Service Type</label>
                                <select className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:border-primary outline-none transition-all text-white font-medium appearance-none">
                                    <option className="bg-black">Residential Construction</option>
                                    <option className="bg-black">Home Remodeling</option>
                                    <option className="bg-black">Commercial Build Out</option>
                                    <option className="bg-black">Design-Build</option>
                                    <option className="bg-black">Structural Work</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">Project Details</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 p-4 rounded-sm focus:border-primary outline-none transition-all text-white font-medium"
                                    placeholder="Tell us about your project goals..."
                                ></textarea>
                            </div>

                            <button className="bg-primary hover:bg-white hover:text-primary text-white font-black py-5 px-12 rounded-sm flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-sm w-full md:w-auto">
                                Submit Request
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
