import { Home, HardHat, Building2, Layout, Layers, Briefcase, LucideIcon } from "lucide-react";

export interface ServiceDetail {
    title: string;
    description: string;
}

export interface Service {
    slug: string;
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
    detailedContent: {
        heading: string;
        paragraphs: string[];
        features: string[];
        benefits: string[];
        processTitle?: string;
        processSteps?: { title: string; description: string }[];
    };
}

export const services: Service[] = [
    {
        slug: "residential-construction",
        title: "Residential Construction",
        description: "Custom new home construction tailored to your vision. We handle everything from groundbreaking to the final walkthrough.",
        icon: Home,
        href: "/services/residential-construction",
        detailedContent: {
            heading: "Building Your Dream Home with Precision and Care",
            paragraphs: [
                "At IronPeak Construction Group, we believe that your home should be a reflection of your lifestyle, taste, and aspirations. Our residential construction services are designed to bring your vision to life, from the initial concept to the final, flawless execution.",
                "We specialize in custom home builds, ensuring every detail is meticulously planned and constructed. Our team of experienced professionals works closely with you to understand your needs, offering expert guidance and unparalleled craftsmanship throughout the entire process."
            ],
            features: [
                "Custom Home Design & Build",
                "Site Preparation & Foundation",
                "Framing & Structural Work",
                "High-End Finishes & Details",
                "Energy-Efficient Solutions",
                "Landscaping & Outdoor Living Spaces"
            ],
            benefits: [
                "Personalized approach tailored to your unique requirements.",
                "Transparent communication and regular progress updates.",
                "Strict adherence to timelines and budget constraints.",
                "Use of premium materials for lasting durability and aesthetics."
            ],
            processTitle: "Our Residential Construction Process",
            processSteps: [
                { title: "Consultation & Design", description: "We start by understanding your vision, budget, and timeline, then collaborate with architects to create a comprehensive design." },
                { title: "Pre-Construction Planning", description: "Obtaining necessary permits, finalizing materials, and establishing a detailed project schedule." },
                { title: "Construction Phase", description: "Our skilled crews begin the build, ensuring quality control at every stage from foundation to roof." },
                { title: "Final Walkthrough & Handover", description: "A thorough inspection to ensure everything meets our high standards before handing over the keys to your new home." }
            ]
        }
    },
    {
        slug: "home-remodeling",
        title: "Home Remodeling",
        description: "Transform your existing space with our expert renovation services. Specialized in kitchens, bathrooms, and full-home refreshes.",
        icon: HardHat,
        href: "/services/home-remodeling",
        detailedContent: {
            heading: "Breathing New Life into Your Existing Space",
            paragraphs: [
                "Whether you're looking to update a single room or undertake a complete home transformation, IronPeak's remodeling services offer the expertise and vision to elevate your living environment.",
                "We understand the complexities of renovating existing structures. Our approach minimizes disruption to your daily life while maximizing the potential of your home, blending modern aesthetics with functional design."
            ],
            features: [
                "Kitchen Renovations",
                "Bathroom Upgrades",
                "Basement Finishing",
                "Room Additions & Expansions",
                "Exterior Makeovers",
                "Whole-Home Restorations"
            ],
            benefits: [
                "Increased property value and enhanced curb appeal.",
                "Improved functionality and flow of your living spaces.",
                "Modernized aesthetics that reflect current design trends.",
                "Upgraded energy efficiency and comfort."
            ]
        }
    },
    {
        slug: "commercial-build-outs",
        title: "Commercial Build Outs",
        description: "Professional construction for retail, office, and restaurant spaces. We deliver functional, high-impact commercial environments.",
        icon: Building2,
        href: "/services/commercial-build-outs",
        detailedContent: {
            heading: "Creating Impactful Commercial Environments",
            paragraphs: [
                "Your commercial space is a critical component of your business's success. IronPeak Construction Group specializes in delivering commercial build-outs that optimize functionality, enhance brand identity, and create welcoming environments for both employees and customers.",
                "From sleek corporate offices to dynamic retail stores and innovative restaurants, our team has the experience to handle complex commercial projects with strict adherence to industry standards and commercial building codes."
            ],
            features: [
                "Office Space Renovations",
                "Retail Store Build-Outs",
                "Restaurant & Hospitality Construction",
                "Medical & Dental Office Upgrades",
                "Warehouse & Industrial Modifications",
                "Tenant Improvements (TI)"
            ],
            benefits: [
                "Optimized layouts for maximum operational efficiency.",
                "Compliance with all ADA and local commercial building codes.",
                "Enhanced brand image through custom design elements.",
                "Minimal downtime to ensure your business stays running smoothly."
            ]
        }
    },
    {
        slug: "design-build-services",
        title: "Design-Build Services",
        description: "A streamlined approach that integrates design and construction. One point of contact, faster delivery, and better value.",
        icon: Layout,
        href: "/services/design-build-services",
        detailedContent: {
            heading: "Seamless Integration from Concept to Completion",
            paragraphs: [
                "The Design-Build approach at IronPeak Construction Group simplifies the complexities of construction by providing a single point of responsibility. We integrate the design and construction phases, fostering collaboration and efficiency from day one.",
                "This unified workflow eliminates the traditional friction between designers and builders, resulting in faster project delivery, tighter cost control, and a more cohesive final product that perfectly aligns with your initial vision."
            ],
            features: [
                "Single-Source Responsibility",
                "Collaborative Design Process",
                "Value Engineering",
                "Streamlined Communication",
                "Accelerated Project Schedules",
                "Comprehensive Risk Management"
            ],
            benefits: [
                "Reduced administrative burden on the client.",
                "Earlier realization of construction costs and budget alignment.",
                "Fewer change orders and unexpected delays.",
                "Enhanced teamwork and a unified project goal."
            ]
        }
    },
    {
        slug: "structural-concrete",
        title: "Structural & Concrete",
        description: "Solid foundations for lasting structures. Specialized in foundation repair, retaining walls, and seismic retrofitting.",
        icon: Layers,
        href: "/services/structural-concrete",
        detailedContent: {
            heading: "The Bedrock of Enduring Construction",
            paragraphs: [
                "The integrity of any building relies entirely on its structural foundation. IronPeak provides specialized structural and concrete services, ensuring that every project rests on a solid, unyielding base designed to withstand the test of time and environmental forces.",
                "Our expertise encompasses everything from pouring robust new foundations to intricate repairs and critical seismic upgrades. We employ rigorous engineering standards and advanced techniques to guarantee structural safety and longevity."
            ],
            features: [
                "New Foundation Pouring & Design",
                "Foundation Repair & Underpinning",
                "Retaining Wall Construction",
                "Seismic Retrofitting & Upgrades",
                "Concrete Flatwork & Slabs",
                "Structural Steel Integration"
            ],
            benefits: [
                "Peace of mind knowing your structure is secure and compliant.",
                "Protection against earthquakes and soil shifting.",
                "Long-lasting durability that minimizes future maintenance costs.",
                "Expert execution of complex engineering requirements."
            ]
        }
    },
    {
        slug: "project-management",
        title: "Project Management",
        description: "Expert consulting and oversight for your construction projects. We ensure everything stays on schedule and within budget.",
        icon: Briefcase,
        href: "/services/project-management",
        detailedContent: {
            heading: "Navigating Complexity with Expert Oversight",
            paragraphs: [
                "Construction projects are inherently complex, involving numerous moving parts, varied stakeholders, and strict regulatory requirements. IronPeak's Project Management services provide the leadership and organization necessary to navigate these complexities successfully.",
                "We act as your dedicated advocate, overseeing every aspect of the project from inception to completion. Our meticulous planning, proactive problem-solving, and rigorous quality control ensure that your project is delivered on time, within budget, and to the highest standards of excellence."
            ],
            features: [
                "Comprehensive Project Planning & Scheduling",
                "Budget Formulation & Cost Management",
                "Contractor & Vendor Coordination",
                "Quality Assurance & Control",
                "Risk Assessment & Mitigation",
                "Permitting & Regulatory Compliance Updates"
            ],
            benefits: [
                "Clear visibility and control over project progress.",
                "Early identification and resolution of potential issues.",
                "Optimized resource allocation and cost savings.",
                "Reduced stress and administrative burden for the client."
            ]
        }
    }
];

export const getServiceBySlug = (slug: string) => {
    return services.find(service => service.slug === slug);
};

export const getOtherServices = (currentSlug: string) => {
    return services.filter(service => service.slug !== currentSlug);
};
