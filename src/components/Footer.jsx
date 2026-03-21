import { SOCIAL_LINKS } from '../data';

export default function Footer() {
    return (
        <footer className="mt-32 pt-8 border-t border-surface flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            {/* Colophon */}
            <div className="text-[11px] uppercase tracking-[0.1em] text-text-muted order-2 md:order-1">
                © {new Date().getFullYear()}
            </div>
            {/* Social Links */}
            <nav className="flex items-center gap-8 order-1 md:order-2">
                {SOCIAL_LINKS.map(link => (
                    <a 
                        key={link.label}
                        className="text-[11px] uppercase tracking-[0.1em] text-text-muted hover:text-primary transition-colors duration-300"
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
        </footer>
    );
}
