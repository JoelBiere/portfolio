"use client"
import React from 'react'
import {ImageInfo} from "@/components/AboutMe";
import Image from "next/image";
import {Card, CardHeader, CardTitle} from "@/components/ui/card";
export interface Milestone {
    date: string;
    title: string;
    company: string;
    images?: ImageInfo[];
    // description: string;
}

const Timeline = () => {



    const milestones: Milestone[] = [
        {
            date: "Spring 2021",
            title: "Start Night Classes",
            company: "Tech901 | Harvard CS50",
            images: [
                {
                    src: "/images/Harvard_Cert.png",
                    alt: "CS50 Certificate",
                    height: 80,
                    width: 80
                },
                {
                    src: "/images/Tech901-removebg-preview.png",
                    alt: "Tech901 Logo"
                }
            ],
            // description: "During covid I started taking night classes to learn the fundamentals of computer science via C and python."
        },
        {
            date: "Summer / Fall 2021",
            title: "Contractor in Training",
            images: [
                {
                    src: "/images/CookSystems.jpg",
                    alt: "Cook Systems Certificate"
                }
            ],
            company: "Cook Systems | FastTrack'D",
            // description: "Learned Java, Spring Boot, and React in a bootcamp style environment."
        },
        {
            date: "Fall 2021",
            title: "Contracted Developer",
            company: "IMC Logistics",
            images: [{
                src: "/images/IMC.jpg",
                alt: "IMC Logo"
            }]
            // description: "Worked on the EDI team to "
        },
        {
            date: "Fall 2022",
            title: "Software Developer",
            company: "IMC Logistics",
            images: [{
                src: "/images/IMC.jpg",
                alt: "IMC Logo"
            }]
            // description: "Leading development of enterprise-level applications with Java/Spring Backend and React/TypeScript Frontend, focusing on scalability and user experience."
        },
        {
            date: "Fall 2024",
            title: "Senior Software Developer",
            company: "IMC Logistics",
            images: [{
                src: "/images/IMC.jpg",
                alt: "IMC Logo"
            }]
            // description: "Leading development of enterprise-level applications with Java/Spring Backend and React/TypeScript Frontend, focusing on scalability and user experience."
        }
    ];

    return (
        <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6">Professional Journey</h3>
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-8 top-3 h-full w-0.5 bg-primary/30"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="flex gap-8 relative">
                            {/* Circle on timeline */}
                            <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center shrink-0 z-10">
                                <span className="text-xs text-center text-primary font-medium">
                                    {milestone.date}
                                </span>
                            </div>

                            {/* Content Card */}
                            <Card className="flex-1">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="flex-1">
                                            <CardTitle className="text-lg font-medium text-primary">
                                                {milestone.title}
                                            </CardTitle>
                                            <p className="text-sm text-muted-foreground font-medium">
                                                {milestone.company}
                                            </p>
                                        </div>
                                        {milestone.images?.map((image, idx) => (
                                            <div key={idx} >
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    height={image.height || 48}
                                                    width={image.width || 48}
                                                    className="object-contain"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </CardHeader>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Timeline;