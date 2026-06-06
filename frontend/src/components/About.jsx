import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin, Mail, Phone } from 'lucide-react';

const infoItems = [
    { icon: User, label: 'Name', value: 'Hasindu Lakshan' },
    { icon: GraduationCap, label: 'Degree', value: 'BSc (Hons) Information Systems' },
    { icon: MapPin, label: 'Location', value: 'Sri Lanka' },
    { icon: Mail, label: 'Email', value: 'nghlakshan22@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+94 71 776 8002' },
];

const About = () => {
    return (
        <section id="about" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-2/5 flex justify-center"
                    >
                        <div className="relative">
                            {/* Main photo */}
                            <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/profile.jpg"
                                    alt="Hasindu Lakshan"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentNode.style.background = 'linear-gradient(135deg, #10b981, #0ea5e9)';
                                    }}
                                />
                                {/* Gradient overlay at bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                            </div>

                            {/* Decorative square behind the photo */}
                            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-emerald-200 -z-10" />

                            {/* Year badge */}
                            <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl px-5 py-3 text-center border border-slate-100">
                                <span className="block text-2xl font-black gradient-text">4th</span>
                                <span className="text-xs text-slate-400 font-medium">Year</span>
                            </div>

                            {/* Available badge */}
                            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2 border border-slate-100">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-xs font-semibold text-slate-700">Available for Hire</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-3/5"
                    >
                        <span className="section-tag">👤 About</span>
                        <h2 className="heading-font text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6">
                            Who I Am
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed mb-6">
                            Final year undergraduate in <strong className="text-slate-700">Information Systems</strong> at <strong className="text-slate-700">Rajarata University of Sri Lanka</strong> with work as a <strong className="text-slate-700">Data Administrator</strong> at <strong className="text-slate-700">Neuratech (Pvt) Ltd</strong>.
                        </p>
                        <p className="text-slate-500 leading-relaxed mb-6">
                            Skilled in data management, automation, and reporting using tools such as <strong className="text-slate-800">Python, Power BI, and Excel</strong>. Experienced in data scraping, cleaning, and validation to support data driven decision making.
                        </p>
                        <p className="text-slate-500 leading-relaxed mb-10">
                            Proficient in database handling, IT system maintenance, and documentation. Highly motivated to apply both technical and analytical skills to enhance system efficiency and organizational performance.
                        </p>

                        {/* Info cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {infoItems.map(({ icon: Icon, label, value }) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 transition-all group"
                                >
                                    <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all flex-shrink-0">
                                        <Icon size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">{label}</p>
                                        <p className="text-sm font-semibold text-slate-700 leading-tight">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
