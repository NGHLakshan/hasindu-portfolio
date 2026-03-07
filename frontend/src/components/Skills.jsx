import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code2, PenTool, Database, Layout, PieChart,
    Briefcase, Server, X, Github, Play, Pause, Volume2, VolumeX, Maximize2,
} from 'lucide-react';

// ─── VIDEO FILES ────────────────────────────────────────────────────────────
// Drop your .mp4 / .mov / .webm files into:
//   frontend/public/videos/
//   Or you can add a Google Drive link using the 'link' property.
//   If using 'link', provide an optional 'thumbnail' image path for the preview.
const myVideos = [
    {
        src: 'c:\\Users\\Hasindu\\Desktop\\protpolyo\\frontend\\public\\videos\\AI-Voice-5.mp4',
        title: 'AI Voice',
        description: 'BITCODE',
    },
    {
        src: '/videos/video2.mp4',
        title: 'Edit 2',
        description: 'Cinematic color grade',
    },
    {
        src: '/videos/video2.mp4',
        title: 'Edit 2',
        description: 'Cinematic color grade',
    },
    {
        src: '/videos/video2.mp4',
        title: 'Edit 2',
        description: 'Cinematic color grade',
    },
    // Add more entries here:
    // { src: '/videos/my-edit.mp4', title: 'My Edit', description: '...' },
    // { link: 'https://drive.google.com/file/d/...', thumbnail: '/images/thumb1.jpg', title: 'Drive Video', description: '...' },
];

// ─── SKILL CATEGORIES ───────────────────────────────────────────────────────
export const categories = [
    {
        icon: Code2,
        title: 'Programming',
        color: 'text-violet-500 bg-violet-50',
        accent: '#7c3aed',
        skills: ['HTML', 'CSS', 'PHP', 'Python', 'JavaScript'],
        description: 'Core languages I use to build everything from static pages to dynamic full-stack applications.',
        proficiency: 85,
        relatedProjects: [
            {
                title: 'Medical Center Website',
                desc: 'Responsive site with service listings, doctor profiles & appointment forms.',
                github: 'https://github.com/NGHLakshan/Medical-Center',
                tags: ['HTML', 'CSS', 'JavaScript'],
                emoji: '🏥',
            },
            {
                title: 'Automotive Service Platform',
                desc: 'Full-stack booking platform with user auth and management dashboard.',
                github: 'https://github.com/NGHLakshan/expert_garage',
                tags: ['PHP', 'MySQL', 'JavaScript'],
                emoji: '🚗',
            },
        ],
    },
    {
        icon: Database,
        title: 'Databases',
        color: 'text-sky-500 bg-sky-50',
        accent: '#0284c7',
        skills: ['MySQL', 'PostgreSQL', 'SQLite'],
        description: 'Experienced in designing schemas, writing optimised queries, and managing relational databases.',
        proficiency: 75,
        relatedProjects: [
            {
                title: 'Automotive Service Platform',
                desc: 'MySQL database managing users, bookings, expert profiles, and reports.',
                github: 'https://github.com/NGHLakshan/expert_garage',
                tags: ['MySQL'],
                emoji: '🚗',
            },
        ],
    },
    {
        icon: Layout,
        title: 'Frameworks',
        color: 'text-emerald-600 bg-emerald-50',
        accent: '#059669',
        skills: ['React', 'FastAPI', 'Angular', 'Flutter'],
        description: 'Building modern UIs with React and fast APIs with FastAPI — always picking the right tool for the job.',
        proficiency: 70,
        relatedProjects: [
            {
                title: 'This Portfolio',
                desc: 'Personal portfolio built with React, Framer Motion and Tailwind CSS.',
                github: 'https://github.com/NGHLakshan',
                tags: ['React'],
                emoji: '💼',
            },
        ],
    },
    {
        icon: PenTool,
        title: 'Design Tools',
        color: 'text-pink-500 bg-pink-50',
        accent: '#ec4899',
        skills: ['Figma', 'Photoshop', 'Illustrator', 'Premiere Pro', 'Canva'],
        description: 'From wireframing in Figma to editing in Premiere Pro — I handle the full creative pipeline for digital content.',
        proficiency: 80,
        hasVideoGallery: true,          // ← enables the video tab in modal
        relatedProjects: [
            {
                title: 'Graphic Design Work',
                desc: 'Posters, thumbnails and social media visuals made with Photoshop & Illustrator.',
                github: null,
                tags: ['Photoshop', 'Illustrator'],
                emoji: '🎨',
            },
        ],
    },
    {
        icon: PieChart,
        title: 'Data & Analytics',
        color: 'text-amber-500 bg-amber-50',
        accent: '#f59e0b',
        skills: ['Power BI', 'MATLAB', 'SPSS', 'Excel (Advanced)'],
        description: 'Turning raw data into clear insights through visualisation, statistical analysis, and reporting tools.',
        proficiency: 65,
        relatedProjects: [],
    },
    {
        icon: Briefcase,
        title: 'Management',
        color: 'text-rose-500 bg-rose-50',
        accent: '#f43f5e',
        skills: ['SDLC', 'HR Management', 'Leadership', 'Strategic Planning'],
        description: 'Strong foundation in project management methodologies and team leadership.',
        proficiency: 70,
        relatedProjects: [],
    },
    {
        icon: Server,
        title: 'Dev Tools',
        color: 'text-slate-600 bg-slate-100',
        accent: '#475569',
        skills: ['VS Code', 'XAMPP', 'IntelliJ IDEA', 'Cisco Packet Tracer', 'Git'],
        description: 'Comfortable across a variety of development tools and environments for both front-end and back-end work.',
        proficiency: 82,
        relatedProjects: [],
    },
];

// ─── INLINE VIDEO PLAYER ────────────────────────────────────────────────────
const VideoPlayer = ({ video, onClose }) => {
    const ref = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [progress, setProgress] = useState(0);

    const toggle = () => {
        if (!ref.current) return;
        if (playing) { ref.current.pause(); setPlaying(false); }
        else { ref.current.play(); setPlaying(true); }
    };

    const onTimeUpdate = () => {
        if (!ref.current) return;
        setProgress((ref.current.currentTime / ref.current.duration) * 100 || 0);
    };

    const seek = (e) => {
        if (!ref.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const ratio = (e.clientX - rect.left) / rect.width;
        ref.current.currentTime = ratio * ref.current.duration;
    };

    const fullscreen = () => ref.current?.requestFullscreen?.();

    return (
        <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="relative w-full max-w-2xl rounded-2xl overflow-hidden bg-black shadow-2xl"
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Video */}
                <video
                    ref={ref}
                    src={video.src}
                    className="w-full aspect-video object-contain bg-black cursor-pointer"
                    onTimeUpdate={onTimeUpdate}
                    onClick={toggle}
                    onEnded={() => setPlaying(false)}
                    muted={muted}
                />

                {/* Controls bar */}
                <div className="bg-gray-900 px-4 py-3 flex items-center gap-3">
                    <button onClick={toggle} className="text-white hover:text-pink-400 transition-colors">
                        {playing ? <Pause size={18} /> : <Play size={18} />}
                    </button>

                    {/* Progress */}
                    <div
                        className="flex-1 h-1.5 bg-gray-700 rounded-full cursor-pointer group relative"
                        onClick={seek}
                    >
                        <div
                            className="h-full bg-pink-500 rounded-full transition-all pointer-events-none"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <button onClick={() => { setMuted(!muted); }} className="text-white hover:text-pink-400 transition-colors">
                        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                    <button onClick={fullscreen} className="text-white hover:text-pink-400 transition-colors">
                        <Maximize2 size={16} />
                    </button>
                    <button onClick={onClose} className="text-white hover:text-red-400 transition-colors ml-1">
                        <X size={16} />
                    </button>
                </div>

                {/* Title */}
                <div className="bg-gray-900 px-4 pb-3 -mt-1">
                    <p className="text-white font-bold text-sm">{video.title}</p>
                    <p className="text-gray-400 text-xs">{video.description}</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

// ─── VIDEO GALLERY (inside modal) ───────────────────────────────────────────
const VideoGallery = ({ accent }) => {
    const [active, setActive] = useState(null);

    if (myVideos.length === 0) {
        return (
            <div className="text-center py-6 text-slate-400 text-sm">
                No videos yet — drop your <code>.mp4</code> files into <code>public/videos/</code> and add entries to <code>myVideos</code> in Skills.jsx.
            </div>
        );
    }

    return (
        <>
            <div className="grid grid-cols-2 gap-3">
                {myVideos.map((v, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            if (v.link) {
                                window.open(v.link, '_blank', 'noopener,noreferrer');
                            } else {
                                setActive(v);
                            }
                        }}
                        className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-video flex items-center justify-center border border-slate-200 hover:border-pink-300 hover:shadow-lg transition-all"
                    >
                        {/* Thumbnail */}
                        {v.thumbnail ? (
                            <img src={v.thumbnail} className="absolute inset-0 w-full h-full object-cover" alt={v.title} />
                        ) : v.src ? (
                            <video
                                src={v.src}
                                className="absolute inset-0 w-full h-full object-cover"
                                preload="metadata"
                                muted
                            />
                        ) : null}
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                        <div
                            className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                            style={{ backgroundColor: accent }}
                        >
                            <Play size={16} className="text-white translate-x-0.5" />
                        </div>
                        {/* Label */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                            <p className="text-white text-xs font-semibold truncate">{v.title}</p>
                        </div>
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {active && <VideoPlayer video={active} onClose={() => setActive(null)} />}
            </AnimatePresence>
        </>
    );
};

// ─── SKILL MODAL ────────────────────────────────────────────────────────────
const SkillModal = ({ cat, onClose }) => {
    const [tab, setTab] = useState('overview'); // 'overview' | 'videos'

    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Backdrop */}
                <motion.div
                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    onClick={onClose}
                />

                {/* Panel */}
                <motion.div
                    className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
                    initial={{ opacity: 0, scale: 0.92, y: 24 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 24 }}
                    transition={{ type: 'spring', damping: 22, stiffness: 300 }}
                >
                    {/* Header */}
                    <div className="sticky top-0 bg-white z-10 flex items-start justify-between p-6 pb-4 border-b border-slate-100">
                        <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${cat.color}`}>
                                <cat.icon size={22} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-slate-900">{cat.title}</h3>
                                <p className="text-xs text-slate-400 mt-0.5">{cat.skills.length} skills</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                        >
                            <X size={16} className="text-slate-500" />
                        </button>
                    </div>

                    {/* Tabs (only shown for Design Tools) */}
                    {cat.hasVideoGallery && (
                        <div className="px-6 pt-4 flex gap-2">
                            {['overview', 'videos'].map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setTab(t)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all capitalize ${tab === t
                                        ? 'text-white border-transparent'
                                        : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
                                        }`}
                                    style={tab === t ? { backgroundColor: cat.accent, borderColor: cat.accent } : {}}
                                >
                                    {t === 'videos' ? '🎬 My Videos' : '📋 Overview'}
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="p-6 space-y-6">
                        {/* ── VIDEO TAB ── */}
                        {cat.hasVideoGallery && tab === 'videos' ? (
                            <VideoGallery accent={cat.accent} />
                        ) : (
                            <>
                                {/* Description */}
                                <p className="text-slate-600 leading-relaxed">{cat.description}</p>



                                {/* Skills pills */}
                                <div>
                                    <h4 className="text-sm font-bold text-slate-700 mb-3">Tools & Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                                                style={{ color: cat.accent, borderColor: cat.accent + '40', backgroundColor: cat.accent + '10' }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Related Projects */}
                                {cat.relatedProjects.length > 0 && (
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-700 mb-3">Related Projects</h4>
                                        <div className="space-y-3">
                                            {cat.relatedProjects.map((proj, i) => (
                                                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
                                                    <span className="text-2xl mt-0.5">{proj.emoji}</span>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center justify-between gap-2">
                                                            <p className="font-bold text-slate-900 text-sm truncate">{proj.title}</p>
                                                            {proj.github && (
                                                                <a href={proj.github} target="_blank" rel="noopener noreferrer"
                                                                    className="flex-shrink-0 p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-900 hover:text-white transition-all">
                                                                    <Github size={14} />
                                                                </a>
                                                            )}
                                                        </div>
                                                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{proj.desc}</p>
                                                        <div className="flex flex-wrap gap-1 mt-2">
                                                            {proj.tags.map((t) => (
                                                                <span key={t} className="text-xs px-2 py-0.5 bg-white border border-slate-200 rounded-full text-slate-500 font-medium">{t}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Hint to switch tab for Design Tools */}
                                {cat.hasVideoGallery && (
                                    <button
                                        onClick={() => setTab('videos')}
                                        className="w-full py-3 rounded-2xl border-2 border-dashed border-pink-200 text-pink-500 font-semibold text-sm hover:bg-pink-50 transition-colors flex items-center justify-center gap-2"
                                    >
                                        🎬 View my video edits →
                                    </button>
                                )}

                                {cat.relatedProjects.length === 0 && !cat.hasVideoGallery && (
                                    <div className="text-center py-4 text-slate-400 text-sm">No linked projects yet.</div>
                                )}
                            </>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────
const Skills = () => {
    const [selected, setSelected] = useState(null);

    return (
        <>
            <section id="skills" className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-tag">⚡ Capabilities</span>
                        <h2 className="heading-font text-4xl md:text-5xl font-black text-slate-900 mt-2">
                            Skills & Tools
                        </h2>
                        <p className="text-slate-500 mt-4 max-w-xl mx-auto">
                            A diverse skillset spanning development, design, data, and management — always learning, always growing.
                        </p>
                        <p className="text-slate-400 text-sm mt-2">Click any card to explore details →</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={cat.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07, duration: 0.5 }}
                                onClick={() => setSelected(cat)}
                                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                            >
                                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${cat.color} group-hover:scale-110 transition-transform duration-300`}>
                                    <cat.icon size={20} />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-3">{cat.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill) => (
                                        <span key={skill} className="skill-pill">{skill}</span>
                                    ))}
                                </div>
                                {cat.hasVideoGallery && (
                                    <p className="text-xs text-pink-400 mt-3 font-semibold">🎬 Includes video gallery</p>
                                )}
                                <p className="text-xs text-slate-400 mt-2 font-medium group-hover:text-slate-600 transition-colors">
                                    View details →
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {selected && <SkillModal cat={selected} onClose={() => setSelected(null)} />}
        </>
    );
};

export default Skills;
