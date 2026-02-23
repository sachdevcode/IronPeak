import { getServiceBySlug, getOtherServices } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ArrowRight, CheckCircle2, Layout } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    const otherServices = getOtherServices(service.slug);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Minimal Service Hero */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=2160"
                        alt="Construction Site Texture"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight size={14} />
                            <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
                            <ChevronRight size={14} />
                            <span className="text-primary">{service.title}</span>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-primary flex items-center justify-center">
                                <service.icon size={24} className="text-white" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
                                {service.title}
                            </h1>
                        </div>
                        <p className="text-xl text-gray-300 leading-relaxed font-medium">
                            {service.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content & Sidebar Layout */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                        {/* Left Column - Detailed Content */}
                        <div className="lg:w-2/3">
                            <h2 className="text-3xl md:text-4xl font-black text-black mb-8 leading-tight tracking-tight">
                                {service.detailedContent.heading}
                            </h2>

                            <div className="prose prose-lg text-gray-600 mb-12">
                                {service.detailedContent.paragraphs.map((paragraph, idx) => (
                                    <p key={idx} className="mb-6 leading-relaxed font-medium">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Features Grid */}
                            {service.detailedContent.features && (
                                <div className="mb-16">
                                    <div className="flex items-center gap-3 mb-8">
                                        <span className="w-8 h-[2px] bg-primary"></span>
                                        <h3 className="text-2xl font-black text-black uppercase tracking-tight">Key Features</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {service.detailedContent.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3 bg-muted p-4 border-l-4 border-primary">
                                                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                                                <span className="font-bold text-gray-800">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Benefits List */}
                            {service.detailedContent.benefits && (
                                <div className="mb-16">
                                    <div className="flex items-center gap-3 mb-8">
                                        <span className="w-8 h-[2px] bg-primary"></span>
                                        <h3 className="text-2xl font-black text-black uppercase tracking-tight">The IronPeak Advantage</h3>
                                    </div>
                                    <ul className="space-y-4">
                                        {service.detailedContent.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-center gap-4 border-b border-gray-100 pb-4">
                                                <div className="w-2 h-2 bg-primary shrink-0"></div>
                                                <span className="text-gray-600 font-medium">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Process Section (Optional based on data) */}
                            {service.detailedContent.processTitle && service.detailedContent.processSteps && (
                                <div>
                                    <div className="flex items-center gap-3 mb-8">
                                        <span className="w-8 h-[2px] bg-primary"></span>
                                        <h3 className="text-2xl font-black text-black uppercase tracking-tight">{service.detailedContent.processTitle}</h3>
                                    </div>
                                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                                        {service.detailedContent.processSteps.map((step, idx) => (
                                            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-white text-primary font-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                                    {idx + 1}
                                                </div>
                                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-muted">
                                                    <h4 className="font-black text-black mb-2">{step.title}</h4>
                                                    <p className="text-sm text-gray-500 font-medium">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="lg:w-1/3 space-y-12">
                            {/* Related Services Navigation */}
                            <div className="bg-muted p-8 border-t-4 border-primary shadow-sm">
                                <h3 className="text-xl font-black text-black mb-6 uppercase tracking-tight">Other Services</h3>
                                <div className="space-y-3">
                                    {otherServices.map((other, idx) => (
                                        <Link
                                            key={idx}
                                            href={other.href}
                                            className="group flex flex-col p-4 bg-white border border-gray-100 hover:border-primary transition-all duration-300"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors">{other.title}</span>
                                                <ArrowRight size={16} className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Sticky CTA Block */}
                            <div className="sticky top-24 bg-black p-8 text-center text-white">
                                <div className="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-6">
                                    <Layout size={32} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Ready to start?</h3>
                                <p className="text-gray-400 font-medium text-sm mb-8 leading-relaxed">
                                    Contact us today for a free consultation and let's discuss how we can bring your next project to life.
                                </p>
                                <a
                                    href="/#contact"
                                    className="block w-full bg-primary hover:bg-white hover:text-primary text-white font-black py-4 px-6 transition-all uppercase tracking-widest text-sm"
                                >
                                    Get a Quote
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
