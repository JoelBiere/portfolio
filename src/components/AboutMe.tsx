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
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-6">
            <Card className="bg-background">
                <CardHeader>
                    <CardTitle
                        className={`text-xl sm:text-2xl text-primary ${getFlashClass('about-section')}`}
                        id={"about-section"}>
                        <Link href={"#about-section"}># About Me</Link>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8 sm:space-y-12">
                    {/* First Content Block */}
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="space-y-4 order-2 md:order-1">
                            <h3 className="text-xl sm:text-xl font-semibold">Background</h3>
                            <p className="text-sm sm:text-base text-muted-foreground">
                                I was a high school teacher for 5 years before transitioning into software development.
                                As an educator - I sought to create engaging and meaningful learning experiences for my students
                                via a &#34;flipped classroom&#34; model. This meant building custom digital content and resources
                                that enabled students to learn at their own pace, while transforming
                                classroom time into active problem-solving sessions.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 relative w-full">
                                <Image
                                    width={"100%"}
                                    src={images[0].src}
                                    alt={images[0].alt}
                                    className="rounded-lg"
                                    style={{maxWidth: '400px'}}
                                />
                        </div>
                    </div>

                    {/* Second Content Block - Reversed on desktop */}
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="md:order-2">
                            <p className="text-sm sm:text-base text-muted-foreground">
                                This approach resonated with students because it shifted the traditional classroom dynamic.
                                Instead of being passive recipients of knowledge, they became active participants in their learning journey.
                                My role evolved from deliverer of instruction to learning partner, guiding students through challenges while they took
                                ownership of their education.
                            </p>
                            <br />
                            <p className="text-sm sm:text-base">
                                It was in creating these digital learning tools that I discovered my passion for
                                development.
                                This experience taught me a fundamental principle I still apply today in UI/UX design:
                                <span className={"text-primary"}> make complex tasks simple to engage with</span>.
                            </p>
                        </div>
                        <div className="md:order-1">
                            <Image
                                width={"100%"}
                                src={images[1].src}
                                alt={images[1].alt}
                                className="rounded-lg"
                                style={{maxWidth: '400px'}}
                            />
                        </div>
                    </div>

                    <Separator />

                    {/* Professional Journey section */}
                    <section>
                        <Timeline />
                    </section>

                    <Separator />

                    {/* Whats Next section */}
                    <section>
                        <h3 className="text-lg sm:text-xl font-semibold mb-4">What&#39;s Next?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-card p-4 rounded-lg">
                                <h4 className="text-primary font-medium">Individual Contributor vs. People Management</h4>
                                <p className="text-sm sm:text-base text-muted-foreground mt-4">
                                    <br/>
                                    I believe that the best managers are those who have been individual contributors for
                                    a significant amount of time.
                                    <br/>
                                    <br/>
                                    I am prone to taking on leadership roles, but I also enjoy the deep focus and
                                    problem-solving that comes with being an individual contributor.
                                    <br/>
                                    <br/>
                                    For the immediate term, I am focused on honing my technical skills as a senior
                                    developer.
                                </p>
                            </div>
                            <div className="bg-card p-4 rounded-lg">
                                <h4 className="text-primary font-medium">Frontend vs. Backend</h4>
                                <p className="text-sm sm:text-base text-muted-foreground mt-4">
                                    <br/>
                                    I love the creative aspects of frontend development and the satisfaction of working
                                    in an iterative feedback loop between the view and the code.
                                    <br/>
                                    <br/>
                                    My background in education gives me a unique perspective on UI/UX design - as a
                                    teacher,
                                    I learned that user engagement often depends on how approachable a task appears,
                                    not just its actual complexity. I enjoy the work of making the complex approachable.
                                    <br/>
                                    <br/>
                                    On the backend, I&#39;m drawn to the architectural aspects of system design.
                                    Building
                                    scalable, reusable, and maintainable solutions brings its own kind of creative
                                    fulfillment.
                                    <br/>
                                    <br/>
                                    Ideally, my future roles will allow me to continue working across both domains.
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