import { motion } from 'motion/react'; // eslint-disable-line no-unused-vars
import { HOME_DATA } from '../data';

export default function Home() {
    return (
        <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-screen min-h-screen w-full flex items-center justify-center overflow-hidden"
        >
            {/* Left Text Block (Desktop) */}
            <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 z-10">
                <p className="writing-vertical text-[11px] font-medium uppercase tracking-[0.1em] text-text-muted">
                    {HOME_DATA.tagline}
                </p>
            </div>

            {/* Center Portrait */}
            <div className="relative w-[90vw] md:w-[50vw] lg:w-[30vw] h-[716px] lg:h-[819px] mx-auto z-0 transform transition-transform duration-700 ease-out hover:scale-[1.02]">
                {/* Subtle background placeholder to show before image loads */}
                <div className="absolute inset-0 bg-surface-light animate-pulse rounded-none"></div>
                <img 
                    alt="Portrait of a thoughtful developer" 
                    className="portrait-treatment relative z-10 w-full h-full rounded-none" 
                    src={HOME_DATA.portrait} 
                />
            </div>

            {/* Right Prose Block (Desktop) */}
            <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 z-10 max-w-[200px]">
                <p className="text-[14px] leading-relaxed text-text-primary dark:text-surface-light font-normal">
                    {HOME_DATA.prose}
                </p>
            </div>

            {/* Mobile Stacked Text */}
            <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-4 lg:hidden px-6 text-center z-10 pb-12">
                <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-muted">
                    {HOME_DATA.tagline}
                </p>
                <p className="text-[14px] leading-relaxed text-text-primary dark:text-surface-light font-normal max-w-xs mx-auto">
                    {HOME_DATA.prose}
                </p>
            </div>

            {/* Scroll Indicator (Subtle) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                <span className="text-[10px] uppercase tracking-widest text-text-muted">Scroll</span>
                <div className="w-[1px] h-8 bg-text-muted/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-text-muted animate-[translateY_2s_ease-in-out_infinite]"></div>
                </div>
            </div>
        </motion.main>
    );
}
