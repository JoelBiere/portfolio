"use client"
import Image from "next/image";
import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";
import {Moon, Sun} from "lucide-react";
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {useTheme} from "next-themes";
import Link from "next/link";

export default function Home() {
    const {theme, setTheme} = useTheme();
    const toggleTheme = () => {
        console.log("Switching theme to ", theme === "dark" ? "light" : "dark");
        setTheme(theme === "dark" ? "light" : "dark");
    }

    const generateBulkContent = () => {
        const content = [];
        for (let i = 0; i < 100; i++) {
            content.push(
                <div key={i}>
                    {i} - This is a test
                </div>
            );
        }
        return content;
    }
    return (
        <>
            <header>
                <form>
                    <div className={"flex justify-end items-center gap-0.5"}>
                        <Label htmlFor={"theme"}/>
                        <Switch id={"theme"} onCheckedChange={toggleTheme}/>
                        {theme === "dark" ?
                            // className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                            <Moon
                            />
                            :
                            // className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/
                            <Sun
                            />
                        }
                    </div>
                </form>
                <div className={"flex items-center justify-center"}>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <a href={"#about-section"} className={navigationMenuTriggerStyle()}>
                                    <NavigationMenuLink>
                                        About Me
                                    </NavigationMenuLink>
                                </a>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <a href={"#docs-section"} className={navigationMenuTriggerStyle()}>
                                    <NavigationMenuLink>
                                        Documentation
                                    </NavigationMenuLink>
                                </a>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                </div>
            </header>

            <div
                className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

                    <div id={"docs-section"}>
                        THIS IS THE DOCS SECTION
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
            </div>
        </>
    );
}
