import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { projects } from './Projects';
import { categories } from './Skills';

// --- EDIT THESE TO UPDATE YOUR BADGES ---
const heroData = {
    experience: {
        label: 'Experience',
        value: 'Data Admin Intern',
        emoji: '💼'
    },
    university: {
        label: 'University',
        value: 'Rajarata Uni',
        emoji: '🎓'
    }
};

const TypewriterText = ({ words }) => {
    const [index, setIndex] = React.useState(0);
    const [subIndex, setSubIndex] = React.useState(0);
    const [reverse, setReverse] = React.useState(false);

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 1200);
            return;
        }
        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((i) => (i + 1) % words.length);
            return;
        }
        const timeout = setTimeout(() => {
            setSubIndex((s) => s + (reverse ? -1 : 1));
        }, reverse ? 60 : 100);
        return () => clearTimeout(timeout);
    }, [subIndex, reverse, index, words]);

    return (
        <span className="gradient-text">
            {words[index].substring(0, subIndex)}
        </span>
    );
};

const StatCard = ({ value, label, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="flex flex-col items-center text-center p-4"
    >
        <span className="text-3xl font-black gradient-text">{value}</span>
        <span className="text-xs text-slate-500 font-medium mt-1">{label}</span>
    </motion.div>
);

const Hero = () => {
    // Dynamically calculate stats based on imported data
    const projectCount = projects.length;
    const totalSkills = categories.reduce((acc, cat) => acc + cat.skills.length, 0);

    const stats = [
        { value: '4th', label: 'Year Student' },
        { value: `${projectCount}+`, label: 'Projects Built' },
        { value: `${totalSkills}+`, label: 'Skills & Tools' },
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: '5rem' }}>
            {/* Decorative orbs */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-300/20 to-teal-300/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-sky-300/10 to-emerald-300/10 rounded-full blur-3xl pointer-events-none" />

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)',
                backgroundSize: '40px 40px',
            }} />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="heading-font text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mt-4 mb-4"
                        >
                            Hi, I'm<br />
                            <div className="min-h-[1.2em] flex items-center justify-center lg:justify-start">
                                <TypewriterText words={['Hasindu Lakshan', 'a Developer', 'a Data Analyst']} />
                            </div>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg text-slate-500 max-w-xl leading-relaxed mb-10 mx-auto lg:mx-0"
                        >
                            Information Systems undergraduate at Rajarata University of Sri Lanka.
                            Passionate about building modern web solutions and driving data-driven decisions.
                        </motion.p>

                        {/* Social Icons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-4 mt-10 justify-center lg:justify-start"
                        >
                            <span className="text-xs text-slate-400 font-medium">Find me on</span>
                            <div className="flex gap-3">
                                <a href="https://github.com/NGHLakshan" target="_blank" rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 transition-all shadow-md">
                                    <Github size={16} />
                                </a>
                                <a href="https://linkedin.com/in/hasindu-lakshan" target="_blank" rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:bg-[#005f91] transition-all shadow-md">
                                    <Linkedin size={16} />
                                </a>
                                <a href="mailto:nghlakshan22@gmail.com"
                                    className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 transition-all shadow-md">
                                    <Mail size={16} />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right — Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                        className="flex-shrink-0"
                    >
                        <div className="relative">
                            <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 p-1.5 shadow-2xl shadow-emerald-300/40">
                                <div className="w-full h-full rounded-full bg-slate-200 overflow-hidden">
                                    <img
                                        src="/profile.jpg"
                                        alt="Hasindu Lakshan"
                                        className="w-full h-full object-cover"
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                </div>
                            </div>

                            {/* Floating badge — experience */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
                            >
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                                    <span className="text-lg">{heroData.experience.emoji}</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-medium">{heroData.experience.label}</p>
                                    <p className="text-sm font-bold text-slate-900">{heroData.experience.value}</p>
                                </div>
                            </motion.div>

                            {/* Floating badge — university */}
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                                className="absolute -top-2 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
                            >
                                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
                                    <span className="text-lg">{heroData.university.emoji}</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-medium">{heroData.university.label}</p>
                                    <p className="text-sm font-bold text-slate-900">{heroData.university.value}</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Quick stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="mt-20 grid grid-cols-3 md:grid-cols-3 gap-4 border-t border-slate-200 pt-8 max-w-lg mx-auto lg:mx-0"
                >
                    {stats.map((stat, i) => (
                        <StatCard key={i} value={stat.value} label={stat.label} delay={0.8 + i * 0.1} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
