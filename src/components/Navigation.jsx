import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data';

export default function Navigation() {
    const location = useLocation();

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-surface-light/80 backdrop-blur-md px-8 py-3 rounded-full border border-text-muted/10 shadow-sm flex items-center gap-8">
                {NAV_LINKS.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                        <Link 
                            key={link.path} 
                            to={link.path}
                            className={`text-[12px] font-medium uppercase tracking-wider transition-colors relative group ${isActive ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'}`}
                        >
                            {link.label}
                            <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    );
}
