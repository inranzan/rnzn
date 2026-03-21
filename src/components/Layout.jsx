import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';

export default function Layout() {
    return (
        <div className="min-h-[100svh] relative selection:bg-primary/20 bg-background-light dark:bg-background-dark text-text-main dark:text-surface-light font-display flex flex-col antialiased w-full overflow-x-hidden transition-colors duration-500">
            <Navigation />
            <ThemeToggle />
            <div className="flex-1 w-full flex flex-col relative h-full">
                <Outlet />
            </div>
        </div>
    );
}
