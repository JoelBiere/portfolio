"use client"
import React from 'react'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import Link from 'next/link';
import { Image } from 'antd';
import Timeline from "@/components/Timeline";

export interface ImageInfo {
    src: string;
    alt: string;
    height?: number;
    width?: number;
}

const AboutMe = ({getFlashClass}: { getFlashClass: (section: string) => string }) => {
    const images:ImageInfo[] = [
        {
            src: "/images/Mr_Biere_Teaching.jpg",
            alt: "Mr. Biere Teaching"
        },
        {
            src: "/images/Students_With_Laptop.jpg",
            alt: "Students engaging with flipped classroom"
        }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            <Card className="bg-background">
                <CardHeader>
                    <CardTitle
                        className={`text-2xl text-primary ${getFlashClass('about-section')}`}
                        id={"about-section"}>
                        <Link href={"#about-section"}># About Me</Link>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-12">
                    {/* First Content Block */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Background</h3>
                            <p className="text-muted-foreground">
                                I was a high school teacher for 5 years before transitioning into software development.
                                As an educator - I sought to create engaging and meaningful learning experiences for my students
                                via a &#34;flipped classroom&#34; model. This meant building custom digital content and resources
                                that enabled students to learn at their own pace, while transforming
                                classroom time into active problem-solving sessions.
                            </p>
                        </div>
                        <div className="order-first md:order-last">
                                <Image
                                    width={400}
                                    src={images[0].src}
                                    alt={images[0].alt}
                                    className="rounded-lg"
                                />
                        </div>
                    </div>

                    {/* Second Content Block - Reversed on desktop */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="md:order-last">
                            <p className="text-muted-foreground">
                                This approach resonated with students because it shifted the traditional classroom dynamic.
                                Instead of being passive recipients of knowledge, they became active participants in their learning journey.
                                My role evolved from deliverer of instruction to learning partner, guiding students through challenges while they took
                                ownership of their education.
                            </p>
                            <br />
                            <p>
                                It was in creating these digital learning tools that I discovered my passion for development.
                                This experience taught me a fundamental principle I still apply today in UI/UX design:
                                <span className={"text-primary"}> make complex tasks simple to engage with</span>.
                            </p>
                        </div>
                        <div className="md:order-first">
                            <Image
                                width={400}
                                src={images[1].src}
                                alt={images[1].alt}
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    <Separator />

                    {/* Professional Journey section */}
                    <section>
                        <Timeline />
                        {/*<h3 className="text-xl font-semibold mb-2">Professional Journey</h3>*/}
                        {/*<div className="space-y-4">*/}
                        {/*    <div className="bg-card p-4 rounded-lg">*/}
                        {/*        <h4 className="text-primary font-medium">Current Role</h4>*/}
                        {/*        <p className="text-muted-foreground">*/}
                        {/*            Full Stack Developer specializing in Java/Spring Backend and*/}
                        {/*            React/TypeScript Frontend development. Working on enterprise-level*/}
                        {/*            applications with a focus on scalability and user experience.*/}
                        {/*        </p>*/}
                        {/*    </div>*/}

                        {/*    <div className="bg-card p-4 rounded-lg">*/}
                        {/*        <h4 className="text-primary font-medium">Previous Experience</h4>*/}
                        {/*        <p className="text-muted-foreground">*/}
                        {/*            Education professional with expertise in curriculum development*/}
                        {/*            and student engagement. This experience translated well into*/}
                        {/*            software development, particularly in areas of documentation,*/}
                        {/*            training, and team collaboration.*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </section>

                    <Separator />

                    {/* Personal Interests section */}
                    <section>
                        <h3 className="text-xl font-semibold mb-2">Personal Interests</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-card p-4 rounded-lg">
                                <h4 className="text-primary font-medium">Technology</h4>
                                <p className="text-muted-foreground">
                                    Passionate about staying current with emerging technologies
                                    and exploring new ways to solve complex problems through code.
                                </p>
                            </div>
                            <div className="bg-card p-4 rounded-lg">
                                <h4 className="text-primary font-medium">Community</h4>
                                <p className="text-muted-foreground">
                                    Active in tech communities, participating in meetups and
                                    contributing to open-source projects when possible.
                                </p>
                            </div>
                        </div>
                    </section>
                </CardContent>
            </Card>
        </div>
    );
};

export default AboutMe;