"use client"
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import {TechItem} from "@/components/DeveloperRoles";

const TechIcon = ({ path, name, showNames }: {path: string, name: string, showNames:boolean}) => {
    const [svgContent, setSvgContent] = useState('');

    useEffect(() => {
        if (!showNames) {
            fetch(path)
                .then(response => response.text())
                .then(svg => {
                    const cleanedSvg = svg.replace(/fill="[^"]*"/g, '');
                    setSvgContent(cleanedSvg);
                });
        }
    }, [path, showNames]);

    if (showNames) {
        return (
            <div className="px-2 py-1 text-sm font-medium text-foreground">
                {name}
            </div>
        );
    }

    return (
        <div
            className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full [&>svg]:fill-foreground"
            title={name}
            dangerouslySetInnerHTML={{ __html: svgContent }}
        />
    );
};

const TechMarquee = ({ technologies, showNames }: {technologies: TechItem[], showNames:boolean}) => {

    return (
            <div className="w-[300px]">
                <Marquee
                    gradient
                    gradientColor="hsl(var(--background))"
                    speed={30}
                    pauseOnHover
                    gradientWidth={50}
                >
                    <div className="flex gap-6 mx-4">
                        {technologies.map((tech, index) => (
                            <TechIcon
                                key={`${tech.name}-${index}`}
                                path={tech.path}
                                name={tech.name}
                                showNames={showNames}
                            />
                        ))}
                    </div>
                </Marquee>
            </div>

    );
};

export default TechMarquee;