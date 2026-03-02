import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Github, Linkedin } from 'lucide-react';

const contactLinks = [
    {
        icon: Mail,
        label: 'Email',
        value: 'nghlakshan22@gmail.com',
        href: 'mailto:nghlakshan22@gmail.com',
        color: 'bg-red-50 text-red-500 hover:bg-red-500 hover:text-white',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+94 71 776 8002',
        href: 'tel:+94717768002',
        color: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white',
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'github.com/NGHLakshan',
        href: 'https://github.com/NGHLakshan',
        color: 'bg-slate-100 text-slate-700 hover:bg-slate-800 hover:text-white',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'in/hasindu-lakshan',
        href: 'https://linkedin.com/in/hasindu-lakshan',
        color: 'bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white',
    },
];

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const emailjs = (await import('@emailjs/browser')).default;
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: form.name,
                    email: form.email,
                    title: form.subject,
                    message: form.message,
                    reply_to: form.email,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setSent(true);
            setForm({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSent(false), 5000);
        } catch (err) {
            console.error('EmailJS error:', err);
            setError('Oops! Something went wrong. Please try again or email me directly.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="section-padding bg-slate-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="section-tag">✉️ Get in Touch</span>
                    <h2 className="heading-font text-4xl md:text-5xl font-black text-slate-900 mt-2">
                        Let's Work Together
                    </h2>
                    <p className="text-slate-500 mt-4 max-w-xl mx-auto">
                        I'm always open to new opportunities and exciting projects. Feel free to reach out!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Contact Info cards */}
                    <div className="lg:col-span-2 space-y-4">
                        {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                                className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${color}`}>
                                    <Icon size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{label}</p>
                                    <p className="text-sm font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">{value}</p>
                                </div>
                            </motion.a>
                        ))}

                        {/* CTA block */}
                        <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                            <p className="text-lg font-bold mb-1">Open to Full-Time Roles</p>
                            <p className="text-emerald-100 text-sm leading-relaxed">
                                Looking for full-time positions in software development, data analytics, or IT management.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-3 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
                    >
                        {sent ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <span className="text-5xl mb-4">🎉</span>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                <p className="text-slate-500">Thanks for reaching out, I'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {[
                                        { id: 'name', label: 'Full Name', placeholder: 'John Doe', type: 'text' },
                                        { id: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email' },
                                    ].map(({ id, label, placeholder, type }) => (
                                        <div key={id}>
                                            <label htmlFor={id} className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
                                            <input
                                                id={id}
                                                name={id}
                                                type={type}
                                                value={form[id]}
                                                onChange={handleChange}
                                                placeholder={placeholder}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all text-sm"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-1.5">Subject</label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        value={form.subject}
                                        onChange={handleChange}
                                        placeholder="How can I help you?"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all text-sm"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows="5"
                                        placeholder="Tell me about your project or opportunity..."
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all text-sm resize-none"
                                    />
                                </div>

                                {error && (
                                    <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                                        {error}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full flex items-center justify-center gap-2 py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
