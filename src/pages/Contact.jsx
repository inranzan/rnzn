import { motion } from 'motion/react'; // eslint-disable-line no-unused-vars
import Footer from '../components/Footer';

export default function Contact() {
    const EMAIL_ADDRESS = "ranzan.in@zohomail.in"
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[1200px] mx-auto px-6 md:px-12 pt-48 pb-12 flex flex-col justify-between h-full min-h-[100svh]"
        >
            {/* Main CTA Area */}
            <div className="flex flex-col items-center justify-center flex-grow text-center space-y-6">
                <a className="group relative inline-block" href={`mailto:${EMAIL_ADDRESS}`}>
                    <h2 className="text-[32px] md:text-[40px] font-normal tracking-wide text-text-main dark:text-surface-light group-hover:text-primary transition-colors duration-300 link-underline pb-4">
                        Start a conversation.
                    </h2>
                </a>
                <a className="text-[14px] text-text-muted hover:text-primary transition-colors duration-300" href={`mailto:${EMAIL_ADDRESS}`}>
                    {EMAIL_ADDRESS}
                </a>
            </div>

            <Footer />
        </motion.section>
    );
}
