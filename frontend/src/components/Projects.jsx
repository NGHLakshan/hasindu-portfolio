import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ChevronDown, ChevronUp } from 'lucide-react';

export const projects = [
    {
        title: 'AutoChek',
        role: 'Full-stack Developer',
        tools: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JS', 'AJAX', 'SMTP'],
        description: 'A professional marketplace platform designed to solve the "trust gap" in the used-vehicle market in Sri Lanka.',
        features: [
            'Intelligent Search with filters',
            'Real-time Instant Booking',
            'Digital Inspection Reports',
            'Secure Messaging Hub',
            'Verified Trust System',
            'Dedicated Dashboards',
        ],
        github: 'https://github.com/NGHLakshan/AutoChek',
        video: '/videos/autocheck-demo.mp4',
        color: 'from-blue-50 to-indigo-50',
        accent: 'bg-indigo-600',
        emoji: '🏎️',
    },
    {
        title: 'Medical Center Website',
        role: 'Front-end Developer',
        tools: ['HTML', 'CSS', 'JavaScript'],
        description: 'Built a responsive, user-friendly website for a medical center — including service listings, doctor profiles, and appointment forms.',
        features: [
            'Responsive Medical UI',
            'Doctor Profile Pages',
            'Appointment Booking',
            'Service Listings',
        ],
        github: 'https://github.com/NGHLakshan/Medical-Center',
        color: 'from-sky-50 to-indigo-50',
        accent: 'bg-sky-500',
        emoji: '🏥',
    },
    {
        title: 'Automotive Service Platform',
        role: 'Full-stack Developer',
        tools: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        description: 'Designed a responsive web platform for managing auto service bookings with user login, logout, and booking management capabilities.',
        features: [
            'Booking Management',
            'User Authentication',
            'Mobile-Friendly Design',
            'Service Dashboard',
        ],
        github: 'https://github.com/NGHLakshan/expert_garage',
        color: 'from-amber-50 to-orange-50',
        accent: 'bg-amber-500',
        emoji: '🚗',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
    }),
};

const ProjectCard = ({ project, i, isExpanded, onToggle }) => {

    return (
        <motion.div
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-2xl shadow-slate-100 transition-all duration-500"
        >
            {/* Project Banner */}
            <div className={`bg-gradient-to-br ${project.color} h-52 flex items-center justify-center relative overflow-hidden`}>
                <span className="text-7xl transition-transform duration-500 group-hover:scale-110">
                    {project.emoji}
                </span>
                <div className="absolute top-4 right-4">
                    <span className={`${project.accent} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                        {project.role}
                    </span>
                </div>
            </div>

            {/* Floating GitHub Icon */}
            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-[calc(100%-13rem-1.25rem)] right-5 z-10 w-10 h-10 rounded-xl bg-white shadow-lg border border-slate-100 text-slate-500 hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center"
            >
                <Github size={18} />
            </a>

            {/* Content */}
            <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">{project.title}</h3>
                </div>

                {/* Additional Data Button */}
                <button
                    onClick={() => onToggle(i)}
                    className="flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-slate-600 transition-colors mb-4 group/btn"
                >
                    <span>{isExpanded ? 'Hide Details' : 'Additional Data'}</span>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="bg-slate-100 p-1 rounded-md group-hover/btn:bg-slate-200"
                    >
                        <ChevronDown size={14} />
                    </motion.div>
                </button>

                {/* Expanded Details (Animated) */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                        >
                            <div className="pt-4 border-t border-slate-100 space-y-4">
                                {/* Preview Video */}
                                {project.video && (
                                    <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 aspect-video mb-4 shadow-inner">
                                        <video
                                            controls
                                            playsInline
                                            className="w-full h-full object-contain mx-auto"
                                        >
                                            <source src={project.video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                )}

                                {/* Description */}
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Features List */}
                                <div className="space-y-2 py-3 px-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <h4 className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Key Features</h4>
                                    <div className="flex flex-col gap-2">
                                        {project.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                                                <div className={`w-1.5 h-1.5 rounded-full ${project.accent}`} />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="space-y-2">
                                    <h4 className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tools.map((tool) => (
                                            <span key={tool} className="skill-pill text-xs">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (i) => {
        setExpandedIndex(prev => (prev === i ? null : i));
    };
    return (
        <section id="projects" className="section-padding bg-slate-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="section-tag">💻 Portfolio</span>
                    <h2 className="heading-font text-4xl md:text-5xl font-black text-slate-900 mt-2">
                        Featured Projects
                    </h2>
                    <p className="text-slate-500 mt-4 max-w-xl mx-auto">
                        Here are some of the projects I'm most proud of. Each one was built with a focus on clean UI and solid functionality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} i={i} isExpanded={expandedIndex === i} onToggle={handleToggle} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
