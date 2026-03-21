import { motion } from 'motion/react'; // eslint-disable-line no-unused-vars
import { MANIFESTO_PARAGRAPHS, MANIFESTO_SIGNATURE } from '../data';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    },
    exit: { opacity: 0 }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function About() {
    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex flex-col relative pt-48 pb-32 h-full min-h-[100svh] w-full max-w-[1200px] mx-auto"
        >
            <div className="flex flex-col md:flex-row flex-1">
                {/* Left Vertical Label (Desktop) */}
                <aside className="hidden md:flex w-64 flex-shrink-0 relative">
                    <div className="sticky top-1/3 h-fit left-10">
                        <motion.p variants={itemVariants} className="text-text-muted text-[11px] font-medium uppercase tracking-widest vertical-text">
                            01 / MANIFESTO
                        </motion.p>
                    </div>
                </aside>

                {/* Mobile Label */}
                <div className="md:hidden px-6 mb-12">
                    <motion.p variants={itemVariants} className="text-text-muted text-[11px] font-medium uppercase tracking-widest">
                        01 / MANIFESTO
                    </motion.p>
                </div>

                {/* Prose Block */}
                <article className="px-6 md:px-0 max-w-2xl w-full flex flex-col justify-center">
                    <h1 className="sr-only">Engineering Manifesto</h1>
                    <div className="space-y-8 text-[18px] text-text-main dark:text-surface-light leading-[2.0] font-normal tracking-wide">
                        {MANIFESTO_PARAGRAPHS.map((text, idx) => (
                            <motion.p key={idx} variants={itemVariants}>
                                {text}
                            </motion.p>
                        ))}
                    </div>

                    {/* Signature */}
                    <motion.div variants={itemVariants} className="mt-16 flex justify-end">
                        <p className="text-[14px] italic text-primary/80 font-light">
                            {MANIFESTO_SIGNATURE}
                        </p>
                    </motion.div>
                </article>
            </div>
        </motion.div>
    );
}
