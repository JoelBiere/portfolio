"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import ThemeToggle from "@/components/ThemeToggle";
import ImageWithPointer from "@/components/ImageWithPointer";
import ConnectWithMe from "@/components/ConnectWithMe";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import DeveloperRoles from "@/components/DeveloperRoles";
import AboutMe from "@/components/AboutMe";
import {Separator} from "@/components/ui/separator";
import ProjectsSection from "@/components/ProjectsSection";
import { Menu } from "lucide-react";

export default function Home() {
    const [isFlashing, setIsFlashing] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const getFlashClass = (sectionId: string) => {
        const sectionName = sectionId.replace('-section', '');
        return isFlashing === sectionName ? 'flash' : '';
    };

    const triggerFlash = (sectionName: string) => {
        setIsFlashing(""); // Reset
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setIsFlashing(sectionName);
            });
        });
        setTimeout(() => setIsFlashing(""), 1500);
    };

    const handleNavigation = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Get viewport width
            const viewportWidth = window.innerWidth;
            const isMobile = viewportWidth < 640; // matches Tailwind's 'sm' breakpoint

            // If it's the home section, just scroll to top
            if (sectionId === 'home-section') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                // For mobile, use native scrollIntoView with less offset
                if (isMobile) {
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - 20; // smaller offset for mobile

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                } else {
                    // For desktop, use the original behavior with more offset for the sticky header
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - 64; // larger offset for desktop

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }

            const sectionName = sectionId.replace('-section', '');
            triggerFlash(sectionName);
        }
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1);
            if (hash) {
                handleNavigation(hash);
            } else {
                triggerFlash('home');
            }
        };

        // Handle initial load
        if (window.location.hash) {
            handleHashChange();
        }

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <>
            <header
                className="bg-background text-foreground sticky top-0 z-50 border-b border-foreground/70 border-dashed">
                <div className="px-4 flex items-center justify-between h-10">
                    {/* Left section - Mobile Menu Button / Desktop Connect Button */}
                    <div className="flex items-center">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="sm:hidden -ml-2"
                        >
                            <Menu className="h-5 w-5"/>
                        </Button>
                        <div className="hidden sm:block">
                            <Button
                                variant="outline"
                                size="sm"
                                className="text-primary border-primary text-xs"
                                onClick={() => handleNavigation('connect-section')}
                            >
                                Connect!
                            </Button>
                        </div>
                    </div>

                    {/* Center section - Navigation */}
                    <div className="hidden sm:block">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        onClick={() => {
                                            window.scrollTo({top: 0, behavior: 'smooth'});
                                            triggerFlash('home');
                                        }}
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Home
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        onClick={() => handleNavigation('about-section')}
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        About Me
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        onClick={() => handleNavigation('projects-section')}
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Projects
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Right section - Theme Toggle */}
                    <div className="flex-shrink-0">
                        <ThemeToggle/>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="sm:hidden border-t border-foreground/10">
                        <nav className="flex flex-col space-y-2 p-4">
                            <button
                                className="text-left text-foreground hover:text-primary px-2 py-1"
                                onClick={() => {
                                    window.scrollTo({top: 0, behavior: 'smooth'});
                                    triggerFlash('home');
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                Home
                            </button>
                            <button
                                className="text-left text-foreground hover:text-primary px-2 py-1"
                                onClick={() => handleNavigation('about-section')}
                            >
                                About Me
                            </button>
                            <button
                                className="text-left text-foreground hover:text-primary px-2 py-1"
                                onClick={() => handleNavigation('projects-section')}
                            >
                                Projects
                            </button>
                            <Separator className="my-2"/>
                            <button
                                className="text-left text-primary hover:text-primary/80 px-2 py-1"
                                onClick={() => handleNavigation('connect-section')}
                            >
                                Connect!
                            </button>
                        </nav>
                    </div>
                )}
            </header>

            {/* Main content */}
            <main>
                <div className="grid grid-cols-4">
                    {/* Home section */}
                    <div
                        className={`
                        col-start-1 col-end-5 
                        flex flex-col items-center justify-center
                        px-4
                        ${getFlashClass('home-section')}
                    `}
                        style={{minHeight: "calc(100vh - 40px"}}
                        id="home-section"
                    >
                        <h1 className="text-4xl">Joel Biere </h1>
                        <p><span className="text-xs">(and fam)</span></p>
                        <ImageWithPointer/>
                        <DeveloperRoles/>
                    </div>

                    <div className="col-start-1 col-end-5">
                        <Separator/>
                    </div>

                    {/* About section */}
                    <div className="col-start-1 col-end-5 flex justify-center">
                        <AboutMe getFlashClass={getFlashClass}/>
                    </div>

                    <div className="col-start-1 col-end-5">
                        <Separator/>
                    </div>

                    {/* Projects section */}
                    <div className="col-start-1 col-end-5 flex justify-center">
                        <ProjectsSection getFlashClass={getFlashClass}/>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer>
                <div className="flex gap-6 flex-wrap items-center justify-center">
                    <div
                        className={`${getFlashClass('connect-section')}`}
                        id="connect-section"
                    >
                        <ConnectWithMe/>
                    </div>
                </div>
            </footer>
        </>
    );
}