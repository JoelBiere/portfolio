"use client"
import React from 'react'
import { Card, CardContent, CardTitle, CardHeader, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Youtube, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
    title: string;
    description: string;
    techStack: string[];
    youtubeUrl?: string;
    githubUrl?: string;
    url?: string;
    previewImage?: string;
    youtubeEmbedId?: string;
}

const ProjectsSection = ({getFlashClass}: { getFlashClass: (section: string) => string }) => {
    const projects: Project[] = [
        {
            title: "Load Tender System",
            description: "A full stack solution to modernizing IMCs order-entry system as it relates to accepting load tenders from customers. Codebase is private.",
            techStack: ["React", "TypeScript", "Spring Boot", "Java", "PostgreSQL", "Docker", "FastAPI", "Kafka", "GraphQL", "C"],
            youtubeUrl: "https://youtu.be/kfHnJ95QkNQ?si=zD5nOx3evvVAz6yf",
            youtubeEmbedId: "https://www.youtube.com/embed/kfHnJ95QkNQ?si=ms4KxynCgqUCYsXQ"
        },
        {
            title: "Wordle Your Friends!",
            description: "[Still in development] A multiplayer version of the popular game Wordle. Built with React, TypeScript, and Firebase.",
            techStack: ["React", "TypeScript", "Firebase"],
            githubUrl: "https://github.com/JoelBiere/wordle-your-friends",
            url:"https://wordleyourfriends.com/",
            previewImage: "/images/Wordle.png"
        },
        {
            title: "Portfolio Website",
            description: "A personal website to showcase my projects, skills, and experiences. Built with Next.js, Tailwind CSS, and TypeScript.",
            techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Firebase"],
            githubUrl: "https://github.com/JoelBiere/portfolio",
            previewImage: "/images/Portfolio.png"
        }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            <Card className="bg-background">
                <CardHeader>
                    <CardTitle
                        className={`text-2xl text-primary ${getFlashClass('projects-section')}`}
                        id={"projects-section"}>
                        <Link href={"#projects-section"}># Projects</Link>
                    </CardTitle>
                    <CardDescription>
                        Showcasing some of my recent work and side projects
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-6 p-6">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                                    <p className="text-muted-foreground">{project.description}</p>

                                    <div className="space-y-2">
                                        <h4 className="text-sm font-medium">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        {project.youtubeUrl && (
                                            <Button variant="outline" onClick={() => window.open(project.youtubeUrl, '_blank')}>
                                                <Youtube className="w-4 h-4 mr-2" />
                                                Watch Demo
                                            </Button>
                                        )}
                                        {project.githubUrl && (
                                            <Button variant="outline" onClick={() => window.open(project.githubUrl, '_blank')}>
                                                <Github className="w-4 h-4 mr-2" />
                                                View Code
                                            </Button>
                                        )}
                                        {project.url && (
                                            <Button variant="outline" onClick={() => window.open(project.url, '_blank')}>
                                                <LinkIcon className="w-4 h-4 mr-2" />
                                                Visit Site
                                            </Button>
                                        )}
                                    </div>
                                </div>

                                <div className="relative aspect-video rounded-lg overflow-hidden">
                                    {project.youtubeEmbedId &&
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src={project.youtubeEmbedId}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                    }
                                    {project.previewImage &&
                                        <Image
                                            src={project.previewImage}
                                            alt={project.title}
                                            fill
                                            className={"object-cover object-top"}
                                        />
                                    }
                                </div>
                            </div>
                        </Card>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};

export default ProjectsSection;