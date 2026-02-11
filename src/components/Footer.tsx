import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary flex items-center justify-center font-bold text-white text-xl">
                                IP
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tighter leading-none">IRONPEAK</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Construction Group</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Delivering high-quality residential and commercial construction services across the Bay Area since 2014. Built with strength and precision.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3 uppercase tracking-wider">Services</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Residential Construction</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Home Remodeling</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Commercial Build Outs</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Design Build Services</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Structural & Concrete</Link></li>
                        </ul>
                    </div>

                    {/* Service Area */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3 uppercase tracking-wider">Service Area</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li>San Jose, CA</li>
                            <li>Santa Clara, CA</li>
                            <li>Sunnyvale, CA</li>
                            <li>Palo Alto, CA</li>
                            <li>Fremont, CA</li>
                            <li>Bay Area Wide</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3 uppercase tracking-wider">Contact</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary mt-1 shrink-0" />
                                <span>San Jose, California</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary shrink-0" />
                                <a href="tel:4085550198" className="hover:text-white transition-colors">(408) 555-0198</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary shrink-0" />
                                <a href="mailto:info@ironpeakconstruction.com" className="hover:text-white transition-colors">info@ironpeakconstruction.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest font-medium">
                    <p>© {currentYear} IronPeak Construction Group. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
