import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
    {
        role: 'Data Administrator Intern',
        company: 'Neuratech (Pvt) Ltd',
        period: 'August 2025 – Present',
        location: 'Sri Lanka',
        description: 'Responsible for data management, automation, and reporting. Handling data scraping, cleaning, and validation to support data-driven decision making.',
        tags: ['Python', 'Power BI', 'Excel', 'SQL'],
        current: true,
    },
];

const educations = [
    {
        degree: 'Bachelor of Science (Hons) in Information Systems',
        school: 'Rajarata University of Sri Lanka',
        period: '2021 – Present',
        location: 'Sri Lanka',
        tags: ['Information Systems', 'Databases', 'Software Engineering'],
        current: true,
    },
];

const TimelineCard = ({ item, index, isEdu }) => (
    <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="relative pl-8 pb-10 last:pb-0"
    >
        {/* Connecting line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400 to-emerald-100" />
        {/* Dot */}
        <div className="absolute left-0 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-md shadow-emerald-200" />

        <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-xl shadow-sm transition-all duration-300">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-slate-900">{isEdu ? item.degree : item.role}</h3>
                {item.current && (
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Current
                    </span>
                )}
            </div>

            <p className="text-emerald-600 font-semibold text-sm mb-3">{isEdu ? item.school : item.company}</p>

            <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-4">
                <span className="flex items-center gap-1.5"><Calendar size={12} /> {item.period}</span>
                <span className="flex items-center gap-1.5"><MapPin size={12} /> {item.location}</span>
            </div>

            {item.description && (
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.description}</p>
            )}

            <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                    <span key={tag} className="skill-pill">{tag}</span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Experience = () => {
    return (
        <section id="experience" className="section-padding bg-slate-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="section-tag">🚀 Journey</span>
                    <h2 className="heading-font text-4xl md:text-5xl font-black text-slate-900 mt-2">
                        Experience & Education
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Experience */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-200">
                                <Briefcase size={18} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Work Experience</h3>
                        </div>
                        {experiences.map((exp, i) => (
                            <TimelineCard key={i} item={exp} index={i} isEdu={false} />
                        ))}
                    </div>

                    {/* Education */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-md shadow-sky-200">
                                <span className="text-xl">🎓</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Education</h3>
                        </div>
                        {educations.map((edu, i) => (
                            <TimelineCard key={i} item={edu} index={i} isEdu={true} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
