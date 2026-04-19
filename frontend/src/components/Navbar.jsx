import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience & Education', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/60 border-b border-slate-100'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-md shadow-emerald-300/40 group-hover:shadow-emerald-400/60 transition-all">
                            <span className="text-white font-black text-sm">HL</span>
                        </div>
                        <span className="text-xl font-black text-slate-900 tracking-tight">Hasindu<span className="text-emerald-500">.</span></span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setActive(link.name)}
                                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${active === link.name
                                    ? 'text-emerald-600 bg-emerald-50'
                                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Social icons + CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="https://github.com/NGHLakshan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://linkedin.com/in/hasindu-lakshan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="ml-2 px-5 py-2 bg-emerald-500 text-white text-sm font-semibold rounded-full hover:bg-emerald-600 shadow-md shadow-emerald-300/40 hover:shadow-emerald-400/60 transition-all"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 transition-all"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-slate-100"
                    >
                        <div className="px-6 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => { setIsOpen(false); setActive(link.name); }}
                                    className="block px-4 py-3 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl font-medium transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="block mt-2 text-center px-4 py-3 bg-emerald-500 text-white rounded-xl font-semibold"
                            >
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
