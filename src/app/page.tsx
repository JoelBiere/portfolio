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
            <header className={"bg-background text-foreground grid grid-cols-3 items-center min-h-10 max-h-10"}>
                <div className={"col-start-2 flex justify-center"}>
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
                <div className={"col-start-3 flex justify-end items-center gap-0.5"}>
                    <Label htmlFor={"theme"}/>
                    <Switch id={"theme"} onCheckedChange={toggleTheme}/>
                    {theme === "dark" ? <Moon /> : <Sun />}
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
                    <Image src={"/images/Family.jpg"} alt={"Joel and family"} width={200} height={200}
                           className={"rounded-lg"}/>
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
