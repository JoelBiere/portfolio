"use client"
import Image from "next/image";

import {
    NavigationMenu,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
     navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import ThemeToggle from "@/components/ThemeToggle";
import ImageWithPointer from "@/components/ImageWithPointer";

export default function Home() {
    return (
        <>
            <header className={"bg-background text-foreground grid grid-cols-3 items-center min-h-10 max-h-10"}>
                <div className={"col-start-2 flex justify-center"}>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={"#about-section"} className={navigationMenuTriggerStyle()}>
                                        About Me
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href={"#docs-section"} className={navigationMenuTriggerStyle()}>
                                    Documentation
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
                        border rounded-lg border-primary border-dashed 
                    `}
                    style={{minHeight: "calc(100vh - 40px"}}
                >
                    <h1 className={"text-4xl"}>Joel Biere </h1>
                    <p><span className={"text-xs"}>(and fam)</span></p>
                    <ImageWithPointer />
                    <div>
                        <h3>
                            Full Stack Developer with a fam-bam
                        </h3>
                    </div>
                </div>
                <div id={"docs-section"} className={"col-start-1 col-end-5 flex justify-center"}>
                    THIS IS THE DOCS SECTION
                </div>
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Learn
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to nextjs.org →
                </a>
            </footer>

        </>
    );
}
