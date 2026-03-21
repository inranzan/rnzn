import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react'; // eslint-disable-line no-unused-vars
import { PROJECTS } from '../data';

export default function Work() {
    const [activeImage, setActiveImage] = useState(PROJECTS[0].desktopImage);

    // Page variants
    const pageVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.8 } },
        exit: { opacity: 0 }
    };

    return (
        <motion.main 
            variants={pageVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex-1 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24 relative min-h-[100svh]"
        >
            {/* Left Side: Editorial Anchor */}
            <div className="hidden lg:block absolute left-12 top-48 origin-top-left -rotate-90">
                <span className="text-[11px] uppercase tracking-[0.1em] text-text-muted font-medium">02 / ARCHIVE</span>
            </div>

            <div className="flex flex-col lg:flex-row justify-between relative gap-16 lg:ml-16 mt-24">
                {/* Mobile Heading */}
                <div className="lg:hidden mb-8">
                    <span className="text-[11px] uppercase tracking-[0.1em] text-text-muted font-medium">02 / ARCHIVE</span>
                </div>

                {/* Left Column: Project List */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    {PROJECTS.map((project) => (
                        <a 
                            key={project.id}
                            href="#" 
                            className="group hover-trigger block py-10 border-b border-border-color cursor-default relative z-10"
                            onMouseEnter={() => setActiveImage(project.desktopImage)}
                        >
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                                <h2 className="text-2xl font-normal hover-shift-target text-text-main dark:text-surface-light">
                                    {project.title}
                                </h2>
                                <div className="flex gap-2 items-center hover-shift-target flex-wrap mt-2 sm:mt-0">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[11px] uppercase tracking-widest text-text-muted font-medium px-3 py-1 rounded-full border border-border-color bg-surface/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Inline Image */}
                            <div className="lg:hidden mt-6 h-[300px] w-full rounded-full overflow-hidden relative warm-wash">
                                <img 
                                    alt={project.title} 
                                    className="w-full h-full object-cover grayscale"
                                    src={project.image} 
                                />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Right Column: Image Reveal Canvas (Desktop Only) */}
                <div className="hidden lg:flex w-1/2 justify-end items-center sticky top-24 h-[calc(100vh-12rem)] pointer-events-none z-0">
                    <div className="w-[400px] h-[500px] rounded-[100px] bg-surface relative overflow-hidden warm-wash">
                        {/* Base Placeholder */}
                        <div className="absolute inset-0 bg-surface flex items-center justify-center">
                            <span className="material-symbols-outlined text-text-muted/30" style={{ fontSize: '48px' }}>texture</span>
                        </div>
                        
                        <AnimatePresence mode="wait">
                            <motion.img 
                                key={activeImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                alt="Project Preview"
                                className="absolute inset-0 w-full h-full object-cover grayscale"
                                src={activeImage} 
                            />
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.main>
    );
}
