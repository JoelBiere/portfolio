"use client"

import {
    NavigationMenu,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
     navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import ThemeToggle from "@/components/ThemeToggle";
import ImageWithPointer from "@/components/ImageWithPointer";
import ConnectWithMe from "@/components/ConnectWithMe";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";

export default function Home() {

    const [isFlashing, setIsFlashing] = useState("");

    const triggerFlash = (sectionName: string) => {
        setIsFlashing(""); // Reset
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setIsFlashing(sectionName);
            });
        });
        setTimeout(() => setIsFlashing(""), 1500); // Match animation duration
    };

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1);
            // Handle both empty hash (root) and section hashes
            const section = hash ? hash.replace('-section', '') : 'home';
            triggerFlash(section);
        };

        // Handle initial load
        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const handleLinkClicked = (section: string) => {
        const sectionName = section.replace('-section', '');
        triggerFlash(sectionName);
    };

    const getFlashClass = (sectionId: string) => {
        const sectionName = sectionId.replace('-section', '');
        return isFlashing === sectionName ? 'flash' : '';
    };

    return (
        <>
            <header
                className={`
                    bg-background text-foreground 
                    grid grid-cols-3 items-center 
                    min-h-10 max-h-10 
                    sticky top-0 z-50
                    border-b border-primary border-dashed
                `}>
                <div className={"col-start-1 ml-3"}>
                    <Button variant={"outline"}
                            size={"sm"}
                            className={"text-primary border-primary"}
                            onClick={()=>handleLinkClicked("connect-section")}
                    >
                        <a href={"#connect-section"} className={""}>Connect!</a>
                    </Button>
                </div>
                <div className={"col-start-2 flex justify-center"}>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink onClick={()=>handleLinkClicked("home-section")} href={"#home-section"} className={navigationMenuTriggerStyle()}>
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink onClick={()=>handleLinkClicked("about-section")} href={"#about-section"} className={navigationMenuTriggerStyle()}>
                                        About Me
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink onClick={()=>handleLinkClicked("projects-section")} href={"#projects-section"} className={navigationMenuTriggerStyle()}>
                                    Projects
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className={"col-start-3 flex justify-end items-center gap-0.5"}>
                    <ThemeToggle />
                </div>
            </header>
            <main>
                <div className={"grid grid-cols-4 grid-rows-4"}>
                <div
                    className={`
                        row-start-1 row-end-2 
                        col-start-1 col-end-5 
                        flex flex-col items-center justify-center
                        ${getFlashClass('home-section')}
                    `}
                    style={{minHeight: "calc(100vh - 40px"}}
                    id={"home-section"}
                >
                    <h1 className={"text-4xl"}>Joel Biere </h1>
                    <p><span className={"text-xs"}>(and fam)</span></p>
                    <ImageWithPointer />
                    <div>
                        <h3>
                            Former educator turned software developer
                        </h3>
                        <h3>
                            I engineer Backend Systems
                        </h3>
                        <h3>
                            I create Frontend Interfaces
                        </h3>
                        <h3>
                            I build Fullstack Applications
                        </h3>
                    </div>
                </div>
                <div
                    id={"about-section"}
                    className={`
                        col-start-1 col-end-5 flex justify-center
                        ${getFlashClass('about-section')}

                    `}
                >
                    THIS IS THE ABOUT SECTION
                </div>
                <div
                    id={"projects-section"}
                    className={`
                        col-start-1 col-end-5 flex justify-center
                        ${getFlashClass('projects-section')}
                    `}
                >
                    THIS IS THE PROJECTS SECTION
                </div>
                </div>
            </main>
            <footer
                className={`
                    row-start-3 flex gap-6 flex-wrap items-center justify-center 
                    ${getFlashClass('connect-section')}
                `}
            >
               <ConnectWithMe  />
            </footer>

        </>
    );
}
